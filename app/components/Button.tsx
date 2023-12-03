import React from 'react'

interface ButtonProps {
    label?: string,
    className?: string
}

function Button({ label, className }: ButtonProps) {
    return (
        <button className={`items-center justify-center py-4  border-black rounded-sm outline outline-1 hover:bg-dark2 hover:text-white bg-gray-50  duration-50 ease-in-out ${className}`}>{label || "Get Started"}</button>
    )
}

export default Button