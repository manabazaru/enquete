// src/app/page.tsx

'use client';
import SurveyCard from "@/components/temp/SurveyCard";
import React, { useState } from 'react';
import  Checkboxes from "@/components/data/elements/Checkboxes";

export default function MyPage() {
  return (
    <main className="p-4">
      <SurveyCard departmentName="事業部 A" responseRate={70} responseCount={35} />
      <SurveyCard departmentName="事業部 B" responseRate={70} responseCount={35} />

    </main>
  );
}






// export default function Page(){
//   const labels = ['項目1','項目2','項目3','項目4','項目5'];
//   return (
//     <Checkboxes labels={labels}/>
//   );
// };

