"use client";

import React, { useState } from "react";
import SearchSection from "@/components/dashboard/workspace/SearchSection";
import TemplateListSection from "@/components/dashboard/workspace/TemplateListSection";

const Page = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      <SearchSection onSearchInput={(val: string) => setUserSearchInput(val)} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Page;
