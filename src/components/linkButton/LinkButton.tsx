import { Link, NavLink } from "react-router-dom";
import { concat } from "../../helpers/concat";
import styles from "./linkButton.module.scss";

interface ILinkButtonProps extends React.PropsWithChildren {
  to: string;
  kind?: "route" | "nav" | "external";
  theme?:
    | "default"
    | "negative"
    | "warning"
    | "positive"
    | "info"
    | "teal"
    | "transparent";
  mode?: "default" | "border" | "solid";
  size?: "small" | "medium" | "large";
  className?: string;
  ariaLabel?: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
  kind,
  to,
  children,
  mode,
  theme,
  size,
  className,
  ariaLabel,
}) => {
  return (
    <>
      {kind === "route" && (
        <Link
          to={to}
          className={concat(className, styles.link)}
          data-theme={theme}
          data-mode={mode}
          data-size={size}
          aria-label={ariaLabel}
          data-kind={kind}
        >
          {children}
        </Link>
      )}
      {kind === "nav" && (
        <NavLink
          to={to}
          className={concat(className, styles.link)}
          data-theme={theme}
          data-mode={mode}
          data-size={size}
          aria-label={ariaLabel}
          data-kind={kind}
        >
          {children}
        </NavLink>
      )}
      {kind === "external" && (
        <a
          href={to}
          target="_blank"
          className={concat(className, styles.link)}
          data-theme={theme}
          data-mode={mode}
          data-size={size}
          aria-label={ariaLabel}
          data-kind={kind}
        >
          {children}
        </a>
      )}
    </>
  );
};

LinkButton.defaultProps = {
  theme: "default",
  mode: "default",
  size: "medium",
  kind: "external",
};
