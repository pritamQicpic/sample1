// OTPVerification.tsx
import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying OTP", otp);
  };

  return (
    <form onSubmit={handleVerify} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">OTP Verification</h2>
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded">Verify</button>
    </form>
  );
};

export default OTPVerification;