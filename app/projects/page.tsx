export default function Projects() {

  const projects = [
    {
      title: "AI Web Mail Assistant",
      description:
        "Built a full-stack AI-powered Gmail assistant that enables users to read, draft, and reply to emails using natural language. The application integrates Google OAuth 2.0 authentication and the Gmail API with an LLM-powered backend to generate context-aware responses. Designed a structured AI-to-UI action architecture where LLM outputs dynamically control frontend actions such as composing emails, injecting drafts, filtering messages, and triggering UI workflows.",
      tech: "React (Vite), FastAPI, Cohere LLM, Gmail API, Google OAuth 2.0",
      link: "https://github.com/PavaniKalyani/ai-web-mail-app",
    },
  ];

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Projects
      </h1>

      <div className="max-w-4xl mx-auto">

        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-medium">Tech:</span> {project.tech}
            </p>

          </a>
        ))}

      </div>

    </div>
  );
}