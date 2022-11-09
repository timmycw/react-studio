import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCost(totalVal);
  };
  
  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="Gallery">
       {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      <div className="Container">
        <BakeryItem image={item.image}></BakeryItem>
          <div className="Info">
            <h3>
            {item.name}
            </h3>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      </div>

      <div className="Cart">
        <h2>Cart</h2>
          {cart.map((el) => 
            <p>
              <b>{el.name + " "}</b>
              
              {el.price}
            </p>
        )}

        <h3>Total</h3>
            ${Math.round(100*cost)/100}
      </div>
    </div>
  );
}

export default App;
