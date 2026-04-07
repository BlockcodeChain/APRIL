import React from 'react'
import axios from 'axios'
const App = () => {
  // const []
async function fetchdata(){
const data=await axios.get('https://dummyjson.com/posts')
console.log(data)
}
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-800 ">
      <div className='flex gap-8   text-white cursor-pointer'>
         <button className='border rounded-2xl py-2 px-5 '>Fetch Data</button>
       <button className='border rounded-2xl py-2 px-5 '>Post Data</button>
      </div>
       {data.map(item=>(
        <div className='flex flex-col px-4 bg-red-400 '>
            <h2 className='bg-gray-700 p-4 rounded-lg text-white'>TITLE:{item.title}</h2>
        <p>Body:{item.body}</p>
        </div>
      

       ))}
    </div>
  )
}

export default App
