import React, { useState } from 'react'
import axios from 'axios'

const ToDo = (props) => {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
          Title: Title,
          Description: Description,
          Completed:false
        };
        axios
          .post("http://localhost:1337/to-dos", data)
          .then(res => {console.log(res)
            setTitle("");
            setDescription("");
            props.changeUpdate()
        })
          .catch(err => console.log(err));
    
         
      };
    
    return (
       <form className="post" onSubmit={handleSubmit}>
           <input type="text" placeholder="Title" value={Title}
            onChange={(e) => {setTitle(e.target.value)}}></input>
           <input type="text" placeholder="Description" value={Description}
            onChange={(e) => {setDescription(e.target.value)}}></input>
           <button type="submit">Add ToDo</button>
       </form>
    )
}

export default ToDo
