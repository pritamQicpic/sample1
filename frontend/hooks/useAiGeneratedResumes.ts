// hooks/useAiGeneratedResumes.ts

import { useState, useEffect } from "react";
import { fetchAiGeneratedResumes } from "../lib/api";

export function useAiGeneratedResumes() {
  const [resumes, setResumes] = useState([]);
  
  useEffect(() => {
    async function getResumes() {
      const response = await fetchAiGeneratedResumes();
      setResumes(response);
    }

    getResumes();
  }, []);

  return resumes;
}
