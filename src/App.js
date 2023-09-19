import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components imports
import Header from './components/Header';
import ProductList from './components/ProductList';
import ItemDetail from './components/ItemDetail';


function App(){
  const [product, setProduct] = useState([
    {
      name: "Redmi Note 12",
      imgii: "https://th.bing.com/th/id/R.54f606888aec4827af208e00d5239a34?rik=mI6hmOCX0Ak%2blw&pid=ImgRaw&r=0",
      Price: "$200",
    },
    {
      name: "Sunglasses",
      imgii: "https://th.bing.com/th/id/OIP.JmUh1cGbB2HAgX47iq5BPwHaHa?pid=ImgDet&rs=1",
      Price: "$100",
    },
    {
      name: "Watch",
      imgii: "https://th.bing.com/th/id/OIP.1N0PY98UB64yFFaBoykG6gHaHa?pid=ImgDet&rs=1",
      Price: "$150",
    },
    {
      name: "Watch",
      imgii: "https://th.bing.com/th/id/R.8b8b5e36fc0544e6b28be58a41fab4b8?rik=9%2fH%2bpgYqqkhXFA&pid=ImgRaw&r=0",
      Price: "$25",
    },
    {
      name: "Handbag",
      imgii: "https://th.bing.com/th/id/R.d68740bcc3a6f615ea3db5ca49e0f59d?rik=a7580mUm1tFaUA&pid=ImgRaw&r=0",
      Price: "$80",
    },
    {
      name: "Hat",
      imgii: "https://th.bing.com/th/id/R.49f289a91917a2cbe899c6f3a07fb8e4?rik=kzCBarsmpokjyQ&pid=ImgRaw&r=0",
      Price: "$30",
    },
    {
      name: "Jeans",
      imgii: "https://th.bing.com/th/id/OIP.DTt-H0gKJDYX6JtC19VcPQAAAA?pid=ImgDet&w=458&h=550&rs=1",
      Price: "$50",
    },
    {
      name: "Backpack",
      imgii: "https://th.bing.com/th/id/R.27d0a0ac47062facba9c77c946aac995?rik=z6GhS6FmTTEOhQ&pid=ImgRaw&r=0",
      Price: "$70",
    },
    // Add more items here
    {
      name: "Sneakers",
      imgii: "https://th.bing.com/th/id/R.760ffaf8ba0e3be9b49dab1e10df945c?rik=BjwMmHk2F6Mzgw&pid=ImgRaw&r=0",
      Price: "$90",
    },
    {
      name: "Dress",
      imgii: "https://th.bing.com/th/id/R.f4a0e904434167f221df7dae720b8cc2?rik=%2bdS4%2bW0NuJQ5XA&pid=ImgRaw&r=0",
      Price: "$60",
    },
    {
      name: "Guitar",
      imgii: "https://th.bing.com/th/id/OIP.Ubns3Ko-JjDTcbFTrk0kqQHaG_?pid=ImgDet&rs=1",
      Price: "$300",
    },
    {
      name: "Headphones",
      imgii: "https://th.bing.com/th/id/R.b99d98dadb2c162f00b605ccefd7d679?rik=Hem1hW7teHgbtw&pid=ImgRaw&r=0",
      Price: "$40",
    },
  ]);
  

  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList product={product} />} />
        <Route path="/item/:itemId" element={<ItemDetail product={product} />} />
      </Routes>
    </Router>
  )
}

export default App;