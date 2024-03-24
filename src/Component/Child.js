import React from 'react'
import styles from "./style.module.css"
export default function Child(props) {
  return (
    <div className={styles.childContainer}>
        <p>Full Name: {props.data.fname} {props.data.lname}</p>
        Child</div>
  )
}
