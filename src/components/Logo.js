import { Image } from "@chakra-ui/image";
import Router from "next/router";

export const Logo = ({ ...rest }) => {
  return (
    <Image
      cursor="pointer"
      onClick={() => Router.push(`/`)}
      src="/logo.png"
      {...rest}
    />
  );
};
