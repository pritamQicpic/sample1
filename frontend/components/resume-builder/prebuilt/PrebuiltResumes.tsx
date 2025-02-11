// frontend/components/resume-builder/prebuilt/PrebuiltResumeSelector.tsx

import { FC, useState } from 'react';
import PrebuiltCategory from './PrebuiltCategory';

const PrebuiltResumeSelector: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all-categories');

  return (
    <div className="prebuilt-resume-selector">
      <div className="category-selector">
        <button onClick={() => setSelectedCategory('all-categories')}>All Categories</button>
        <button onClick={() => setSelectedCategory('industry-specific')}>Industry Specific</button>
        <button onClick={() => setSelectedCategory('creative')}>Creative</button>
        <button onClick={() => setSelectedCategory('student')}>Student</button>
      </div>

      <PrebuiltCategory category={selectedCategory} />
    </div>
  );
};

export default PrebuiltResumeSelector;
