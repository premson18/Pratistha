import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import BackgroundIMG from "../assets/background.jpeg"

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => (
      {
    background: {
       color: {
         value: "transparent",
         opacity:0,
      
       },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 20,
            duration: 12,
          },
          grab: {
            distance: 200,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
          opacity:0.5,
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 3 },
        },
        postion:{
          value:{}
        }
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      style={{
        position: "relative", // Ensure z-index takes effect
        zIndex: -1, // Set your desired z-index value
      }}
    >
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
