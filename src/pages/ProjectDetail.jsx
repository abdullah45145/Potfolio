import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import image1 from "../assets/AIBookBuilder/image1.png";
import image2 from "../assets/AIBookBuilder/image2.png";
import image3 from "../assets/AIBookBuilder/image3.png";
import image4 from "../assets/AIBookBuilder/image4.png";
import image5 from "../assets/AIBookBuilder/image5.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    0: {
      title: "Project : AI Book Builder",
      description:
        "A modern, high-converting website designed and developed for creating Ai Books.",
      about:
        "AI Book Builder is a scalable full-stack application built to streamline AI-driven book creation.It combines a responsive frontend with a robust backend architecture for smooth performance. The system supports secure authentication, dynamic content handling, and optimized data storage. Its modern UI ensures an efficient and engaging experience for content creators.",
      technologies: ["React", "Tailwind CSS", "Express", "Nodejs", "Mongo db"],
      images: [image1, image2, image3, image4, image5],
      features: [
        "Fully Responsive Design",
        "High Performance",
        "Modern UI/UX",
      ],
    },

    1: {
      title: "Project 2: Widescape",
      description: "A premium website designed with strong brand identity.",
      about: "Focused on UX, animations, and performance metrics.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      images: [
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      ],
      features: [
        "Brand-Aligned Design",
        "Mobile-First",
        "Smooth Animations",
        "Accessibility",
      ],
    },

    2: {
      title: "Project 3: OKA",
      description: "Luxury e-commerce experience for OKA.",
      about: "Advanced product filtering with seamless checkout.",
      technologies: ["Next.js", "Tailwind CSS", "E-Commerce"],
      images: [
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      ],
      features: [
        "Luxury UI",
        "Advanced Filters",
        "Fast Checkout",
        "SEO Optimized",
      ],
    },

    3: {
      title: "Project 4: Opto",
      description: "Modern tech-focused website with interactive UI.",
      about: "Tech-forward design with animations and comparison tools.",
      technologies: ["React", "Tailwind", "Animation"],
      images: [
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      ],
      features: ["Product Comparison", "Smooth Animations", "Fast Load Times"],
    },

    4: {
      title: "Project 5: Shelton",
      description: "Large-scale multi-page website solution.",
      about: "Complex filtering, CMS integration, and SEO optimization.",
      technologies: ["Next.js", "Tailwind", "CMS"],
      images: [
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      ],
      features: ["Multi-page Architecture", "Dynamic CMS", "SEO Optimized"],
    },

    5: {
      title: "Project 6: Mobile App UI",
      description: "Innovative mobile application interface.",
      about: "Gesture-based navigation with offline support.",
      technologies: ["React Native", "Expo", "Redux", "Firebase"],
      images: [
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      ],
      features: ["Gesture Navigation", "Offline Mode", "Push Notifications"],
    },
  };

  const project = projectsData[Number(id)];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 border-amber-400 px-7 rounded-3xl py-3 border text-white hover:text-white mb-10 transition"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-14 max-w-3xl">
          {project.description}
        </p>

        {/* About */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            {project.about}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
          {/* Feautures */}
         <div>
          <h2 className="text-3xl font-bold mb-6 mt-4">Feautures</h2>
          <div className="flex flex-wrap gap-4">
            {project.features.map((feature, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-1 p-10  gap-8 mb-20 ">
        {project.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Project preview"
            className="rounded-2xl border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
