import styles from "./navBar.module.scss";
import { Button } from "../button/Button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";

interface INavBarProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const NavBar: React.FC<INavBarProps> = () => {
  const [darkMode, toggleDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <nav className={styles.navBar}>
      <Tooltip content={"Home"}>
        <Button
          ariaLabel="Open homepage"
          theme="transparent"
          className={styles.logo}
        >
          ⚡️ Playground
        </Button>
      </Tooltip>
      <div className={styles.links}>
        <Button ariaLabel="Open About page" theme="transparent">
          About
        </Button>
        <Button ariaLabel="Open Contact" theme="transparent">
          Contact
        </Button>
        <Tooltip content={"Toggle theme"}>
          <Button
            ariaLabel="Toggle theme"
            theme="transparent"
            onClick={() => toggleDarkMode(!darkMode)}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Tooltip>
      </div>
    </nav>
  );
};
