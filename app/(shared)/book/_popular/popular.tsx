"use client";

import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Flex,
} from "@mantine/core";
import styles from "./popular.module.css";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Bạn đang ở đây: Cuốn sách ngắn về thế giới ",
    author: "Nicholas Crane",
    price: "95k",
    description:
      "Cuốn sách giúp chúng ta nhìn nhận lại về địa lý, một môn học quan trọng trong việc củng cố nền tảng tư duy cho con người.",
    code: "SBA0004",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/33347.jpg?v=1&w=480&h=700",
  },
  {
    id: 2,
    title: "Yến Hội và Phaedrus",
    author: "Platon",
    price: "135k",
    description:
      "Tác phẩm gồm hai phần, 'Yến Hội' và 'Phaedrus', dành cho những ai quan tâm tới văn học và triết học Hy-La cổ đại.",
    code: "SBA0010",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/yen-hoi-va-phaedrus-tac-gia-platon.jpg",
  },
  {
    id: 3,
    title: "Trò Chơi và Thú Tiêu Khiển của Người Huế",
    author: "Trần Đức Anh Sơn",
    price: "139k",
    description:
      "Cuốn sách nghiên cứu, trình bày và phân tích các trò chơi, thú tiêu khiển truyền thống của người dân Huế.",
    code: "SBA0050",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/537/products/43033226-79e3-4182-afcb-55d3dfd20236.jpg?v=1671349837817",
  },
  {
    id: 4,
    title: "Thời Khắc Tươi Đẹp",
    author: "Nina Riggs",
    price: "159k",
    description:
      "Cuốn hồi ký tuyệt vời về sự sống và cái chết, từ nhà thơ Nina Riggs.",
    code: "SBA0074",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://omegaplus.vn/wp-content/uploads/2020/02/khoanh-khac-tuoi-dep-ok.jpg",
  },
  {
    id: 5,
    title: "Mọi Chuyện Trên Đời Đều Có Nguyên Do",
    author: "Kate Bowler",
    price: "109k",
    description:
      "Hành trình đi tìm ý nghĩa cuộc đời của một bệnh nhân ung thư.",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://omegaplus.vn/wp-content/uploads/2019/07/5-Copy-1024x1024.jpg",
  },
  {
    id: 6,
    title: "Lẽ thường",
    author: "Thomas Paine",
    price: "109k",
    description:
      "Trong Lẽ thường, Thomas Paine phân tích thực trạng, hoàn cảnh và quan hệ của các Thuộc địa đối với nước Anh. Với lý luận chặt chẽ và văn chương nghị luận sắc bén, ông đã giúp cho người dân Mỹ ở thuộc địa nhìn rõ vấn đề và chọn cho mình hướng đi đúng đắn. Tác giả dùng văn phong và từ ngữ giản dị để trình bày những vấn đề phức tạp thuộc về triết học, tôn giáo và chính trị nhằm vào đối tượng chính là đại chúng. Lẽ thường còn ảnh hưởng đến việc soạn thảo Tuyên ngôn Độc lập của Mỹ vào tháng Bảy năm 1776",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://down-vn.img.susercontent.com/file/1a7c93ad401e5e97658b829c05ad07f9",
  },
];

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

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="lg"
          verticalSpacing="lg"
          mt="xl"
        >
          {data.map((item) => (
            <Link
              href={`/book/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                initial={{ opacity: 0.2, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
                whileHover={{
                  translateY: -10,
                  boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
              >
                <Card shadow="sm" radius="md" withBorder>
                  <Card.Section h={300} pos="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw 50vw"
                      className="object-cover"
                    />
                  </Card.Section>

                  <Flex mt="sm" h={90} direction="column">
                    <Title order={5} lineClamp={2} className={styles.bookTitle}>
                      {item.title}
                    </Title>
                    <Text>{item.author}</Text>
                  </Flex>
                </Card>
              </motion.div>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
