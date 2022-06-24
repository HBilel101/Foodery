import React from 'react';
import './Recipe.css'

const Recipe =  (props)=>{
return(
<div className="flex justify-center my-5  text-center sm:mx-20" >
  <a className="flex flex-col md:flex-row md:max-w-2xl rounded-lg mx-4 bg-white shadow-lg samesize card" href={props.youtube} target="_blank" rel="noopener noreferrer">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src= {props.src} alt="" />
    <div className="p-7 flex flex-col justify-start">
      <h4 className="text-gray-900 text-xl font-medium mb-2">{props.name}</h4>
      <p className="text-gray-700 text-base mb-4 text-scroll">
       {props.instruction}
      </p>
    </div>
  </a>
</div>



)
}

export default Recipe ;