import { Fab, Zoom } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useRef, useState } from "react";

const ScrollArrow = () => {
  const [mode, setMode] = useState("down"); // down | up | hidden
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const nearTop = scrollY < windowHeight * 0.3;
      const nearFooter =
        scrollY + windowHeight > docHeight - windowHeight * 0.3;

      // ✅ FINAL POSITION ALWAYS WINS
      if (nearTop) {
        setMode("down");
        return;
      }

      if (nearFooter) {
        setMode("up");
        return;
      }

      // ⛔ During active user-triggered scroll → keep current arrow
      if (isUserScrolling.current) return;

      // middle content
      setMode("hidden");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const markUserScroll = () => {
    isUserScrolling.current = true;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 600); // just enough for smooth scroll
  };

  const scrollDown = () => {
    markUserScroll();
    setMode("down");

    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  const scrollUp = () => {
    markUserScroll();
    setMode("up");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* DOWN ARROW */}
      <Zoom in={mode === "down"}>
        <Fab
          onClick={scrollDown}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1200,
            background:
              "linear-gradient(135deg, #22D3EE 0%, #6366F1 100%)",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
          }}
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </Zoom>

      {/* UP ARROW */}
      <Zoom in={mode === "up"}>
        <Fab
          onClick={scrollUp}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1200,
            background:
              "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default ScrollArrow;
