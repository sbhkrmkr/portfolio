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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="As a seasoned Technical Lead and Full-Stack Engineer with over 5+ years of experience, I offer expertise in front-end development, UI design, full-stack development, and architectural planning. My R&D background drives innovation and excellence, enabling me to deliver cutting-edge solutions in software development."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/subho-karmakar.JPG" alt="subho karmakar photo" />
          </div>
          <div className={about.copy}>
            {/* <div
              className={about.container}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "1.75rem" }}>Core Competencies</h3>
            </div> */}

            <CopyBlock
              title="Technical Leadership"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "shield-halved"]}
              copy="Alongside my engineering skills, I excel in team leadership, strategic planning, and time management. My diverse skill set, honed through R&D initiatives and IT best practices, has consistently driven innovative solutions and project success."
            />
            <BadgesBlock
              title="Planning & Management"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="Executed continuous production releases with code, security, and computational optimizations, backed by research into business logic and deliverables. I excel in diverse roles within a team, with a proven track record in Frontend, Backend, DevOps, and CI/CD pipeline setups, engaging with various technical touchpoints throughout the software development lifecycle."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "Research-Analysis", type: "fad" },
  { key: "qrcode", name: "Plannings", type: "fad" },
  { key: "window", name: "Monitoring", type: "fad" },
  { key: "cubes", name: "Strategic-leveling", type: "far" },
  { key: "layer-plus", name: "Development", type: "fad" },
  { key: "solar-system", name: "CI | CD", type: "fad" },
];
