import React from "react";
function Home(props){
    console.log('home props',props.data )
    return(
        <div>
           
        <h1>Home Component</h1>
        {/* <span>{props.data.length}</span> */}
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.apple.com/lae/iphone/home/images/meta/iphone__btp62hy2cbea_og.png" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                 <button 
                onClick={
                    ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    }
                    >
                    Add To Cart</button> 
                    <button 
                onClick={
                    ()=>{props.removeToCartHandler({})}
                    }
                    >
                    Remove To Cart</button> 
            </div>
        </div>
    </div>
    )
}
export default Home;