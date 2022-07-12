import React,{useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';
import {useCartContext} from "./CartContext";

let background = ["https://img.freepik.com/free-vector/abstract-background_53876-43362.jpg?w=2000","https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=","https://previews.123rf.com/images/popovia/popovia1911/popovia191100026/134116900-abstract-colorful-background-design-background.jpg","https://img.freepik.com/free-vector/abstract-colorful-fluid-background_23-2148901720.jpg?w=2000","https://png.pngtree.com/thumb_back/fh260/background/20190831/pngtree-pastel-colorful-background-clouds-image_312444.jpg"];

function PopularCard({product}) {

  const {cartList, setCartList,} = useCartContext();
  const [random,setRandom] = useState(0);

  useEffect(() => {
      let rand = Math.round((Math.random()*10))%6;
      setRandom(rand);
  }, [random])
  
  const handleAddClick = () => {
    setCartList([...cartList,product])
  }

  return (
    <section style={{backgroundImage:`url(${background[random]})`, backgroundSize:"cover"}} id="popular-card-wrapper">
        <h1>{product.name}</h1>
        <p>Price:{product.price}</p>
        <Rating
        name="half-rating-read"
        value={product.rating}
        readOnly
      />
      <button onClick={handleAddClick}>Add To Cart</button>
    </section>
  )
}

export default PopularCard