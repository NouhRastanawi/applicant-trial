import { useState, useEffect } from "react";
import "./ProjectsList.css";
import axiosInstance from "../../api/axios";

const ProjectsList = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("v2/project");

        setProjects(response.data.data);
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
        {projects && (
          <div className="card-list">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <h2>{project.title}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
