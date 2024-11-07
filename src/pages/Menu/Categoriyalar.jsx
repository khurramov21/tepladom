import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Categoriyalar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom")
      .then((res) => {
        const filteredData = res.data
          .map((item) => ({
            categoryName: item.category,
            categoryImg: item.categoryImg,
          }))
          .filter((item) => item.categoryName && item.categoryImg);
        setData(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container_product">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Категории</h1>
        <Link
          style={{
            color: "blue",
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
          to="allcetory"
        >
          Все категории
          <MdOutlineChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
        {data.slice(0, 6).map((item, index) => (
          <Link key={index} to={`/selectCategory/${item.categoryName}`}>
            <div
              style={{ width: "200px", height: "220px", cursor: "pointer" }}
              className="bg-white rounded-lg shadow-md overflow-hidden p-5"
            >
              <img
                src={item.categoryImg}
                alt={item.categoryName}
                className="object-cover"
                style={{ width: "100%", height: "130px" }}
              />
              <h3 className="text-lg text-center mt-2 font-semibold">
                {item.categoryName}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categoriyalar;