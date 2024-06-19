import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const VideoModal = ({ isOpen, onClose, title, videoId }) => {
  return (
    <ChakraProvider>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "80vw", md: "500px" }}
      >
        <ModalOverlay
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ModalContent
            bg="black"
            height={{ base: "80vh", md: "85vh" }}
            mx="3"
            border="1px solid white"
          >
            <ModalHeader color="white">{title}</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody height="90vh">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </ChakraProvider>
  );
};

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
          className="bg-red p-5 rounded-2xl sm:w-[360px] w-full"
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
                <i className="fab fa-youtube text-white">
                  {/* Youtube fa-youtube icon */}
                </i>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Tilt>
      </motion.div>

      <VideoModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        title={title}
        videoId={videoId}
      />
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
