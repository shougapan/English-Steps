import React from "react";

export default function Page() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 border-4 border-yellow-500 rounded-lg shadow-2xl my-8 p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 py-4 bg-yellow-400 rounded-md shadow-md mb-6">
        Pricing Plans
      </h1>

      {/* Pricing for Primary Age */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">Primary Age</h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          <span className="line-through text-red-500">¥6,500/month</span> <span className="text-green-600">¥4,000/month (First 6 Months)</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">Once a week (group lesson - max: 3 people)</p>
      </div>

      {/* Pricing for Teenage */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">Teenage</h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          <span className="line-through text-red-500">¥6,500/month</span> <span className="text-green-600">¥4,000/month (First 6 Months)</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">Once a week (group lesson - max: 3 people)</p>
      </div>

      {/* Pricing for Adults */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">Adults</h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          ¥12,000/month
        </p>
        <p className="mt-2 text-lg text-gray-700">Once a week (one-to-one lesson)</p>
      </div>
    </section>
  );
}
