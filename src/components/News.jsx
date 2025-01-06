import React,{useEffect, useState} from 'react'
import style from './News.module.css'
import Card from './Card'


export default function News() {
  const[useData, setuseData]=useState(null);
  const[Search, setSearch]=useState("india");

  function btnInput(e){
    setSearch(e.target.value)
  }
  function searchValue(e){
    setSearch(e.target.value)
  }
  const api_key = '826ee31f51a24e60990a87442ba0cfb0'
  async function fetching(){
    const api =await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${api_key}`);
    const jsondata = await api.json();
    setuseData(jsondata.articles)
  }
  useEffect(()=>{
    fetching()
  },[])
  return (
    <div className={style.news}>
        <div className={style.upper}>
            <button onClick={btnInput} value="sports" className={style.btnstyle}>sports</button>
            <button onClick={btnInput} value="technology"className={style.btnstyle}>technology</button>
            <button onClick={btnInput} value="politics" className={style.btnstyle}>politics</button>
            <button onClick={btnInput} value="entertainment" className={style.btnstyle}> entertainment</button>
            <div className={style.search}>
                <input value={Search} type="text" placeholder='search here' style={{height:"100%", width:"75%", padding:"0 5px"}} onChange={searchValue} />
                <button style={{height:"100%", width:"calc(100% - 75%)", cursor:"pointer"}} onClick={fetching}>search</button>
            </div>
        </div>
        <div className={style.bottom}>
          {useData? <Card data = {useData}/> : null}  
        </div>
    </div>
  )
}
