
import { useState } from 'react';
import { Project, mockProjects } from '@/data/mockProjects';
import { useToast } from '@/components/ui/use-toast';

// Simulate a backend API call delay
const SIMULATED_DELAY = 1000;

export const useProjects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Add a new project
  const addProject = async (newProjectData: Omit<Project, 'id' | 'topsisScore'>) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
      
      // In a real app, this would be calculated by the backend
      const topsisScore = Math.random() * 0.3 + 0.6; // Random score between 0.6 and 0.9
      
      const newProject: Project = {
        id: `${projects.length + 1}`,
        topsisScore,
        ...newProjectData,
      };
      
      setProjects(prev => [...prev, newProject]);
      
      toast({
        title: "Project Added",
        description: `${newProjectData.projectAbbreviation} has been added to the schedule.`,
      });
    } catch (error) {
      console.error("Error adding project:", error);
      toast({
        title: "Error",
        description: "Failed to add new project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh project priorities (simulate recalculation)
  const refreshProjects = async () => {
    setIsRefreshing(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY * 1.5));
      
      // In a real app, this would recalculate TOPSIS scores from the backend
      const updatedProjects = projects.map(project => ({
        ...project,
        topsisScore: Math.min(0.99, Math.max(0.5, project.topsisScore + (Math.random() * 0.2 - 0.1))),
      }));
      
      setProjects(updatedProjects);
      
      toast({
        title: "Priorities Refreshed",
        description: "The project priorities have been recalculated.",
      });
    } catch (error) {
      console.error("Error refreshing priorities:", error);
      toast({
        title: "Error",
        description: "Failed to refresh priorities. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return {
    projects,
    isLoading,
    isRefreshing,
    addProject,
    refreshProjects,
  };
};
