import React from "react";

export default function Prices() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 border-4 border-yellow-500 rounded-lg shadow-2xl my-8 p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 py-4 bg-yellow-400 rounded-md shadow-md mb-6">
        料金プラン
      </h1>

      {/* 子供向け */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">
          子供向け <span className="text-lg text-gray-500">（月4回のレッスン）</span>
        </h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          <span className="line-through text-red-500">¥6,500/月</span>{" "}
          <span className="text-green-600">¥4,000/月（最初の6ヶ月間）</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">週1回（グループレッスン - 最大3人）</p>
      </div>

      {/* ティーンエイジャー向け */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">
          ティーンエイジャー向け <span className="text-lg text-gray-500">（月4回のレッスン）</span>
        </h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          <span className="line-through text-red-500">¥6,500/月</span>{" "}
          <span className="text-green-600">¥4,000/月（最初の6ヶ月間）</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">週1回（グループレッスン - 最大3人）</p>
      </div>

      {/* 大人向け */}
      <div className="my-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
        <h2 className="text-3xl font-semibold text-gray-800">
          大人向け <span className="text-lg text-gray-500">（月4回のレッスン）</span>
        </h2>
        <p className="text-xl font-semibold text-gray-600 mt-2">
          <span className="line-through text-red-500">¥10,000/月</span>{" "}
          <span className="text-green-600">¥7,600/月（最初の6ヶ月間）</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">週1回（個別レッスン）</p>
      </div>
    </section>
  );
}