import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Our Events
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl  font-bold'>
              <p>Find the Best upcoming Dance events in India. Get ready to explore Dance, Bollywood, Classical dance, Zumba And much more.</p>
            </div>
            <div>
              <p>We organize dance competition anad events in different cities . 
                Dance competition is an event in which individuals and groups of 
                dancers from all different studios come together for the purpose of showcasing their routines,
                receiving feedback from judges, and competing for placements and various awards.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About