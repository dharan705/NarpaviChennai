import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Design.scss";

export default function Preloader({ onFinish }) {
  const container = useRef(null);
  const letters = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: onFinish,
    });

    tl.fromTo(
      letters.current,
      { opacity: 0, y: 40, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 1.2,
      }
    )
      .to(letters.current, {
        opacity: 0,
        y: -40,
        filter: "blur(6px)",
        stagger: 0.04,
        duration: 1,
        delay: 0.8,
      })
      .to(container.current, {
        y: "-100%",
        duration: 1.2,
      });

  }, [onFinish]);

  const text = "narpavi research institute";

  return (
    <div className="preloader" ref={container}>
      <h1>
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (letters.current[i] = el)}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
