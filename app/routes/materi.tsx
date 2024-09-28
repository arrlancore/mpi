// components/MateriPage.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@remix-run/react";
import { ChevronLeft, House, ChevronRight } from "lucide-react";
import ContentMD from "~/components/content-md";
import Layout from "~/components/layout";
import { appConfig } from "~/config";
import { courseData } from "~/content";
import GameButtonLink from "~/components/button-link";

interface PendahuluanPageProps {
  title: string;
  markdown: string;
  previousPage?: string;
  homePage: string;
  nextPage?: string;
}

const MateriPage: React.FC<PendahuluanPageProps> = ({}) => {
  const linkToLearningPage = `/materi-detail/${courseData.contents[0].materials[0].slug}`;

  return (
    <Layout>
      <section className="mb-12">
        <div className="flex justify-center items-center mb-6">
          {/* Back Button */}
          {1 && (
            <Link className="z-10" to={"/petunjuk"}>
              <ChevronLeft className="w-10 h-10 mr-4 text-gray-600 hover:text-blue-500 transition duration-300" />
            </Link>
          )}

          {/* Home Button */}
          <Link className="z-10" to={appConfig.home}>
            <House className="w-10 h-10 mx-4 text-gray-600 hover:text-blue-500 transition duration-300" />
          </Link>

          {/* Next Button */}
          {1 && (
            <Link className="z-10" to={"/latihan"}>
              <ChevronRight className="w-10 h-10 ml-4 text-gray-600 hover:text-blue-500 transition duration-300" />
            </Link>
          )}
        </div>

        <h2 className="text-5xl font-bold text-blue-800 mb-12 text-center">
          Materi Pelajaran
        </h2>
        <div className="flex max-w-[600px] m-auto flex-col gap-10">
          {courseData.contents.map((content, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 min-h-[180px] relative" // Added min-h
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl text-yellow-300 mr-4">
                  {content.icon || "🎮"}
                </span>
                <h3 className="text-2xl font-bold text-yellow-300">
                  {content.name}
                </h3>
              </div>
              <p className="mb-4 text-indigo-100 text-left">
                {content.description}
              </p>

              <h4 className="font-semibold text-lg text-left mb-2 text-white">
                Misi:
              </h4>
              <ul className="list-disc list-inside text-indigo-100">
                {content.materials.map((material, idx) => (
                  <Link to={`/materi-detail/${material.slug}`}>
                    <li key={idx} className="flex items-start gap-2 mb-1">
                      <span className="text-indigo-100">
                        {material.type === "video" ? "🎥" : "📚"}
                      </span>
                      <span>{material.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <GameButtonLink className="text-center" to={linkToLearningPage}>
            Mulai
          </GameButtonLink>
        </div>
      </section>
    </Layout>
  );
};

export default MateriPage;
