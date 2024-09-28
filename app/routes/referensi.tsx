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
  const title = "Referensi";
  const markdownContent = `
- Winarsih, Aini, dkk.2008.IPA Terpadu. Jakarta:Departemen Pendidikan Nasional 

- Fitri Amalia. 2021. Ilmu Pengetahuan Alam dan Sosial. Jakarta Pusat: Pusat Kurikulum dan Perbukuan Badan Penelitian dan Pengembangan dan Perbukuan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi

- Youtube : 

  [https://www.youtube.com/watch?v=JnNY6ooUh34&t=246s](https://www.youtube.com/watch?v=JnNY6ooUh34&t=246s)

  [https://www.youtube.com/watch?v=PwDF-Pp-MYA](https://www.youtube.com/watch?v=PwDF-Pp-MYA)

  https://www.youtube.com/watch?v=TtxD0Us0Ni0

  <https://www.youtube.com/watch?v=LMUAZz29uH0>

- [https://wordwall.net/id/embed/b2fd9b55ba2c4b2c8301eaaffd9fe01d?themeId=21&templateId=69&fontStackId=0](https://wordwall.net/id/embed/b2fd9b55ba2c4b2c8301eaaffd9fe01d?themeId=21&templateId=69&fontStackId=0)

- <https://quizizz.com/join?gc=80163997> 
  `;
  return (
    <Layout>
      <ContentMD
        nextPage="/creator"
        previousPage="/kuis"
        homePage={appConfig.home}
        title={title}
        markdown={markdownContent}
      />
    </Layout>
  );
};

export default PendahuluanPage;
