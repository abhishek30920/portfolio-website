import axios from "axios";


export function fetchPhotos({page, setPhotos, photos, setLoading}) {
    // setLoading(true);
    let URL = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    axios.get(URL)
    .then((val)=>{
        setPhotos([...photos, val.data]);
        // setLoading(false);
    })
    .catch((err)=>{
        console.log(err);
    })

}

//Intersection Observer - It describes the API used to get the position of the DOM element from the target element .
// It gets the pre-loading and deferred status of the element from the DOM content