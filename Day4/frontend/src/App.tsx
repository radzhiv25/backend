import { useState } from 'react'
import  axios  from "axios"
import './App.css'


function App() {
  const [text, setText] = useState("")
  const [data, setData] = useState("")
  // const

  const handleClick = () => {
    const response = async () => {
      const data = await fetch('http://localhost:8000')
      const res = await data.json()
      setText(res)
      console.log(res)
    }
    response()
  }

  const handleData = async (data: any | undefined) => {
    // e.preventDefault();
    setData(data)
    const newData = await axios.post('http://localhost:8000/send',
      data
    )
    const res = newData.data
    console.log(res)
    setText(res)
  }
  return (
    <>
      <div className="">
        <input value={data} onChange={(e) => handleData(e.target.value)} />
        <button onClick={handleClick}>Click Me!</button>
        {
          !text ? (
            <p>No text bruh!</p>
          ) :
          (
            <p>{text}</p>
          )
      }
      </div>
    </>
  )
}

export default App
