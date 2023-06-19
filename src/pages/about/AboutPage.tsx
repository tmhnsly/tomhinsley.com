import styles from "./aboutPage.module.scss";

function AboutPage() {
  return (
    <div>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Bio.</h1>
          <div className={styles.paragraph}>
            <p>
              As a child who grew up amidst the rise of the internet, I've
              always been fascinated by how technologies can shape our lives.
              From dabbling in music and film production to plunging into
              software development, I've cultivated an array of skills that not
              only include frontend development but also touch upon
              organizational development and creative marketing.
            </p>
            <p>
              When I'm not developing, I engage in various creative activities -
              playing guitar, making short films, and game development. As a
              tech enthusiast, I enjoy exploring the latest trends and have a
              recent interest in retro game emulation. Additionally, I love the
              great outdoors and often find myself hiking, climbing, and
              exploring.
            </p>
          </div>
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Skills.</h1>
          <div className={styles.paragraph}>
            <p>
              With a strong background in HTML/CSS, JavaScript, TypeScript,
              SCSS, and experience with React and Next.js, I am confident in my
              ability to take on diverse projects. In addition, I am competent
              in using Storybook and Jest for UI testing, Git/GitHub/GitLab for
              version control, and NPM for package management. As a Certified
              ScrumMaster, I also bring an understanding of Agile methodologies
              to the table.
            </p>
            <p>
              After an intensive full-stack development program at iO Academy, I
              started my journey as a Front End Developer at Rocketmakers. In
              addition to the software solutions I've developed there, I've also
              made significant contributions to Armstrong, our open-source UI
              library, and created an HTML/CSS syllabus for work experience
              students. My prior experiences at Apple Inc, Microsoft, and
              Nespresso have contributed to my holistic understanding of
              technology and customer-centric design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
