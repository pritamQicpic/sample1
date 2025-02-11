// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Welcome to Your Career Dashboard</h1>
      <div className="mt-8 space-x-4">
        <Link href="/dashboard/resume" className="btn btn-primary">
          Resume Builder
        </Link>
        <Link href="/dashboard/cover-letter" className="btn btn-secondary">
          Cover Letter Builder
        </Link>
        <Link href="/dashboard/job-tracker" className="btn btn-tertiary">
          Job Tracker
        </Link>
      </div>
    </div>
  );
}
