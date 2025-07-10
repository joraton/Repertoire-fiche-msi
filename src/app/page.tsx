'use client';
import ChapterTable from '@/components/ChapterTable';
import { Database, Star, Brain, Lightbulb, Award } from 'lucide-react';

const chaptersData = [
  {
    id: 1,
    chapterNumber: "1",
    title: "MSI Chapitre 1",
    url: "https://msi-chap-1-t22b.vercel.app/",
    status: 'active' as const
  },
  {
    id: 2,
    chapterNumber: "2",
    title: "MSI Chapitre 2",
    url: "https://msi-chap-2.vercel.app/",
    status: 'active' as const
  },
  {
    id: 3,
    chapterNumber: "3",
    title: "MSI Chapitre 3",
    url: "https://msi-chap3.vercel.app/",
    status: 'active' as const
  },
  {
    id: 4,
    chapterNumber: "4",
    title: "MSI Chapitre 4",
    url: "https://msi-chap4.vercel.app/",
    status: 'active' as const
  },
  {
    id: 5,
    chapterNumber: "5",
    title: "MSI Chapitre 5",
    url: "https://msi-chap5.vercel.app/",
    status: 'active' as const
  },
  {
    id: 6,
    chapterNumber: "6",
    title: "MSI Chapitre 6",
    url: "https://msi-chap6.vercel.app/",
    status: 'active' as const
  },
  {
    id: 7,
    chapterNumber: "7",
    title: "MSI Chapitre 7",
    url: "",
    status: 'inactive' as const
  },
  {
    id: 8,
    chapterNumber: "8",
    title: "MSI Chapitre 8",
    url: "https://msi-chap-8.vercel.app/",
    status: 'active' as const
  },
  {
    id: 9,
    chapterNumber: "9",
    title: "MSI Chapitre 9",
    url: "https://msi-chap-9.vercel.app/",
    status: 'active' as const
  },
  {
    id: 10,
    chapterNumber: "10",
    title: "MSI Chapitre 10",
    url: "https://msi-chap-10.vercel.app/",
    status: 'active' as const
  },
  {
    id: 11,
    chapterNumber: "11",
    title: "MSI Chapitre 11",
    url: "https://msi-chap11.vercel.app/",
    status: 'active' as const
  },
  {
    id: 12,
    chapterNumber: "12",
    title: "MSI Chapitre 12",
    url: "https://msi-chap-12.vercel.app/",
    status: 'active' as const
  },
  {
    id: 13,
    chapterNumber: "13",
    title: "MSI Chapitre 13",
    url: "https://msi-chap-13.vercel.app/",
    status: 'active' as const
  },
  {
    id: 14,
    chapterNumber: "14",
    title: "MSI Chapitre 14",
    url: "https://msi-chapitre-14.vercel.app/",
    status: 'active' as const
  },
  {
    id: 15,
    chapterNumber: "15",
    title: "MSI Chapitre 15",
    url: "https://msi-chapitre-15.vercel.app/",
    status: 'active' as const
  },
  {
    id: 16,
    chapterNumber: "16",
    title: "MSI Chapitre 16",
    url: "https://msi-chap-16.vercel.app/",
    status: 'active' as const
  },
  {
    id: 17,
    chapterNumber: "17",
    title: "MSI Chapitre 17",
    url: "https://msi-chap-17.vercel.app/",
    status: 'active' as const
  },
  {
    id: 18,
    chapterNumber: "18",
    title: "MSI Chapitre 18",
    url: "https://msi-chap-18.vercel.app/",
    status: 'active' as const
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8 md:py-16 shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 md:mb-6">
            <div className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <Database className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
                Répertoire de Fiches MSI
              </h1>
              <p className="text-blue-100 text-sm md:text-lg mt-1 md:mt-2">Partagé gratuitement pour votre réussite</p>
            </div>
          </div>
          <p className="text-base md:text-xl opacity-90 max-w-2xl mx-auto px-2">
            Accédez facilement à tous les chapitres et ressources pédagogiques
          </p>
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs md:text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{chaptersData.filter(c => c.status === 'active').length} chapitres actifs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>{chaptersData.filter(c => c.status === 'inactive').length} en préparation</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* Site de Définition Section */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-emerald-300/30 mb-6 md:mb-8">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
              <Database className="w-5 h-5 md:w-7 md:h-7" />
              Site de Définition
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Accédez au glossaire complet des termes MSI
            </p>
            <a
              href="https://site-def-msi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Database className="w-4 h-4 md:w-5 md:h-5" />
              Consulter les Définitions
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">Catalogue des Chapitres</h2>
            <p className="text-sm md:text-base text-gray-600">Explorez les différents modules du cours MSI</p>
          </div>
        </div>
        
        <ChapterTable chapters={chaptersData} />

        {/* Contenu des Fiches Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl border border-purple-300/30 mb-6 md:mb-8 mt-6 md:mt-8">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
              <Star className="w-5 h-5 md:w-7 md:h-7" />
              Contenu Enrichi des Fiches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Brain className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">Cas Pratiques IA</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Exercices inventés par l&apos;IA avec corrections détaillées pour une meilleure compréhension</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">Cours Illustrés</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Schémas explicatifs et moyens mnémotechniques pour faciliter l&apos;apprentissage</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/30">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">Corrigés DSCG</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Questions d&apos;examen DSCG corrigées en lien direct avec chaque chapitre</p>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-8 md:mt-16">
          <div className="bg-gradient-to-r from-white/80 via-blue-50/80 to-indigo-50/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Header du footer avec pattern décoratif */}
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 md:px-8 py-4 md:py-6">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center border border-white/30">
                  <span className="text-lg md:text-2xl font-bold text-white">DJ</span>
                </div>
                <div className="text-center text-white">
                  <h3 className="text-lg md:text-xl font-bold">Darmouni Jonathan</h3>
                  <p className="text-blue-100 text-xs md:text-sm">Développeur Full-Stack & Étudiant DSCG</p>
                </div>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="px-4 md:px-8 py-4 md:py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Informations académiques */}
                <div className="text-center md:text-left">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2 md:mb-3 flex items-center justify-center md:justify-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Contexte Académique
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Sites développés dans le cadre des études en <strong>Management des Systèmes d&apos;Information</strong>,
                    en s&apos;appuyant sur les cours de <strong>Monsieur Dietz</strong> et des épreuves du 
                    <strong> DSCG</strong> (Diplôme Supérieur de Comptabilité et de Gestion).
                  </p>
                </div>

                {/* Technologies utilisées */}
                <div className="text-center md:text-left">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2 md:mb-3 flex items-center justify-center md:justify-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
                    <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
                      Next.js 14
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full border border-indigo-200">
                      TypeScript
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
                      Tailwind CSS
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full border border-purple-200">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>

              {/* Statistiques */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center">
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-blue-600">{chaptersData.length}</div>
                    <div className="text-xs text-gray-600">Chapitres</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-green-600">{chaptersData.filter(c => c.status === 'active').length}</div>
                    <div className="text-xs text-gray-600">Sites Actifs</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-orange-600">{chaptersData.filter(c => c.status === 'inactive').length}</div>
                    <div className="text-xs text-gray-600">En Développement</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-emerald-600">1</div>
                    <div className="text-xs text-gray-600">Site Définition</div>
                  </div>
                </div>
              </div>

              {/* Footer bottom */}
              <div className="flex flex-col md:flex-row items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-0">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Site en ligne</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  © 2024 - Projet éducatif DSCG
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
