import React from 'react'

//Button component for gptpage

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
    >
        Generate!
    </button>
  )
}

export default Button