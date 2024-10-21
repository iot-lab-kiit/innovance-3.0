import React, { useState } from "react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});


const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables server-side rendering and static site generation for building optimized and fast web applications.",
  },
  {
    question: "How do I install Next.js?",
    answer:
      "You can install Next.js by running `npx create-next-app@latest` in your terminal. This command sets up a new Next.js project with the required configuration.",
  },
  {
    question: "What are the advantages of using Next.js?",
    answer:
      "Next.js offers many advantages such as automatic static optimization, hybrid static and server rendering, API routes, and a built-in routing system.",
  },
];


const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={poppins.className}>
<div className="  py-10 mb-12 px-8 sm:px-12 md:px-20 lg:px-32 max-w-[1400px] mx-auto">
      <h2 className="text-4xl sm:text-center mb-12">Frequently Asked Questions</h2>

      
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-blue-500 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </div>

         
          {activeIndex === index && (
            <div className="pb-4 text-gray-500">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default FAQAccordion;
