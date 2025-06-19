import React from 'react'

const Specs2 = () => {
    return (
        <div className='relative w-full h-screen bg-[url(https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec5_pc.png)] bg-cover bg-center bg-no-repeat flex flex-col pt-[5rem]'>
            <div className="container mx-auto grid gap-8">
                <h2 className='text-6xl text-white font-black'>No Compromising in Performance</h2>
                <h3 className='text-3xl text-white font-bold'>
                    AMD Ryzen™ 5 R5-7430U <br />
                    AMD Radeon™ Graphics
                </h3>
                <p className='text-white max-w-[500px] text-[14px] md:text-[18px]'>
                    The AMD Ryzen™ 5 7430U processor excels in multitasking, energy efficiency, and graphics performance, making it a versatile choice for work and entertainment.
                </p>
            </div>
            <div className="flex gap-12 text-white container mx-auto mt-[13rem]">
                <div className="icn grid gap-4">
                    <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16/sec5_icon1.png" alt="" />
                    <h3 className='font-bold text-2xl'>6 CORES / 12 Threads</h3>
                </div>
                <div className="icn grid gap-4">
                    <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16/sec5_icon2.png" alt="" />
                    <h3 className='font-bold text-2xl'>4.3 GHz</h3>
                </div>
            </div>
        </div>
    )
}

export default Specs2
