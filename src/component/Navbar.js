import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import '../App.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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

const navigate = useNavigate()

  const goToLogin=()=> {
  navigate("/login")
  }

  const search = (event) => {
    if(event.key === "Enter") {
      //입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }

  }
    return (
    <div>
        <div className='Login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div> 로그인 </div>
        </div>

        <div className='logo'>
          <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgJkRQ2NZ-_qtLvio9dmys-jpy9JCAKNmDA&s' />
        </div>

        <div>
            <ul className='Menu-list'>
              {menuList.map(menu=><li>{menu}</li>)}
            </ul>

          <div className='input-search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='검색하기' onkeypress={(event)=> search(event)}/>
          </div>
        </div>
    </div>
  )
};

export default Navbar;