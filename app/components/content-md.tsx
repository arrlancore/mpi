// components/MarkdownContentWithNav.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@remix-run/react";
import { ChevronLeft, House, ChevronRight } from "lucide-react";

interface ContentMDProps {
  title: string;
  markdown?: string;
  previousPage?: string;
  homePage?: string;
  nextPage?: string;
  iframe?: React.ReactElement | null;
}

const ContentMD: React.FC<ContentMDProps> = ({
  title,
  markdown,
  previousPage,
  homePage,
  nextPage,
  iframe,
}) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 z-[10000]">
      <div className="flex justify-center items-center mb-6">
        {/* Back Button */}
        {previousPage && (
          <Link className="z-10" to={previousPage}>
            <ChevronLeft className="w-10 h-10 mr-4 text-gray-600 hover:text-blue-500 transition duration-300" />
          </Link>
        )}

        {/* Home Button */}
        <Link className="z-10" to={homePage!}>
          <House className="w-10 h-10 mx-4 text-gray-600 hover:text-blue-500 transition duration-300" />
        </Link>

        {/* Next Button */}
        {nextPage && (
          <Link className="z-10" to={nextPage}>
            <ChevronRight className="w-10 h-10 ml-4 text-gray-600 hover:text-blue-500 transition duration-300" />
          </Link>
        )}
      </div>
      {/* Light blue background */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 min-h-[400px]">
        {" "}
        {/* Presentation-style background */}
        <h1 className="text-5xl font-bold text-blue-800 text-center mb-8">
          {title}
        </h1>{" "}
        {/* Larger title */}
        {markdown ? (
          <ReactMarkdown
            // remarkPlugins={[remarkGfm]}
            className="prose lg:prose-xl text-black markdown-body"
          >
            {markdown}
          </ReactMarkdown>
        ) : null}
        {iframe ? iframe : null}
      </div>
    </div>
  );
};

export default ContentMD;
