import React from 'react'
import { BusFront,EllipsisVertical } from 'lucide-react'

const WhyUs = () => {
  return (
    <>
        <div className='py-14 md:py-28 bg-[rgb(249,250,251)]' >
            <div className="container">

            <h1 className='pb-16 font-bold text-2xl text-dark tracking-wider text-center'>Why Choose Us</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-center text-dark'>Lorem ipsum dolor sit amet consec adipis elit. Similique, aut?</p>
                    <EllipsisVertical size={48} className='text-primary'/>
                    <BusFront size={60} className='text-primary'/>                   
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <BusFront size={60} className='text-secondary'/>                   
                    <EllipsisVertical size={48} className='text-secondary'/>
                    <p className='text-center text-dark'>Lorem ipsum dolor sit amet consec adipis elit. Similique, aut?</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-center text-dark'>Lorem ipsum dolor sit amet consec adipis elit. Similique, aut?</p>
                    <EllipsisVertical size={48} className='text-primary'/>
                    <BusFront size={60} className='text-primary'/>                   
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <BusFront size={60} className='text-secondary'/>                   
                    <EllipsisVertical size={48} className='text-secondary'/>
                    <p className='text-center text-dark'>Lorem ipsum dolor sit amet consec adipis elit. Similique, aut?</p>
                </div>
                

            </div>
            </div>

        </div>
    </>
  )
}

export default WhyUs