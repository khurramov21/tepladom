import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useProduct } from "../context/ContextProvider";
import { Spin } from "antd";

function AcsiyaTovar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const { addToBasket, addToFavorite } = useProduct();

  const handlefavorite = (item) => {
    addToFavorite(item);
    toast.success("Sevimlilarga qo'shildi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "220px",
        height: "30px",
        background: "white",
        color: "black",
      },
      className: "custom-toast",
    });
  };

  const handleBasket = (item) => {
    addToBasket(item);
    toast.success("Mahsulot qo'shildi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "220px",
        height: "30px",
        background: "white",
        color: "black",
      },
      className: "custom-toast",
    });
  };

  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const discountedProducts = data.filter((item) => item.discount);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = discountedProducts.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const totalPages = Math.ceil(discountedProducts.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className=" container_product">
      <div className=" mt-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">Товары по акции</h1>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
        {currentCards.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-xl shadow-lg p-4 bg-white"
            style={{ width: "280px", margin: "0 auto" }}
          >
            {item.discount && (
              <img
                style={{
                  width: "100px",
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                }}
                src="https://s3-alpha-sig.figma.com/img/44cc/088e/418d1f8f8c95ec2634fc51e1fa1bbc54?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SawZtIpaYjY5RJ19tQdph~NwActfce9VFImQqWAmBj5pQHoHZxAo~XoBGfAEzm8CBIYkt2ezK4t7Ayz3siEmCLVKHjdEx24TiPnwRbFlnYjZ9Up5iB8Nz4sOSV-N1oE1dwc0FVU7IKVLxVaE532QsFfWs9MQ8J69gvNAV4EMzAPK622XWYo6mpLBQhN8RrHtxzYOO6aG3yyz3BM7FTQeoMeSlmblpeqA394rC6Ahx998S-y79hD9U4KmNQ421~tS3~uTStvz5Bjyy4~Xqs6oTxBzPTmub5D0n4rCXWjoW70SV3HhichbLBSnGTcPFxvMyzLRQGKaUYoBnNeFHVSu-Q__"
              ></img>
            )}
            <Link to={`/details/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
            </Link>
            <h2 className="text-md font-semibold mb-1">{item.title}</h2>

            {item.oldPrice && (
              <p className="text-gray-500 line-through mb-1">
                {item.oldPrice} сум
              </p>
            )}
            <p className="text-lg font-bold text-red-500 mb-4">
              {item.price} сум
            </p>

            <div className="flex justify-between items-center space-x-2">
              <button
                onClick={() => handleBasket(item)}
                style={{ background: "#FFB12A" }}
                className="flex-1 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m-5 5a1 1 0 110 2 1 1 0 010-2z"
                  />
                </svg>
                В корзину
              </button>
              <button
                onClick={() => handlefavorite(item)}
                style={{ background: "#FFB12A", color: "white" }}
                className="border font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.28 0 4.26 1.68 4.5 4.09C12.74 4.68 14.72 3 17 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button
          className=" text-black"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdOutlineChevronLeft size={24} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? " text-orange-400 " : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className=" text-black"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default AcsiyaTovar;