import React from "react";
import { PopupWidget } from "react-calendly";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {ServiceCard} from "./About.jsx"
import { Link } from "react-router-dom";

const HireMeCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000000",
        color: "#fff",
        border: "1px solid white",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const HireMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Hire me as an independant freelancer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hire Me! 👋
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <>
            {["Native Developer", "Backend Developer", "Automations Developer"].includes(service.title) && 
          <Link to="https://calendly.com/business-f3zu/30min">
            <ServiceCard key={service.title} index={index} {...service} />
          </Link>
            }
          </>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(HireMe, "hire");
