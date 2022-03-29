import { images } from "./index";

const projects = [
  {
    id: 1,
    name: "Website Portfolio",
    img: [images.portfolio2, images.portfolio1, images.portfolio3],
    className: "col-lg-4 col-md-6 portfolio-item filter-web",
    category: "Web design",
    client: "Self",
    project_date: "01 March, 2021",
    project_url: "https://terantelevi.netlify.app/",
    title: "A web portfolio built with react",
    description:
      "A portfolio site is an extension of a freelancer's (or company's) résumé. It provides a convenient way for potential clients to view your work while also allowing you to expand on your skills and services.",
  },
  {
    id: 2,
    name: "Matrix Rain with p5.js",
    img: [images.rain1, images.rain2, images.p5],
    className: "col-lg-4 col-md-6 portfolio-item filter-js",
    category: "Javascript",
    client: "Self",
    project_date: "28 April, 2021",
    project_url: "https://github.com/leviterante/Matrix-Rain",
    title: "A recreation of the matrix digital rain using p5.js",
    description:
      "Matrix digital rain, Matrix code or sometimes green rain, is the computer code featured in the Matrix series. The falling green code is a way of representing the activity of the simulated reality environment of the Matrix on screen by kinetic typography. ",
  },
  {
    id: 3,
    name: "UI/UX Restaurant Website",
    img: [images.restaurant1, images.restaurant2, images.restaurant3],
    className: "col-lg-4 col-md-6 portfolio-item filter-ui",
    category: "UI/UX Design",
    client: "Self",
    project_date: "07 December, 2021",
    project_url: "https://github.com/leviterante/modern-ui-ux-restaurant",
    title: "Landing page for a restaurant",
    description:
      "Built with React, this landing page was created with modern UI/UX features in mind.",
  },
  {
    id: 4,
    name: "Christine Mosser",
    img: [images.chrisbijoux1, images.chrisbijoux2, images.chrisbijoux3],
    className: "col-lg-4 col-md-6 portfolio-item filter-web",
    category: "E-Commerce Website",
    client: "Christine Mosser",
    project_date: "05 January, 2022",
    project_url: "https://www.chrisbijoux.com/",
    title: "",
    description:
      "An E-Commerce Website that provides rare and unique jewelry to its customers",
  },
];

export default projects;
