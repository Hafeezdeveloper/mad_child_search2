import axios from "axios";

let apiHandle = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

let Gets = (endPoint) =>{
 return   apiHandle.get(endPoint)
}

export default Gets;
