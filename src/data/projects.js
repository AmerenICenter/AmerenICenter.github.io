const projects = [
  {
    image: 'https://picsum.photos/536/354',
    name: 'Gas Leak Detection Algorithm (GLeNDA)',
    text: 'The GLeNDA project involves predicting gas leaks by looking at the past few weeks of usage data. If the recent usage is unusually high relative to the previous time span, that may indicate a gas leak. The goal of this project is to enhance customer safety by detecting minor leaks before they culminate a more dangerous issue. ​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Machine Learning Front End',
    text: 'The ML Front End team is currently developing an application that will be used by gas asset workers in the field. Using the GLeNDA algorithm, certain meters will be determined as leaky and alert the gas asset workers through this application. Workers will be able to view potentially leaky meters and their gas usage, provides a workflow where the worker can mark the meter as fixed or false positive as they address this. ​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Align App',
    text: 'The align app mobile is a tool being developed for the customer engagement team to help better align all the different initiatives their  teams have going on. Users are able to input information about their on-going or future projects and then see what other projects are going on at the same time. Users can then decide if they would like to collaborate with another team on a similar project as well as getting an overview of what is going on inside the team. All of this in a mobile format so that users can still easily navigate the app without having to go on their desktop.',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'EV Analytics',
    text: 'The EV Analytics project will focus on creating a dashboard to display data from electric vehicles and pave the way for a better understanding of trends and peaks of charging data received. ​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Gas Usage Forecasting',
    text: 'The goal of the Gas Usage Forecasting project is to forecast gas usage by Missouri customers to better estimate and meet customer demands. This project hopes to estimate peak hourly usage as well as forecast the growth of customers, and display the data neatly in a form of a dashboard. ​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'CPOC Portal',
    text: "The CPOC project is focused on reinventing the look, feel, and functionality of the Corporate Projects Oversight Committee Portal. This portal is used to approve and monitor all of Ameren's projects that cost over $20 million. We are leveraging Angular, Python, and SQL to develop a secure web based application.​​​​​​​",
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'JD Power',
    text: 'The JD Power projects plans to utilize in-house surveys to help understand and predict the outcome of external JD Power surveys. The team will develop an algorithm to help predict these scores from the in-house surveys that can be automatically refreshed and neatly displayed in a dashboard.',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Renewables Tracker',
    text: 'The Renewables Tracker hopes to track current and potential acquisitions and development for renewable energy locations. The dashboard will be able to generate graphs, track the development of projects, import data, and search existing projects all in the form of a database.​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Smart Documentation',
    text: 'Smart Documentation hopes to develop a pipeline to automatically generate documentation for Python libraries. ​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'Ansible API',
    text: 'The Ansible API is an API that helps run Ansible playbooks remotely through a web browser. The API is built in Flask and lets users input their desired playbook to run along with parameters. It also encrypts users credentials and allows for multiple playbooks to be run and monitored simultaneously.',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
  {
    image: 'https://picsum.photos/536/354',
    name: 'SharePoint File',
    text: 'The goal of the file rotate was to rotate files so SharePoint users do not overwrite the same file. The file rotate script needed to be configurable and take in a time interval which the user wants to rotate and also a SharePoint site folder in which they would want files to be rotated. The script checks age of file in folder and if the age is greater than the interval then it will move it to the archive subfolder. If an archive subfolder is not already created, the script will automatically create one. Archive folder are created by year.​​​​​​​',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
  },
];

export default projects;
