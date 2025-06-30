import React from 'react'
import hero from '../assets/hero.png'
import heroBg from '../assets/heroBg.png'
import { ShoppingBag } from 'lucide-react'

const backgroundstyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize:`cover`,
    width:`100%`,
    height:`100%`
};

const HeroSection = () => {
  return (
    <>
        <section className='relative z-[-1]' style={backgroundstyle}>
            <div className='container py-16 sm:py-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center min-h-[600px]'>
                    {/* text content section */}
                    <div className='order-2 sm:order-1  space-y-7 text-dark'>
                        <h2 className='text-5xl font-[Inter]'>Fresh & Healthy Meal Plan{" "} <span className='text-secondary text-7xl font-[Ephesis]'>Delivery</span> {" "}in Kolkata</h2>
                        <div className='flex flex-col items-center mt-10 md:block md:mt-0'>
                            <p className='text-md'>Delicious Meals Derivered to your Door Step...</p>
                            <button className='bg-secondary px-3 py-2 mt-2 flex gap-1 items-center rounded-md font-bold text-white transition duration-300 hover:scale-115'>
                                <span>
                                    Order Now 
                                </span>
                                <ShoppingBag />
                            </button>


                        </div>
                        
                    </div>
                    {/* Image section */}
                    <div className='order-1 sm:order-2 relative z-30'> 
                        <img src={hero} alt="" className='w-full sm:scale-125 sm:translate-y-16' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection