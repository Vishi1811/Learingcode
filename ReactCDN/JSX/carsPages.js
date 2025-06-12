const CarGallery = () => {
  const cars = [
    {
      name: "Hyundai Creta",
      price: 1099000,
      average: 16.8,
      image: "creta.png"
    },
    {
      name: "Tata Nexon",
      price: 829000,
      average: 17.4,
      image: "tataNexon.png"
    },
    {
      name: "Land Rover Defender",
      price: 9200000,
      average: 14.0,
      image: "Defener.jpg"
    },
    {
      name: "Mahindra Thar",
      price: 1399000,
      average: 15.2,
      image: "mahindraThar.png"
    },
    {
      name: "Mercedes G-Wagon",
      price: 25000000,
      average: 8.5,
      image: "GWagon.jpg"
    }
  ];

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const thTdStyle = {
    padding: "12px 16px",
    border: "1px solid #ddd",
    textAlign: "center",
    verticalAlign: "middle",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold"
  };

  const imgStyle = {
    width: "100%",
    maxWidth: "160px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px"
  };

  return (
    <>
      <style>
        {`
          .car-row:hover {
            background-color: #f2f2f2;
            transition: background-color 0.3s ease;
            cursor: pointer;
          }
        `}
      </style>
      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Car Information Table
        </h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price (₹)</th>
              <th style={thStyle}>Mileage (km/l)</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className="car-row">
                <td style={thTdStyle}>
                  <img src={car.image} alt={car.name} style={imgStyle} />
                </td>
                <td style={thTdStyle}>{car.name}</td>
                <td style={thTdStyle}>{car.price.toLocaleString()}</td>
                <td style={thTdStyle}>{car.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<CarGallery />);
