 const reactHeading = React.createElement(
  "h2",
  {
    className: "rhd",
    id: "rtH",
    style: {
      color: "#ffffff", // white text
      backgroundColor: "#27ae60", // green
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "10px"
    }
  },
  "Hello React"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
