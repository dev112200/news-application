import React from 'react'
import style from './Home.module.css'


export default function Home() {
  return (
    <div className={style.home}>
        <div className={style.left}>
            <img src="src/assets/pop.png" alt="image" style={{height:"80%", width:"90%"}} />
            <h3>Stay informed and up-to-date with the latest headlines and breaking news from around the world, all in one place! </h3>
        </div>
        <img className={style.right} src="src/assets/paper.png" alt="image" />
    </div>
  )
}
