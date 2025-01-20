import React from "react";
import { Button } from "@/components/ui/button";

export interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  children,
  ...props
}) => {
  if (href) {
    // Verifica se o href é um link local ou remoto
    const isMailTo = href.startsWith("mailto:");
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const isDownloadable = href.endsWith(".pdf") || href.endsWith(".zip");

    return (
      <a
        href={href}
        download={isDownloadable ? true : undefined} // Aplica download se for um arquivo
        target={isMailTo ? undefined : "_blank"} // Abre no mesmo local para mailto
        rel={isExternal ? "noopener noreferrer" : undefined} // Proteção para links externos
        className={props.className}
      >
        <Button {...props}>
          <span>{children}</span>
        </Button>
      </a>
    );
  }

  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
