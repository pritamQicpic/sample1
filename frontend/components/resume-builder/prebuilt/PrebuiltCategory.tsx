// // frontend/components/resume-builder/prebuilt/PrebuiltCategory.tsx

// import { FC } from 'react';

// interface PrebuiltCategoryProps {
//   category: string;
// }

// const PrebuiltCategory: FC<PrebuiltCategoryProps> = ({ category }) => {
//   // Mock categories for demonstration purposes
//   const categories = {
//     'all-categories': ['Template 1', 'Template 2'],
//     'industry-specific': ['Industry Template 1', 'Industry Template 2'],
//     'creative': ['Creative Template 1', 'Creative Template 2'],
//     'student': ['Student Template 1', 'Student Template 2'],
//   };

//   return (
//     <div className="prebuilt-category">
//       <h3>{category.replace('-', ' ').toUpperCase()}</h3>
//       <ul>
//         {categories[category].map((template, index) => (
//           <li key={index}>{template}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PrebuiltCategory;

// frontend/components/resume-builder/prebuilt/PrebuiltCategory.tsx

import { FC } from 'react';

interface PrebuiltCategoryProps {
  category: string;
}

const PrebuiltCategory: FC<PrebuiltCategoryProps> = ({ category }) => {
  // Mock categories for demonstration purposes
  const categories = {
    'all-categories': ['Template 1', 'Template 2'],
    'industry-specific': ['Industry Template 1', 'Industry Template 2'],
    'creative': ['Creative Template 1', 'Creative Template 2'],
    'student': ['Student Template 1', 'Student Template 2'],
  };

  return (
    <div className="prebuilt-category">
      <h3>{category.replace('-', ' ').toUpperCase()}</h3>
      <ul>
        {categories[category].map((template, index) => (
          <li key={index}>{template}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrebuiltCategory;
