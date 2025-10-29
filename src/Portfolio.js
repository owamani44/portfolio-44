import React from "react";


export default function Portfolio() {
  
  const name = "Solomon Owamani";
  const tagline = "Back-end Developer — Building Technologies for Generations";
  const location = "Uganda";
  const email = "owamani44@gmail.com";

  const about = `I'm a passionate back-end developer from Uganda. I work with Java and Spring Boot and I'm building APIs and microservices. I'm learning React and exploring AI/ML. I also collaborate on embedded projects like air pollution monitoring.`;

  const skills = [
    "Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "PostgreSQL", "Kafka", "Linux", "React (learning)", "C++", "DSA"
  ];

  const projects = [
    {
      title: "Price Information API",
      short: "A backend API for price information (in progress).",
      repo: "https://github.com/owamani44",
      tech: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
      title: "Air Pollution Monitoring System",
      short: "An Arduino-based air pollution monitoring project with C++ code and data ingestion.",
      repo: "https://github.com/owamani44/Air_Pollution_Monitoring_System",
      tech: ["C++", "Embedded", "IoT"]
    },
    {
      title: "Data Structures (DSA)",
      short: "Collection of DSA exercises and examples in Java for learning and interviews.",
      repo: "https://github.com/owamani44/data-structures",
      tech: ["Java", "Algorithms"]
    },
    {
      title: "Java Spring Microservices (course source)",
      short: "Forked course material for learning microservices with Java and Spring.",
      repo: "https://github.com/owamani44/java-spring-microservices",
      tech: ["Java", "Spring Boot", "Microservices"]
    },
    {
      title: "Introducing Blockchain with Java (fork)",
      short: "Source code for the 'Introducing Blockchain with Java' book forked into this account.",
      repo: "https://github.com/owamani44/introducing-blockchain-with-java",
      tech: ["Java", "Blockchain"]
    }
  ];

  // Color tokens (blue + green): Tailwind utility classes used below. You can change by editing these values.
  const accentFrom = "from-blue-500";
  const accentTo = "to-green-500";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className={`bg-gradient-to-r ${accentFrom} ${accentTo} text-white py-10`}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 md:gap-12">
            <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              {/* If you want a photo, replace this <img> src with your avatar URL. */}
              <img
                src="https://github.com/owamani44.png"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
              <p className="mt-2 text-sm md:text-base opacity-90">{tagline}</p>
              <p className="mt-3 text-xs md:text-sm opacity-90">{location} • {email}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12">
        <section className="grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-sm leading-relaxed">{about}</p>
            <div className="mt-6">
              <h3 className="text-md font-medium mb-2">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium mb-3">Projects</h3>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.title} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <a href={p.repo} target="_blank" rel="noreferrer" className="font-semibold text-sm hover:underline">{p.title}</a>
                        <p className="text-xs mt-1 opacity-90">{p.short}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {p.tech.map((t) => <span key={t} className="text-xs px-2 py-1 rounded bg-white/60 dark:bg-black/20">{t}</span>)}
                        </div>
                      </div>
                      <div className="text-xs opacity-75">Repo</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow h-full">
            <h3 className="text-md font-medium mb-3">Contact</h3>
            <p className="text-sm">Email me at <a href={`mailto:${email}`} className="underline">{email}</a></p>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><a href="https://github.com/owamani44" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/solomon-owamani-5b6b37258" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href="#resume" className="hover:underline">Download Resume (placeholder)</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Theme</h4>
              <p className="text-xs opacity-80">This template includes a dark-friendly layout and uses blue → green accents per your preference.</p>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold">More about my work</h3>
            </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs opacity-80">
        <div>Made with ♥ • {name} • {location}</div>
      </footer>
    </div>
  );
}
