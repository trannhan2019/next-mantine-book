"use client";

import { Box, Container } from "@mantine/core";
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
            transition={{ duration: 1 }}
            className={styles.mainBannerTitle}
          >
            BEST AVAILABLE
          </motion.span>
          <motion.h1
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className={styles.mainBannerHeading}
          >
            BOOKS{" "}
            <span className={styles.mainBannerHeadingSpan}>COLLECTION</span>
          </motion.h1>
        </div>
      </Container>
    </Box>
  );
}
