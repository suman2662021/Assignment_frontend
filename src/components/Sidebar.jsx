import React, { useState } from 'react';
import {
    FaPlus,
    FaBars,
    FaEdit,
    FaLinkedinIn,
    FaGithub,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[

        {
            path:"/add",
            name:"Add",
            icon:<FaPlus/>
        },
        {
            path:"/edit",
            name:"Edit",
            icon:<FaEdit/>
        },
    ]
    return (
        <>
        <div className="container" style={{marginLeft:"0",padding:"0px",top:"0",bottom:"0",position:"fixed"}}>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Suman</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" style={{textDecoration:"none"}} activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none",textDecoration:"none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{overflowY:"scroll"}}>{children}</main>
        </div>
        <div style={{backgroundColor:"black",color:"white",left:"0",right:"0",textAlign:"center",bottom:"0",position:"absolute"}}>
        <span>to visit my website <a target="__blank" href="https://suman2662021-github-io.vercel.app/">click here</a></span>
        <a target="__blank" href="https://www.linkedin.com/in/suman-choubey-630949219/"><span style={{marginLeft:"10px",marginRight:"10px"}}><FaLinkedinIn/></span></a>
        <a target="__blank" href="https://github.com/suman2662021"><span><FaGithub/></span></a>
        </div>
        </>
    );
};

export default Sidebar;