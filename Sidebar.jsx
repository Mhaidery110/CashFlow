import React, { useState } from "react";
import { FaTh,FaRegChartBar, FaUserAlt, FaShoppingBag, FaThList, FaSignOutAlt, FaBars } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

function Sidebar({children}){

    const [isOpen, setIsOpen] = useState(false)

     function toggle(){
        setIsOpen(!isOpen)
     }

const menuItem = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/sales",
        name: "Sales",
        icon: <FaSignOutAlt />
    },
    {
        path: "/expenses",
        name: "Expenses",
        icon: <FaRegChartBar />
    },
    {
        path: "/salesForm",
        name: "SalesForm",
        icon: <FaShoppingBag />
    },
    {
        path: "/expensesForm",
        name: "ExpensesForm",
        icon: <FaThList />
    }
 
]
    return <div className="container">
        <div style={{width:isOpen ? "250px" : "50px"}} className="sidebar">
            <div className="top-section">
                <h1 style={{display : isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft : isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
          { menuItem.map((item, index) =>(
                <NavLink to={item.path} key={index} 
                className="link" activeclassName="active">
                   <div className="icon">{item.icon}</div>
                   <div style={{display : isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                </NavLink>
            )
          )}       
        </div>
        <main className="main">{children}</main>
    </div>
}


export default Sidebar;