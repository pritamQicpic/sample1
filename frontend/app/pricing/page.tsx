// app/pricing/page.tsx
import { FC } from 'react'

const Pricing: FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Pricing Plans</h2>
      <div className="space-y-6">
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">Individual Plan</h3>
          <p>$9.99/month</p>
          {/* More details */}
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold">Business Plan</h3>
          <p>$39.99/month</p>
          {/* More details */}
        </div>
      </div>
    </div>
  )
}

export default Pricing;
