const StudentApp = () => {
  const students = [
    { name: "Amit", age: 17, marks: 85 },
    { name: "Priya", age: 16, marks: 92 },
    { name: "Rahul", age: 18, marks: 76 },
    { name: "Sneha", age: 17, marks: 89 },
    { name: "Vikram", age: 16, marks: 95 },
    { name: "Anjali", age: 18, marks: 81 }
  ];

  return (
    <>
        <h1 >Students Detail</h1>
      <div class="card">
        <table id="table" border="1" cellPadding="5"cellSpacing="0">
        <thead id="thead">
          <tr id="tr">
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<StudentApp />);
