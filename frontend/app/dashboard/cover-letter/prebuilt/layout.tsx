// frontend/app/dashboard/resume/prebuilt/layout.tsx
import { FC, ReactNode } from "react";

const PrebuiltResumeLayout = ({ children }: { children: ReactNode }) => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Prebuilt Resumes</h1>
        {children}
      </div>
    );
  };
  
  export default PrebuiltResumeLayout;