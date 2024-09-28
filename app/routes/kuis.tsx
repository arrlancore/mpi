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
  const title = "Quiz";
  const markdownContent = "";
  return (
    <Layout>
      <ContentMD
        nextPage="/referensi"
        previousPage="/latihan"
        homePage={appConfig.home}
        title={title}
        markdown={markdownContent}
        iframe={
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://quizizz.com/join?gc=80163997"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        }
      />
    </Layout>
  );
};

export default PendahuluanPage;
