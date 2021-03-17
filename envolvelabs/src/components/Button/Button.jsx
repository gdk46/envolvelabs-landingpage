import React from 'react'
import './Button.css'

export const Button = props => (
   <button className="btn btn-lg btn-otl btn-primary">    
    {props.label}
   </button>
)


export default Button