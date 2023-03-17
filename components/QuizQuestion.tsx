import React from 'react'

export default function QuizQuestion() {
  return (
    <div>
      <h3>Question</h3>
      <div>
        <input type="radio" name="answer" value="1" />
        <label>Answer 1</label>
      </div>
      <div>
        <input type="radio" name="answer" value="2" />
        <label>Answer 2</label>
      </div>
      <div>
        <input type="radio" name="answer" value="3" />
        <label>Answer 3</label>
      </div>
      <div>
        <input type="radio" name="answer" value="4" />
        <label>Answer 4</label>
      </div>
    </div>
  )
}

