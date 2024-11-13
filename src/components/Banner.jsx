import banner from "../assets/banner.webp";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import prada from "../assets/prada.png";
import gucci from "../assets/gucci.png";
import calvin from "../assets/calvin.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
  };
  return (
    <div
      className="h-[auto]
        w-full
        bg-[#F2F0F1]
         px-3
         overflow-hidden
      "
    >
      <div className="container mx-auto flex items-center flex-wrap  justify-between">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-[40px] md:text-[64px] font-bold">
            Discover Products <br/> That Reflect <br/> Your Lifestyle
          </h3>

          <p className="max-w-[550px]">
            Explore our wide selection of carefully chosen items, from fashion
            pieces to cutting-edge electronics, all crafted to match your unique
            style and needs.
          </p>

          <motion.button
            whileHover={{ backgroundColor: "#ccc", color: "#000" }}
            transition={{ duration: 0.5 }}
            className="w-[210px] bg-black text-white rounded-[62px]
         h-[52px]
          my-3"
          >
            Click here
          </motion.button>

          <div className="flex gap-8 flex-wrap">
            <div className="leading-8 text-center">
              <p className="text-4xl font-bold">200 +</p>
              <p>International Brands</p>
            </div>
            <div className=" leading-8 text-center">
              <p className="text-4xl font-bold">2000 +</p>
              <p>High-Quality Products</p>
            </div>
            <div className=" leading-8 text-center">
              <p className="text-4xl font-bold">30,000+</p>
              <p>Happy Customers </p>
            </div>
          </div>
        </motion.div>
        {/* img */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[50%] h-[610px] object-cover"
        >
          <img src={banner} alt="" className="w-full  h-full  object-cover " />
        </motion.div>
      </div>

      {/* carousel */}

      <div className="bg-black text-white w-full overflow-hidden">
        <Slider {...settings} className="container  mx-auto">
          <div className=" h-[200px]">
            <img
              src={versace}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" h-[200px]">
            <img src={zara} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="h-[200px]">
            <img src={gucci} alt="" className="w-full h-full object-contain" />
          </div>
          <div className=" h-[200px]">
            <img src={prada} alt="" className="w-full h-full object-contain" />
          </div>
          <div className=" h-[200px]">
            <img src={calvin} alt="" className="w-full h-full object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
