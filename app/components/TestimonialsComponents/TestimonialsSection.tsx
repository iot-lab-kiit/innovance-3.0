import React from "react";
import {testimonials} from "@/libs/testimonialsData";
import {Poppins} from "@next/font/google";
import {TestimonialsSlider} from "@/app/components/TestimonialsComponents/TestimonialsSlider";


const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export default function TestimonialsSection(){
    return (
        <div className={`bg-black text-white p-4 flex flex-col w-full items-center  ${poppins.className}`}>
            <div className=" py-16 flex justify-center items-center text-white text-6xl font-bitter">
                Testimonials
            </div>
            <div
                className="w-full flex justify-center ">
                <TestimonialsSlider
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    )
}