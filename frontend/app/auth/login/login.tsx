// // app/auth/login.tsx
// import { FC, useState } from 'react'
// import { useRouter } from 'next/router'

// const Login: FC = () => {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleLogin = async () => {
//     // Handle login logic
//     // On success, redirect user
//     router.push('/dashboard')
//   }

//   return (
//     <div className="max-w-sm mx-auto mt-8">
//       <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
//       <input
//         type="email"
//         className="w-full p-2 border border-gray-300 mb-4"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         className="w-full p-2 border border-gray-300 mb-4"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="w-full bg-blue-600 text-white py-2" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   )
// }

// export default Login;
// // app/auth/login.tsx
// import LoginForm from "@/components/auth/LoginForm";

// export default function LoginPage() {
//   return (
//         <div className="flex justify-center items-center min-h-screen">
//           <LoginForm />
//         </div>
//     );
// }

// app/auth/login.tsx
'use client';

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
