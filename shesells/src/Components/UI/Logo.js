import React, { useState } from 'react';
import Button from '../Utils/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-regular-svg-icons';
import Drawer from '../Utils/Drawer';
export default function Logo(){
    const [openDrawer, setDrawer] = useState("h-0");
    const [display, setDisplay] = useState("hidden");
    const handleDrawer = ()=> {
        if(openDrawer === "h-0") { 
            setDrawer("h-full");
        }
        else { 
            setDrawer("h-0")
        }
        console.log(openDrawer)
    }
    const handleDisplay=()=>{
        if(display === "hidden"){
            setDisplay("block")
        }
        else setDisplay("hidden")
    }
 return(
     <>
     <div className='w-screen h-40  flex items-center justify-center flex-wrap shadow-lg pb-5 bg-white'>
        <div className='w-1/5 mr-auto self-end flex justify-start gap-10 pl-20'>
        <Button change = {handleDrawer}>Shop <FontAwesomeIcon icon = {faArrowDown}/> </Button>
        <Button change = {handleDrawer}>Contact <FontAwesomeIcon icon = {faArrowDown}/></Button>
        </div>
         <img className='h-4/6' src ='./images/logo.svg'></img>
        <div className='w-1/5 ml-auto self-end flex justify-end gap-10 pr-20'>
            <Button><FontAwesomeIcon className = 'text-2xl' icon = {faMagnifyingGlass}/></Button>
            <Button><FontAwesomeIcon className = 'text-2xl' icon = {faUser}/></Button>
            <Button><FontAwesomeIcon className = 'text-2xl' icon = {faBagShopping}></FontAwesomeIcon></Button>
        </div>
     </div>
     <Drawer  effect = {openDrawer} changeDisplay = {display}>test</Drawer>
     </>
 );
}