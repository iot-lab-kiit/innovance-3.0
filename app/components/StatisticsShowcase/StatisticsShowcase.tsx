import React from 'react'
import StatisticsRow from './StatisticsRow'

const StatisticsShowcase = () => {
    return (
        <div className='flex-grow bg-[#101010] flex justify-center items-center w-full font-sans py-8'>
            <div className='w-[80%] md:w-[90%] lg:w-[70%] h-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start'>
                <div className='md:w-1/2 h-full flex flex-col justify-start gap-4 px-2 py-4'>
                    <h1 className='text-[35px] md:text-[40px] font-serif font-[600]'>Tech that will<br />blow you away</h1>
                    <div>
                        <p className='text-[16px] font-sans pr-2 md:w-[80%]'>
                            Embark on a journey into groundbreaking technology that will leave you awe-inspired. Explore the future's most innovative solutions, connect with industry experts, and immerse yourself in a tech experience like no other.
                        </p>
                    </div>
                    <a href="/gallery" className='flex justify-center items-center px-4 py-2 w-1/2 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 text-black text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300'>
                        VIEW MORE
                    </a>
                </div>
                <div className='md:w-1/2 h-full'>
                    <div className='py-2 pb-4 w-full border-t-2 border-t-[#3B82F6] flex flex-col'>
                        <h1 className='text-[50px] md:text-[60px] font-[600]'>100%</h1>
                        <p className='text-md'>An opportunity to connect with industry leaders and leading companies in the sector.</p>
                    </div>
                    <StatisticsRow count1={"20"} title1='Event Speakers' count2={"400"} title2='Diverse Tech Sessions' />
                    <StatisticsRow count1={"15+"} title1='Exhibitors' count2={"4"} title2='Tech Sessions' />
                </div>
            </div>
        </div>
    )
}

export default StatisticsShowcase
