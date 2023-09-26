import { useState, useEffect } from "react";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { motion, useAnimation } from "framer-motion";
import { slideIn } from "../utils/motion";

function Contents() {
    const [isLoading, setIsLoading] = useState(true);
    const loaderControls = useAnimation();

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const handlePlaylistLoad = () => {
        // Trigger the animation to move the loader element out of the view
        loaderControls.start({ x: "100%" });
        setIsLoading(false);
    };

    return (
        <div className="flex justify-center w-[100%] align-middle column">

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='flex-[0.25] w-[90%]'>


<YouTubePlaylist
      apiKey="AIzaSyBbChToYFyckDdNxxawgP3zSbFYuDtpmsM"
      playlistId="PLl06sy6-giMTuQKR6aODHLHqkF0rOH20o"
      uniqueName="videos"
    />

                </motion.div>
        </div>
    );
}

export default Contents;
