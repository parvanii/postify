"use client";

import React, { useContext, useState } from "react";
import FormSection from "./_component/FormSection";
import OutputSection from "./_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/dashboard/workspace/TemplateListSection";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";



interface PageProps {
  params: {
    "template-slug": string;
  };
}

export interface FormValues {
  prompt: string;
  tone: string;
  approxWords: number;
  generateHashtags: boolean;
  includeEmoji: boolean;
  postsToGenerate: number;
  templateSlug: string | null;
}



export default function CreateNewContent({ params }: PageProps) {
  const slug = params["template-slug"];

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === slug
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const router = useRouter();
  const { user } = useUser();

  const totalUsageCtx = useContext(TotalUsageContext);
  const totalUsage = totalUsageCtx?.totalUsage ?? 0;
  const setTotalUsage = totalUsageCtx?.setTotalUsage;

  const userEmail: string | null =
    user?.primaryEmailAddress?.emailAddress ??
    user?.emailAddresses?.[0]?.emailAddress ??
    null;

 

  const saveInDb = async (
    formData: FormValues,
    slug: string,
    aiResp: string,
    userEmail: string | null
  ): Promise<boolean> => {
    try {
      const res = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          slug,
          aiResp,
          userEmail,
          createdAt: moment().format("DD/MM/YYYY"),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Save API error:", error);
        return false;
      }

      return true;
    } catch (err) {
      console.error("Save failed:", err);
      return false;
    }
  };

  const generateAIContent = async (formValues: FormValues): Promise<void> => {
    try {
      if (totalUsage >= 10_000) {
        router.push("/dashboard/billing");
        return;
      }

      setLoading(true);

      const finalPrompt =
        JSON.stringify(formValues) +
        ", " +
        (selectedTemplate?.aiPrompt ?? "");

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const data: { text?: string } = await res.json();

      if (!res.ok) {
        console.error("Generate API error:", data);
        return;
      }

      const outputText = data.text ?? "";
      setAiOutput(outputText);

      setTotalUsage?.((prev) => prev + outputText.length);

      await saveInDb(
        formValues,
        selectedTemplate?.slug ?? "",
        outputText,
        userEmail
      );
    } catch (err) {
      console.error("Generate failed:", err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <div className="md:col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={generateAIContent}
            loading={loading}
          />
        </div>

        <div className="md:col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
