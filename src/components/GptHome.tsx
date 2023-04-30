import React from 'react'
import ChatInput from './ChatInput'

const GptHome = () => {
  return (
    <div>
      <header>
        <h1 className="mx-auto text-3xl font-medium text-green-500">
          GPT-3 ext
        </h1>
      </header>
      <main className="mx-4 flex flex-col justify-center">
        <ChatInput />
      </main>
    </div>
  )
}

export default GptHome