const Skills = () => {
const skills = [
  {
    title: "React JS",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    desc: "Build responsive user interfaces using components, JSX, props, state, and reusable UI architecture.",
  },
  {
    title: "HTML & CSS",
    img: "https://www.kindpng.com/picc/m/72-726511_html5css3badges-html-css-logo-png-transparent-png.png",
    desc: "Create responsive layouts using semantic HTML, Flexbox, Grid, and modern CSS techniques.",
  },
  {
    title: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    desc: "Develop interactive web applications using ES6+, DOM manipulation, events, and asynchronous programming.",
  },
  {
    title: "Fetch API & Axios",
    img: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
    desc: "Consume REST APIs and manage dynamic data fetching using Fetch API and Axios.",
  },
  {
    title: "Responsive Design",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    desc: "Build mobile-friendly and cross-device compatible user interfaces with modern design principles.",
  },
  {
    title: "Development Tools",
    img: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    desc: "Experienced with VS Code, Browser DevTools, debugging techniques, and frontend development workflows.",
  },
];

  return (
    <section className="bg-[#f9fafb] py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col"
            >
              {/* Image */}
              <img
                src={skill.img}
                alt={skill.title}
                className="w-full h-32 object-contain mb-4"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 text-center">
                {skill.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;