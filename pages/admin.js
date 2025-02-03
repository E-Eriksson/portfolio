import { useState, useContext } from "react";
import portfolioContext from "@/Contexts/portfolioContext";

export default function Admin() {
  const context = useContext(portfolioContext);
  if (!context) return <div>Loading...</div>;
  const { projects, setProjects, techSkills, setTechSkills } = context;

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newSkill, setNewSkill] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleRemoveProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  }

  function handleRemoveSkill(index) {
    const updatedSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedSkills);
  }

  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-dvh bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setProjects([...projects, newProject])}
          className="py-3 px-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Project
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add Tech Skill</h2>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setTechSkills([...techSkills, newSkill])}
          className="py-3 px-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Skill
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-lg">{project}</span>
              <button
                onClick={() => handleRemoveProject(index)}
                className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Tech Skills</h2>
        <ul className="space-y-2">
          {techSkills.map((skill, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-lg">{skill}</span>
              <button
                onClick={() => handleRemoveSkill(index)}
                className="ml-4 text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
