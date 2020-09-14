import axios from 'axios';


export const GETTODOS = async () => {
       const result = await axios.get(`http://localhost:1337/to-dos`)
            .then(res => {
                const todos = res.data;
                return todos
            })
            return result
}


