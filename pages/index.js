import { useContext } from "react";
import portfolioContext from "@/Contexts/portfolioContext";

export default function Home() {
  const context = useContext(portfolioContext);
  if (!context) return <div>Loading...</div>;
  const { projects, techSkills } = context;

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">My Portfolio</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          {projects.map((project, index) => (
            <li key={index} className="text-lg">
              {project}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          {techSkills.map((skill, index) => (
            <li key={index} className="text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
