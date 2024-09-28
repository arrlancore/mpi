import { json, useLoaderData } from "@remix-run/react";
import CourseLandingPage from "~/components/course-landing-page";
import Layout from "~/components/layout";
import { courseData } from "~/content";

export const loader = async ({ params }: { params: { slug: string } }) => {
  const valid = courseData.slug === params.slug;
  if (!valid) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ courseData });
};

export default function Index() {
  const { courseData } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <CourseLandingPage course={courseData} />
    </Layout>
  );
}
