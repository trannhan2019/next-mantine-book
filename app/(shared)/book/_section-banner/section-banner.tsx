import { Box, Container } from "@mantine/core";
import styles from "./section-banner.module.css";

export default function SectionBanner() {
  return (
    <Box component="section" className={styles.sectionBanner}>
      <Container size="xl" className={styles.sectionBannerContainer}>
        <div className={styles.sectionBannerContent}></div>
      </Container>
    </Box>
  );
}
