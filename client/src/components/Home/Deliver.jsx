import React, { useState } from "react";
import Deliver_card from "./Deliver_card";
import deliver_data from "./deliver_data";

function Deliver() {
  const [current, call] = useState(deliver_data[0]);

  function clicked(event) {
    const id = parseInt(event.target.name);
    const temp = deliver_data.find((k) =>  k.id === id
    );

    if (temp) {
      call({
        id: temp.id,
        h1: temp.h1,
        h2: temp.h2,
        h3: temp.h3,
        p1: temp.p1,
        p2: temp.p2,
        p3: temp.p3,
        img1: temp.img1,
        img2: temp.img2,
        img3: temp.img3,
      });
    }
  }

  return (
    <div>
      <div className="flex  m-5 justify-around  h-12 w-vw">
        <div className="h-8 mt-5 border-t-2 w-[32vw]  "></div>
        <h1 className="align-text-top text-4xl font-bold text-gray-600">
          How do we deliver ?
        </h1>
        <div className=" mt-5 h-8 border-t-2 w-[32vw] "></div>
      </div>

      <div className=" relative h-[19vh] top-8 w-vw">
        <div className=" del absolute h-28 w-[94vw] left-[2vw] ">
          <div className="absolute font-sans font-medium flex h-11 w-full justify-center gap-8">
            <button
              name="1"
              onClick={clicked}
              className="transition-all ease-in-out  text-[21px] delay-75  hover:-translate-y-1 hover:border-b-4 border-orange-500 p-2 duration-150 "
            >
              Dairy
            </button>
            <button
              name="2"
              onClick={clicked}
              className="transition-all ease-in-out text-[21px] delay-75  hover:-translate-y-1 hover:border-b-4 border-orange-500 p-2 duration-150"
            >
              Fruits
            </button>
            <button
              name="3"
              onClick={clicked}
              className="transition-all ease-in-out text-[21px] delay-75  hover:-translate-y-1 hover:border-b-4 border-orange-500 p-2 duration-150"
            >
              Groceries
            </button>
            <button
              name="4"
              onClick={clicked}
              className="transition-all ease-in-out text-[21px] delay-75  hover:-translate-y-1 hover:border-b-4 border-orange-500 p-2 duration-150"
            >
              Vegetables
            </button>
            <button
              name="5"
              onClick={clicked}
              className="transition-all ease-in-out text-[21px] delay-75  hover:-translate-y-1 hover:border-b-4 border-orange-500 p-2 duration-150"
            >
              Services
            </button>
          </div>
        </div>
      </div>
      <Deliver_card
        id={current.id}
        h1={current.h1}
        h2={current.h2}
        h3={current.h3}
        p1={current.p1}
        p2={current.p2}
        p3={current.p3}
        img1={current.img1}
        img2={current.img2}
        img3={current.img3}
      />
    </div>
  );
}

export default Deliver;
