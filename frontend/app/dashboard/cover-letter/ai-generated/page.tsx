import React from "react";

const AIGeneratedResumes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">AI-Generated Resumes</h2>
      <p className="text-gray-600">Generate a professional resume instantly with AI.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">Template 1</div>
        <div className="p-4 border rounded-lg shadow-sm">Template 2</div>
        <div className="p-4 border rounded-lg shadow-sm">Template 3</div>
      </div>
    </div>
  );
};

export default AIGeneratedResumes;