// components/resume-builder/ResumeBuilder.tsx

import React from 'react';
import AIResumeGenerator  from './ai-generated/AIResumeGenerator';  // AI-generated resumes
import PrebuiltResumeSelector from './prebuilt/PrebuiltResumes';  // Prebuilt resumes

export function ResumeBuilder() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Choose Your Resume Type</h2>
      <div className="space-x-4">
        <AIResumeGenerator />
        <PrebuiltResumeSelector />
      </div>
    </div>
  );
}
