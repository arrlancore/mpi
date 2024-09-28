// components/PendahuluanPage.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@remix-run/react";
import { ChevronLeft, House, ChevronRight } from "lucide-react";
import ContentMD from "~/components/content-md";
import Layout from "~/components/layout";
import { appConfig } from "~/config";

interface PendahuluanPageProps {
  title: string;
  markdown: string;
  previousPage?: string;
  homePage: string;
  nextPage?: string;
}

const PendahuluanPage: React.FC<PendahuluanPageProps> = ({}) => {
  const title = "Creator";
  const markdownContent = `![](https://pjrjxbdononaezaz.public.blob.vercel-storage.com/Colorful%20Cute%20Memphis%20Content%20Creator%20Card%20\(2\)-bEyAcUqppHzRGjP6j8s0F9Pf0FYThb.png)`;
  return (
    <Layout>
      <ContentMD
        previousPage="/pendahuluan"
        homePage={appConfig.home}
        title={title}
        markdown={markdownContent}
      />
    </Layout>
  );
};

export default PendahuluanPage;
