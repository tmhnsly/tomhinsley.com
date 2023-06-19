import MemojiWave from "../../../public/assets/images/memoji-wave.webp";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { concat } from "../../helpers/concat";

import styles from "./homePage.module.scss";

function HomePage() {
  return (
    <div className={styles.content}>
      <section className={styles.avatarAnimation}>
        <img
          className={styles.avatar}
          src={MemojiWave}
          alt={"Man waving memoji"}
        />
        <div className={styles.gradient}>
          <div className={concat(styles.blob, styles.left)} />
          <div className={concat(styles.blob, styles.right)} />
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Web Developer. Film Maker. Sound Designer.
          </h1>
          <div className={styles.paragraph}>
            <p>
              Welcome! I'm Tom Hinsley, a Front End Developer with a keen eye
              for detail, a love for creative pursuits, and a knack for building
              scalable and accessible solutions.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <div className={styles.paragraph}>
            <p>
              With a strong foundation in React, TypeScript, and SCSS, I've
              worked on various projects that require meticulous attention to
              quality, performance, and user experience. I also take joy in
              fostering team engagement and creating engaging marketing content.
              Dive in to learn more about me.
            </p>
          </div>
        </div>
      </section>
      <LinkButton
        mode="border"
        to="mailto:hello@tomhinsley.com"
        ariaLabel="Contact me button"
        theme="positive"
      >
        Send me an email
      </LinkButton>
    </div>
  );
}

export default HomePage;
