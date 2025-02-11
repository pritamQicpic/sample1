// // frontend/app/auth/forgot-password.tsx
// const ForgotPassword = () => {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-2xl font-bold">Reset Password</h1>
//         <p>Enter your email to reset your password.</p>
//       </div>
//     );
//   };
  
//   export default ForgotPassword;
  

import PasswordReset from "@/components/auth/PasswordReset";

export default function PasswordResetPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PasswordReset />
    </div>
  );
}