"use client"

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
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
      <header className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 p-3 rounded-lg shadow-md animate-gradient mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-white">John Doe</h1>
            <p className="text-sm text-purple-200">
              Web Developer | C# | .NET | SQL Server
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="h-8 px-3">
              <FaGithub className="mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaLinkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaTwitter className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" className="h-8 w-8">
              <FaEnvelope className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <FaDownload className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column: Experience */}
        <section className="bg-gray-900/50 p-3 rounded-lg overflow-y-auto">
          <h2 className="text-xl font-semibold text-purple-400 mb-3">
            💼 Experience
          </h2>
          <div className="space-y-3">
            {experienceData.experiences.map((job, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                <CardContent className="p-2">
                  <h3 className="text-sm font-semibold text-purple-400">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {job.company} | {job.period}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Middle Column: About Me */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">
              👤 About Me
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              {aboutData.aboutMe}
            </p>
          </CardContent>
        </Card>

        {/* Right Column: Articles */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">
              📚 Latest Articles
            </h2>
            <ul className="space-y-3">
              {articlesData.articles.map((article, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="text-base text-purple-400 hover:text-purple-300 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }}
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {article.title}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    {article.description}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>

      {/* Projects */}
      <section className="mt-4">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">
          🚀 Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectsData.projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors"
            >
              <CardContent className="p-2">
                <div className="aspect-w-16 aspect-h-9 mb-2 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-purple-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-300">{project.description}</p>
                <p className="text-xs text-gray-400 mt-2 line-clamp-3">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-1 py-0.5 bg-purple-400/10 text-purple-400 rounded-full text-[8px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
