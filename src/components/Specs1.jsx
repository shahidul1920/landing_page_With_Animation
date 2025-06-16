import React from 'react'

const Specs1 = () => {
    return (
        <div className='h-screen w-full bg-black grid place-items-center'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="left flex flex-col gap-14">
                    <div className="text text-white">
                        <h2 className='text-xl md:text-3xl xl:text-5xl font-bold'>
                            Up to 180°, Easily
                            One-finger Opening
                        </h2>
                        <p className='text-[22px] font-medium mt-8'>
                            Support 180° angle of views. Easily open with just one-finger based on the craftsmanship and design details have high requiement on the design and damping control for the pivot. Good for usage needs of any scenarios.
                        </p>
                    </div>
                    <div className="img">
                        <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec4_pc_left.png" alt="" />
                    </div>
                </div>
                <div className="rightImage">
                    <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec4_pc_right.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Specs1
