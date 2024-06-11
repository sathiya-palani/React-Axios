import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigat = useNavigate();

  useEffect(() => {
    axios
      .get("https://6663112262966e20ef0b3b39.mockapi.io/user")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">
          Add +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.id}</td>
              <td>
                <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">
                  Update
                </Link>
                <button
                  onClick={(e) => handleSubmit(d.id)}
                  className="btn btn-sm ms-1 btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios
        .delete("https://6663112262966e20ef0b3b39.mockapi.io/user/" + id)
        .then((res) => {
          alert("Record has deleted");
          navigat("/");
        })
        .catch((err) => console.log(err));
    }
  }
}

export default App;
