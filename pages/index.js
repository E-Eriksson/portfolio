import { useContext } from "react";
import portfolioContext from "@/Contexts/portfolioContext";
import Image from "next/image";

export default function Home() {
  const context = useContext(portfolioContext);
  if (!context) return <div>Loading...</div>;
  const { projects, techSkills } = context;

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">My Portfolio</h1>
      <hr />

      <div className="flex gap-8 mt-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={"/Profile_avatar_placeholder.png"}
            alt="placeholder avatar"
            width={50}
            height={50}
            className="rounded-full mt-4 ml-4"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Emil Eriksson</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
          >
            <Image
              src={project.img}
              alt="project image"
              width={100}
              height={100}
              className="rounded-lg mx-auto"
            />
            <div className="text-center mt-4">
              <div className="font-bold text-xl">{project.project}</div>
              <p className="text-gray-700 text-sm mt-2">{project.disc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
        Tech Skills
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={skill.img}
              alt="skill image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="mt-2 text-lg font-medium">{skill.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
