"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const TechBadge = ({ tech, color = "blue" }) => (
  <motion.span
    className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-${color}-500 rounded-full mr-2 mb-2`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {tech}
  </motion.span>
);

const SkillSection = ({ title, skills }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <TechBadge key={index} tech={skill} />
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({
  title,
  description,
  technologies,
  demoLink,
  repoLink,
}) => (
  <motion.div
    className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    <h3 className="text-xl font-bold mb-2">
      {title}
    </h3>
    <p className="text-gray-300 mb-4">
      {description}
    </p>
    <div className="mb-4">
      {technologies.map((tech, index) => (
        <TechBadge
          key={index}
          tech={tech}
          color="purple"
        />
      ))}
    </div>
    <div className="flex space-x-4">
      {demoLink && (
        <motion.a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Live Demo
        </motion.a>
      )}
      {repoLink && (
        <motion.a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub Repo
        </motion.a>
      )}
    </div>
  </motion.div>
);

const CertificationCard = ({ title, link }) => (
  <motion.div
    className="bg-gray-800 rounded-lg shadow-lg p-4 mb-4"
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    <h3 className="text-lg font-semibold mb-2">
      {title}
    </h3>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      View Certificate
    </motion.a>
  </motion.div>
);

const Profile = () => {
  const [activeTab, setActiveTab] =
    useState("about");
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500); // Simulating loading time
  }, []);

  const skills = {
    programmingLanguages: [
      "JavaScript",
      "Python",
      "TypeScript",
    ],
    frontendTechnologies: [
      "React.js",
      "Next.js",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    backendTechnologies: [
      "Node.js",
      "Express.js",
    ],
    mlTechnologies: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "TensorFlow",
      "Keras",
    ],
    devopsTools: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "OpenShift",
    ],
    databases: ["MongoDB", "Firebase"],
  };

  const projects = [
    {
      title: "Social Media Application",
      description:
        "A social media platform built using Next.js, TypeScript, Tailwind CSS, and Clerk Auth for user authentication.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Clerk Auth",
      ],
      demoLink:
        "https://next-social-app.vercel.app/",
      repoLink:
        "https://github.com/Aliabdo6/next-social",
    },
    {
      title: "Summarize Articles",
      description:
        "A web application that summarizes articles using OpenAI's GPT-4.",
      technologies: [
        "OpenAI GPT-4",
        "JavaScript",
        "React.js",
      ],
      demoLink:
        "https://summarizer-ai.netlify.app/",
    },
    {
      title: "Heart Disease Prediction",
      description:
        "An end-to-end machine learning project for predicting heart disease.",
      technologies: [
        "Python",
        "scikit-learn",
        "Pandas",
        "NumPy",
      ],
      repoLink:
        "https://github.com/Aliabdo6/predicting-heart-disease-sklearn",
    },
    {
      title: "Chest X-ray Pneumonia Detection",
      description:
        "A deep learning project using CNNs to classify chest X-ray images for pneumonia detection.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNNs",
      ],
      repoLink:
        "https://github.com/Aliabdo6/Pneumonia-Classifier-ml",
    },
  ];

  const certifications = [
    {
      title:
        "Meta Front-End Developer Professional Certificate",
      link: "https://www.coursera.org/account/accomplishments/verify/8D9N8FZ8YPZ8",
    },
    {
      title: "Data Camp Data Analyst Certificate",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/b2edcc94eb447760d59fa9aa02bb64d9d423bdc0",
    },
    {
      title:
        "Udacity Professional Front-End Web Developer Nanodegree",
      link: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
    },
    {
      title:
        "IBM Back-End JavaScript Developer Certificate",
      link: "https://www.coursera.org/account/accomplishments/verify/4G8H3HZ8H8XK",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: [
              "20%",
              "20%",
              "50%",
              "50%",
              "20%",
            ],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="bg-blue-500 w-12 h-12"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.header
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Ali Abdo
          </h1>
          <h2 className="text-2xl text-gray-400 mb-8">
            Front-End Developer | React.js | Data
            Analysis | Machine Learning
          </h2>
          <Image
            src="/me.jpg"
            alt="Ali Abdo"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <p className="text-xl max-w-2xl mx-auto">
            Passionate Front-End Developer and
            Machine Learning Enthusiast with a
            deep love for crafting beautiful and
            intuitive web applications.
          </p>
        </motion.header>

        <motion.nav
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <ul className="flex justify-center space-x-4">
            {[
              "about",
              "skills",
              "projects",
              "certifications",
            ].map((tab) => (
              <motion.li
                key={tab}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`px-4 py-2 rounded ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() +
                    tab.slice(1)}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.section
              key="about"
              className="mb-16"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                About Me
              </h2>
              <p className="text-lg mb-4">
                I hold a Bachelor of Science in
                Computer Science from Tanta
                University (2018 - 2022) and have
                earned several professional
                certifications in Front-End
                Development, Data Analysis, and
                Back-End JavaScript Development.
              </p>
              <p className="text-lg mb-4">
                As a front-end enthusiast, I
                specialize in creating engaging
                web experiences with Next.js,
                designing user-friendly
                interfaces, developing robust
                backend solutions, and exploring
                machine learning techniques to
                uncover insights and build
                predictive models.
              </p>
              <p className="text-lg">
                I'm driven by curiosity and a
                desire to tackle new challenges. I
                stay up-to-date with the latest
                advancements in technology and
                continuously seek out
                opportunities to learn and grow.
              </p>
            </motion.section>
          )}

          {activeTab === "skills" && (
            <motion.section
              key="skills"
              className="mb-16"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Skills & Technologies
              </h2>
              {Object.entries(skills).map(
                ([category, techList]) => (
                  <SkillSection
                    key={category}
                    title={category
                      .replace(/([A-Z])/g, " $1")
                      .trim()}
                    skills={techList}
                  />
                )
              )}
            </motion.section>
          )}

          {activeTab === "projects" && (
            <motion.section
              key="projects"
              className="mb-16"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(
                  (project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                )}
              </div>
            </motion.section>
          )}

          {activeTab === "certifications" && (
            <motion.section
              key="certifications"
              className="mb-16"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map(
                  (cert, index) => (
                    <CertificationCard
                      key={index}
                      {...cert}
                    />
                  )
                )}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <motion.section
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-4">
            {[
              {
                href: "mailto:aliabdo12121@outlook.sa",
                icon: FaEnvelope,
                text: "Email",
                bg: "bg-blue-500 hover:bg-blue-600",
              },
              {
                href: "https://www.linkedin.com/in/aliabdo6/",
                icon: FaLinkedin,
                text: "LinkedIn",
                bg: "bg-blue-700 hover:bg-blue-800",
              },
              {
                href: "https://wa.me/201090561644",
                icon: FaWhatsapp,
                text: "WhatsApp",
                bg: "bg-green-500 hover:bg-green-600",
              },
              {
                href: "https://github.com/Aliabdo6",
                icon: FaGithub,
                text: "GitHub",
                bg: "bg-gray-700 hover:bg-gray-800",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`${link.bg} text-white font-bold py-2 px-4 rounded flex items-center`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="mr-2" />{" "}
                {link.text}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Profile;
