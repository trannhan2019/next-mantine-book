"use client";

import { Box, Button, Container, Text } from "@mantine/core";
import { motion } from "motion/react";
import styles from "./main-banner.module.css";
export default function MainBanner() {
  return (
    <Box component="section" className={styles.mainBanner}>
      <Container size="xl" className={styles.mainBannerContainer}>
        <div className={styles.mainBannerContent}>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.mainBannerTitle}
          >
            BEST AVAILABLE
          </motion.span>
          <motion.h3
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.mainBannerHeading}
          >
            BOOKS{" "}
            <span className={styles.mainBannerHeadingSpan}>COLLECTION</span>
          </motion.h3>
          <Button
            size="lg"
            variant="outline"
            className={styles.mainBannerButton}
            w="fit-content"
          >
            Book now
          </Button>
        </div>
      </Container>
    </Box>
  );
}
