// lib/api.ts

export async function fetchAiGeneratedResumes() {
    const response = await fetch("/api/resumes/ai-generated");
    if (!response.ok) {
      throw new Error("Failed to fetch AI-generated resumes");
    }
    return await response.json();
  }
  