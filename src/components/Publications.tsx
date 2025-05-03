
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileText, Users, BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  keywords: string[];
  link?: string;
  image?: string;
}

const publicationsData: Publication[] = [
  {
    title: "LLM-Assisted Translation of Legacy FORTRAN Code to C++: A Cross-Platform Study",
    authors: "Nishath Rajiv Ranasinghe, Shawn M. Jones, Michal Kucer, Ayan Biswas, Daniel O'Malley, Alexander Buschmann Most, Selma Liliane Wanna, Ajay Sreekumar",
    venue: "North American Chapter of the Association for Computational Linguistics (NAACL) Workshop",
    year: "2025",
    abstract: "Large Language Models (LLMs) are increasingly being leveraged for generating and translating scientific computer codes by both domain-experts and non-domain experts. Fortran has served as one of the go to programming languages in legacy high-performance computing (HPC) for scientific discoveries. Despite growing adoption, LLM-based code translation of legacy code-bases has not been thoroughly assessed or quantified for its usability. Here, we studied the applicability of LLM based translation of Fortran to C++ as a step towards building an agentic-workflow using openweight LLMs on two different computational platforms. We statistically quantified the compilation accuracy of the translated C++ codes, measured the similarity of the LLM translated code to the human translated C++ code, and statistically quantified the output similarity of the Fortran to C++ translation.",
    keywords: [
      "Large Language Models",
      "LLMOps",
      "C++",
      "Fortran",
      "Uncertainty Quantification",
      "CodeBLEU",
      "Code translation",
      "Machine Learning",
      "Computational Linguistics"
    ],
    link: "https://aclanthology.org/2025.aisd-main.6/",
    image: "/placeholder.svg"
  }
];

const PublicationCard = ({ publication }: { publication: Publication }) => (
  <Card className="border-data-blue/10 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in">
    <CardHeader className="pb-2 pt-4 px-4 bg-data-light/50 border-b border-data-blue/10">
      <div className="flex items-center gap-2 mb-1">
        <FileText className="h-4 w-4 text-data-blue" />
        <h3 className="text-base font-semibold text-gray-600 dark:text-gray-200">{publication.title}</h3>
      </div>
      <div className="text-xs text-black dark:text-white flex justify-between items-center gap-1 mt-1">
        <div className="flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          <span>{publication.venue}, {publication.year}</span>
        </div>
        {publication.link && (
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-data-blue hover:underline flex items-center gap-1 text-xs"
          >
            <ExternalLink className="h-3 w-3" />
            View Publication
          </a>
        )}
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <div className="flex items-center gap-1 mb-2">
        <Users className="h-3 w-3 text-data-blue flex-shrink-0" />
        <p className="text-xs text-gray-600 dark:text-gray-300">{publication.authors}</p>
      </div>
      
      <div className="mt-3">
        <h4 className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">Abstract:</h4>
        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">{publication.abstract}</p>
      </div>
      
      <div className="mt-3">
        <h4 className="text-xs font-semibold mb-1 text-black dark:text-white">Keywords:</h4>
        <div className="flex flex-wrap gap-1">
          {publication.keywords.map((keyword, index) => (
            <span 
              key={index} 
              className="text-xs px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded-full border border-data-blue/20 shadow-sm text-black dark:text-white"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Publications = () => {
  const llmCodeImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";

  return (
    <section id="publications" className="py-8 bg-white dark:bg-background">
      <div className="section-container py-8">
        <h2 className="section-title mb-6 text-black dark:text-white">Publications</h2>
        
        <div className="grid gap-6">
          {publicationsData.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={llmCodeImage}
              alt="Code related to Large Language Models" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-black dark:text-white">LLM Research</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Exploring advanced applications of language models in scientific computing</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Programming with Large Language Models" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-black dark:text-white">Code Translation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Leveraging LLMs for legacy code modernization and cross-platform development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
