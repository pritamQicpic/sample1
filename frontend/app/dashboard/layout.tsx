// frontend/app/dashboard/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold">
          <Link href="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
        </h2>
        <ul>
          <li>
            <Link href="/dashboard/resume" className="btn btn-primary">
              Resume Builder
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/dashboard/cover-letter" className="btn btn-secondary">
              Cover Letter Builder
            </Link>
          </li>
          <li>
            <Link href="/dashboard/job-tracker" className="btn btn-tertiary">
              Job Tracker
            </Link>
          </li>
          <li>
            <Link href="/dashboard/mentor-booking" className="btn btn-tertiary">
              Mentor Booking
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
