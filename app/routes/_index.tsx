import HomePage from "~/components/home-page";
import Layout from "~/components/layout";
import { courseData } from "~/content";

export default function Index() {
  return (
    <Layout>
      <HomePage course={courseData} />
    </Layout>
  );
}
