import React ,{ useState } from 'react'
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
   ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),
"All",
];

const Restaurant = () => {
    const [menuData, setMenudata] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        
        if(category ==="All"){
          return setMenudata(Menu);
        }
        const updateList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenudata(updateList);
    };
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
       <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
