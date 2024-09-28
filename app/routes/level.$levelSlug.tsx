import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import LevelOverviewPage from "~/components/level-overview-page";
import { courseData } from "~/content";

export const loader = async ({ params }: { params: { levelSlug: string } }) => {
  const content = courseData.contents.find((c) => c.slug === params.levelSlug);
  if (!content) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ content });
};

export default function LevelOverview() {
  const { content } = useLoaderData<typeof loader>();

  return <LevelOverviewPage content={content} />;
}
