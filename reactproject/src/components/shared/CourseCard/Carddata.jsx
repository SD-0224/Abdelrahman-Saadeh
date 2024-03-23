import { useState , useEffect } from "react";
import { Card } from "./Card";

const apiInfo='https://tap-web-1.herokuapp.com/topics/list';

export function CardLoading(){
  const[allCards , setAllCards]=useState([]);

  useEffect(() =>{
    async function fetchCards(apiUrl=apiInfo){
      try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      setAllCards(data);
      }
      catch (error){
        console.error('error is' , error);
      }
     
    }
    fetchCards();
  },[])


  return(
    <>
    {allCards.map((course, index) => (
      <Card key={index} courses={course} />
    ))}
     </>
  )
}