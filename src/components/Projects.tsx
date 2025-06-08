import { useState } from "react";
import ProjectRow from "./ProjectRow";
import taskManagementImg from "../assets/task-management.jpeg";
import movieManiacImg from "../assets/movie-maniac.jpeg";
import bookConnectImg from "../assets/book_connect.jpeg";
import shoppingCartImg from "../assets/shopping-cart.jpeg";
import codeCuisineImg from "../assets/code-cuisine.jpeg";
import podcastImg from "../assets/podcast.jpeg";
import memeGeneratorImg from "../assets/meme_generator.jpeg";
import taskOrganiserImg from "../assets/task-organiser.jpeg";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Task Management",
      description:
        "A task manager where users can create, edit, delete tasks, and change their status.",
      image: taskManagementImg,
      technologies: ["JavaScript", "HTML5", "Tailwind CSS"],
      liveDemo: "https://mytask-managementapp.netlify.app",
      sourceCode: "https://github.com/Lee-04-Git/task-management-app",
    },
    {
      id: 2,
      title: "Movie Maniac",
      description:
        "A movie app where users can toggle between popular and trending movies.",
      image: movieManiacImg,
      technologies: ["React", "JavaScript", "CSS3"],
      liveDemo: "https://my-movie-radar.netlify.app",
      sourceCode: "https://github.com/Lee-04-Git/Movie-Maniac",
    },
    {
      id: 3,
      title: "Book Connect",
      description:
        "A book app where users can search popular titles by genre and author.",
      image: bookConnectImg,
      technologies: ["JavaScript", "HTML5", "CSS3"],
      liveDemo: "https://book-connect-site.netlify.app",
      sourceCode:
        "https://github.com/Lee-04-Git/CS20240156_WFC2407_A_Lee-Maalgraaff_DJS04",
    },
    {
      id: 4,
      title: "Shopping Cart",
      description:
        "A shopping cart that lets users add items and remove them with a click.",
      image: shoppingCartImg,
      technologies: ["JavaScript", "CSS3", "Firebase"],
      liveDemo: "https://my-shopping-cart-site.netlify.app",
      sourceCode:
        "https://github.com/Lee-04-Git/Module_10R_CS20240156_WFC07_A_Lee-Maalgraaff_SDF10_R-main.git",
    },
  ];

  const webApplications = [
    {
      id: 5,
      title: "Code Cuisine",
      description:
        "A shopping cart that updates prices as you add or remove food items.",
      image: codeCuisineImg,
      technologies: ["JavaScript", "HTML5", "CSS3"],
      liveDemo: "https://codecuisine-site.netlify.app",
      sourceCode:
        "https://github.com/Lee-04-Git/Module_6_CS20240156_WFC07_A_Lee-Maalgraaff_JSL06",
    },
    {
      id: 6,
      title: "Custom Podcast",
      description:
        "A podcast app that lets users browse, sort, listen to episodes, and add favorites.",
      image: podcastImg,
      technologies: ["React", "JavaScript", "CSS3"],
      liveDemo: "https://my-final-podcast-app.netlify.app",
      sourceCode:
        "https://github.com/Lee-04-Git/CS20240156_WFC2407_A_Lee-Maalgraaff_DJS11",
    },
    {
      id: 7,
      title: "Meme Generator",
      description:
        "A meme generator that lets users create their own meme templates.",
      image: memeGeneratorImg,
      technologies: ["React", "JavaScript", "CSS3"],
      liveDemo: "https://my-meme-generator-site.netlify.app",
      sourceCode: "https://github.com/Lee-04-Git/Meme-Generator",
    },
    {
      id: 8,
      title: "To-Do List",
      description:
        "A to-do list where you can add tags to tasks and set their status.",
      image: taskOrganiserImg,
      technologies: ["React", "JavaScript", "CSS3"],
      liveDemo: "https://task-organiser-site.netlify.app",
      sourceCode: "https://github.com/Lee-04-Git/Task-Trek",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I’ve built recently while exploring
            new ideas and learning different technologies.
          </p>
        </div>

        {/* Featured Work */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground flex items-center">
            <span className="w-1 h-8 bg-primary mr-4 rounded-full"></span>
            Featured Work
          </h3>
          <ProjectRow projects={featuredProjects} />
        </div>

        {/* Web Applications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground flex items-center">
            <span className="w-1 h-8 bg-blue-400 mr-4 rounded-full"></span>
            Other Work
          </h3>
          <ProjectRow projects={webApplications} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 glass rounded-2xl">
          <h4 className="text-2xl font-bold mb-4 text-foreground">
            Interested in collaborating?
          </h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
