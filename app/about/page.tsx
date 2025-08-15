import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <section className="flex items-center bg-blue-400 h-3/4">
      <div className="bg-blue-50 w-3/4 m-auto my-4 border-4 border-yellow-400  text-center shadow-4xl border-l-yellow-300 border-t-yellow-300 p-6 shadow-xl">
        <div className="flex">
          <Image
            src="/teacher1.jpg"
            width={400}
            height={400}
            alt="teacher"
            className="w-96 m-auto border-2 inset-2 "
          ></Image>
          <div className="ml-4">
            <h1 className="text-4xl font-bold text-neutral-700 mb-2">
              David Rowlands:
            </h1>
            <p className="text-left">
              ６年の経験を持つ英語教師、デイビッドにご挨拶ください。デイビッドはTESOL（Teaching
              English to Speakers of Other
              Languages）の学位を持ち、日本語も習得しています。また、Cambridge
              CELTA（Certificate in Teaching English to Speakers of Other
              Languages）の資格も保有しており、専門的な教育技術と知識を身につけています。英検とTOEICに特化しており、試験に必要なスキルと知識を深く理解しており、生徒一人ひとりに合わせたレッスンを提供しています。彼の指導力により、生徒たちは自信をつけて目標を達成することができます。スピーキング、リスニング、リーディング、ライティングスキルを向上させたい方に、デイビッドは熱心に指導し、成功への道をサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
