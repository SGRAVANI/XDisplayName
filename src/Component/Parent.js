import React, { useState } from 'react'
import styles from "./style.module.css"
import Child from './Child';
export default function Parent() {
    let [ip,setIp]=useState({fname:"",lname:""})
    let [f,setF]=useState(false)
    function handleSubmit(e)
    {
    e.preventDefault();
    setF(true)
    console.log("data is submitted")
    }
    function handleChange(e){
        setIp((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

  return (
    <div>
    <form className={styles.container} onSubmit={handleSubmit}>
    <div className={styles.inputContainer}>
        <label htmlFor='fname'> First Name:</label>
        <input type="text" required name="fname" id="fname" onChange={handleChange} value={ip.fname}/>

    </div>
    <div className={styles.inputContainer}>
        <label htmlFor='lname'> Last Name:</label>
        <input type="text" required name="lname" id="lname" onChange={handleChange} value={ip.lname}/>

    </div>
    <div className={styles.btnContainer}>
        <button type="submit" >Submit</button>
    </div>
    </form>
    
   {f&& <Child data={ip} />}        
    </div>
  )
}
