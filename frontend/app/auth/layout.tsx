// app/auth/layout.tsx
import { ReactNode } from 'react';
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: 
  AuthLayoutProps) => {
  return (
    <div className="dashboard-layout flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <ul>
          <li>
            <Link href="/auth/login" className="btn btn-primary">
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/auth/signup" className="btn btn-secondary">
              Cover Letter Builder
            </Link>
          </li>
          {/* <li>
            <Link href="/dashboard/job-tracker" className="btn btn-tertiary">
              Job Tracker
            </Link>
          </li>
          <li>
            <Link href="/dashboard/mentor-booking" className="btn btn-tertiary">
              Mentor Booking
            </Link>
          </li> */}
        </ul>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

export default AuthLayout;

// app/auth/layout.tsx
// import { ReactNode } from 'react';

// const AuthLayout = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="auth-layout">
//       <aside className="w-64 bg-gray-800 text-white h-screen p-4">
//         {/* Sidebar content */}
//       </aside>
//       <main className="auth-content flex-1 p-6">{children}</main>
//     </div>
//   );
// };

// export default AuthLayout;
