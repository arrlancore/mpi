// components/MateriPage.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { json, Link, useLoaderData } from "@remix-run/react";
import { ChevronLeft, House, ChevronRight } from "lucide-react";
import ContentMD from "~/components/content-md";
import Layout from "~/components/layout";
import { appConfig } from "~/config";
import { Content, courseData, Material } from "~/content";
import GameButtonLink from "~/components/button-link";
import YoutubeEmbed from "~/components/youtube-embed";

interface PendahuluanPageProps {
  title: string;
  markdown: string;
  previousPage?: string;
  homePage: string;
  nextPage?: string;
}

export const loader = async ({ params }: { params: { materiId: string } }) => {
  console.log("Loading level content", params.materiId);

  let material: Material | null = null;
  let back: Material | null = null;
  let next: Material | null = null;

  let contentIndex = 0;
  let materialIndex = 0;
  let contentUrl = "";
  courseData.contents.forEach((c, cindex) => {
    c.materials.forEach((m, mindex) => {
      if (m.slug === params.materiId) {
        material = m;
        contentIndex = cindex;
        materialIndex = mindex;
        contentUrl = c.slug;
        return;
      }
    });
  });

  // logic to check back and next material
  if (courseData.contents[contentIndex].materials[materialIndex - 1]) {
    back = courseData.contents[contentIndex].materials[materialIndex - 1];
  }
  if (courseData.contents[contentIndex].materials[materialIndex + 1]) {
    next = courseData.contents[contentIndex].materials[materialIndex + 1];
  }

  if (!material) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({
    material: material as Material,
    back: back as Material | null,
    next: next as Material | null,
    contentUrl,
  });
};

const MateriPage: React.FC<PendahuluanPageProps> = () => {
  const { material, back, next, contentUrl } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="mb-12 flex max-w-[600px] m-auto flex-col">
        <h2 className="text-5xl font-bold text-blue-800 mb-8 text-center">
          {material.title}
        </h2>
        {/* render description */}
        <p className="text-center capitalize text-slate-500 mb-8">
          {material.description}
        </p>
        <div className="flex flex-col">
          {material.type === "video" ? (
            <YoutubeEmbed videoId={material.content} />
          ) : (
            <ReactMarkdown
              // remarkPlugins={[remarkGfm]}
              className="prose lg:prose-xl text-black markdown-body"
            >
              {material.content}
            </ReactMarkdown>
          )}
          <div className="flex justify-between mt-4">
            {back ? (
              <GameButtonLink to={`/materi-detail/${back.slug}`}>
                Kembali
              </GameButtonLink>
            ) : (
              <GameButtonLink variant="default" to={`/materi`}>
                Kembali Ke Materi
              </GameButtonLink>
            )}
            {next ? (
              <GameButtonLink to={`/materi-detail/${next.slug}`}>
                Lanjutkan
              </GameButtonLink>
            ) : (
              <GameButtonLink variant="outlined" to={`/materi`}>
                Materi
              </GameButtonLink>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MateriPage;
