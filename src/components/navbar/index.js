import React, { useEffect, useState } from 'react'

const navtext = [
  "Produce",
  "Prepared foods",
  "Canned foods & Soups",
  "Bakery",
  "Diary & Eggs",
  "Frozen",
  "Meat & Seafood",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
]

const Navbar = () => {

  const [highlight,setHighlight] = useState("produce");

  useEffect(()=>{
    
    let sections=document.getElementsByTagName("section");
    window.addEventListener("scroll",(e)=>{
      let scrollY = window.pageYOffset;
      for(let current of sections){
          const sectionHeight = current.offsetHeight;
          let sectionTop = current.offsetTop - 180;
          let sectionId = current.id;
  
          if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            setHighlight(sectionId);
          }
        }
      
    })
  },[])
  return (
      <div className='nav-list'>
        {
            navtext.map((text,i)=>{
                return<div className="navbar-list" key={i.toString()} id={text} style={{backgroundColor:highlight===text.toLowerCase() ? "#5DA9E9":"",color:highlight===text.toLowerCase() ? "white":"black"}}>
                    <a href={"#"+text.toLowerCase()}>{text}</a>
                </div>
            })
        }
      </div>
  )
}

export default Navbar



