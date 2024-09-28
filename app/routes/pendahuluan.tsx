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
  const title = "Pendahuluan";
  const markdownContent = `
  ### **Tujuan Pembelajaran**

- Mengenal tiga wujud benda: padat, cair, dan gas.

- Memahami proses perubahan wujud benda: mencair, menguap, membeku, dan mengembun.

- Menjelaskan contoh perubahan wujud benda dalam kehidupan sehari-hari.


### **Cangkupan Materi**

- Wujud Benda dan Sifatnya

- Perubahan Wujud Benda

- Pengaruh Suhu terhadap Perubahan Wujud Benda
  `;
  return (
    <Layout>
      <ContentMD
        nextPage="/petunjuk"
        homePage={appConfig.home}
        title={title}
        markdown={markdownContent}
      />
    </Layout>
  );
};

export default PendahuluanPage;
