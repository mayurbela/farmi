import React from "react";

function Footer() {
  return (
    <div className="relative ">
      <div className='relative h-[56vh] bg-cover brightness-[25%] bg-fixed bg-[url("https://e0.pxfuel.com/wallpapers/37/511/desktop-wallpaper-beautiful-green-leaves-and-light-ultra-wq-walls-space-3440x1440-green.jpg")] bg-no-repeat'></div>
      <div className="absolute inset-[10%] ">
        <div className="flex">
          <div className="h-[50vh] w-1/4 flex flex-col justify-between">
            <div className=" relative -left-[5%] h-[8vh] size-[50%] brightness-[50%]">
              <img src="/images/home/logo.png"></img>
            </div>
            <div className="h-[10vh] text-slate-300 w-[18vw] mt-[10%] text-[16px] ">
              <p>
                Vrindavan Dairy LLP Sy.No.26, Janthgondanahalli Muthsandra Post,
                Varhur Via Sarjapur Hobli, Anekal Taulk Bangalore 560087,
                Karnataka, India
              </p>
            </div>
            <div className="h-[10vh] w-[20vw] mt-[5%] text-slate-400 text-[17px] ">
              <p> +917984410812</p>
              <p> sales@farmson.com</p>
            </div>
          </div>
          <div className="h-[40vh] w-1/4">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[50px] text-[25px] text-bottom text-gray-200 font-extrabold  "> ABOUT US</h1>
          <div className= "relative text-gray-300 w-[15vw] m-auto flex flex-col gap-2">
           <a href="" ><p className=" hover:text-white">HOME</p> </a>
          <a href="" ><p className=" hover:text-white">WHAT WE DO</p></a>
          <a href="" ><p className=" hover:text-white">TEAM</p></a>
          <a href="" ><p className=" hover:text-white">PRODUCTS</p></a>
          <a href="" ><p className=" hover:text-white">T & C</p></a>
          <a href="" ><p className=" hover:text-white">PRIVACY POLICY</p></a>
          <a href="" ><p className=" hover:text-white"> REFUND</p></a>
          <a href="" ><p className=" hover:text-white">CONTACT</p></a>

          </div>
          </div>
          <div className="h-[40vh] w-1/4">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[50px] text-[25px] text-bottom text-gray-200 font-extrabold  "> SUPPORT</h1>
          <div className= "relative text-gray-300 w-[15vw] m-auto flex flex-col gap-2 ">
           <a href="" ><p className=" hover:text-white">SUBSCRIPTION</p> </a>
          <a href="" ><p className=" hover:text-white">DELIVERY PROCESS</p></a>
          <a href="" ><p className=" hover:text-white">HELP CENTER</p></a>
          <a href="" ><p className=" hover:text-white">FAQS</p></a>
          <a href="" ><p className=" hover:text-white">TESTIMONIALS</p></a>
          <a href="" ><p className=" hover:text-white">BLOG</p></a>
          <a href="" ><p className=" hover:text-white">FARM STAY</p></a>
          <a href="" ><p className=" hover:text-white">DONATE</p></a>

          </div></div>
          <div className="h-[40vh] w-1/4">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[50px] text-[25px] text-bottom text-gray-200 font-extrabold  "> POPULAR POSTS</h1>
          <div className= "relative text-gray-300 w-[15vw] m-auto flex flex-col gap-2 ">
           <a href="" ><p className=" hover:text-white">BEBEFIT OF RAW MILK</p> </a>
          <a href="" ><p className=" hover:text-white">HOW TO USE OUR SERVICE SECTION</p></a>
          <a href="" ><p className=" hover:text-white">BENEFITS OF ORGANIC PRODUCTS</p></a>
          <a href="" ><p className=" hover:text-white">FARM BLOG</p></a>
          </div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
