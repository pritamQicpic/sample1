import React from "react";
import Link from "next/link";

const ResumeDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resume Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/resume/ai-generated">
          <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            <h2 className="text-lg font-semibold">AI-Generated Resumes</h2>
            <p>Automatically generated resumes powered by AI.</p>
          </div>
        </Link>
        <Link href="/dashboard/resume/prebuilt">
          <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Prebuilt Resumes</h2>
            <p>Choose from different categories of prebuilt resumes.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResumeDashboard;
