import React from "react";

const GridLayout = () => {
  return (
    <section className="px-4 xl:px-0 py-12 bg-[#DCDFE8]">
      <div className="container mx-auto flex gap-6 flex-wrap">
        <div className="left">
          <div className="top flex gap-6 mb-6">
            <div className="top-right max-w-[440px]">
              <div className="topSub  p-6 bg-white rounded-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  16inch Big Vision <br />
                  16:10 Exclusive Display
                </h2>
                <img className="w-full h-auto" src="https://d13pvy8xd75yde.cloudfront.net/global/ru/megabook/k16/sec2_1.png" alt="" />
              </div>
              <div className="botSub p-6 bg-[#E8E8E8] mt-6 rounded-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  180° Angle of view
                </h2>
                <img className="w-full h-auto" src="https://d13pvy8xd75yde.cloudfront.net/global/ru/megabook/k16/sec2_2.png" alt="" />
              </div>
            </div>
            <div className="mid min-w-[full] xl:min-w-[560px] bg-amber-300">
helo
            </div>
          </div>
          <div className="bottom-top"></div>
        </div>
        <div className="right max-w-[460px] overflow-hidden">
          <div className="item item1 w-full p-6 bg-white rounded-xl">
            <div className="title mb-4">
              <h3 className="text-3xl font-bold">AMD Ryzen 5 7430U</h3>
              <p className="text-[18px]">
                Powerful performance for demanding tasks
              </p>
            </div>
            <div className="infoNimg flex w-full">
              <div className="infos w-1/4">
                <div className="info">
                  <h3 className="text-xl">
                    CORE <br />
                    <span className="font-bold">6</span>
                  </h3>
                </div>
                <div className="info">
                  <h3 className="text-xl">
                    RAM <br />
                    <span className="font-bold">16GB</span>
                  </h3>
                </div>
                <div className="info">
                  <h3 className="text-xl">
                    SSD <br />
                    <span className="font-bold">512GB</span>
                  </h3>
                </div>
              </div>
              <div className="img w-3/4 h-[200px] relative overflow-hidden">
                <img
                  className="w-[100%] h-auto absolute -top-0 right-6 md:-top-12 md:right-14"
                  src="https://d13pvy8xd75yde.cloudfront.net/global/tablets/megabook-k16s-amd/sec2_10_pc.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="item item2 w-full p-6 bg-white mt-6 grid grid-cols-2 items-center rounded-xl">
            <div className="title">
              <h3 className="text-xl md:text-3xl font-bold">
                Expandable Memory
              </h3>
              <p className="md:text-[18px]">Up to 32GB</p>
            </div>
            <div className="imag overflow-hidden h-full bg-transparent">
              <img
                className="w-auto scale-150 img1"
                src="https://d13pvy8xd75yde.cloudfront.net/global/ru/megabook/k16/sec2_11.png"
                alt=""
              />
            </div>
          </div>
          <div className="item item3 w-full p-6 bg-white shadow-2xl mt-6 rounded-xl">
            <div className="title flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-3xl font-bold">
                TECNO PC Manager
              </h3>
              <p className="md:text-[16px]">
                OneLeap Collaboration PC Clone Optimization
              </p>
            </div>
            <div className="imag overflow-hidden md:h-[240px] bg-transparent ">
              <img
                className="w-auto img2 transform translate-0 md:translate-x-0  md:-translate-y-[95px]"
                src="https://d13pvy8xd75yde.cloudfront.net/global/ru/megabook/k16/sec2_12.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridLayout;
