import Image from "next/image"; 
import Link from "next/link";
import Prices from "@/components/prices";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 mt-6">
        <div className="w-full lg:w-1/2">
          <Image
            className="border-4 border-white rounded-lg shadow-xl w-full h-auto"
            src="/study5.jpg"
            alt="Study Image"
            width={750}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Welcome to English Steps
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-4 sm:mb-6">
            天王寺で一番の <span className="font-bold text-green-600">英会話スクール</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-3">
            English Stepsでは、英検の学習を得意とし、学生に最適なレッスンを提供しています。
            手頃な価格で質の高いレッスンを提供しており、ぜひ一度チェックしてください。
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-3">
            英検やTOEICのスコアアップを目指す学生や社会人向けに、個別指導も行っています。
            レッスンに興味がある方は、お気軽にご連絡ください。
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            今すぐ{" "}
            <Link
              href="contact"
              className="shimmer-effect-orange shimmer-orange text-white font-bold bg-orange-500 px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
            >
              無料体験レッスン
            </Link>{" "}
            を予約しましょう！
          </p>
        </div>
      </section>

      {/* What We Teach Section */}
      <section className="mt-12 sm:mt-16 p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
          What We Teach
        </h1>

        {/* Kids & Teens Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <Image
            className="border-4 border-white rounded-lg shadow-md w-24 h-24 sm:w-[120px] sm:h-[120px]"
            src="/children3.jpg"
            alt="Kids and Teens"
            width={120}
            height={120}
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2 sm:mb-3">
              🎈 Kids & Teens English 🎈
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              小学生から大学生まで、年齢やレベルに応じた楽しいレッスンを提供しています。
              ゲームや会話アクティビティを通して英語を自然に身につけられるので、初めての英語学習でも安心です。
              成長に合わせたカリキュラムで、英語力をぐんぐん伸ばしましょう！
            </p>
          </div>
        </div>

        {/* Eiken Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-blue-50 rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <Image
            className="border-4 border-white rounded-lg shadow-md w-24 h-24 sm:w-[120px] sm:h-[120px]"
            src="/Eiken1.png"
            alt="Eiken"
            width={120}
            height={120}
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 sm:mb-3">
              📘 Eiken Exam
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              英検（Eiken）は、国内で広く認知されている英語能力試験の一つで、
              リスニング、リーディング、ライティング、スピーキングの全スキルを測定します。
              5級から1級まで、各レベルに応じた試験があり、受験者の英語力を正確に評価します。
            </p>
          </div>
        </div>

        {/* TOEIC Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-green-50 rounded-xl p-4 sm:p-6 shadow-lg">
          <Image
            className="border-4 border-white rounded-lg shadow-md w-24 h-24 sm:w-[120px] sm:h-[120px]"
            src="/Toeic2.png"
            alt="TOEIC"
            width={120}
            height={120}
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 sm:mb-3">
              📝 TOEIC Exam
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              TOEIC（トーイック）は、主にビジネスシーンで必要な英語力を測定する試験です。
              リスニングとリーディングのセクションで英語能力を評価し、
              企業の英語力証明として広く利用されています。最高点は990点です。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Prices />

      {/* Contact Form */}
      <ContactForm />

      {/* Location Section */}
      <section className="py-8 bg-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Location</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">Our school is located at:</p>
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-700 mb-4">
          天王寺センターハイツ 8-26 悲田院町, 天王寺区, 大阪, 412号室 543-0055
        </h2>

        {/* Google Map Embed */}
        <div className="relative h-0 overflow-hidden rounded-lg shadow-lg border-4 border-white mb-6 sm:mb-8" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            style={{ position: "absolute", top: "0", left: "0" }}
          ></iframe>
        </div>

        {/* Access Image */}
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-700 mb-4">Access</h2>
        <Image
          className="border-4 border-white rounded-lg shadow w-full h-auto"
          src="/access2.jpg"
          alt="Access Image"
          width={750}
          height={500}
        />
      </section>
    </main>
  );
}
