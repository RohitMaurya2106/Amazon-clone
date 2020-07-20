import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        {/* Product id,title,price,rate,image */}
        <div className="home_row">
        <Product id="12321341" title="The lean Startup: How constant inovation creates radically successful businesses paperback" price={11.96} rating={5} image="https://images.unsplash.com/photo-1592161125047-58feeba8de3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <Product id="12321341" title="the lean Startup" price={11.96} rating={1} image="https://images.unsplash.com/photo-1592161125047-58feeba8de3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

        </div>

        <div className="home_row">
        <Product id="12321341" title="The lean Startup: How constant inovation creates radically successful businesses paperback" price={11.96} rating={2} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
        <Product id="12321341" title="The lean Startup: How constant inovation creates radically successful businesses paperback" price={11.96} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
        <Product id="12321341" title="The lean Startup: How constant inovation creates radically successful businesses paperback" price={11.96} rating={5} image="https://images.unsplash.com/photo-1592161125047-58feeba8de3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
        
        <div className="home_row">
        <Product id="12321341" title="The lean Startup: How constant inovation creates radically successful businesses paperback" price={11.96} rating={5} image="https://images.unsplash.com/photo-1592161125047-58feeba8de3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
        {/* Product */}
        </div>
    );
}

export default Home;
