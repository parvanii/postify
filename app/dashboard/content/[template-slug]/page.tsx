"use client";

import React from 'react'
import FormSection from './_component/FormSection'
import OutputSection from './_component/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '@/components/dashboard/workspace/TemplateListSection'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PROPS {
  params: { 'template-slug': string }
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined =
    Templates?.find((item) => item.slug === props.params['template-slug'])

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft /> Back</Button>
      </Link>

   
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
       
        <div className='md:col-span-1'>
          <FormSection selectedTemplate={selectedTemplate} />
        </div>

        <div className='md:col-span-2'>
          <OutputSection />
        </div>

      </div>
    </div>
  )
}

export default CreateNewContent;
