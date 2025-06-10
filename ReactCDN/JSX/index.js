function App(){
    let name="Vishal";
    let age=23;
    let demo=null;
    return (
       <>
            <h1> Hello {name} lets learn JSX</h1>
            <h2> Your age is:{age}</h2>
            <p> lets try to render null:{demo}</p>
       </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);