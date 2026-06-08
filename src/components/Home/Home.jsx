  import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-6 relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[400px] bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* SMALL INTRO */}
        <p className="text-emerald-600 font-normal text-2xl tracking-wide">
          👋 Hello, I'm 👋
        </p>

        {/* NAME */}
        <h1 className="text-2xl md:text-6xl font-semibold text-gray-900 mt-1 leading-tight">
          Divya Datke
        </h1>

        {/* ROLE */}
        <h2 className="text-xl md:text-2xl text-gray-700 mt-4">
  Frontend-Focused <br className="block md:hidden" />
  <span className="text-emerald-600 font-semibold">
    MERN Stack Developer
  </span>
</h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 leading-7 max-w-2xl mx-auto">Here Is My Portfolio Website, Where I Showcase My Skills, Projects, And Experience As A MERN Stack Developer.
          I Am Passionate About Building Responsive, User-Friendly, And Modern Web Applications Using React JS And JavaScript.
          If You Have Any Questions Or Would Like To Connect, Feel Free To Reach Out Through The Contact Page.<br /> Thank You For Visiting!
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            to="/projects"
            className="bg-emerald-600 text-white px-7 py-3 rounded-lg shadow hover:bg-emerald-700 transition duration-300"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* TECH STACK */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 pb-5 text-sm">
          {[ "React JS", "JavaScript", "HTML", "CSS" , "React Vite" , "Java (Basic)"].map(
            (tech, i) => (
              <span
                key={i}
                className="bg-white border px-4 py-2 rounded-full text-gray-700 shadow-sm hover:shadow-md transition"
              >
                {tech}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Home;