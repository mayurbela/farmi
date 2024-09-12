import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useAuth } from "../../Auth";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState([]);

  const auth = useAuth();

  async function getCartInfo() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const parsedToken = JSON.parse(token);
        const result = await axios.post("http://localhost:3000/cart", {
          id: parsedToken.id,
        });
        setItems(result.data);
      } else {
        console.error("Token not found");
      }
    } catch (err) {
      console.error("Error fetching cart info:", err);
    }
  }

  useEffect(() => {
    if (auth.authState) {
      getCartInfo();
      setIsAuthenticated(true);
    }
  }, [auth.authState]);

  function clicked(event, name, delta) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    auth.authupdate(false);
  }

  if (isAuthenticated) {
    console.log(items);
    let total = 0;
    let discount = 0;
    let del = total > 200 ? 0 : 40;

    return (
      <div>
        <Navbar />
        <div className="bg-slate-900 h-[20vh] w-vw">
          <div className="relative top-[14vh] text-white px-10 text-end">
            <button
              className="h-[4.5vh] w-[8vw] text-[24px] bg-red-700 rounded-2xl"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>
        </div>
        <div className="bg-gray-200 w-vw h-svh">
          <h1 className="w-[25vw] h-[9vh] text-[50px] text-center p-4 cart font-extralight">
            Your Cart
          </h1>
          <div className="w-[60vw] bg-white relative inset-[5%] rounded-xl flex flex-col">
            <div className="flex text-[23px] gap-[120px] border-b-2 border-slate-400 font-sans font-extralight">
              <div className="w-[8vw]"></div>
              <div>Name</div>
              <div>Rate</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>
            {items.map((k) => {
              total += parseInt(k.sp) * parseInt(k.quantity);
              discount = total * 0.15;

              return (
                <div key={k.id} className="h-[15vh] mx-4 flex justify-around gap-2 border-b-2">
                  <div className="w-[10vw] h-[15vh]">
                    <img
                      src={k.img}
                      alt="Item"
                      className="mt-5 size-[100px] rounded-2xl"
                    />
                  </div>
                  <div className="w-[10vw] h-[15vh] mt-12 font-sans text-[25px]">
                    {k.name}
                  </div>
                  <div className="w-[8vw] h-[15vh] mt-[48px] font-sans font-light text-[23px]">
                    {k.sp}
                  </div>
                  <div className="w-[10vw] h-[15vh] font-sans text-[25px] mt-[35px]">
                    <button
                      onClick={(e) => clicked(e, k.name, -1)}
                      className="text-[30px] mr-4"
                      disabled={k.quantity <= 1}
                    >
                      -
                    </button>{" "}
                    {k.quantity}{" "}
                    <button
                      onClick={(e) => clicked(e, k.name, 1)}
                      className="text-[30px] ml-4"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-[10vw] h-[15vh] font-sans mx-4 text-[23px] mt-[45px]">
                    Rs.{parseInt(k.sp) * parseInt(k.quantity)}
                  </div>
                </div>
              );
            })}

            {/* <div className="text-center">No items in the cart</div> */}

            <div></div>
          </div>
        </div>
        <div className="absolute h-[50vh] left-[70vw] top-[29vh] rounded-xl text-white w-[26vw] bg-zinc-600 mt-10">
          <div className="w-[20vw] m-auto">
            <div className="border-b-2 border-white text-center text-[30px] mt-2 mb-6 p-4">
              Order Summary
            </div>
            <div className="text-[18px] font-sans my-4">ITEMS - {items.length}</div>
            <div className="flex justify-between text-[17px] my-1">
              <div className="">Cart Total</div>
              <div className="font-bold">Rs.{total}</div>
            </div>
            <div className="flex justify-between text-[17px] my-1">
              <div className="">You Saved</div>
              <div className="font-bold">Rs.{discount}</div>
            </div>
            <div className="flex justify-between text-[17px] my-1">
              <div className="">Delivery Charges</div>
              <div className="font-bold"> Rs.{total > 200 ? 0 : 40}</div>
            </div>
            <div className="text-[13px] -my-1">*Free delivery for order above Rs.200</div>
            <div className="flex justify-between text-[17px] my-2">
              <div className="">Promocode</div>
              <div className="text-[16px] text-green-400"> Apply Code</div>
            </div>
            <div className="flex justify-between text-[18px] my-6">
              <div className="font-bold">Grand Total</div>
              <div className="font-bold">Rs.{total + del - discount}</div>
            </div>
            <div>
              <Link to="/payment"><button className="h-[5vh] w-[15vw] bg-red-500 relative left-[2.5vw] rounded-md text-[17px] transition-all ease-in-out hover:bg-red-600 hover:text-[19px]">
                Place Order
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Please Login first</h1>;
  }
}

export default Cart;
