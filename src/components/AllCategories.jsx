import mens_clothes from "../assets/mens_clothes.png";
import women_clothes from "../assets/women_clothes.png";
import jewl from "../assets/jewel.jpg";
import electronics from "../assets/electronics.jpeg";
import { useState } from "react";
// import { motion } from "framer-motion";
function AllCategoires() {
  let [imgs] = useState([
    { title: "Mens", img: mens_clothes },
    { title: "women", img: women_clothes },
    { title: "jewellery", img: jewl },
    { title: "Electronics", img: electronics },
  ]);
  return (
    <div className=" bg-[#FCFCFC] mx-auto pt-[100px] h-[auto]">
      <h3 className="text-center text-black text-[48px] font-bold mb-[50px] ">
        Categories
      </h3>

      <div>
        <div className="flex flex-wrap h-[auto]">
          {imgs.map((img) => {
            return (
              <div
                key={img.title}
                className="w-full md:w-[25%] relative group "
              >
                <img
                  className="w-full h-full object-cover"
                  src={img.img}
                  alt=""
                />

                <div
                  className=" absolute top-0 left-0 bottom-0 w-full h-full 
              bg-[rgba(0,0,0,0.6)] opacity-0
               group-hover:opacity-100
               transition-opacity duration-700
               flex flex-col justify-center p-10
            
               "
                >
                  <div>
                    <h3 className="text-[30px] text-white uppercase tracking-widest ">
                      {" "}
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllCategoires;
