import React from "react";
class MovieCard extends React.Component{
    constructor(){
        super();
        this.state={
            titile:"The Avengers",
            plot:"The Avengers is a superhero action film where Earth's mightiest heroes team up to save the world from an alien invasion led by Loki.",
            price:599,
            rating:9.2
        }
    }
    addStar=()=>{
        console.log("start Added");
    }
    render(){
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Image" src="/image.png"></img>

                    </div>
                    <div className="right">
                        <div className="title">{this.state.titile}</div>
                         <div className="plot">{this.state.plot}</div>
                          <div className="price">Rs.{this.state.price}</div>

                           <div className="footer">
                             <div className="rating">{this.state.rating}</div>
                              <div className="star-dis">
                                    <img className="str-btn"
                                    alt="Minus"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                                    />
                                    <img className="stars"
                                    alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                                    />
                                    <img className="str-btn"
                                    alt="plus"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" 
                                    onClick={this.addStar}
                                    />
                                    <span className="starCount">0</span>
                                    </div>
                              <button className="favourite-btn">favourite</button>
                              <button className="cart-btn">Add to cart</button>
                           </div>

                    </div>
                </div>
            </div>
            
        )
    }
}
export default MovieCard;