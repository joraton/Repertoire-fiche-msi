'use client';
import { ExternalLink, Eye, Clock, XCircle, BookOpen } from 'lucide-react';

interface ChapterLink {
  id: number;
  chapterNumber: string;
  title: string;
  url: string;
  status: 'active' | 'inactive' | 'coming-soon';
}

export default function ChapterTable({ chapters }: { chapters: ChapterLink[] }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': 
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            <Eye className="h-3 w-3" />
            Disponible
          </div>
        );
      case 'coming-soon': 
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
            <Clock className="h-3 w-3" />
            Bientôt
          </div>
        );
      default: 
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
            <XCircle className="h-3 w-3" />
            Indisponible
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
        <h2 className="text-base md:text-lg font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
          <span className="hidden sm:inline">Chapitres MSI - Management des Systèmes d&apos;Information</span>
          <span className="sm:hidden">Chapitres MSI</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1">{chapters.length} chapitres disponibles</p>
      </div>
      
      {/* Version desktop - tableau */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm uppercase tracking-wide">Chapitre</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm uppercase tracking-wide">Titre</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm uppercase tracking-wide">Statut</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {chapters
              .sort((a, b) => parseInt(a.chapterNumber) - parseInt(b.chapterNumber))
              .map((chapter, index) => (
                <tr 
                  key={chapter.id} 
                  className={`transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {chapter.chapterNumber}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 text-base">
                      {chapter.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(chapter.status)}
                  </td>
                  <td className="px-6 py-4">
                    {chapter.status === 'active' ? (
                      <a
                        href={chapter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Accéder
                      </a>
                    ) : (
                      <button 
                        disabled 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed"
                      >
                        <XCircle className="h-4 w-4" />
                        Non disponible
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Version mobile - cartes */}
      <div className="md:hidden space-y-3 p-4">
        {chapters
          .sort((a, b) => parseInt(a.chapterNumber) - parseInt(b.chapterNumber))
          .map((chapter) => (
            <div 
              key={chapter.id}
              className="bg-gradient-to-r from-white to-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {chapter.chapterNumber}
                  </div>
                  <div className="font-medium text-gray-900 text-sm">
                    {chapter.title}
                  </div>
                </div>
                {getStatusBadge(chapter.status)}
              </div>
              <div className="flex justify-end">
                {chapter.status === 'active' ? (
                  <a
                    href={chapter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Accéder
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-400 text-xs font-medium rounded-lg cursor-not-allowed"
                  >
                    <XCircle className="h-3 w-3" />
                    Non disponible
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
      
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-4 md:px-6 py-3 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>Total: {chapters.length} chapitres</span>
          <span>Actifs: {chapters.filter(c => c.status === 'active').length}</span>
        </div>
      </div>
    </div>
  );
}