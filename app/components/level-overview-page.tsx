import React from "react";
import { Content } from "../content";
import { themeConfig } from "theme-config";
import ButtonLink from "./button-link";
import { useNavigate } from "@remix-run/react";

const MaterialCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 mb-4">
    <h3 className="text-lg font-semibold text-indigo-100 mb-2">{title}</h3>
    <p className="text-indigo-200">{description}</p>
  </div>
);

export default function LevelOverviewPage({ content }: { content?: Content }) {
  const navigate = useNavigate();
  if (!content) {
    return <div>Level not found</div>;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[${themeConfig.colors.background.start}] to-[${themeConfig.colors.background.end}] p-8`}
    >
      <button
        onClick={() => navigate(-1)}
        className="text-indigo-100 rounded-lg bg-opacity-50 hover:bg-opacity-75 p-2 border border-solid"
      >
        ← Kembali
      </button>
      <header className="flex items-center mb-12">
        <div className="text-4xl mr-4">{content.icon}</div>
        <div>
          <h1 className="text-2xl font-bold text-indigo-100">{content.name}</h1>
          <p className="text-md text-indigo-200">{content.description}</p>
        </div>
      </header>

      {/* <main className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-100 mb-6">Materials</h2>
        {content.materials.map((material) => (
          <MaterialCard
            key={material.slug}
            title={material.title}
            description={material.description}
          />
        ))}

        <h2 className="text-3xl font-bold text-indigo-100 mb-6 mt-12">
          Final Exam
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-indigo-100 mb-2">
            {content.exam.title}
          </h3>
          <p className="text-indigo-200">{content.exam.description}</p>
        </div>

        <div className="flex justify-between mt-12">
          <ButtonLink to="/" className="bg-opacity-50">
            Back to Home
          </ButtonLink>
          <ButtonLink
            to={`/level/${content.slug}/material/${content.materials[0].slug}`}
          >
            Mulai
          </ButtonLink>
        </div>
      </main> */}
    </div>
  );
}
