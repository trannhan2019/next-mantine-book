import { Box, Container, Stack, Title, Text, SimpleGrid } from "@mantine/core";
import styles from "./popular.module.css";

export default function Popular() {
  return (
    <Box component="section" py="xl">
      <Container size="xl">
        <Stack align="center">
          <Title order={2} className={styles.popularTitle}>
            Popular Books
          </Title>
          <Text className={styles.popularText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Text>
        </Stack>
        <SimpleGrid cols={4} mt="xl">
          {/* <BookCard /> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
