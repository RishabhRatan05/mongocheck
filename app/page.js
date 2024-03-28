"use client"
import { useEffect, useState } from "react";
import Taks from "./Taks";


export default function Home() {
  const [tasks, setTasks] = useState([])
  const [title,setTitle] = useState("")

  const handleSubmit= async (e)=>{
    e.preventDefault()

    //creating task
    try {

      await fetch(`/api/makeTask`,{
        title
      })


      const res = await fetch("api/showTask")

      const data = res.json()

      console.log(`This is the data ${data}`)
      setTasks(data.titles)
      
    } catch (error) {
      console.error(error)
    }
    

  }

  return (
    <>
    <h1>Mongo Check</h1>
    <form onSubmit={handleSubmit}>
      <h2>Create Tasks</h2>
      <input type="text" placeholder="type task" value={title} onChange={e=>setTitle(e.target.value)}/>
      <button type="submit">+</button>
    </form>

    <section>
      {tasks?.map(t=>{
         return <Taks key={t._id} title={t.title}/>
      })}

    </section>


    </>
  );
}
