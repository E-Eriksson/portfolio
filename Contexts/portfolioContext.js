import { createContext, useState, useEffect } from "react";

const portfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTechSkills =
      JSON.parse(localStorage.getItem("techSkills")) || [];
    setProjects(storedProjects);
    setTechSkills(storedTechSkills);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  return (
    <portfolioContext.Provider
      value={{ projects, setProjects, techSkills, setTechSkills }}
    >
      {children}
    </portfolioContext.Provider>
  );
};

export default portfolioContext;
