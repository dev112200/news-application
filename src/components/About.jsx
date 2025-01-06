import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <div className={style.about}>
        <div className={style.left}>
            <p><b>NewsNow</b> is designed to bring the latest news to your fingertips with a clean, user-friendly interface. The app allows you to access news stories from a variety of sources, including local, national, and international outlets, across multiple categories such as politics, technology, sports, entertainment, health, and more.</p>
            <h3>Key Features:</h3>
            <p><b>Real-Time Updates:</b> Get live updates for breaking news events as they unfold.</p><br/>
            <p><b>Category Selection: </b>Browse through multiple categories like sports, politics, entertainment, and health.</p><br/>
            <p><b>Personalized Feed: </b> Customize your news feed based on your interests and browsing history.</p><br/>
            <p><b>Interactive Design: </b>A modern, easy-to-navigate interface for a seamless reading experience.</p>
        </div>
        <img className={style.right} src="src/assets/aboutimage.png" alt="image" />
    </div>
  )
}
