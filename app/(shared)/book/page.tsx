import { Box } from "@mantine/core";
import MainBanner from "./_main-banner/main-banner";
import Popular from "./_popular/popular";
import SectionBanner from "./_section-banner/section-banner";
import BookList from "./_book-list/book-list";

export default function Book() {
  return (
    <Box component="main" bg="white">
      <MainBanner />
      <Popular />
      <SectionBanner />
      <BookList />
    </Box>
  );
}
