import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardConatiner = ({ children }: Props) => {
  return (
    <Box width={"400px"} borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardConatiner;
