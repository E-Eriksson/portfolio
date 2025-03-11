import { createContext, useState, useEffect } from "react";

const portfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const defaultProjects = [
    {
      project: "https://radix-dashboard-two.vercel.app/",
      img: "/RadixDashboard.png",
      disc: "Dashboard built with radix components",
    },
    {
      project: "https://todolist-7rmuudprh-e-erikssons-projects.vercel.app",
      img: "/Todolist.png",
      disc: "Made with React and Vite",
    },
    {
      project: "https://my-news-app-hazel-nine.vercel.app/",
      img: "/NewsApp.png",
      disc: "Unused news app made with React Next.js and The Guardian's API",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (!storedProjects || storedProjects.length === 0) {
      localStorage.setItem("projects", JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    } else {
      setProjects(storedProjects);
    }

    const storedTechSkills =
      JSON.parse(localStorage.getItem("techSkills")) || [];
    setTechSkills(storedTechSkills);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

  return (
    <portfolioContext.Provider
      value={{ projects, setProjects, techSkills, setTechSkills }}
    >
      {children}
    </portfolioContext.Provider>
  );
};

export default portfolioContext;
