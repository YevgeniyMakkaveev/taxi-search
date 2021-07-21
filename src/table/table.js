import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './table.css'


const CustomTable = () =>{
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
const [selectModel, setSelect]=useState('')

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
  stand: items.tariffs["Cтандарт"] ? items.tariffs["Cтандарт"].year : " ",
  comfyPlus: items.tariffs["Комфорт+"] ? items.tariffs["Комфорт+"].year : " ",
  biz: items.tariffs["Бизнес"] ? items.tariffs["Бизнес"].year : " ",
  eco: items.tariffs["Эконом"] ? items.tariffs["Эконом"].year : " ",
  mini: items.tariffs["Минивен"] ? items.tariffs["Минивен"].year : " ",
  markModel: `${items.mark} ${items.model}`,
  id: innerId++
 }
}
const tableEvents =  {
    onClick: (e, column, columnIndex, row, rowIndex) => {
  
      let test=getTarif(row, columnIndex)
      
      if(test>1){setSelect(`${row.markModel} ${test} `)}
      
      console.log(`${test} ${row.markModel}`)
       }}

  const getTarif=(row,colN)=>{
    switch(colN){
      case 1: return row.comfy
      case 2: return row.comfyPlus
      case 3: return row.biz
      case 4: return row.eco
      case 5: return row.mini
      default: return null
    }
  }

const columns = [{
 dataField: 'markModel',
 text: 'Марка и модель',
 sort: true,
 
}, {
 dataField: 'comfy',
 text: 'Комфорт',
 sort: true,
 events: tableEvents
}, {
 dataField: 'comfyPlus',
 text: 'Комфорт+',
 sort: true,
 events: tableEvents
}, {
 dataField: 'biz',
 text: 'Бизнес',
 sort: true,
 events: tableEvents
}, {
 dataField: 'eco',
 text: 'Эконом',
 sort: true,
 events: tableEvents
}, {
 dataField: 'mini',
 text: 'Минивен',
 sort: true,
 events: tableEvents
}];

const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
<div class="input-group mb-3">
  <input type="text" class="form-control" onChange={handleClick}  ref={ n => input = n } placeholder="Поиск машины" aria-label="Car search" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" onClick={ handleClick } id="button-addon2">Поиск</button>
  </div>
</div>

  );
};
;

if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else{ 
 
   const items2=items.slice(0,40).map(getIt)
   const selectdCar = selectModel
   return(
<div className="left">
<div>
  <p>{selectdCar}</p>
</div>
 
<ToolkitProvider
  keyField="id"
  data={items2}
  columns={ columns }
  
  search
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <MySearch { ...props.searchProps } />
        <hr />
        <BootstrapTable
        
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

</div>
   )

}}
export default CustomTable
