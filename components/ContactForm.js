"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86nm9fd", // your service ID
        "template_mm3ypld", // your template ID
        formRef.current,
        "HPIdbttIv3X7mrUq9" // your public key
      )
      .then(() => {
        setSubmitted(true);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {!submitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg flex flex-col space-y-6 min-h-[600px] justify-between animate-fade-in"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800">
            英語{" "}
            <span className="animate-sparkle bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
              プログラム
            </span>
            に参加しよう
          </h1>

          <div className="space-y-4">
            {[{ label: "名前", name: "user_name", type: "text", id: "name" },
              { label: "メール", name: "user_email", type: "email", id: "email" },
              { label: "生徒の年齢", name: "user_age", type: "number", id: "age" }].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.id}
                    required={field.name !== "user_age"}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
              ))}

            <div>
              <label htmlFor="level" className="block font-medium mb-1">
                英語レベル
              </label>
              <select
                name="user_level"
                id="level"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="" disabled selected hidden className="text-gray-200" placeholder="Hello"></option>
                <option value="nothing">なし</option>
                <option value="beginner">初心者</option>
                <option value="intermediate">中級</option>
                <option value="upperintermediate">上級者</option>
              </select>
            </div>

            <div>
              <label htmlFor="interest" className="block font-medium mb-1">
                
              </label>
              <select
                name="user_preference"
                id="interest"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="">興味のある分野を選択</option>
                <option value="eiken">英検</option>
                <option value="toeic">TOEIC</option>
                <option value="conversation">会話</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                メッセージ（任意）
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="他に伝えたいことがあればご記入ください！"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transform transition-transform duration-300 hover:scale-105"
          >
            送信
          </button>
        </form>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md animate-pulse-once">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ フォームが送信されました
          </h2>
          <p className="text-gray-700">ありがとうございます！すぐにご連絡いたします。</p>
        </div>
      )}
    </div>
  );
}
