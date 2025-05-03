## Readme to the project file

### Purpose: 
the aim of the project is to dynamically prioritize the work teams’ project files across departments and to inform everyone about the current GPU server usage possibilities. Thus one can schedule and prepare their project in advance, besides entire 24/7 GPU server usage. 

### Features: 
it has dynamic schedule table, Gantt chart for across-projects timeline, scatter plot to show both priority score and follow order. One can add a new project to the dashboard and timeline. Dashboard can be sorted by user name, project, score, deadline, etc. Dark and light mode themes are available. It has real-time updates, one can develop a real time feedback loop based on gpu log data. 

### Architecture frontend: 
Frontend architecture has distributed structure. The frontend uses react, node js and tailwind css to create the feature side. It contains three different tabs for dashboard, Gantt chart and scatter plot. On the right side, a new project can be added to be scored and to be plotted in the visualization tools.

### Architecture backend: 
The backend consists of a json file that is integrated with scheduling logic. It is attached using a basic client server configuration.

### Deployment: 
temporary local deployment using `npm start` command

### Installation guide: 
correct configuration files are available in the subfolders, you need node js and the correct version of tailwind respectively. From console run `npm install`, otherwise once command finishes run `npm start` from root folder to instantiate instances of front- and backend simultaneously.`Set-ExecutionPolicy` to bypass in the command window or in powershell might be necessary.

### Colors: 
Colors needed to be set by constant values. The following colors are available for the dark and light themes in a color palette:

- Primary: #0B367A
- Secondary: #208A8B
- Accent: #E5C370
- Background: #F8F8F8

Light and Dark modes were configured via CSS variables or Tailwind config. Due to the tailwind css not being generated properly, a custom tailwind-config crawler was put in place to instantiate missing css properties defined by color constants. The diagrams have the same red, yellow and green shade of coloring regarding priority and score (high - medium - low).
