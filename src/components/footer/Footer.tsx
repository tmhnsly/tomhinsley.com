import styles from "./footer.module.scss";
import { Button } from "../button/Button";
import { Tooltip } from "../tooltip/Tooltip";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  DoubleArrowUpIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { scrollToTop } from "../../helpers/scrollToTop";
import { LinkButton } from "../linkButton/LinkButton";

interface INavBarProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Footer: React.FC<INavBarProps> = () => {
  return (
    <footer className={styles.footer}>
      <Tooltip content={"Back to top"}>
        <Button
          ariaLabel="Back to top"
          onClick={() => scrollToTop()}
          theme="transparent"
        >
          <DoubleArrowUpIcon />
        </Button>
      </Tooltip>
      <ul className={styles.links}>
        <li>
          <Tooltip content={"Instagram"}>
            <LinkButton
              to="https://www.instagram.com/tomhinsley/"
              ariaLabel="Open Instagram"
              theme="transparent"
            >
              <InstagramLogoIcon />
            </LinkButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"Github"}>
            <LinkButton
              to="https://github.com/tmhnsly"
              ariaLabel="Open Github"
              theme="transparent"
            >
              <GitHubLogoIcon />
            </LinkButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"LinkedIn"}>
            <LinkButton
              to="https://uk.linkedin.com/in/tmhnsly"
              ariaLabel="Open LinkedIn"
              theme="transparent"
            >
              <LinkedInLogoIcon />
            </LinkButton>
          </Tooltip>
        </li>
      </ul>
    </footer>
  );
};
