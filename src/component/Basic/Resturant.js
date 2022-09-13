import React, { useState } from 'react'
import "./style.css";
import menu from "./manuApi";
import MenuCard from './menuCard';
import Navbar from './Navbar';


// Spered operator use :Get unique data, Using new set: set the new data (DO not Repet just Unique)
const uniqueData = [...new Set(menu.map((curElement) => {
  return curElement.category;
    })
    ),
    "All",
  ]
console.log(uniqueData);

// Use State Hooks use : All data get and Hold ,usestate return two array element 
const Resturant = () => {
  const [manuData, setmenuData] = useState(menu);
  const [menuList] = useState(uniqueData);   

  // Use filter: Current data flitering and get specipe data

  const filterItem = (menuDataItem) => {
    if(menuDataItem==="All"){
      setmenuData(menu)
      return;
    }

    const updatedList = menu.filter((curElement) => {
      return curElement.category === menuDataItem;    
    })
    setmenuData(updatedList);
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard manuData={manuData} />
    </>

  );
};

export default Resturant;
