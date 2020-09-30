import React from "react";
import "./Home.css";
import Product from "./Product";
import Mouse from "./images/iphoneXR.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood KMix stand Mixer for Baking,Stylish 
             Kitch ixer with K-beater,Dough Hook and Whisk 5 LiterGlasss Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={239.0}
            rating={4}
          />

          <Product
            id="49538094"
            title="Kenwood KMix stand Mixer for Baking,Stylish 
             Kitch ixer with K-beater,Dough Hook and Whisk 5 LiterGlasss Bowl"
            image={Mouse}
            price={239.0}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49038540"
            title="Samsung LCD fit watch for fitness and mobile direct notification"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            price={199.0}
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple IPad pro (12.1 inch wifi,128 GB silver 4th Generation )"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo 3rd generation smart speaker with Alexa charcoal fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LCD 49 inch Gaming Moniter Super Ultra Wide Dual WQHD 5120x1440"
            price={1094.48}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
