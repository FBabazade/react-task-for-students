import React, { useEffect, useState } from "react";
import Card from "./Card";
import Img1 from "./Img/leopar.jpg";
import Img2 from "./Img/lion.jpg";
import Img3 from "./Img/wolf.jpg";
import Img4 from "./Img/leopar.jpg";
import Img5 from "./Img/lion.jpg";
import Img6 from "./Img/wolf.jpg";

function Home() {
  const [showImg, setShowImg] = useState(null);
  const data = [
    {
      url: Img1,
      id: 1,
    },
    {
      url: Img2,
      id: 2,
    },
    {
      url: Img3,
      id: 3,
    },
    {
      url: Img4,
      id: 4,
    },
    {
      url: Img5,
      id: 5,
    },
    {
      url: Img6,
      id: 6,
    },
  ];

  useEffect(()=>{
    const images = window.localStorage.getItem("myfoto");
    images &&  setShowImg(JSON.parse(images));
  },[])

  window.localStorage.removeItem("myfoto")
  window.localStorage.clear()
  const handleImg = (item) => {
    window.localStorage.setItem("myfoto", JSON.stringify(item));
    setShowImg(item);
  };

  return (
    <div className="home">
      {showImg && (
        <div className="display" style={{ height: "40vh", padding: "50px" }}>
          <img src={showImg.url} style={{ width: "450px" }} alt={showImg.id} />
        </div>
      )}

      <div className="row">
        {data.map((item, index) => {
          return (
            <Card
              handleImg={() => handleImg(item)}
              url={item.url}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
