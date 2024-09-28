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
  const title = "Petunjuk Penggunaan";
  const markdownContent = `
  
  **1. Pada halaman utama pilihlah icon / tombol yang diinginkan**
  
  **2. Sebelum masuk pada halaman utama**
  
  **3. Tombol pendahuluan berisi tujuan pembelajaran dan cakupan materi**
  
  **4. Tombol petunjuk berisi petunjuk penggunaan MPI**
  
  **5. Tombol materi berisi materi yang dipelajari dilengkapi dengan video pembelajaran** 
  
  **6. Tombol latihan soal berisi latihan soal untuk mengetahui pemahaman terhadap materi ini**
  
  **7. Tombol quiz berisi soal evaluasi atau asesmen formatif** 
  
  **8. Tombol home digunakan untuk kembali ke menu utama**
  `;
  return (
    <Layout>
      <ContentMD
        nextPage="/materi"
        previousPage="/pendahuluan"
        homePage={appConfig.home}
        title={title}
        markdown={markdownContent}
      />
    </Layout>
  );
};

export default PendahuluanPage;
