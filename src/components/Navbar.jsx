import React from 'react'
import { ChevronDown,SquareUserRound,User } from 'lucide-react'

const NavLinks = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"About",
        link:"/#"
    },
    {
        id:3,
        name:"Contact",
        link:"/#"
    },
    
    
];

const dropdownLinks=[
    {
        id:1,
        name:"Vegetables",
        link:"https://www.google.com"
    },
    {
        id:2,
        name:"Fruits",
        link:"/#"
    },
    {
        id:3,
        name:"Grains",
        link:"/#"
    },

]

const Navbar = () => {
  return (
    <>
    <div className='bg-white shadow-md'>
        <nav className='container flex justify-between items-center py-4 sm:py-3'>
            {/* Logo Section  */}
            <div className='font-bold text-3xl'>Logo</div>
            {/* NavLink Section  */}

            <ul className=' flex gap-7 items-center '>
                {
                    NavLinks.map((link)=>{
                        return(
                            <li key={link.id} className='hidden sm:inline-block sm:text-lg sm:cursor-pointer sm:font-medium sm:hover:text-primary'>
                                <a href={link.link}>

                                {link.name}
                                
                                </a>
                            </li>
                        )

                    })
                }
                <li className='hidden md:cursor-pointer group md:inline-block md:hover:text-primary md:text-lg md:font-medium'>
                    <a href="#"
                    className='inline-block hover:text-primary text-lg font-medium'>
                       <div className='flex items-center gap-[2px] py-2'>
                        Dropdown
                        <span>
                            <ChevronDown size={32}  className='group-hover:rotate-180 duration-300'/>
                        </span>
                        </div> 
                    </a>
                    {/* Dropdown Section  */}
                    <div className=''>
                        <ul className='md:absolute md:bg-white md:p-2 md:shadow-md md:w-44 md:hidden md:transition group-hover:inline-block md:z-[10]'>
                            {
                                dropdownLinks.map((item)=>{
                                    return(
                                        <li key={item.id} className='text-black p-2 rounded-lg hover:bg-primary/10'>
                                            <a href={item.link} target='_blank'>
                                                {item.name}
                                            </a>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    
                </li>

                {/* Account Section  */}
                <li>
                    <button className='bg-secondary px-4 py-2 flex gap-1 items-center justify-center rounded-sm font-bold text-amber-50  hover:bg-secondary/95 transition duration-300 hover:scale-115'>
                            <User />
                            <span>Login</span>
                    </button>

                </li>
            </ul>


        </nav>
    </div>
    </>
  )
}

export default Navbar