// @ts-check

import { useState,useEffect } from "react";
import BreedsSelect  from "./BreedsSelect.jsx";



export const DogListContainer = () => {
  const [breeds,setBreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState("");
  const [dropdownImg,setDropdownImg] = useState([]);

  useEffect(() => {
    async function getList(){
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const list = await response.json();
      setBreeds(Object.keys(list.message));
    }
    getList()
  },[])
  
  async function DropdownImg(){
    const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`); 
    const img = await response.json();
    const imgs = Array.isArray(img.message) ? img.message : [img.message];
    setDropdownImg(imgs);
  }

  return(
    <>
  <div style={{display:"flex", alignItems:"center",gap:"10px"}}>
  <BreedsSelect
    breeds={breeds}
    selectedBreed={selectedBreed}
    onChange={setSelectedBreed}
  />
  <button onClick={DropdownImg}>表示</button>
  </div>
  <div>
    {dropdownImg.map((url,i) => (
      <img key={i} src={url} alt={selectedBreed} width={150} />
    ))}
  </div>
  </>
  );
};

export default DogListContainer
