import React from "react";

const PrebuiltResumes = () => {
  const categories = ["All Categories", "Industry-Specific", "Creative", "Student"];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Prebuilt Resumes</h2>
      <p className="text-gray-600">Choose from a variety of prebuilt resume templates.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrebuiltResumes ;
