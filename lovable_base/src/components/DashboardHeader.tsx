
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw } from "lucide-react";

interface DashboardHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const DashboardHeader = ({ onRefresh, isRefreshing }: DashboardHeaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-brand-primary">Project Scheduler Dashboard</h1>
          <p className="text-brand-secondary-dark mt-1">
            Visualize and manage project priorities based on deadlines and TOPSIS scores
          </p>
        </div>
        <Button 
          onClick={onRefresh} 
          disabled={isRefreshing}
          size="sm"
          className="shrink-0 self-start md:self-auto bg-brand-secondary hover:bg-brand-secondary-dark"
        >
          {isRefreshing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Priority Order
            </>
          )}
        </Button>
      </div>
      <div className="bg-white border border-brand-divider p-4 rounded-lg text-sm shadow-sm">
        <p className="text-brand-text">
          Welcome to your Dynamic Project Scheduler Dashboard! Here, your projects are seamlessly organized by strategic priority and upcoming deadlines. Explore the interactive ranking table, view the timeline of project deadlines on the Gantt chart, and discover how TOPSIS scores balance with urgency through our insightful scatter plot. Hover over any project for detailed insights and add new project data to see the scheduling order update in real time.
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
