import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  let sidebarRef = useRef(null);
  useEffect(() => {
    let handleSidebar = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth <= 600
      ) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("mousedown", handleSidebar);
    return () => {
      window.removeEventListener("mousedown", handleSidebar);
    };
  }, []);
  return (
    <div>
      <div
        ref={sidebarRef}
        className={`bg-black   fixed top-0 bottom-0 
              z-30 left-0 min-h-[100vh] overflow-hidden 
              transition-all duration-[1s] ease-linear ${
                sidebarOpen == true ? "w-[200px]" : "w-0"
              }  `}
      >
        <div
          onClick={() => {
            setSidebarOpen(false);
          }}
          className="absolute top-[30px] right-[20px] text-white cursor-pointer"
        >
          <FaXmark />
        </div>
        {sidebarOpen ? (
          <ul className="flex flex-col gap-10 text-white items-center justify-center h-full  ">
            <li>
              <a>All Categories</a>
            </li>
            <li>
              <a>All Products</a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>

      {/* discount */}
      <div className="bg-black py-3 text-center text-white text-sm">
        <p>Sign up and get 20% off to your first order. Sign Up Now</p>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl cursor-pointer font-bold">SHOP.CO</h3>
            {/* links */}
            <ul className=" gap-3 hidden md:flex">
              <li>
                <a href="">All Products</a>
              </li>
              <li>
                <a href="">All Categories</a>
              </li>
            </ul>

            {/* search bar */}

            <div className=" w-full md:w-[577px] bg-[#F0F0F0] rounded-[62px] h-[48px] relative">
              <input
                type="text"
                className="w-full h-full bg-transparent rounded-[62px] px-10 border-none"
                placeholder="Search for products..."
              />
              <div className="absolute top-[50%] left-4 -translate-y-1/2">
                <IoSearch />
              </div>
            </div>

            {/* Cart amd profile */}

            <div className="flex gap-3 text-xl">
              <FaCartArrowDown />
              <FaRegUserCircle />
            </div>
            <p
              onClick={() => {
                setSidebarOpen(true);

                console.log(sidebarOpen);
              }}
              className="text-[30px] font-bold ml-3 cursor-pointer"
            >
              <IoMenuOutline/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
