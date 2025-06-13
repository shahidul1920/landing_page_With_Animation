import React from "react";

const GridLayout = () => {
  return (
    <section className="px-4 xl:px-0 py-12 bg-[#DCDFE8]">
      <div className="container mx-auto">
        <div className="left"></div>
        <div className="right max-w-[460px] overflow-hidden">
          <div className="item item1 w-full p-6 bg-white shadow-2xl">
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

          <div className="item item2"></div>
          <div className="item item3"></div>
        </div>
      </div>
    </section>
  );
};

export default GridLayout;
