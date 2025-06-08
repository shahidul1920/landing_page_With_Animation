import React from "react";

const Hero = () => {
  return (
    <div className="w-[100%] h-[400px] md:h-screen relative">
      <img
        src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_bg_pc.png"
        className="absolute z-10 w-full h-full object-cover"
        alt=""
      />
      <div className="container relative z-20 mx-auto size-full px-3 md:px-6 xl:px-0">
        <div className="size-full gap-4 flex flex-col justify-center">
          <div className="models flex gap-2">
            <img
              className="w-[150px] md:w-[230px] xl:w-auto"
              src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_tit_pc.png"
              alt=""
            />
            <img
              className="max-h-[20px] md:max-h-[40px] xl:max-h-[70px]"
              src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec1_tit_amd.png"
              alt=""
            />
          </div>
          <div className="titles">
            <h1 className="text-2xl md:text-4xl xl:text-6xl font-black">
              See Bigger, Sound louder.
            </h1>
            <h3 className="md:text-2xl xl:text-3xl font-medium">
              16:10 Wide Screen 300% Speaker Louder Mega Performance
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
