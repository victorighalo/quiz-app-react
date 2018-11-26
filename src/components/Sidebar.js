import React, { Component } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaTachometerAlt } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaChartArea } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaGlobeAfrica } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
const SidemenuContainer = styled.div`
  background-color: #fff;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top:30px;
  -webkit-box-shadow: 4px 5px 30px -4px rgba(0,0,0,0.11);
-moz-box-shadow: 4px 5px 30px -4px rgba(0,0,0,0.11);
box-shadow: 4px 5px 30px -4px rgba(0,0,0,0.11);

  a{
    display:block;
    color:#8CA0B3;
    text-decoration:none;
padding:20px 25px;
font-size:18px;
transition: all 0.2s ease-in-out
  }
  a:hover{

    color:#2D74DA;
border-left:4px solid #2D74DA;
text-decoration:none
  }
  a:hover .navIcons{
    color:#2D74DA;
  }

  .navIcons{
    vertical-align: text-bottom;
    font-size:22px; 
    color:#E6EBEF;
    cursor:pointer;
}

a span{
  padding: 5px 15px
}
`;
export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="col-sm-2 sidenav visible_side_nav"
        style={{height: '100vh'}}
      >
        <SidemenuContainer>
          <nav>
            <a href="#">
            <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaTachometerAlt/>
        </IconContext.Provider>
        <span>Dashboard</span></a>
            <a href="#">
            <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaMoneyBillAlt/>
        </IconContext.Provider>
        <span>Sales</span>
        </a>
            <a href="#">
            <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaChartArea/>
        </IconContext.Provider>
        <span>Expenses</span>
            </a>
            <a href="#">           
             <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaShoppingCart/>
        </IconContext.Provider>
        <span>Items</span>
        </a>
        <a href="#">           
             <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaUserFriends/>
        </IconContext.Provider>
        <span>Clients</span>
        </a>
        <a href="#">           
             <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaGlobeAfrica/>
        </IconContext.Provider>
        <span>Campaigns</span>
        </a>
        <a href="#">           
             <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaCog/>
        </IconContext.Provider>
        <span>Settings</span>
        </a>
        <a href="#">           
             <IconContext.Provider value={{ 
              className: "navIcons"
       }}>
        <FaCommentAlt/>
        </IconContext.Provider>
        <span>Feeback</span>
        </a>
            </nav>
        </SidemenuContainer>
      </div>
    );
  }
}
