// // app/dashboard/page.tsx
// import { FC } from 'react'

// const DashboardHome: FC = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-semibold">Welcome to Your Dashboard</h1>
//       {/* Additional content for dashboard home */}
//     </div>
//   )
// }

// export default DashboardHome

// frontend/app/page.tsx
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Resume Builder</h1>
      <p className="text-lg mt-4">Build your resume and cover letter with AI-powered tools.</p>
    </div>
  );
};

export default HomePage;
