import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import '../App.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",  
  ];

    return (
    <div>
        <div className='Login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div> 로그인 </div>
        </div>

        <div>
          <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgJkRQ2NZ-_qtLvio9dmys-jpy9JCAKNmDA&s' />
        </div>

        <div>
            <ul className='Menu-list'>
              {menuList.map(menu=><li>{menu}</li>)}
            </ul>

          <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' />
          </div>
        </div>
    </div>
  )
};

export default Navbar;