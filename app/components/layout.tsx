import { Link } from "@remix-run/react";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r flex justify-between items-center bg-white text-slate-700 py-4 px-6">
        <Link to="/" className="z-50">
          <img src="/pembatik.png" width="120" height="auto" alt="Pembatik" />
        </Link>

        <Link to="/creator" className="z-50">
          <h1 className="text-sm font-bold bg-clip-text text-blue-700 animate-pulse shadow-lg rounded-full px-4 py-2 border-2 border-blue-600 hover:scale-105 transition-transform duration-300">
            Kenny Rahayu S.Pd
          </h1>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 main-background">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-indigo-100 border-t border-solid border-blue-700 py-4 text-center">
        <p>© Kenny Rahayu</p>
      </footer>
    </div>
  );
};

export default Layout;
