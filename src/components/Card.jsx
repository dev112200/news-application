import React from "react";
import style from "./Card.module.css";
export default function Card({ data }) {
  console.log(data);
  return (
    <>
      {data.map((value, index) => {
        if(!value.urlToImage){
          return null
        }else{
          return (
            <div className={style.card}>
              <img
                src={value.urlToImage}
                alt="img"
                style={{ height: "50%", width: "100%" }}
              />
              <h4>{value.title}</h4>
              <button
                style={{
                  cursor: "pointer",
                  color: "blue",
                  border: "none",
                  backgroundColor: "white",
                }}
                onClick={()=>window.open(value.url)}
              >
                Read more
              </button>
            </div>
          );
        }
      })}   
    </>
  );
}
