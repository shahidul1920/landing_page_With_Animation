import React from 'react'

const GridLayout = () => {
  return (
    <div className='container mx-auto my-[3rem]'>
      <section className="flex h-[800px] w-full">
        <div className="left w-3/4 h-full bg-amber-500">
            <div className="top w-full h-[70%] bg-amber-600">
                
            </div>
            <div className="bottom bg-red-700 w-full h-[30%]">
                <div className="item item1"></div>
                <div className="item item2"></div>
                <div className="item item3"></div>
            </div>
        </div>
        <div className="right w-1/4 h-full bg-emerald-500"></div>
      </section>
    </div>
  )
}

export default GridLayout
