import { useState } from "react";

const gifts = [
  'CPU i9',
  'Ram 32GB',
  'Keyboard'
]


function Gift() {
  const [gift,setGift] = useState()

  const randGift = ()=>{
      const index = Math.floor(Math.random()*gifts.length)
      setGift(gifts[index]);
    }

  return (
    <div className="App" style={{padding:30}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randGift}>Lấy thưởng</button>
    </div>
  );
}

export default Gift;
