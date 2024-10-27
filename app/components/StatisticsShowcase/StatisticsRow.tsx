import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

interface StatisticsRowProps {
    count1: number;
    title1: string;
    count2: number;
    title2: string;
}

const StatisticsRow: React.FC<StatisticsRowProps> = ({ count1, title1, count2, title2 }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className='h-1/3 w-full border-t-2 border-t-[#3B82F6] pr-4 py-1 flex justify-between items-center'>
            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-[40px] md:text-[45px] font-[600]'>
                    {inView && (
                        <CountUp
                            start={0}
                            end={count1}
                            duration={3}
                        />
                    )}
                </h1>
                <p className='text-md truncate'>{title1}</p>
            </div>
            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-[40px] md:text-[45px] font-[600]'>
                    {inView && (
                        <CountUp
                            start={0}
                            end={count2}
                            duration={3}
                        />
                    )}
                </h1>
                <p className='text-md truncate'>{title2}</p>
            </div>
        </div>
    );
};

export default StatisticsRow;
