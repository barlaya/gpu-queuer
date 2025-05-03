
import { addDays, subDays } from 'date-fns';

export interface Project {
  id: string;
  username: string;
  projectAbbreviation: string;
  deadline: Date;
  topsisScore: number;
  department: string;
  fileSize: number;
  duration: number; // in days
}

// Generate dates relative to current date
const today = new Date();

export const mockProjects: Project[] = [
  {
    id: "1",
    username: "john_doe",
    projectAbbreviation: "UX-REDES",
    deadline: addDays(today, 5),
    topsisScore: 0.85,
    department: "Design",
    fileSize: 25.4,
    duration: 3,
  },
  {
    id: "2",
    username: "sarah_smith",
    projectAbbreviation: "API-INT",
    deadline: addDays(today, 2),
    topsisScore: 0.76,
    department: "Engineering",
    fileSize: 12.7,
    duration: 4,
  },
  {
    id: "3",
    username: "mike_johnson",
    projectAbbreviation: "ML-TRAIN",
    deadline: addDays(today, 8),
    topsisScore: 0.92,
    department: "Data Science",
    fileSize: 75.1,
    duration: 5,
  },
  {
    id: "4",
    username: "lisa_wong",
    projectAbbreviation: "FIN-REP",
    deadline: addDays(today, 1),
    topsisScore: 0.68,
    department: "Finance",
    fileSize: 5.3,
    duration: 2,
  },
  {
    id: "5",
    username: "alex_brown",
    projectAbbreviation: "SEC-AUDIT",
    deadline: addDays(today, 3),
    topsisScore: 0.88,
    department: "Security",
    fileSize: 18.9,
    duration: 3,
  },
  {
    id: "6",
    username: "emma_davis",
    projectAbbreviation: "MKT-CAM",
    deadline: addDays(today, 7),
    topsisScore: 0.72,
    department: "Marketing",
    fileSize: 42.6,
    duration: 6,
  },
  {
    id: "7",
    username: "ryan_wilson",
    projectAbbreviation: "DEV-DASH",
    deadline: addDays(today, 4),
    topsisScore: 0.81,
    department: "Engineering",
    fileSize: 33.2,
    duration: 4,
  },
  {
    id: "8",
    username: "olivia_martin",
    projectAbbreviation: "HR-TRAIN",
    deadline: addDays(today, 9),
    topsisScore: 0.65,
    department: "HR",
    fileSize: 8.7,
    duration: 2,
  },
  {
    id: "9",
    username: "jacob_thompson",
    projectAbbreviation: "CUST-SUP",
    deadline: subDays(today, 1),
    topsisScore: 0.90,
    department: "Customer Support",
    fileSize: 15.4,
    duration: 3,
  },
  {
    id: "10",
    username: "sophia_garcia",
    projectAbbreviation: "PROD-DEV",
    deadline: addDays(today, 6),
    topsisScore: 0.78,
    department: "Product",
    fileSize: 22.8,
    duration: 5,
  }
];

// Function to calculate priority based on deadline and TOPSIS score
export const calculatePriority = (project: Project): 'high' | 'medium' | 'low' => {
  const daysTillDeadline = Math.ceil((project.deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysTillDeadline <= 2) return 'high';
  if (project.topsisScore >= 0.85) return 'high';
  if (daysTillDeadline <= 5 || project.topsisScore >= 0.75) return 'medium';
  return 'low';
};
