'use client'
import React from 'react'
import Footer from '../components/global/Footer';
import { Bitter } from '@next/font/google'
import Star from '@/app/components/global/Star'
import { Poppins } from '@next/font/google';
import TimerSection from '../components/Timer/TimerSection';
const bitter = Bitter({ subsets: ['latin'] });
const poppins =Poppins({ subsets: ['latin'], weight: ['400', '700'] });
function page() {
  return (
<section className='bg-[#101010] min-h-96 w-full p-12'>
  <div className='flex justify-center '>
    <div className='Section-title mt-8 '> 
    <div   className={`outline-none flex justify-center align-middle flex-col
    shrink-0 ${bitter.className}`}>
   <h1 className='lg:text-6xl sm:text-4xl text-4xl text-center'>Why Attend?</h1>
   </div>
   <div className={`outline-none flex justify-center align-middle flex-row
    shrink-0 ${poppins.className} mt-3`}>
   <p className=' font-medium md:text-lg sm:text-sm sm:w-3/4  w-2/4 text-center text-wrap text-xs'>Innovance 3.0 offers a unique opportunity to dive into the latest advancementsand practical applications in technology, guided by industry experts and hands-on
sessions</p>
    </div>
    </div></div>
    <div className='Cards mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow transform transition-transform duration-300 hover:scale-105'>
           <div className='title flex '>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))" style={{  userSelect: 'none',  width: '100%',  height: '100%',  display: 'inline-block',  fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))',  color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))',  flexShrink: 0, }}><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"><path d="M174,232a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,232Zm40-128a85.56,85.56,0,0,1-32.88,67.64A18.23,18.23,0,0,0,174,186v6a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14v-6a18,18,0,0,0-7-14.23h0a85.59,85.59,0,0,1-33-67.24C41.74,57.91,79.39,19.12,125.93,18A86,86,0,0,1,214,104Zm-12,0a74,74,0,0,0-75.79-74C86.17,31,53.78,64.34,54,104.42a73.67,73.67,0,0,0,28.4,57.87A29.92,29.92,0,0,1,94,186v6a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2v-6a30.18,30.18,0,0,1,11.7-23.78A73.59,73.59,0,0,0,202,104Zm-20.08-9A55.58,55.58,0,0,0,137,50.08a6,6,0,1,0-2,11.84C152.38,64.84,167.13,79.6,170.08,97a6,6,0,0,0,5.91,5,6.87,6.87,0,0,0,1-.08A6,6,0,0,0,181.92,95Z"></path></g></svg>
            </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Hands on experience</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-5 tracking-wide leading-relaxed ${poppins.className}`}>Experience the thrill of hands-on learning. Dive in, get creative, and watch your
            confidence soar as you sharpen your expertise in a real-world setting</p>
           </div> 
        </div>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow  transform transition-transform duration-300 hover:scale-105'>
        <div className='title flex '>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))" style={{ userSelect: 'none', width: '100%',height: '100%', display: 'inline-block', fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))', color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(59, 130, 246))', flexShrink: 0, }}><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))" ><path d="M176,162a37.91,37.91,0,0,0-28.3,12.67L98.8,143.24a37.89,37.89,0,0,0,0-30.48l48.9-31.43a38,38,0,1,0-6.5-10.09L92.3,102.67a38,38,0,1,0,0,50.66l48.9,31.43A38,38,0,1,0,176,162Zm0-132a26,26,0,1,1-26,26A26,26,0,0,1,176,30ZM64,154a26,26,0,1,1,26-26A26,26,0,0,1,64,154Zm112,72a26,26,0,1,1,26-26A26,26,0,0,1,176,226Z"></path></g></svg>
      </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Networking</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-5 tracking-wide leading-relaxed ${poppins.className}`}>Connect with fellow innovation enthusiasts, entrepreneurs, and industry professionals for valuable networking.</p>
           </div>  
        </div>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow  transform transition-transform duration-300 hover:scale-105' >
        <div className='title flex just'>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))" 
            style={{  userSelect: 'none',  width: '100%',   height: '100%', display: 'inline-block', fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))',  color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))', flexShrink: 0,  }} ><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))"><path d="M216,42H134V24a6,6,0,0,0-12,0V42H40A14,14,0,0,0,26,56V176a14,14,0,0,0,14,14H83.52L59.31,220.25a6,6,0,0,0,9.38,7.5L98.88,190h58.24l30.19,37.75a6,6,0,0,0,9.38-7.5L172.48,190H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM102,120v24a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm32-16v40a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm32-16v56a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z"></path></g></svg>
            </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Interactive Sessions</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-3 tracking-tight  ${poppins.className}`}>Dynamic learning experiences that foster audience participation and engagement. Learn through seminars, quizzes and insightful discussions. Ask questions, share ideas and stimulate your critical thinking abilities with us.</p>
           </div>  
        </div>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow  transform transition-transform duration-300 hover:scale-105'>
        <div className='title flex just'>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"
     style={{  userSelect: 'none',  width: '100%',   height: '100%', display: 'inline-block', fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))',  color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))', flexShrink: 0,  }} ><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"><path d="M112.6,158.43a58,58,0,1,0-57.2,0A93.83,93.83,0,0,0,5.21,196.72a6,6,0,0,0,10.05,6.56,82,82,0,0,1,137.48,0,6,6,0,0,0,10-6.56A93.83,93.83,0,0,0,112.6,158.43ZM38,108a46,46,0,1,1,46,46A46.06,46.06,0,0,1,38,108Zm211,97a6,6,0,0,1-8.3-1.74A81.8,81.8,0,0,0,172,166a6,6,0,0,1,0-12,46,46,0,1,0-17.08-88.73,6,6,0,1,1-4.46-11.14,58,58,0,0,1,50.14,104.3,93.83,93.83,0,0,1,50.19,38.29A6,6,0,0,1,249,205Z"></path></g></svg>
            </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Certification</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-5 tracking-wide leading-relaxed ${poppins.className}`}>All participants will receive a certification upon successful completion of the event.</p>
           </div>   
        </div>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow  transform transition-transform duration-300 hover:scale-105'>
        <div className='title flex just'>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"
         style={{  userSelect: 'none',  width: '100%',   height: '100%', display: 'inline-block', fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))',  color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))', flexShrink: 0,  }}><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"><path d="M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"></path></g></svg> 
            </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Discover Trends</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-5 tracking-wide leading-relaxed ${poppins.className}`}>Gain insights into groundbreaking advancements and industry shifts that will shape the tech landscape of tomorrow.</p>
           </div>  
        </div>
        <div className='md:h-56 mt-6 sm:h-52 h-48 w-11/12 my-1  mx-5 rounded-2xl  border-zinc-700 border-2  overflow-hidden  flex-grow  transform transition-transform duration-300 hover:scale-105'>
        <div className='title flex just'>
            <div className='image w-8 mx-4 mt-5 h-8 opacity-100'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))" 
        style={{  userSelect: 'none',  width: '100%',   height: '100%', display: 'inline-block', fill: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))',  color: 'var(--token-551512d3-7ccf-4658-8a33-3240b782b72f,  rgb(59, 130, 246))', flexShrink: 0,  }}><g color="var(--token-551512d3-7ccf-4658-8a33-3240b782b72f, rgb(166, 240, 0))"><path d="M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V232a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z"></path></g></svg>
            </div>
            <div className={`mt-5 sm:text-2xl text-xl trackling-wide ${bitter.className}`}>Expert Speakers</div>
            </div>  
          <div className='describtion relative '>
            <p className={`sm:text-base text-sm h-fit overflow-hidden break-words m-5 tracking-wide leading-relaxed ${poppins.className}`}>Engage with industry leaders and visionaries delivering cutting-edge insights.</p>
           </div>  
        </div>
        </div> </div>
       <Star />
       <TimerSection />
     <Footer />
  </section>
  )
}

export default page

