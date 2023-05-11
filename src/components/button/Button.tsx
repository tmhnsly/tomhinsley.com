import { concat } from "../../helpers/concat";
import styles from "./button.module.scss";

interface IButtonProps extends React.PropsWithChildren {
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
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  mode,
  theme,
  size,
  className,
  ariaLabel,
}) => {
  return (
    <button
      className={concat(className, styles.button)}
      onClick={onClick}
      data-theme={theme}
      data-mode={mode}
      data-size={size}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "default",
  mode: "default",
  size: "medium",
};
