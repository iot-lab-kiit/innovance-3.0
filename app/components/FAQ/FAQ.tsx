import React, {useState} from "react";
import {Poppins} from "@next/font/google";
import {motion, AnimatePresence} from "framer-motion";

const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const faqs = [
    {
        question: "When will Innovance 3.0 take place?",
        answer: "It will take place from 9th to 10th November, from 6-9 pm on 9th and 10am - 4pm on 10th.",
    },
    {
        question: "Is there any discount on the price of the event?",
        answer: "Yes, an early bird offer is applicable for the first 100 registrations at ₹199.",
    },
    {
        question: "What do you need to carry for the event?",
        answer: "Students need to carry their laptop, charger and ID cards.",
    },
    {
        question: "What topics will be covered in the speaker session?",
        answer: "The session will focus on resume crafting tips and tricks, along with leveraging AI tools for the job application process.",
    },
    {
        question: "What kind of projects will you be developing? ",
        answer: "Participants will work on projects utilizing AI and ML techniques to solve real-world problems.",
    },
    {
        question: "Do you need any prior knowledge of AI/ML to participate? ",
        answer: "Basic understanding of AI/ML concepts is beneficial, but not mandatory. Guidance and support will be provided.",
    },
    {
        question: "What resources will be provided for the project development? ",
        answer: "Participants will receive access to necessary software, datasets, and support materials to aid in their project development.",
    },
    {
        question: "Will there be one-on-one guidance available? ",
        answer: "Yes, there will be opportunities for one-on-one guidance with career advisors.",
    },
    {
        question: "Can you get feedback on your current resume?",
        answer: "Absolutely, participants are encouraged to bring their current resumes for personalized feedback.",
    },
];

const FAQAccordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={poppins.className}>
            <div className="py-10 mb-12 px-8 sm:px-12 md:px-20 lg:px-32 max-w-[1400px] mx-auto">
                <h2 className="text-4xl sm:text-center mb-12">Frequently Asked Questions</h2>

                {faqs.map((faq, index) => (
                    <motion.div key={index} className="border-b border-blue-500 mb-4" initial={false}>
                        <motion.div 
                            className="flex justify-between items-center cursor-pointer py-4" 
                            onClick={() => handleToggle(index)} 
                            whileHover={{scale: 1.01}} 
                            transition={{duration: 0.2}}
                        >
                            <h3 className="text-lg font-medium flex-1 pr-4">{faq.question}</h3>
                            <motion.div 
                                className="w-6 h-6 flex items-center justify-center"
                                animate={{rotate: activeIndex === index ? 180 : 0}} 
                                transition={{duration: 0.3}}
                            >
                                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
                            </motion.div>
                        </motion.div>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{height: 0, opacity: 0}}
                                    animate={{height: "auto", opacity: 1}}
                                    exit={{height: 0, opacity: 0}}
                                    transition={{duration: 0.3, ease: "easeInOut"}}
                                    className="overflow-hidden"
                                >
                                    <motion.p 
                                        className="pb-4 text-gray-500" 
                                        initial={{y: -10}} 
                                        animate={{y: 0}} 
                                        exit={{y: -10}}
                                    >
                                        {faq.answer}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;