// @ts-check
import { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const [dogUrl,setDogUrl]=useState("https://images.dog.ceo/breeds/terrier-dandie/n02096437_3451.jpg");  
  
  async function fetchDogImage(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogUrl(data.message)
  }

  return (
  <>
  犬の画像を表示するサイトです。
  <DogImage imageUrl={dogUrl}/>
  <button className='button' onClick={fetchDogImage}>更新</button>
  </>
  )
}

export default Description
