import React from "react";

const ProjectCard = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="w-full h-full group transition-all relative rounded-xl hover:rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        loading="lazy"
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        src={props.image}
        alt=""
      />
      <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
        <h2 className="uppercase text-4xl md:text-5xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">
          View Project
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
