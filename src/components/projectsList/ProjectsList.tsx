import { useState, useEffect } from "react";
import "./ProjectsList.css";
import axiosInstance from "../../api/axios";

const ProjectsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("v2/project");
        setData(response.data);
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
    </div>
  );
};

export default ProjectsList;
