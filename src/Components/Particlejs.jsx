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
         value: "",
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
            distance: 190,
          },
        },
      },
      particles: {
        color: {
          value: "#ff6600",
        },
        links: {
          color: "#ff6600",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 0.5,
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
          value: 250,
        },
        opacity: {
          value: 0.0,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 4 },
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
