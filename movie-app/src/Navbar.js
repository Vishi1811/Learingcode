
import React from "react";
import style from './Navbar.module.css'; // ✅ correct import
// import styled from "styled-components";

// const Nav = styled.div`
//   height: 70px;
//  background: linear-gradient(170deg, #1bc059, #0d47a1);

//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
// `;

// const Title = styled.div`
//   font-size: 30px;
//   color: #fff;
//   font-weight: 600;
//   font-family: "Montserrat", sans-serif;
//   text-transform: uppercase;
//   margin-left: 20px;
//   &:hover{
//     color:blue;
//   }
// `;

// const CartContainer = styled.div`
//   position: relative;
//   cursor: pointer;
// `;

// const CartIcon = styled.img`
//   height: 48px;
//   margin-right: 20px;
// `;

// const CartCount = styled.span`
//   background: ${(props)=>props.color};
//   border-radius: 50%;
//   padding: 4px 8px;
//   position: absolute;
//   right: 10px;
//   top: -5px;
//   font-size: 12px;
//  visibility: ${(props) => (props.show) ? "visible" : "hidden"};

// `;


class Navbar extends React.Component {
  
  render() {
    const show = true; // or pass via props
   
    return (
      <div className={style.nav}>
        <div className={style.title}>Movie-App</div>
        <div className={style.cartContainer}>
          <img
            className={style.cartIcon}
            alt="cart-icon"
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
          />
          {show && (
            <span className={style.cartCount}>{this.props.cartCount}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;

// const styles={
//     nav:{
//         height:70,
//         background: "#4267b2",
//         display:"flex",
//         justifyContent:"space-between",
//         alignItems:"center",
//         position:"relative"
//     },
//     title:{
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: 600,
//     fontFamily: '"Montserrat", sans-serif',
//     textTransform: "uppercase",
//     marginLeft: 20
//   },
//   cartIconContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   }
// };