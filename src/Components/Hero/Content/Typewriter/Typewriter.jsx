import React, { useEffect } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  useEffect(() => {
    const options = {
      strings: ["Welcome"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy(); // Clean up the Typed instance on component unmount
    };
  }, []);

  return (
    <div>
      <h3>
        <span className="auto-type welcome"></span>
      </h3>
    </div>
  );
};

export default Typewriter;
