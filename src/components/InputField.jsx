import React from 'react'

function InputField({ text, handleInput, handleSubmit }) {




  return (
    <div>
        <label>
          <input value={text} onChange={(event) => handleInput (event.target.value)}  />
          <button id="button" onClick={handleSubmit}>Add Todo</button>
        </label>
    </div>
  ) 
}  

export default InputField