import React from "react";
import Slider from "infinite-react-carousel";
import SliderItem from "../components/SliderItem";

const ProjectSlider = ({data}) => {

  const sliderSettings = {
    centerPadding: 20,
    dots: true,
    duration: 100,
    slidesToShow: 3,
  };

  return (
  <Slider {...sliderSettings} className="slider">
    {data.projects.map((project,index)=>{
        return <SliderItem key={index}
            title={project.title}
            comments={project.comments}
            description={project.description}
            author={project.author}
            money={project.money}
            deadline={project.deadline}
        />
    })}
  </Slider>);
};

export default ProjectSlider;
