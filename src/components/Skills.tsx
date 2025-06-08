import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<
    Record<string, number>
  >({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML", percentage: 95, icon: "🌐" },
    { name: "JavaScript", percentage: 90, icon: "⚡" },
    { name: "React", percentage: 75, icon: "⚛️" },
    { name: "CSS", percentage: 70, icon: "🎨" },
    { name: "Github", percentage: 80, icon: "🔧" },
    { name: "Node.js", percentage: 40, icon: "🟢" },
    { name: "TypeScript", percentage: 60, icon: "🔵" },
    { name: "Tailwind CSS", percentage: 55, icon: "💨" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateSkills();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateSkills = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        animateCounter(skill.name, skill.percentage);
      }, index * 200);
    });
  };

  const animateCounter = (skillName: string, targetPercentage: number) => {
    let current = 0;
    const increment = targetPercentage / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        current = targetPercentage;
        clearInterval(timer);
      }
      setAnimatedPercentages((prev) => ({
        ...prev,
        [skillName]: Math.round(current),
      }));
    }, 40);
  };

  const handleSkillClick = (skill: (typeof skills)[0]) => {
    setAnimatedPercentages((prev) => ({ ...prev, [skill.name]: 0 }));
    setTimeout(() => animateCounter(skill.name, skill.percentage), 100);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tech stack and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const animatedPercentage = animatedPercentages[skill.name] || 0;

            return (
              <div
                key={skill.name}
                className={`bg-secondary/30 border border-border/50 backdrop-blur-xl rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleSkillClick(skill)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={skill.name}
                    >
                      {skill.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {animatedPercentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-border/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
                      style={{ width: `${animatedPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Skill Level Description */}
                <div className="mt-3 text-sm text-muted-foreground">
                  {animatedPercentage >= 90 && "Expert Level"}
                  {animatedPercentage >= 80 &&
                    animatedPercentage < 90 &&
                    "Advanced"}
                  {animatedPercentage >= 70 &&
                    animatedPercentage < 80 &&
                    "Intermediate"}
                  {animatedPercentage < 70 && "Developing"}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Click on any skill to see the animation again!
          </p>
          <button
            onClick={() => {
              setIsVisible(false);
              setAnimatedPercentages({});
              setTimeout(() => {
                setIsVisible(true);
                animateSkills();
              }, 300);
            }}
            className="btn-secondary"
          >
            Animate All Skills
          </button>
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </section>
  );
};

export default Skills;
