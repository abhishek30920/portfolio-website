import React from 'react';
import "./styles/CartFooter.css";

function CartFooter() {
  return (
    <section id="cart-footer-wrapper">
      <p>This is a full stack project made using React.js, Css, Node,js and Mongo DB. We have used functional react components. We have also used Context Api to track our cart data. Here, We can navigate through our page using react-router-dom without refreshing the page making it fast. Several RESTful APIs are written to fetch data from Mongo DB database. 
      </p>
      <section>
        <p>Name: Harshal</p>
        <p>College: BIT, Mesra</p>
        <p>Degree: Maths and Computing</p>
        <p>Year of passing: Jul, 2020</p>
        <p>Email: Abc@gmail.com</p>
        <p>Mobile: +911234567890</p>
        <p>Tech Stack: React.js, HTML, CSS, Javascript, PostgreSQL, MongoDb, AWS, Node.js</p>
      </section>
    </section>
  )
}

export default CartFooter