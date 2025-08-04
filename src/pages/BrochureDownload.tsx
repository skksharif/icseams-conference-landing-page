import React from "react";
import { FileText, Download } from "lucide-react";

const BrochureDownload: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Conference Brochure
        </h2>
        <p className="text-gray-600 mb-8">
          Download the official ICSEAMS-2026 brochure for complete details on the event, sessions, keynotes, and submission guidelines.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <FileText size={48} className="text-conference-orange" />
          <a 
            href="/brouchure.pdf" 
            download 
            className="inline-flex items-center gap-2 px-6 py-3 bg-conference-orange text-white rounded-full font-medium shadow hover:bg-orange-600 transition"
          >
            <Download size={20} />
            Download Brochure (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
