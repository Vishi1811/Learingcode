import React from "react";
class Student extends React.Component{
   render(){
    const { name, mark } = this.props;
    return (
        <>
        <h1>Hello {name}</h1>
        <p>Your marks are {mark}</p>
        </>
    );
    }
}
export default Student;