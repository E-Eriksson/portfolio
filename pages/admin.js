import { useState, useContext } from "react";
import portfolioContext from "@/Contexts/portfolioContext";
import Image from "next/image";

export default function Admin() {
  const context = useContext(portfolioContext);
  if (!context) return <div>Loading...</div>;
  const { projects, setProjects, techSkills, setTechSkills } = context;

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newProject, setNewProject] = useState("");
  const [newProjectImg, setNewProjectImg] = useState("");
  const [newProjectDisc, setNewProjectDisc] = useState("");
  const [editProjectIndex, setEditProjectIndex] = useState(null);

  const [newSkill, setNewSkill] = useState("");
  const [newSkillImg, setNewSkillImg] = useState("");
  const [editSkillIndex, setEditSkillIndex] = useState(null);

  function handleLogin() {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleRemoveProject(index) {
    setProjects(projects.filter((_, i) => i !== index));
  }

  function handleRemoveSkill(index) {
    setTechSkills(techSkills.filter((_, i) => i !== index));
  }

  function handleEditProject(index) {
    const project = projects[index];
    setNewProject(project.project);
    setNewProjectImg(project.img);
    setNewProjectDisc(project.disc);
    setEditProjectIndex(index);
  }

  function handleUpdateProject() {
    const updatedProjects = [...projects];
    updatedProjects[editProjectIndex] = {
      project: newProject,
      img: newProjectImg,
      disc: newProjectDisc,
    };
    setProjects(updatedProjects);
    resetProjectForm();
  }

  function handleEditSkill(index) {
    const skill = techSkills[index];
    setNewSkill(skill.skill);
    setNewSkillImg(skill.img);
    setEditSkillIndex(index);
  }

  function handleUpdateSkill() {
    const updatedSkills = [...techSkills];
    updatedSkills[editSkillIndex] = {
      skill: newSkill,
      img: newSkillImg,
    };
    setTechSkills(updatedSkills);
    resetSkillForm();
  }

  function resetProjectForm() {
    setNewProject("");
    setNewProjectImg("");
    setNewProjectDisc("");
    setEditProjectIndex(null);
  }

  function resetSkillForm() {
    setNewSkill("");
    setNewSkillImg("");
    setEditSkillIndex(null);
  }

  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md"
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

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editProjectIndex !== null ? "Edit Project" : "Add Project"}
        </h2>
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="Project Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newProjectImg}
          onChange={(e) => setNewProjectImg(e.target.value)}
          placeholder="Project Image URL"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newProjectDisc}
          onChange={(e) => setNewProjectDisc(e.target.value)}
          placeholder="Project Description"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        {editProjectIndex !== null ? (
          <button
            onClick={handleUpdateProject}
            className="py-3 px-6 bg-yellow-500 text-white rounded-md"
          >
            Update Project
          </button>
        ) : (
          <button
            onClick={() =>
              setProjects([
                ...projects,
                {
                  project: newProject,
                  img: newProjectImg,
                  disc: newProjectDisc,
                },
              ])
            }
            className="py-3 px-6 bg-green-500 text-white rounded-md"
          >
            Add Project
          </button>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
      <ul className="space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{project.project}</span>
            <Image src={project.img} alt="project" width={50} height={50} />
            <p>{project.disc}</p>
            <button
              onClick={() => handleEditProject(index)}
              className="text-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveProject(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editSkillIndex !== null ? "Edit Tech Skill" : "Add Tech Skill"}
        </h2>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Skill Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newSkillImg}
          onChange={(e) => setNewSkillImg(e.target.value)}
          placeholder="Skill Image URL"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        {editSkillIndex !== null ? (
          <button
            onClick={handleUpdateSkill}
            className="py-3 px-6 bg-yellow-500 text-white rounded-md"
          >
            Update Skill
          </button>
        ) : (
          <button
            onClick={() =>
              setTechSkills([
                ...techSkills,
                { skill: newSkill, img: newSkillImg },
              ])
            }
            className="py-3 px-6 bg-green-500 text-white rounded-md"
          >
            Add Skill
          </button>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Current Tech Skills</h2>
      <ul className="space-y-2">
        {techSkills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{skill.skill}</span>
            <Image src={skill.img} alt="skill" width={50} height={50} />
            <button
              onClick={() => handleEditSkill(index)}
              className="text-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveSkill(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
