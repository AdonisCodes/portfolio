import React, { useMemo, useState, useEffect } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "react-three-fiber";

import CanvasLoader from "../Loader";

const City = ({ buildingHeights }) => {
  const numRows = 7; // Number of rows
  const numCols = buildingHeights.length / numRows; // Calculate number of columns

  return (
    <>
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <group key={rowIndex} position={[0, 0, rowIndex * 5]}>
          {Array.from({ length: numCols }).map((_, colIndex) => {
            const index = rowIndex * numCols + colIndex;
            const height = buildingHeights[index] || 1; // Default height if no data
            return (
              <mesh
                key={colIndex}
                position={[colIndex * 5, height / 2, 0]}
                rotation={[0, 0, 0]}
              >
                <boxBufferGeometry args={[4, height, 4]} />
                <meshStandardMaterial color="green" />
              </mesh>
            );
          })}
        </group>
      ))}
    </>
  );
};

const EarthCanvas = () => {
  const [buildingHeights, setBuildingHeights] = useState([]);

  // Fetch and parse the JSON data (Replace with your actual data fetching logic)
  useEffect(() => {
    // Simulate fetching JSON data
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
            Accept: '*/*',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            Referer: 'https://honzaap.github.io/',
            Origin: 'https://honzaap.github.io',
            Connection: 'keep-alive',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site'
          }
        };
        
        const response = await fetch(`https://corsproxy.io/?url=${encodeURIComponent("https://uvdvlzzjiciqsfkl7u37nnhnsm0sleur.lambda-url.eu-central-1.on.aws/?username=AdonisCodes&year=2023")}`, options)
          
        const data = await response.json();
        const heigtsArr = data.user.contributionsCollection.contributionCalendar.weeks
        console.log(heigtsArr)
        const buildingHeights = heigtsArr.map((week) => {
          return week.contributionDays.reduce((acc, day) => {
            console.log(day.contributionCount)
            return acc + day.contributionCount;
          }, 0);
        });
        console.log(buildingHeights)
        setBuildingHeights(buildingHeights);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []); // Add an empty array as the second argument to useEffect

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <City buildingHeights={buildingHeights} />
      <Preload all />
      <CanvasLoader />
    </Canvas>
  );
};

export default EarthCanvas;