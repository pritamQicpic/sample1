import React from "react";
import Link from "next/link";

const CoverLettersDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cover Letters Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/cover-letter/ai-generated">
          <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            <h2 className="text-lg font-semibold">AI-Generated Cover Letters</h2>
            <p>Automatically generated Cover Letters powered by AI.</p>
          </div>
        </Link>
        <Link href="/dashboard/cover-letter/prebuilt">
          <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            <h2 className="text-lg font-semibold">Prebuilt Cover Letters</h2>
            <p>Choose from different categories of prebuilt Cover Letters.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoverLettersDashboard;
