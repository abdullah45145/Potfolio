import React from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import ProjectCard from "../component/ProjectCard.jsx";

import bookbuilder from "../assets/pro2.png";
import image2 from "../assets/project2.png";
import main1 from "../assets/project3/main1.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 0, image: bookbuilder },
    { id: 1, image: image2 },
    { id: 2, image: main1 },
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

  useGSAP(() => {
    gsap.utils.toArray(".hero").forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? 120 : -120, // left / right
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // cleanup on unmount
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  });

  return (
    <div className="lg:p-4 p-2 mb-[10vh]">
      {/* Heading */}
      <div className="pt-[10vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
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
