import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  // const projects = [
  //   {
  //     title: "Attendance Management System For Employees",
  //     description:
  //       "Face recognition-based system with real-time tracking, late rules automation, and reporting dashboard.",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React"],
  //     live: "https://attendance.skyvisionitsolutions.online/",
  //   },
  //   {
  //     title: "Logistics & Transload Platform",
  //     description:
  //       "Secure backend system to manage shipments, company data, and API-driven operations.",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React+Vite"],
  //     live: "https://transload.skyvisionitsolutions.online/",
  //   },
  //   {
  //     title: "Turf Booking System",
  //     description:
  //       "Slot-based booking system with availability tracking and admin control for turf owners.",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React+Vite"],
  //     live: "https://altamashali903.github.io/turfmanagement/",
  //   },
  //   {
  //     title: "Aptitude Test Platform",
  //     description:
  //       "Online platform for conducting aptitude tests with real-time evaluation and reporting.",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React+Vite"],
  //     live: "https://exam.skyvisionitsolutions.online/",
  //   },
  //   {
  //     title: "Attendance Management System For Gym",
  //     description:
  //       "Face recognition-based system for gym attendance tracking, with real-time monitoring and reporting features.",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React+Vite"],
  //     live: "",
  //   },
  //   {
  //     title: "Database Backup Functionality",
  //     description:
  //       "A Functionality Which Helps To Take back up (Export) The Database (Schema) In MySQL",
  //     tech: ["Node.js", "Express", "MySQL (SP)", "JWT", "React+Vite"],
  //     live: "",
  //   },
  // ];
const projects = [
   {
      title: "Logistics & Transload Platform",
      description:
        "Frontend Development of a secure logistics platform to manage shipments, company data, and API-driven operations.",
      tech: ["Node.js", "Express", "JWT", "React+Vite"],
      live: "https://transload.skyvisionitsolutions.online/",
    },
  {
    title: "React JS Frontend Project",
    description:
      "Developed a responsive frontend application using React JS. Built reusable components, managed basic state, and integrated REST APIs to display dynamic data.",
    tech: ["React JS", "JavaScript", "HTML", "CSS", "Fetch API"],
    live: "",
  },
  {
    title: "API Integration Project",
    description:
      "Implemented API consumption using Fetch API and Axios. Displayed dynamic content from REST APIs and handled asynchronous data fetching.",
    tech: ["React JS", "Axios", "Fetch API", "JavaScript"],
    live: "",
  },
  {
    title: "Responsive UI Development",
    description:
      "Designed and developed responsive user interfaces using HTML, CSS, and React JS, ensuring compatibility across desktop and mobile devices.",
    tech: ["HTML", "CSS", "React JS", "Responsive Design"],
    live: "",
  },
  {
    title: "React Components Practice",
    description:
      "Created reusable React components using JSX, Props, and basic State management to improve code reusability and maintainability.",
    tech: ["React JS", "JSX", "Props", "State"],
    live: "",
  },
  {
    title: "Frontend Practice Applications",
    description:
      "Built multiple small React applications to strengthen frontend concepts, component architecture, and UI development skills.",
    tech: ["React JS", "JavaScript", "HTML", "CSS"],
    live: "",
  }
];

  return (
    <section id="projects" className="bg-[#f9fafb] py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Real-world systems I’ve built and worked on
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white border border-emerald-400 rounded-2xl p-6 shadow-lg 
                         transition duration-300 flex flex-col justify-between
                         hover:-translate-y-1 hover:shadow-xl"
            >

              {/* TOP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-6">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 text-white text-sm py-2.5 rounded-lg hover:bg-emerald-700 transition"
                  >
                    View Live <FaExternalLinkAlt />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full text-sm py-2.5 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;