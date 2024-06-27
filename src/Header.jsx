import React from 'react';
import './css/Header.css';
import { FaLaptopCode, FaDatabase, FaJava, FaHtml5 } from 'react-icons/fa';

function Header() {
  return (
    <div className='header'>
      <div className='title'>
        <FaLaptopCode className='icon' /> Udemy Kurslarım <FaLaptopCode className='icon' />
      </div>
      <div className='icons'>
        <FaJava className='icon' />
        <FaDatabase className='icon' />
        <FaHtml5 className='icon' />
      </div>
    </div>
  )
}

export default Header;
