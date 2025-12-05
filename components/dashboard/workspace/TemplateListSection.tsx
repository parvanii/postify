
"use client";

import React, { useEffect, useState } from "react";
import TemplatesData from "../../../app/(data)/Templates"; 
import TemplateCard from "./TemplateCard"; 

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

type Props = {
  userSearchInput?: string;
};

const TemplateListSection: React.FC<Props> = ({ userSearchInput }) => {
 
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(TemplatesData);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = TemplatesData.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(TemplatesData);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => (
       
        <TemplateCard key={item.slug ?? index} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;
