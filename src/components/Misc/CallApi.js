import axios from "axios";

let makeRandomAPICall = () => {
    axios.post('https://reqres.in/api/users?page=2',dataObject, headerObject)
    .then((val)=>{
        console.log(val.data.content);
    })
}

export {
    makeRandomAPICall
}