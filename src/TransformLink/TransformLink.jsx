import { useState } from "react";
import "./TransformLink.css"
import { Link } from "react-router-dom";

export default function TransformLink({children}){
  return (
    <div className='button-container'>
      <Link className="transform" to="/About" >{children}</Link>
    </div>);
  
}