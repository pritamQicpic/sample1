// frontend/components/cover-letter-builder/PrebuiltCoverLetters.tsx

import { FC } from 'react';
import AllCategoriesCoverLetters from './all-categories/AllCategoriesCoverLetters';
import IndustrySpecificCoverLetters from './industry-specific/IndustrySpecificCoverLetters';
import CreativeCoverLetters from './creative/CreativeCoverLetters';
import StudentCoverLetters from './student/StudentCoverLetters';

const PrebuiltCoverLetters: FC = () => {
  return (
    <div className="prebuilt-cover-letters">
      <h2>Prebuilt Cover Letters</h2>
      <div className="categories">
        <AllCategoriesCoverLetters />
        <IndustrySpecificCoverLetters />
        <CreativeCoverLetters />
        <StudentCoverLetters />
      </div>
    </div>
  );
};

export default PrebuiltCoverLetters;
