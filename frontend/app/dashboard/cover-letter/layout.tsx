// frontend/app/dashboard/resume/layout.tsx

import { FC } from 'react';

const CoverLettersDashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="resume-dashboard-layout p-6">
      <h1 className="text-2xl font-bold">Cover Letter Dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default CoverLettersDashboardLayout;
