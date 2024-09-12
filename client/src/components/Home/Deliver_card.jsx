import React from 'react'

function Deliver_card(props) {
  return (
    <div>
         <div className=" deliver h-[100vh] flex flex-col gap-2 justify-between">
        <div className=" h-1/3 w-vw ">
          <div className="bg-[#F7EFE5] absolute h-[32.85vh] w-[82vw] left-28 flex">
            <div className=" h-full w-2/3">
              <div className=" absolute text-[150px] font-serif h-36 -top-9 w-16 left-7 opacity-40 text-black ">
                1
              </div>
              <div className="relative h-[28vh] w-[48vw] top-4 left-[6vw] ">
                <div className=" absolute flex flex-col gap-2 left-7 top-4 w-[44vw] h-2/3 ">
                  <h1 className="text-4xl font-semibold ">{props.h1}</h1>
                  <p className="font-light text-[16px] ">
                    {props.p1}
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-full w-1/3 ">
            <img className=" relative w-[28.5vw] right-7 bottom-12 brightness-[0.90]  border-4 border-zinc-800 border-opacity-30 " src={props.img1}></img>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-vw">
          <div className=" bg-[#FFFBF5] absolute h-[32.85vh] w-[82vw] left-28 flex">
            <div className="h-full w-1/3"></div>
            <div className="h-full w-2/3">
              <div className=" relative left-[6vw] text-[155px] font-serif h-36 -top-9 w-16 opacity-40 text-black ">
                2
              </div>
              <div className="relative h-[28vh] w-[45vw] -top-32 left-[6vw] ">
                <div className=" absolute flex flex-col gap-2 left-[7vw] top-5 w-[40vw] h-2/3 ">
                  <h1 className="text-4xl font-semibold ">{props.h2}</h1>
                  <p className="font-light">
                    {props.p2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-1/3 relative left-[6vw] ">
            <img className=" relative w-[28.5vw] left-12 -top-14 brightness-[0.95] border-4 border-zinc-800 border-opacity-30" src={props.img2}></img>
            </div>
        </div>
        <div className=" h-1/3 w-vw">
          <div className="bg-[#F7EFE5] absolute h-[32.85vh] w-[82vw] left-28 flex">
            <div className="h-full w-2/3">
              <div className=" absolute text-[135px] font-serif h-36 -top-7 w-16 left-5 opacity-40 text-black ">
                3
              </div>
              <div className="relative h-[28vh] w-[48vw] top-4 left-[6vw] ">
                <div className=" absolute flex flex-col gap-2 left-7 top-7 w-[44vw] h-2/3 ">
                  <h1 className="text-4xl font-semibold ">{props.h3}</h1>
                  <p className="font-light">
                    {props.p3}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-1/3">
            <img className=" relative w-[28.5vw] right-7 bottom-12 border-4 border-zinc-800 border-opacity-30 " src={props.img3}></img>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Deliver_card
