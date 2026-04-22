import React from "react";
import bootstrap from "../assets/bootstrap.png";
import HTML5 from "../assets/html.png";
import css3 from "../assets/css.jpg";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";
import javascript from "../assets/javascript.png";
import postman from "../assets/postman.png";


const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "REACT",
      icon: react,
      level: 85,
      color: "form-cyan-500 to-blue-500",
    },
    {
      name: "TAILWIND CSS",
      icon: tailwind,
      level: 92,
      color: "form-teal-500 to-cyan-500",
    },
    {
      name: "VITE",
      icon: vite,
      level: 85,
      color: "form-red-500 to-orange-500",
    },
    {
      name: "BOOTSTRAP",
      icon: bootstrap,
      level: 95,
      color: "form-purple-500 to-purple-500",
    },
    {
      name: "HTML",
      icon: HTML5,
      level: 90,
      color: "form-red-500 to-red-500",
    },
    {
      name: "CSS",
      icon: css3,
      level: 88,
      color: "form-cyan-500 to-blue-500",
    },
      {
      name: "JAVASCRIPT",
      icon: javascript,
      level: 88,
      color: "form-yellow-500 to-yellow-500",
    },
    {
      name: "POSTMAN",
      icon: postman,
      level: 88,
      color: "form-red-500 to-orange-500",
    },
  ];
  return (
    <>
      <section
        id="skills"
        style={{
          backgroundColor: darkMode ? "#111827" : "#f9fafb",
        }}
        className="py-14 relative overflow-hidden"
      >
        <div className="py-14 relative overflow-hidden">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4"
              style={{
                color: darkMode ? "white" : "#1f2937",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(to right , #f97316, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Skills
              </span>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                color: darkMode ? "#d1d5db" : "#4b5563",
              }}
            >
              Here are some of the technologies and tools I work with:
            </p>
          </div>
          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 lg:w-1/4 w-full"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div
                  style={{
                    background: darkMode
                      ? "linear-gradient(to bottom right , #1f2937 , #111827)"
                      : "linear-gradient(to bottom right , #ffffff , #f3f4f6)",
                    borderColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                  className="h-full p-6 rounded-2xl border 
              hover:border-orange-500/50 transition-all
              duration-300 hover:-transalte-y2 group
              hover:shadow-[0_0_30px_rgb(255 ,165,0,0,0.15)]"
                >
                  <div className="flex items-center mb-6">
                    <div
                      style={{
                        background: darkMode
                          ? "linear-gradient(to bottom right , #374151 , #1f2937)"
                          : "linear-gradient(to bottom right , #f3f4f6 , #e5e7eb)",
                      }}
                      className="w-16 h-16 rounded-xl p-3 flex items-center
              justify-center group-hover:scale-110 transition-transform
              duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3
                      className="text-xl font-bold ml-4"
                      style={{
                        color: darkMode ? "white" : "#1f2937",
                      }}
                    >
                      {skill.name}
                    </h3>
                  </div>
                  <div className="mb-2 flex justify-between items-center">
                    <span
                      className="font-medium"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6b7280",
                      }}
                    >
                      Proficiency
                    </span>
                    <span
                      style={{
                        background: "linear-gradient(to right,#f97316,f59e0b)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      className="font-bold"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full h-3 overflow-hidden"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                    }}
                  >
                    <div
                      className={`h-full rounded-full bg-linear-to-r
                    ${skill.color} transition-allduration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div
                    className={`mt-6 pt-4 border-t
                  ${darkMode ? "border-gray-700" : "border-gray-300"}`}
                  >
                    <div
                      className="h-1 rounded-full opacity-70
                    group-hover:w-full transition-all duration-500 w-1/3"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316 , #f59e0b)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
