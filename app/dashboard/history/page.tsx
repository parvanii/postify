
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import CopyButton from "../content/[template-slug]/_component/CopyButton";

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
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress ||
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
      createdAt:
        typeof r.createdAt === "string"
          ? r.createdAt
          : r.createdAt?.toISOString() ?? "",
    }));
  }

  const getTemplate = (slug: string) =>
    Templates.find((item) => item.slug === slug);

  return (
    <div className="m-5 p-6 rounded-2xl bg-[#5523E8]">
      {/* HEADER */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-white">History</h2>
        <p className="text-white/80 mt-1">
          Search your previously generated AI content
        </p>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-7 gap-2 py-3 px-3 rounded-md mb-3 bg-[#E823B6]">
        <h3 className="col-span-2 text-sm font-semibold text-white">TEMPLATE</h3>
        <h3 className="col-span-2 text-sm font-semibold text-white">AI RESP</h3>
        <h3 className="text-sm font-semibold text-white">DATE</h3>
        <h3 className="text-sm font-semibold text-white">WORDS</h3>
        <h3 className="text-sm font-semibold text-white">COPY</h3>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {HistoryList.length === 0 ? (
          <div className="p-6 rounded-lg bg-white/10 text-white/80">
            No history found.
          </div>
        ) : (
          HistoryList.map((item, index) => {
            const tpl = getTemplate(item.templateSlug);

            return (
              <div
                key={`${item.id}-${index}`}
                className="rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-7 items-center gap-2 py-4 px-3 bg-white/5">
                  {/* TEMPLATE */}
                  <div className="col-span-2 flex items-center gap-3">
                    {tpl?.icon ? (
                      <Image
                        src={tpl.icon}
                        width={28}
                        height={28}
                        alt={tpl.name}
                        className="rounded"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded bg-white/20" />
                    )}

                    <div>
                      <div className="text-white font-medium">
                        {tpl?.name || "Unknown"}
                      </div>
                      <div className="text-white/60 text-xs">
                        {tpl?.category}
                      </div>
                    </div>
                  </div>

                  {/* AI RESPONSE */}
                  <div className="col-span-2 text-white line-clamp-3">
                    {item.aiResponse}
                  </div>

                  {/* DATE */}
                  <div className="text-white/80 text-sm">
                    {item.createdAt}
                  </div>

                  {/* WORD COUNT */}
                  <div className="text-white/80 text-sm">
                    {item.aiResponse.length}
                  </div>

                  <CopyButton aiResponse={item.aiResponse} />
                </div>

                <hr className="border-white/10" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default History;
