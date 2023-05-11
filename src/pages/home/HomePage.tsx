import { useState } from "react";
import { Button } from "../../components/button/Button";
import { AlertDialog } from "../../components/alertDialog/AlertDialog";
import { Tooltip } from "../../components/tooltip/Tooltip";

import styles from "./homePage.module.scss";
import { concat } from "../../helpers/concat";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.content}>
      <div className={styles.avatarAnimation}>
        <img
          className={styles.avatar}
          src="../../../public/assets/images/memoji-wave.webp"
          alt={"Man waving memoji"}
        />
        <div className={styles.gradient}>
          <div className={concat(styles.blob, styles.left)} />
          <div className={concat(styles.blob, styles.right)} />
        </div>
      </div>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Hello world! ☄️</h1>
          <div className={styles.paragraph}>
            <p>
              Welcome to the Radix playground! It's a bit all over the place
              currently - everything here is just to help get the layout and
              other bits sorted. Hi.
            </p>
            <p>
              Anyways, I hope this is a good amount of text to see how it all
              works. The more, the better really. Most people use lorem impsum,
              but it never seems to read like an actual thing.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.sectionTwo}>
        <AlertDialog
          triggerText={"Click to open"}
          title={"You made it!"}
          description={"Welcome to the alert dialog, take a seat."}
        />
        <div className={styles.buttons}>
          <Tooltip content="Warning theme">
            <Button
              theme="warning"
              mode="border"
              onClick={() => setCount(count + 1)}
            >
              {count}
            </Button>
          </Tooltip>
          <Tooltip content="Negative Button">
            <Button
              theme="negative"
              mode="border"
              onClick={() => setCount(count + 1)}
            >
              {count}
            </Button>
          </Tooltip>
          <Button
            theme="positive"
            mode="border"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button
            theme="info"
            mode="border"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button
            theme="teal"
            mode="border"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button mode="border" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
        </div>
        <div className={styles.buttons}>
          <Button
            theme="warning"
            mode="solid"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button
            theme="negative"
            mode="solid"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button
            theme="positive"
            mode="solid"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
          <Button theme="info" mode="solid" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
          <Button mode="solid" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
        </div>
        <div className={styles.buttons}>
          <Button theme="warning" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
          <Button theme="negative" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
          <Button theme="positive" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
          <Button theme="info" onClick={() => setCount(count + 1)}>
            {count}
          </Button>
          <Button onClick={() => setCount(count + 1)}>{count}</Button>
        </div>
      </div>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>More text! Woah! 🛸</h1>
          <div className={styles.paragraph}>
            <p>
              You've made it this far! This is the second load of text to see if
              the background above works well. The App file is getting a bit
              full, so time to start routing.
            </p>
            <p>
              This is also a test to see roughly how to lay out the sections.
              Could just look up some tutorials. Having the flexibilty to make
              things wide screen is good, but making everything a column can be
              a pain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
