import React from "react";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../component/ProjectCard.jsx";
import bookbuilder from "../assets/pro2.png";
import image2 from "../assets/project2.png";
import gsap from "gsap";
import main1 from "../assets/project3/main1.png";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 0,
      image: bookbuilder
    },
    {
      id: 1,
      image: image2,
    },
    {
      id: 2,
      image: main1,
    },
    {
      id: 3,
      image:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    },
    {
      id: 4,
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      id: 5,
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      y: 150,
      opacity: 0,
      scale: 0.9,
      rotateX: 10,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".lol",
        start: "top 105%",
      },
    });
  });

  return (
    <div className="lg:p-4 p-2 mb-[10vh]">
      <div className=" pt-[10vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl font-inter uppercase">
          Projets
        </h2>
      </div>
      <div className="-lg:mt-20 lol grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((elem) => (
          <div
            key={elem.id}
            className="hero h-[400px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden"
          >
            <ProjectCard
              image={elem.image}
              onClick={() => navigate(`/project/${elem.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
