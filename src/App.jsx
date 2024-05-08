import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl text-center items-center'>
          <button onClick={() => {setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "red"}}>red</button>
          <button onClick={() => {setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "green"}}>green</button>
          <button onClick={() => {setColor("royalblue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={() => {setColor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "black"}}>black</button>
          <button onClick={() => {setColor("pink")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "pink"}}>pink</button>
          <button onClick={() => {setColor("lavender")}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: "Lavender"}}>lavender</button>
          <button onClick={() => {setColor("grey")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "grey"}}>grey</button>
          <button onClick={() => {setColor("purple")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={() => {setColor("salmon")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "salmon"}}>salmon</button>
        </div>
      </div>

    </div>
  )
}

export default App
