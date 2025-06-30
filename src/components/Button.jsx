import React from 'react'

const Button = ({content, children }) => {
  return (
    <button className='bg-secondary px-4 py-2 flex gap-1 items-center justify-center rounded-sm font-bold text-amber-50  hover:bg-secondary/95 transition duration-300 hover:scale-115'>
                            <span>{content}</span>
                            {children}
    </button>
  )
}

export default Button