import { Box } from "@mantine/core";
import MainBanner from "./_main-banner/main-banner";
import Popular from "./_popular/popular";

export default function Book() {
  return (
    <Box component="main" bg="white">
      <MainBanner />
      <Popular />
    </Box>
  );
}
