import React from 'react'
import styles from "./style.module.css"
export default function Child(props) {
    console.log(props.data)
  return (
    <div className={styles.childContainer}>
        <p>Full Name: {props.data.fname} {props.data.lname}</p>
       </div>
  )
}
