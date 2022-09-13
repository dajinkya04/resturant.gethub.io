import React, { useEffect, useState } from 'react'

const UseState = () => {
    const [myNum,setmyNum]=useState(15)

    useEffect = (()=>{
        document.title= `catch ${myNum}`
    },[])
  return (
    <>
      <div className='container'>
        <h1 className='text-center text-danger p-2 m-3'>{myNum}</h1>
        <button className='text-danger p-2 m-3 pe-auto' onClick={()=>setmyNum(myNum + 1) }><strong>INCR</strong></button>
        <button className='text-success p-2 m-3 pe-auto' onClick={()=>(myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}><strong>DECR</strong></button>
      </div>
    </>
  )
}

export default UseState;
