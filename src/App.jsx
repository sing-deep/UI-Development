import { useState } from 'react'
import image from './assets/Image.svg'
import {ArrowRight } from 'lucide-react';

function App() {
  return (
    <main className='min-h-screen w-full flex justify-center items-center bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] p-4'>
      <article className=' flex flex-col lg:mx-0 md:mx-29.5 mx-4 w-full max-w-85 min-h-126 shadow-lg rounded-lg bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group'>
        <img 
        className='w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110'
        src={image} alt="Blog card image" />
        <div className='flex flex-col gap-3 px-4 py-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-center items-center w-16.75 h-6 bg-green-50 border rounded-full border-green-500'>
             <span className='text-green-700 text-sm'>Interior</span>
            </div>
            <p className='text-lg font-semibold'>Top 5 Living Room Inspirations</p>
          </div>

          <div className='flex flex-col gap-6'>
            <p className='text-base font-medium text-neutral-600'>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
            <button className='flex items-center gap-1.5 cursor-pointer transition-all'>
              <span className='text-base font-medium text-indigo-700 hover:text-lg  '>Read more</span>
               <ArrowRight size={18} strokeWidth={2.5} color="#4338CA" className='group-hover:transalate-x-2 duration-200 transition-transform'/>

            </button>
            

          </div>

        </div>

      </article>

    </main>
  )
}

export default App
