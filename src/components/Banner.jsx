import React from 'react'
import apple from '../assets/png/apple.png'
import kiwi from '../assets/png/kiwi.png'
import leaf from '../assets/png/leaf.png'
import lemon from '../assets/png/lemon.png'
import tomato from '../assets/png/tomato.png'
import Button from './Button'
import {User,Utensils} from 'lucide-react'

const Banner = () => {
  return (
    <>
     <div className="container py-14 relative">
        <div>
            <h1 className='py-8 tracking-wider text-center font-[Inter] text-2xl font-semibold text-dark'>Taste the Healthy Difference </h1>

            <div className='space-y-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>

                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam quis ipsum culpa velit enim <span className='text-primary'>Suman Saha</span> harum sunt nulla consequuntur molestias, ea, at totam. Maiores, recusandae fugit itaque magni, quidem totam ratione veniam accusamus, dignissimos ex corrupti. Corrupti ab possimus ratione!
                        </p>
                    </div>
                    <div></div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>

                    <div></div>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam quis ipsum culpa velit enim <span className='text-primary'>Suman Saha</span> harum sunt nulla consequuntur molestias, ea, at totam. Maiores, recusandae fugit itaque magni, quidem totam ratione veniam accusamus, dignissimos ex corrupti. Corrupti ab possimus ratione!
                        </p>
                    </div>

                </div>

                {/* Button Section  */}
                <div className='flex justify-center mt-10 sm:mt-14'>
                    <Button content='Try the Food'> <Utensils /> </Button>
                </div>
                {/* Fruit Images */}
                <div className='absolute top-1 -left-3 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src={leaf} className='max-w-[160px]' alt="" />

                </div>
                <div className='absolute -bottom-1 -left-5 sm:bottom-0 sm:left-20 opacity-50 sm:opacity-100'>
                    <img src={tomato} className='max-w-[240px]' alt="" />

                </div>
                <div className='absolute bottom-80 -right-12 sm:bottom-100 sm:right-5 opacity-50 sm:opacity-100'>
                    <img src={lemon} className='max-w-[240px]' alt="" />

                </div>
                <div className='absolute top-1/2 -translate-1/2 left-1/3 -translate-x-1/2 sm:bottom-70 opacity-50 sm:opacity-100'>
                    <img src={kiwi} className='max-w-[240px]' alt="" />

                </div>
                <div className='hidden sm:block absolute sm:bottom-1 sm:right-10 opacity-50 sm:opacity-100'>
                    <img src={apple} className='max-w-[240px]' alt="" />

                </div>

                
            </div>






        </div>


     </div>
        
    </>
  )
}

export default Banner