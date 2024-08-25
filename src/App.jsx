import { useState } from 'react'
import { useEffect } from "react"

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");


useEffect(()=>{
  fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> setProduct(data))
}, [])

let filteredArr = product.filter((data) => {
  return (
    data.title.toLowerCase().includes(search.toLowerCase()) &&
    data.category.toLowerCase().includes(category.toLowerCase()) &&
    (price === "" || data.price <= parseFloat(price))
  );
});

  return (
    <>
     <h1 className="ml-5 my-5 text-3xl font-semibold underline">
        SHOPPING STORE
      </h1>
      <div className="w-2/5 ml-5">
        <input
          placeholder="Search"
          type="search"
          className="w-full border-2 border-black  p-3 font-bold rounded-2xl bg-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-2/5 ml-5">
        <input
          placeholder="Category"
          type="category"
          className="w-full border-2 border-black p-3 font-bold rounded-2xl mt-3 bg-white"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="w-2/5 ml-5">
        <input
          placeholder="Price"
          type="number"
          className="w-full border-2 border-black p-3 font-bold rounded-2xl mt-3 bg-white"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap m-4">
        {filteredArr.map((data) => (
          <a
          key={data.id}
          href="#"
          className="flex flex-col items-center m-10 mz-auto bg-white border border-black-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-black-100 dark:border-black-700 dark:bg-black-800 dark:hover:bg-black-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={data.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <h5>{data.category}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.description}
            </p>
            <h4>{data.price}</h4>
          </div>
        </a>
        
        ))}
      </div>
    </>
  )
}

export default App
