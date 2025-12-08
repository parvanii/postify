import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import CopyButton from "../dashboard/content/[template-slug]/_component/CopyButton";
import { prisma } from "@/lib/prisma";
import SideBar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/TopBar";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  const userEmail =
    (user as any)?.primaryEmailAddress?.emailAddress ||
    (user as any)?.email ||
    (user as any)?.emailAddresses?.[0]?.emailAddress ||
    null;

  let HistoryList: HISTORY[] = [];

  if (userEmail) {
    const rows = await prisma.aIOutput.findMany({
      where: { createdBy: userEmail },
      orderBy: { id: "desc" },
    });

    HistoryList = rows.map((r) => ({
      id: r.id,
      formData: r.formData ?? "",
      aiResponse: r.aiResponse ?? "",
      templateSlug: r.templateSlug ?? "",
      createdBy: r.createdBy ?? "",
      createdAt: typeof r.createdAt === "string" ? r.createdAt : String(r.createdAt ?? ""),
    }));
  }

  const GetTemplateName = (slug: string) => {
    const template: any = Templates?.find((item) => item.slug == slug);
    return template;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="hidden md:block w-64">
          <SideBar />
        </aside>

        <div className="flex-1 flex flex-col">
          <header>
            <Topbar />
          </header>

          <main className="p-6">
            <div className="m-0 p-0">
              <div className="m-5 p-6 rounded-2xl" style={{ background: "#5523E8" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white">History</h2>
                    <p className="text-white/80 mt-1">Search your previously generated AI content</p>
                  </div>
                  <div>
                    <Button className="bg-white text-black">Export</Button>
                  </div>
                </div>

                <div
                  className="grid grid-cols-7 gap-2 py-3 px-3 rounded-md mb-3"
                  style={{ background: "#E823B6" }}
                >
                  <h3 className="col-span-2 text-sm font-semibold text-white">TEMPLATE</h3>
                  <h3 className="col-span-2 text-sm font-semibold text-white">AI RESP</h3>
                  <h3 className="text-sm font-semibold text-white">DATE</h3>
                  <h3 className="text-sm font-semibold text-white">WORDS</h3>
                  <h3 className="text-sm font-semibold text-white">COPY</h3>
                </div>

                <div className="space-y-4">
                  {HistoryList.length === 0 ? (
                    <div className="p-6 rounded-lg bg-white/10 text-white/80">No history found.</div>
                  ) : (
                    HistoryList.map((item: HISTORY, index: number) => {
                      const tpl = GetTemplateName(item?.templateSlug);
                      return (
                        <div key={`${item.id}-${index}`} className="rounded-lg overflow-hidden">
                          <div
                            className="grid grid-cols-7 items-center gap-2 py-4 px-3"
                            style={{ background: "rgba(255,255,255,0.03)" }}
                          >
                            <div className="col-span-2 flex items-center gap-3">
                              {tpl?.icon ? (
                                <Image
                                  src={tpl.icon}
                                  width={28}
                                  height={28}
                                  alt={tpl?.name || "template"}
                                  className="rounded"
                                />
                              ) : (
                                <div className="w-7 h-7 rounded bg-white/20" />
                              )}
                              <div>
                                <div className="text-white font-medium">{tpl?.name || "Unknown"}</div>
                                <div className="text-white/60 text-xs">{tpl?.category || ""}</div>
                              </div>
                            </div>

                            <div className="col-span-2">
                              <div className="text-white line-clamp-3">{item?.aiResponse}</div>
                            </div>

                            <div>
                              <div className="text-white/80 text-sm">{item?.createdAt}</div>
                            </div>

                            <div>
                              <div className="text-white/80 text-sm">{item?.aiResponse?.length ?? 0}</div>
                            </div>

                            <div>
                              <CopyButton aiResponse={item.aiResponse} />
                            </div>
                          </div>
                          <hr className="border-white/6" />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default History;
