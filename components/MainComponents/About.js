import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
function About({data}) {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div id="about" className="text-white px-10 mx-auto ">
      <div className="text-center text-2xl font-bold">Despre Noi</div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <AiOutlineClose
          className="text-white fixed top-[10px] right-[10px]  p-[5px] cursor-pointer"
          size={35}
          onClick={() => setModel(false)}
        />
      </div>
      <div className="gallery my-10">
        {data.map((item) => (
          <div key={item.id} className="pics" onClick={() => getImg(item.image)}>
            <img src={item.image} style={{width: "100%"}} alt="aboutus" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
