import styles from "./navBar.module.scss";
import { Button } from "../button/Button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { LinkButton } from "../linkButton/LinkButton";

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
        <LinkButton
          to="/"
          kind="nav"
          ariaLabel="Open homepage"
          theme="transparent"
        >
          ⚡️ Playground
        </LinkButton>
      </Tooltip>
      <div className={styles.links}>
        <LinkButton
          to="about"
          kind="nav"
          ariaLabel="Open About page"
          theme="transparent"
        >
          About
        </LinkButton>
        <LinkButton
          to="contact"
          kind="nav"
          ariaLabel="Open Contact page"
          theme="transparent"
        >
          Contact
        </LinkButton>
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
