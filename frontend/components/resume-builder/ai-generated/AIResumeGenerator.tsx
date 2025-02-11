// frontend/components/resume-builder/ai-generated/AIResumeGenerator.tsx

import { FC, useState } from 'react';

const AIResumeGenerator: FC = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');

  const handleGenerateResume = () => {
    // Call backend API to generate resume using AI
    console.log('Generating AI resume with:', { name, experience, education });
  };

  return (
    <div className="ai-resume-generator">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <textarea
        placeholder="Education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <button onClick={handleGenerateResume}>Generate Resume</button>
    </div>
  );
};

export default AIResumeGenerator;
