
"use client";

import React, { useState } from "react";
import FormSection from "./_component/FormSection";
import OutputSection from "./_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/dashboard/workspace/TemplateListSection";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PROPS {
  params: any; 
}

export default function CreateNewContent(props: PROPS) {
 
  const unwrappedParams = typeof (React as any).use === "function"
    ? (React as any).use(props.params)
    : props.params;

  const slug: string | undefined = unwrappedParams?.["template-slug"];

  const selectedTemplate: TEMPLATE | undefined =
    Templates?.find((item) => item.slug === slug);

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const GenerateAIContent = async (formValues: any) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt ?? "";
      const finalPrompt = JSON.stringify(formValues) + ", " + SelectedPrompt;

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const data = await res.json().catch(() => ({ error: "invalid json" }));

      if (!res.ok) {
        console.error("Generate API error:", data);
        // show friendly message or handle error states here
        setAiOutput("");
        return;
      }

      setAiOutput(data.text ?? "");
    } catch (err) {
      console.error("Generate failed:", err);
      setAiOutput("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <div className="md:col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={GenerateAIContent}
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
