import { useState, useEffect } from "react";
import "./ProjectsList.css";

const ProjectsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://dev.june.local:8008/api/v2/project", {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
          headers: {
            Authorization: "Bearer Token", // Bearer token
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Projekte</h1>{" "}
      <div className="card-container">
        {data && (
          <div className="card-list">
            {data.map((item) => (
              <div key={item.id} className="card">
                <h2>{item.title}</h2>
                {/* Additional data fields can be added here */}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
            // data depended
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default ProjectsList;
