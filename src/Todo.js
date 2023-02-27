import { useState } from "react";

function Todo() {
  const [job , setJob] = useState('')
  const [jobs , setJobs] = useState(() => {
    const storageJobs =  JSON.parse(localStorage.getItem('jobs') ?? [])
    return storageJobs
  })
  const randGift = ()=>{
    const index = Math.floor(Math.random()*gifts.length)
    setGift(gifts[index]);
  }
  const handerSubmit = ()=>{
      setJobs(prev => {
        const newJobs = [...prev,job] 

        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs',jsonJobs)

        return newJobs
      })
      setJob('')
  }

  return (
    <div className="App" style={{padding:30}}>
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handerSubmit}>Thêm</button>
      <ul>
        {
          jobs.map((job , index)=>(
              <li key={index}>{job}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default Todo;
