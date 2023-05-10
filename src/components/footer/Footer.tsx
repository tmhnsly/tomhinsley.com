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

interface INavBarProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Footer: React.FC<INavBarProps> = () => {
  return (
    <footer className={styles.footer}>
      <Tooltip content={"Back to top"}>
        <Button onClick={() => scrollToTop()} theme="transparent">
          <DoubleArrowUpIcon />
        </Button>
      </Tooltip>
      <ul className={styles.links}>
        <li>
          <Tooltip content={"Instagram"}>
            <Button theme="transparent">
              <InstagramLogoIcon />
            </Button>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"Github"}>
            <Button theme="transparent">
              <GitHubLogoIcon />
            </Button>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={"LinkedIn"}>
            <Button theme="transparent">
              <LinkedInLogoIcon />
            </Button>
          </Tooltip>
        </li>
      </ul>
    </footer>
  );
};
