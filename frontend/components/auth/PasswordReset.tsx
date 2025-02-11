// PasswordReset.tsx
import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resetting password for", email);
  };

  return (
    <form onSubmit={handleReset} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Reset Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Reset</button>
    </form>
  );
};

export default PasswordReset;