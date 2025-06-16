import React from 'react'

const BuildSection = () => {
    return (
        <div className='h-screen w-full relative'>
            <img className='inset-0 absolute -z-1' src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec3_pc.png" alt="" />
            <div className="container content mx-auto p-4 md:p-[5rem] text-center text-white">
                <h2 className='text-2xl md:text-4xl xl:text:6xl font-bold'>All-Metal Lightweight and Thin Design</h2>
                <p className='text-[18px] xl:text:[22px] mt-8'>
                    Step into luxury with the 16" MEGABOOK K16S AMD. Crafted with a premium all-metal body, it combines style
                    and functionality seamlessly. Despite its large screen, it remains lightweight and slim, offering an effortlessly
                    elegant design.
                </p>
            </div>

        </div>
    )
}

export default BuildSection
