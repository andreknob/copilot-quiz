import React from 'react'
import QuizQuestion from './QuizQuestion'

export default function Quiz() {
  return (
    <div>
      <h2>Quiz</h2>
      <div>
        <QuizQuestion />
        <QuizQuestion />
        <QuizQuestion />
      </div>
    </div>
  )
}
