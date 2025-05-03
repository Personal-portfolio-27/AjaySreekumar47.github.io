
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/project/ProjectCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

// Images for different project types based on keywords/languages
const getProjectImage = (repo: Repository): string => {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const langs = (repo.language || "").toLowerCase();
  const topics = repo.topics.map(t => t.toLowerCase());
  
  // Data science/ML projects
  if (
    topics.some(t => ['machine-learning', 'ml', 'ai', 'data-science', 'pytorch', 'tensorflow'].includes(t)) || 
    name.includes('ml') || name.includes('ai') || desc.includes('machine learning') || desc.includes('neural')
  ) {
    return "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80";
  }
  
  // Python projects
  else if (langs === 'python' || name.includes('py') || topics.includes('python')) {
    return "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80";
  }
  
  // Web/Frontend projects
  else if (
    langs === 'javascript' || langs === 'typescript' || langs === 'html' || 
    topics.some(t => ['react', 'vue', 'angular', 'web', 'frontend'].includes(t))
  ) {
    return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80";
  }
  
  // Data analysis/visualization
  else if (
    name.includes('data') || desc.includes('data') || desc.includes('analysis') || 
    topics.some(t => ['data-analysis', 'visualization', 'tableau', 'analytics'].includes(t))
  ) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80";
  }
  
  // Mobile/App development
  else if (
    topics.some(t => ['android', 'ios', 'mobile', 'app'].includes(t)) ||
    name.includes('app') || desc.includes('mobile')
  ) {
    return "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80";
  }
  
  // Backend/server
  else if (
    langs === 'java' || langs === 'c#' || langs === 'go' ||
    topics.some(t => ['backend', 'server', 'api', 'database'].includes(t))
  ) {
    return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80";
  }
  
  // Default image for other projects
  return "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80";
};

const ProjectsPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/AjaySreekumar47/repos?sort=updated&direction=desc&per_page=100');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred fetching GitHub repositories');
        console.error('Error fetching GitHub repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Calculate total pages based on repositories count
  const totalPages = Math.ceil(repositories.length / itemsPerPage);
  
  // Get current page's repositories
  const currentRepositories = repositories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to build project data from GitHub repository
  const buildProjectFromRepo = (repo: Repository) => ({
    title: repo.name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: repo.description || 'No description available',
    tags: repo.topics.length > 0 ? repo.topics : [repo.language || 'Other'],
    achievements: [],
    githubUrl: repo.html_url,
    demoUrl: repo.homepage || undefined,
    technologies: repo.language ? [repo.language] : ['Various'],
    imageUrl: getProjectImage(repo), // Add image based on project type
  });

  // Generate array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-background/80 shadow-sm backdrop-blur-md py-3 z-50">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-black dark:text-white hover:text-data-blue dark:hover:text-data-blue transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/AjaySreekumar47" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
          </Button>
        </div>
      </header>
      
      <main className="container pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">My GitHub Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Explore all my projects from GitHub, showcasing my work in machine learning, data science, and software development.
        </p>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-data-blue"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-4 rounded-md">
            <p className="font-medium">Error loading projects</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {currentRepositories.map((repo) => (
                <ProjectCard 
                  key={repo.name} 
                  project={buildProjectFromRepo(repo)} 
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(currentPage - 1)} 
                        />
                      </PaginationItem>
                    )}
                    
                    {pageNumbers.map(number => (
                      <PaginationItem key={number}>
                        <PaginationLink 
                          isActive={currentPage === number}
                          onClick={() => setCurrentPage(number)}
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(currentPage + 1)}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
