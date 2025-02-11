// SignupForm.tsx
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with", email, password);
  };

  return (
    <form onSubmit={handleSignup} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
    </form>
  );
};

export default SignupForm;