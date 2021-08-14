import React from "react";
import banner1 from "./banner1.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img src={banner1} alt="" className="home__banner" />
      <div className="home__product">
        <Product
          id={1}
          title="smart clock: powered with AI"
          price={900.9}
          rating={5}
          image={product1}
        />
        <Product
          id={2}
          title="LG radical cooker"
          price={451.95}
          rating={3}
          image={product2}
        />
      </div>
      <div className="home__product">
        <Product
          id={1}
          title="gamepad with 3g stable carrier illustration above average, quick setup, in different colors"
          price={900.9}
          rating={5}
          image={product3}
        />
        <Product
          id={2}
          title="samsung galaxy note 4:Android, 5000mah 6.3inch screen, waterproof"
          price={451.95}
          rating={4}
          image={product6}
        />
        <Product
          id={2}
          title="baby carrire, trusted"
          price={451.95}
          rating={3}
          image={product5}
        />
      </div>
      <div className="home__product">
        <Product
          id={1}
          title="dove moisturizer"
          price={900.9}
          rating={5}
          image={product7}
        />
      </div>
    </div>
  );
}

export default Home;
