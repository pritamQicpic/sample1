// // components/cover-letter-builder/CoverLetterBuilder.tsx

// import React from 'react';
// import { AiGeneratedCoverLetters } from './ai-generated/AiGeneratedCoverLetters'; // AI-generated cover letters
// import { PrebuiltCoverLetters } from './prebuilt/PrebuiltCoverLetters'; // Prebuilt cover letters

// export function CoverLetterBuilder() {
//   return (
//     <div className="space-y-8">
//       <h2 className="text-xl font-semibold">Choose Your Cover Letter Type</h2>
//       <div className="space-x-4">
//         <AiGeneratedCoverLetters />
//         <PrebuiltCoverLetters />
//       </div>
//     </div>
//   );
// }

// frontend/components/cover-letter-builder/CoverLetterBuilder.tsx

import { FC } from 'react';
import PrebuiltCoverLetters from '../cover-letter-builder/prebuilt/PrebuiltCoverLetters';

const CoverLetterBuilder: FC = () => {
  return (
    <div className="cover-letter-builder">
      <h1>Cover Letter Builder</h1>
      <p>Choose a prebuilt cover letter template below or create a new one.</p>
      <PrebuiltCoverLetters />
      {/* Additional sections for AI-generated cover letters can go here */}
    </div>
  );
};

export default CoverLetterBuilder;
