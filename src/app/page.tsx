"use client";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaFileDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";

import CustomButton from "@/components/ui/custombutton";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleModal } from "./ArticleModal";

import experienceData from "./data/experience.json";
import aboutData from "./data/about.json";
import articlesData from "./data/articles.json";
import projectsData from "./data/projects.json";

export default function Portfolio() {
  const [selectedArticle, setSelectedArticle] =
    useState<typeof articlesData.articles[0] | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col">
      {/* Header */}
      <header className="bg-purple-800 p-3 rounded-lg shadow-md animate-gradient mb-4">
        <div className="flex flex-col mx-5 sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-white">Kelvin S. Zolotareff</h1>
            <p className="text-sm text-purple-200">
              .NET Web Developer | C# | SQL Server
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Botões de contato */}
            <CustomButton href="https://github.com/KelvinZolotareff" variant="default" size="sm" className="bg-primary text-primary-foreground shadow hover:bg-primary/50 h-8 rounded-md w-8">
              <FaGithub className="h-4 w-4" />
            </CustomButton>
            <CustomButton href="https://www.linkedin.com/in/kelvinzolotareff/" size="sm" className="bg-blue-700 text-primary-foreground shadow hover:bg-blue-700/50 h-8 rounded-md w-8">
              <FaLinkedin className="h-4 w-4" />
            </CustomButton>
            <CustomButton href="mailto:kelvinzolotareff@gmail.com" variant="default" size="sm" className="bg-[#08851b] text-primary-foreground shadow hover:bg-[#08851b]/50 h-8 rounded-md w-8">
              <FaRegEnvelope className="h-4 w-4" />
            </CustomButton>
            <CustomButton href="./KelvinZolotareffCV.pdf" variant="default" size="sm" className="bg-[#c0342f] text-primary-foreground shadow hover:bg-[#c0342f]/50 h-8 rounded-md w-8">
              <FaFileDownload className="h-4 w-4" />
            </CustomButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Left Column: Tech Icons */}
        <section className="hidden md:block p-4 rounded-lg md:col-span-1">
          <div className="grid grid-cols-2 gap-4 h-full">
            {[{ icon: <SiDotnet />, name: "React" },
              { icon: <SiDotnet />, name: "Node.js" },
              { icon: <SiDotnet />, name: "TypeScript" },
              { icon: <SiDotnet />, name: "PostgreSQL" },
              { icon: <SiDotnet />, name: "Python" },
              { icon: <SiDotnet />, name: "Java" },
              { icon: <SiDotnet />, name: ".NET" },
              { icon: <SiDotnet />, name: "HTML5" }]
              .map((tech, index) => (
                <div key={index} className="flex items-center justify-center w-full h-20 bg-purple-400/10 rounded-lg" title={tech.name}>
                  <span className="text-purple-400 text-3xl">{tech.icon}</span>
                </div>
              ))}
          </div>
        </section>

        {/* About Me */}
        <Card className="bg-white/10 border-none md:col-span-2 flex flex-col backdrop-blur-lg p-2">
          <CardContent className="flex-1">
            <h2 className="text-2xl font-semibold text-purple-500 mb-3">
              👤 About Me
            </h2>
            <p className="text-base text-gray-300 leading-relaxed line-clamp-3">
              {aboutData.aboutMe}
            </p>
          </CardContent>
        </Card>

        {/* Latest Articles */}
        <Card className="bg-white/10 border-none sm:col-span-1 flex flex-col backdrop-blur-lg p-2">
          <CardContent className="flex-1">
            <h2 className="text-2xl font-semibold text-purple-500  mb-3">
              📚 Latest Articles
            </h2>
            <ul className="space-y-3">
              {articlesData.articles.map((article, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="text-base text-purple-500 hover:text-purple-400 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }}
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {article.title}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{article.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Experience */}
        <section className="bg-white/10 p-2 rounded-lg md:col-span-2 flex flex-col backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-purple-500 mb-3">
            💼 Experience
          </h2>
          <div className="flex-1 overflow-y-auto">
            {experienceData.experiences.map((job, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700  transition-colors mb-2"
              >
                <CardContent className="p-2">
                  <h3 className="text-xl font-semibold text-purple-500">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {job.company} | {job.period}
                  </p>
                  <p className="text-base text-gray-300 mt-1">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Row: Projects */}
        <section className="bg-white/10 p-2 rounded-lg sm:col-span-6 backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-purple-500 mb-3">
            🚀 Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsData.projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 transition-colors border-gray-700"
              >
                <CardContent className="p-2 flex flex-col h-full">
                  {/* Project Title */}
                  <h3 className="text-lg font-semibold text-purple-500 mb-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-gray-300 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center text-sm font-medium text-white bg-purple-900 hover:bg-purple-400 transition-colors px-4 py-2 rounded-md"
                  >
                    View Project
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          article={selectedArticle}
        />
      )}
    </div>
  );
}
