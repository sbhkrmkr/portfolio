// Core packages
import SectionTitle from "../blocks/section.title.block";
import Container from "../structure/container";
import Section from "../structure/section";

// Section scss
import about from "../../styles/sections/index/about.module.scss";
import section from "../../styles/blocks/section.title.module.scss";
import button from "../../styles/blocks/button.module.scss";
import content from "../../content/index/hero.json";
import CopyBlock from "../blocks/about.copy.block";
import BadgesBlock from "../blocks/about.badges.block";

/**
 * Section: Contact
 * Highlight your contact skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Contact />
 */
export default function Contact() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container
        spacing={["verticalXXXLrg"]}
        style={{
          alignItems: "center",
        }}
      >
        {/* <SectionTitle
          title="Contact Me"
          preTitle="Let's talk"
          subTitle="Something on your mind? Get in touch and let's chat!"
        /> */}
        <section
          className={`${about.content} ${about.container}`}
          style={{
            height: "50vh",
          }}
        >
          <div
            className="contact-section"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <>
              <div
                className={`${section.title}`}
                style={{
                  position: "absolute",
                  zIndex: "1000000000",
                  padding: "2rem",
                }}
              >
                <h4>Let's talk</h4>
                <h2>Contact Me</h2>
                <p className="subtitle">
                  Something on your mind? Get in touch and let's chat!
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className={`button ${button.primary}`}
                    onClick={() =>
                      (window.location = "mailto:sbhkrmkr1@gmail.com")
                    }
                  >
                    {content.buttons.primary.title}
                  </button>
                  <button
                    className={`button ${button.secondary} leaveSite`}
                    onClick={() =>
                      window.open(
                        "https://www.subhokarmakar.com/assets/Subhabrata-Karmakar-CV.pdf",
                        "_blank"
                      )
                    }
                  >
                    Resume{" "}
                    <span
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      👋
                    </span>
                  </button>
                </div>
              </div>
            </>
            <section>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </section>
          </div>
        </section>
      </Container>
    </Section>
  );
}
