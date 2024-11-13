import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import axios from "axios";
import Catalog from "./Catalog";
function AllProducts() {
  let [isLoading, setIsLoading] = useState(false);

  let [err, setErr] = useState(false);
  let [products, setProducts] = useState([]);
  const getAllProducts = async () => {

    try {
      setIsLoading(true);
      let res = await axios.get(`https://fakestoreapi.com/products`);
      console.log(res);
      setProducts(res.data);
      setIsLoading(false);
    } catch (err) {
      if (err) {
        setIsLoading(false)
        setErr(err.response.status);
      }
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="container mt-[100px]  mx-auto">
      <h3 className="text-center text-black text-[48px] font-bold tracking-widest mb-[50px]  ">
        Products
      </h3>

      {isLoading ? (
        <Catalog />
      ) : err ? (
        <div className="text-red-600 h-[50vh] w-full flex justify-center items-center text-[60px]">{err}</div>
      ) : (
        <div className="my-4 flex flex-wrap justify-around gap-5">
          {products.map((product) => {
            return (
              <div
                key={product.title}
                className="w-[250px] 
        h-[auto] border-2
         border-gray-100 
         px-3 py-2 rounded-[15px]
         cursor-pointer hover:scale-110 transition-all duration-500
         "
              >
                <img
                  className="w-[250px] h-[200px]  object-contain"
                  src={product.image}
                  alt=""
                />
                <h3>{product.title}</h3>
                <div className="flex  items-center">
                  {product.rating.rate}
                  <IoMdStar className="text-[yellow]" />
                </div>

                <div>$ {product.price}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
