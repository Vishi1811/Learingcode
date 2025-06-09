 /* React With JSX*/
        const jsxheading = (
        <h2 style={{ backgroundColor: "#282c34", color: "#61dafb", padding: "10px", borderRadius: "8px" }} 
       
        >
         Hello JSX  <p>this is created by jsx</p>
        </h2>
);
        ReactDOM.createRoot(document.getElementById("jsxRoot")).render(jsxheading);

/*-------------------------- react fregment*------------------------/
/* It a feature in react which allow to group multiple element without adding extra node to DOM 
<reactfreagment>
        <h1></h1>
        <p></p>
        <h2></h2>
</reactfreagment>
Or other way of wrinting this 
<>
        <h1></h1>
        <p></p>
        <h2></h2>
</>
*/
const rcf = (
  <React.Fragment>
    <div style={{ backgroundColor: "#34495e", color: "#ecf0f1", padding: "10px", borderRadius: "8px" }}>
        <h2 >
      React Fragment
    </h2>
    <p >
      It's a feature in React which allows you to group multiple elements
      without adding extra nodes to the DOM.
    </p>
    </div>
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("freagmentRoot")).render(rcf);

