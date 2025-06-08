import { useState, useEffect } from "react";
import { ChevronDown, Download } from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Hello, I'm Lee Maalgraaff...",
    "I'm a Software Developer...",
    "Welcome to my portfolio!",
  ];

  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex % texts.length];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("skills");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1q3Mr0w_kbhRsn2_ZnNMc47RGeflDOv2R/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative section-padding">
      <div className="container-max text-center z-10">
        <div className="space-y-6 animate-fade-in-up">
          {/* Typewriter Text */}
          <div className="h-20 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">{currentText}</span>
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Feel free to check out my CV down below
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={downloadCV}
              className="btn-primary animate-glow group inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
