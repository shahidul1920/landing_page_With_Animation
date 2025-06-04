import React from 'react'

const Hero = () => {
  return (
    <div className='w-[100%] h-[1140px] relative'>
        <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_bg_pc.png" className='absolute inset-0 z-10' alt="" />
      <div className="container relative z-20 mx-auto size-full pt-[18rem] gap-4">
        <div className="models flex gap-1">
            <img src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_tit_pc.png" alt="" />
            <img className='h-[70px]' src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_tit_amd.png" alt="" />
        </div>
        <div className="titles">
            <h1 className='text-6xl font-black'>See Bigger, Sound louder.</h1>
            <h3 className='text-3xl font-medium'> 16:10 Wide Screen 300% Speaker Louder Mega Performance </h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
