import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import axios from "axios";
import Modal from "react-modal";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const API_KEY = "AIzaSyBbChToYFyckDdNxxawgP3zSbFYuDtpmsM";
const CHANNEL_ID = "UC8ZHsW4tHGVavsIRSPThKsw";
const MAX_RESULTS = 6;

const fetchVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    );

    const videos = response.data.items.map((item) => {
      const { id, snippet } = item;
      const { videoId } = id;
      const { title, description, thumbnails } = snippet;
      const thumbnail = thumbnails.medium.url;

      return {
        videoId,
        title,
        description,
        thumbnail,
      };
    });

    return videos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const VideoCard = ({ index, title, description, thumbnail, videoId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
    console.log("open");
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black p-5 rounded-2xl sm:w-[360px] w-full"
          style={{ border: "1px solid white" }}
        >
          <div
            className="relative w-full h-[230px]"
            onClick={handleOpenModal}
            style={{ cursor: "pointer" }}
          >
            <img
              src={thumbnail}
              alt="video_thumbnail"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      // eslint-disable-next-line max-len
                      d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.5 10.5l-7 5V5l7 5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Tilt>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Video Player Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

const Contents = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      const latestVideos = await fetchVideos();
      setVideos(latestVideos);
    };

    fetchLatestVideos();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My content</p>
        <h2 className={`${styles.sectionHeadText}`}>Videos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Check out my videos to learn more about my work and interests. Each
          video showcases a different aspect of my skills and experience, and
          provides real-world examples of my work. You can find links to the
          code repositories and live demos in the video descriptions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {videos.map((video, index) => (
          <VideoCard key={`video-${index}`} index={index} {...video} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contents, "");
