import React, { useState, useEffect} from 'react';
import './styles.css';


export default function Component() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    })
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
console.log(show);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
      className='nav__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
      alt='Netflix Logo'/>

      <img 
      className='nav__avatar'
      src="https://img.icons8.com/doodle/32/000000/arrow-up-left-right.png"
      alt='Wisnu Cakra'
      />
    </div>
  )
}
