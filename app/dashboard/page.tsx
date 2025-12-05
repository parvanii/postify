"use client";

import React from 'react'
import SearchSection from '@/components/dashboard/workspace/SearchSection'
import TemplateListSection from '@/components/dashboard/workspace/TemplateListSection'
import { useState } from 'react';
const page = () => {
  const [userSearchInput, setUserSearchInput] = useState("");
  return (
    <div>
    <SearchSection onSearchInput={(val) => setUserSearchInput(val)} />
    <TemplateListSection userSearchInput={userSearchInput} />
  </div>
  )
}

export default page
