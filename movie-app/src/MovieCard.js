import React from "react";
class MovieCard extends React.Component{
    constructor(){
        super();
        this.state={
            titile:"The Avengers",
            plot:"The Avengers is a superhero action film where Earth's mightiest heroes team up to save the world from an alien invasion led by Loki.",
            price:599,
            rating:9.2,
            star:0.0,
            fav:true,
            cart:true
        }
    }
    addStar = () => {
        this.setState(prevState => {
            if (prevState.star < 5) {
            return { star: prevState.star + 0.5 };
            }
            return null; // nothing changes
        });
    }
    decstar=()=>{
        this.setState(prevState=>{
            if(prevState.star>0)
                return {star: prevState.star - 0.5};
            return null;
        });

    }
    handlefav=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    handleCart=()=>{
        this.setState(
            {
                cart:!this.state.cart
            }
        )
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
                                    onClick={this.decstar}
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
                                    <span className="starCount">{this.state.star.toFixed(1)}</span>
                                    </div>
                              <button className={this.state.fav?"favourite-btn":"unfavourite-btn"}
                              onClick={this.handlefav}>{this.state.fav?"favourite":"unfavourite"}</button>
                              <button className={this.state.cart?"cart-btn":"remove-crt"}
                              onClick={this.handleCart}
                              >{this.state.cart?"Add to cart":"Remove from cart"}</button>
                           </div>

                    </div>
                </div>
            </div>
            
        )
    }
}
export default MovieCard;