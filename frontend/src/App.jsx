import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/students");
      const data = await response.json();

      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchStudents();
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (editingStudent) {
            const response = await fetch(
                `http://localhost:5000/students/${editingStudent._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        roll: Number(roll),
                        email: email,
                        department: department,
                        year: Number(year)
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            setEditingStudent(null);

            fetchStudents();

            alert("Student updated successfully");
        } else {
            const response = await fetch(
                "http://localhost:5000/students",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        roll: Number(roll),
                        email: email,
                        department: department,
                        year: Number(year)
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            fetchStudents();

            alert("Student added successfully");
        }
    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
};


  const deleteStudent = async (id)=>{
    try {
      await fetch(`http://localhost:5000/students/${id}`,{method: "DELETE"});
      fetchStudents();
      alert("Student Deleted Successfully")
    }catch(error){
      console.log(error);
      alert("Failed to delete student");
    }
  }
 
  const editStudent = (student) => {
    setEditingStudent(student);

    setName(student.name);
    setRoll(student.roll);
    setEmail(student.email);
    setDepartment(student.department);
    setYear(student.year);
};
  return (
    <div>
      <h1>Student Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student._id}>
          <h3>{student.name}</h3>

          <p>Roll: {student.roll}</p>
          <p>Email: {student.email}</p>
          <p>Department: {student.department}</p>
          <p>Year: {student.year}</p>
          <button onClick={() => editStudent(student)}>
    Edit
</button>


          <button onClick={() => deleteStudent(student._id)}>
    Delete
</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
