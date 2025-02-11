// app/auth/signup.tsx
import { FC, useState } from 'react'
import { useRouter } from 'next/router'

const Signup: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')

  const handleSignup = async () => {
    // Handle signup and OTP verification
    // On success, redirect user
    router.push('/dashboard')
  }

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
      <input
        type="email"
        className="w-full p-2 border border-gray-300 mb-4"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 border border-gray-300 mb-4"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-600 text-white py-2" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  )
}

export default Signup;

// import SignupForm from "@/components/auth/SignupForm";

// export default function SignupPage() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <SignupForm />
//     </div>
//   );
// }
