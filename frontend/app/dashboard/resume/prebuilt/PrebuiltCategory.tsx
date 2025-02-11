// // frontend/app/dashboard/resume/prebuilt/PrebuiltCategory.tsx
// const PrebuiltCategory = ({ category }: { category: string }) => {
//     const categories = {
//       "all-categories": ["Template 1", "Template 2"],
//       "industry-specific": ["Industry Template 1", "Industry Template 2"],
//       "creative": ["Creative Template 1", "Creative Template 2"],
//       "student": ["Student Template 1", "Student Template 2"],
//     };
  
//     return (
//       <div>
//         <h3 className="font-bold">{category.replace("-", " ").toUpperCase()}</h3>
//         <ul>
//           {categories[category]?.map((template, index) => (
//             <li key={index}>{template}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default PrebuiltCategory;

import { FC } from 'react';

interface PrebuiltCategoryProps {
  category: 'all-categories' | 'industry-specific' | 'creative' | 'student';
}

const PrebuiltCategory: FC<PrebuiltCategoryProps> = ({ category }) => {
  // Define the type for categories
  const categories: Record<PrebuiltCategoryProps['category'], string[]> = {
    'all-categories': ['Template 1', 'Template 2'],
    'industry-specific': ['Industry Template 1', 'Industry Template 2'],
    'creative': ['Creative Template 1', 'Creative Template 2'],
    'student': ['Student Template 1', 'Student Template 2'],
  };

  return (
    <div className="prebuilt-category">
      <h3>{category.replace('-', ' ').toUpperCase()}</h3>
      <ul>
        {categories[category].map((template: string, index: number) => (
          <li key={index}>{template}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrebuiltCategory;
