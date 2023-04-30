import React from 'react'
import ChatInput from './ChatInput'

const GptHome = () => {
  return (
    <div className='space-y-6'>
      <header className='flex justify-center'>
        <h1 className=" text-3xl font-medium text-green-500">
          GPT-3 ext
        </h1>
      </header>
      <main className="flex flex-col justify-center">
        <ChatInput />
      </main>
    </div>
  )
}

export default GptHome