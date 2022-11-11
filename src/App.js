import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([])
  const addToCart = (el) => {
    setCart([...cart, el])
  }
  console.log(price)
  const cartItems = cart.map((el)=> (
    <div key = {el.id}>
      {`${el.name}: $${el.price}`}
    </div>
  ));

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setPrice(totalVal);
  }

  useEffect(() => {
    total();
  }, [cart]);

  return (
    <div className="App">
      <h1 class = "head-bakery">My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p class = "tab">
          {item.image}<br/> 
          <h3>{item.name}</h3>
          {item.description}<br/><br/>
          ${item.price}
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </p> // replace with BakeryItem component
      ))}
      <div class = "cart">
        <h2>My Cart</h2>
        {cartItems}
        <h3>Total Price:{price}</h3>
      </div>
    </div>
  );
}

export default App;
