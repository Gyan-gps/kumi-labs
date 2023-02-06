import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const navtext = ["Produce",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
    "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Diary & Eggs",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
   "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood"
]

const Navbar = () => {

  const [highlight,setHighlight] = useState("produce");

  useEffect(()=>{
    let sections=document.getElementsByTagName("section");
    window.addEventListener("scroll",(e)=>{
      let scrollY = window.pageYOffset;
      for(let current of sections){
          const sectionHeight = current.offsetHeight;
          let sectionTop = current.offsetTop - 50;
          let sectionId = current.id;
  
          if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            setHighlight(sectionId);
          }
        }
      
    })
  },[])
  return (
    <div className='side-nav' >
      <Box sx={{display:"flex",flexDirection:{xs:"row",md:"column"}, overflowY:{xs:"scroll",md:"none"}}}>
        {
            navtext.map((text,i)=>{
                return<div className="navbar-list" key={i.toString()} id={text} style={{backgroundColor:highlight===text.toLowerCase() ? "#5DA9E9":"",color:highlight===text.toLowerCase() ? "white":"black"}}>
                    <a href={"#"+text.toLowerCase()}>{text}</a>
                </div>
            })
        }
      </Box>
      {/* <div>Cart</div> */}
    </div>
  )
}

export default Navbar



