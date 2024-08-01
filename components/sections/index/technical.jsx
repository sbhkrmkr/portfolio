// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a self-taught software engineer with over 5+ years of experience as a Technical Lead and Full-Stack Engineer, I have led and delivered sophisticated software solutions, including CMS, SaaS, and blockchain-based dApps, using a diverse set of tools and languages while ensuring code quality and security."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            {/* <CopyBlock
              title="Core Competencies"
              icon={["fat", "chart-network"]}
              copy=""
              iconClass={about.icon}
              containerClass={about.container}
            /> */}
            <BadgesBlock
              title="Technologies I'm passionate about working with"
              copy="With over 7+ years in IT and 5+ years of experience in developing web applications and leading large-scale teams, I possess a deep understanding of server-side, client-side, and blockchain node interactions in top-tier software products. Throughout consistent production releases and comprehensive software life cycles, I have leveraged a diverse array of technologies."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I admire and aspire to work with"
              copy="I am passionate about solving complex problems through code and enjoy collaborating with like-minded individuals. My expertise includes front-end and back-end development, API integrations, DevOps, and CI/CD pipelines. As a self-taught software engineer, I have honed my skills and am eager to contribute to the MERN stack while learning Java, Rust, Go, and Python, focusing on machine learning and AI. My goal is to drive innovation and excellence in large-scale, collaborative projects."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4} /> */}
    </Section>
  );
}

const software = [
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJs", type: "devicon" },
  { key: "redux", name: "Redux", type: "devicon" },
  { key: "nodejs", name: "NodeJs", type: "devicon" },
  { key: "express", name: "ExpressJs", type: "devicon" },
  { key: "python", name: "Flask", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "materialui", name: "Material UI", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "sonarqube", name: "SonarQube", type: "devicon" },
  { key: "linux", name: "Linux", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "gitlab", name: "Gitlab", type: "devicon" },
  { key: "github", name: "Github", type: "devicon" },
  { key: "amazonwebservices", name: "Amazon Web Services", type: "devicon" },
  { key: "googlecloud", name: "Google Cloud", type: "devicon" },
];

const tech = [
  { key: "java", name: "Java", type: "devicon" },
  { key: "rust", name: "Rust", type: "devicon" },
  { key: "go", name: "Go", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "ruby", name: "Ruby", type: "devicon" },
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "qt", name: "QT", type: "devicon" },
  { key: "pytorch", name: "PyTorch", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "solidity", name: "Solidity", type: "devicon" },
];
