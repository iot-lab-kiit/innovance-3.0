"use client";
import './sponsorships.css';
import {InfiniteMovingCards} from "@/app/components/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
export default function Page() {


    return (
        <div className="bg-black text-white p-4 flex flex-col w-full">
            <div className="container mx-auto py-16 flex flex-col md:flex-row justify-evenly items-center">
                <div className={"w-full md:w-[40%]"}>
                    <h2 className="text-4xl font-bold mb-8 ">Sponsors</h2>
                    <p className="text-lg mb-4">
                        Our journey of innovation is powered by the unwavering support of our incredible sponsors. Join
                        us
                        as we pave the way for a future of limitless possibilities.
                    </p>
                </div>
                <div className="flex justify-start md:justify-center w-full md:w-fit">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold w-fit h-fit py-2 px-4">
                        Become a Sponsor
                    </button>
                </div>
            </div>
            <div
                className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}