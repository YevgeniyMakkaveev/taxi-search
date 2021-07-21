import React, { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TableMaker from './maker';
import './table.css'


const CustomTable = () =>{
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
 fetch("https://city-mobil.ru/api/cars")
  .then(res => res.json())
  .then(
   (result) => {
    console.log(result)
    setIsLoaded(true);
    setItems(result.cars);
   },
  )
}, [])
let innerId=0
const getIt = (items) => {
 return {
  comfy: items.tariffs["Комфорт"] ? items.tariffs["Комфорт"].year : " ",
  stand: items.tariffs["Стандарт"] ? items.tariffs["Стандарт"].year : " ",
  comfyPlus: items.tariffs["Комфорт+"] ? items.tariffs["Комфорт+"].year : " ",
  biz: items.tariffs["Бизнес"] ? items.tariffs["Бизнес"].year : " ",
  eco: items.tariffs["Эконом"] ? items.tariffs["Эконом"].year : " ",
  mini: items.tariffs["Минивен"] ? items.tariffs["Минивен"].year : " ",
  light: items.tariffs["Лайт"] ? items.tariffs["Лайт"].year : " ",
  markModel: `${items.mark} ${items.model}`,
  id: innerId++
 }
}


if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else{ 
 
   const items2=items.map(getIt)
  
   return(
<div className="left">
 
<TableMaker key={items2.id} data={items2}/>
 
</div>
   )

}}
export default CustomTable
