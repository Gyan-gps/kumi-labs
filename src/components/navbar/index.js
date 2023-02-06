import { Box } from '@mui/material'
import React from 'react'

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
  return (
    <Box sx={{height:{md:"90vh",sm:"40px"},isplay:'flex',flexDirection:{sm:"column"}, width:{md:"20%",sm:"100%"},overflowY:{md:"scroll",sm:"none"},overflowX:{md:'none',sm:'scroll'}}}>
      {/* <div> */}
        {
            navtext.map((text,i)=>{
                return<div className="navbar-list" key={i.toString()} id={text}>
                    <a href={"#"+text.toLowerCase()}>{text}</a>
                </div>
            })
        }
      {/* </div> */}
      {/* <div>Cart</div> */}
    </Box>
  )
}

export default Navbar



