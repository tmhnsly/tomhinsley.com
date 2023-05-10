import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Action,
} from "@radix-ui/react-alert-dialog";
import styles from "./alertDialog.module.scss";
import { Button } from "../button/Button";

interface IAlertDialogProps {
  triggerText: string;
  title: string;
  description: string;
}

// TO DO : UPDATE TO BE LESS SPECIFIC

export const AlertDialog: React.FC<IAlertDialogProps> = ({
  triggerText,
  title,
  description,
}) => (
  <Root>
    <Trigger asChild>
      <Button mode="border">{triggerText}</Button>
    </Trigger>
    <Portal>
      <Overlay className={styles.overlay} />
      <Content className={styles.content}>
        <Title className={styles.title}>{title}</Title>
        <Description className={styles.description}>{description}</Description>
        <div className={styles.buttons}>
          <Cancel asChild>
            <Button mode="solid">Cancel</Button>
          </Cancel>
          <Action asChild>
            <Button theme="positive" mode="border">
              Accept
            </Button>
          </Action>
        </div>
      </Content>
    </Portal>
  </Root>
);
