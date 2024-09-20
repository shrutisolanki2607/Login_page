import React from 'react'
import '../assest/global.css'

function Input({label,type='text',onChange,value}) {
  return (
    <div>
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange}/>
        </div>
    </div>
  )
}

export default Input