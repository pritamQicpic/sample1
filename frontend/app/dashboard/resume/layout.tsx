// // frontend/app/dashboard/resume/layout.tsx
// import { ReactNode } from 'react';

// interface ResumeLayoutProps {
//   children: ReactNode;
// }

// const ResumeLayout = ({ children }: ResumeLayoutProps) => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
//       {children}
//     </div>
//   );
// };

// export default ResumeLayout;

// frontend/app/dashboard/resume/layout.tsx

import { FC } from 'react';

const ResumeDashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="resume-dashboard-layout p-6">
      <h1 className="text-2xl font-bold">Resume Dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default ResumeDashboardLayout;
