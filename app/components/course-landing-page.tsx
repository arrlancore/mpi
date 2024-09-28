import React from "react";
import { Link } from "@remix-run/react";
import { Course } from "../content";
import YoutubeEmbed from "./youtube-embed";
import ButtonLink from "./button-link";
import GameButton from "./game-button";
import { CheckCircleIcon } from "lucide-react";
import AppIcons from "./app-icons";

export default function CourseLandingPage({ course }: { course: Course }) {
  const linkToLearningPage = `/level/${course.contents[0].slug}`;
  const captions = {
    topStartButton: "Mulai",
    topEndButton: "Mulai Belajar",
  };

  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12 text-center">
          <div className="mb-12">
            <YoutubeEmbed videoId={"Z2_ZEkoPtMc"} title="Introductory Video" />
          </div>
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-gray-700 mx-auto max-w-3xl mb-8">
            {course.about}
          </p>
          <AppIcons />
        </div>
      </main>
    </div>
  );
}
