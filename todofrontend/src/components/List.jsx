import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './list.css'


const List = (props) => {
    
    const [todos, setToDos] = useState([])

    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:1337/to-dos"
      );
      setToDos(result.data);
    };

    const handleRemove = async(e) =>{
      await axios.delete(`http://localhost:1337/to-dos/${e.id}`)
      .then(res => {console.log(res)
        fetchData()})
    }

    const handlePut = async(e) =>{
      await axios.put(`http://localhost:1337/to-dos/${e.id}`, { ...e, Completed: !e.Completed})
      .then(res => {console.log(res)
        fetchData()})
    }

    useEffect(() => {
      fetchData();
  }, [props.update]);

    return (

        todos.map((e) => {
            return (
                <div className={e.Completed ? 'background-green' : 'background-red'} key={e.id}>
                <h1> {e.id}, { e.Title}, {e.Description}</h1>

              {e.Completed ? <button onClick={ () => handlePut(e)}>Incomplete</button> : <button onClick={ () => handlePut(e)}>Complete</button>}

                
                <button onClick={ () => handleRemove(e)}>Delete</button>
                </div>
            )
        })

    )

}

export default List