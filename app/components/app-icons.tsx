import React from "react";
import { Link } from "@remix-run/react";
import {
  BookOpen,
  HelpCircle,
  FileText,
  File,
  Award,
  Zap,
  User,
} from "lucide-react";
const AppIcons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full max-w-xl mx-auto">
      <IconLink to="/pendahuluan" icon={<BookOpen />} label="Pendahuluan" />
      <IconLink to="/petunjuk" icon={<HelpCircle />} label="Petunjuk" />
      <IconLink to="/materi" icon={<FileText />} label="Materi" />
      <IconLink to="/latihan" icon={<File />} label="Latihan" />
      <IconLink to="/kuis" icon={<Award />} label="Kuis" />
      <IconLink to="/referensi" icon={<Zap />} label="Referensi" />
      <IconLink to="/creator" icon={<User />} label="Creator" />
    </div>
  );
};

const IconLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
}> = ({ to, icon, label }) => (
  <div className="w-28 h-28 p-4 group-hover:border group-hover:border-blue-500 group-hover:rounded-full group">
    <Link
      to={to}
      className="group relative flex flex-col items-center text-gray-600 hover:text-blue-500"
    >
      {React.cloneElement(icon as any, {
        className: "h-10 w-10 mb-2 relative z-10",
      })}
      <span className="text-xs font-medium relative z-10 text-center">
        {label}
      </span>
    </Link>
  </div>
);

export default AppIcons;
