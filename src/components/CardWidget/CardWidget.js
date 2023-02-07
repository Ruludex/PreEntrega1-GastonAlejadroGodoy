import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "./Style.css";

const CardWidget = () => {
  return (
    <>
      <h3>0</h3>   
      <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
    </>
  )
}

export default CardWidget