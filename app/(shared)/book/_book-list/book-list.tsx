"use client";

import {
  Box,
  Button,
  Container,
  Group,
  Input,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import styles from "./book-list.module.css";
import Link from "next/link";
import { motion } from "motion/react";
import { IconSearch } from "@tabler/icons-react";

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

const bookCategories = [
  "Khoa học",
  "Kinh điển",
  "Lịch sử Việt Nam",
  "Văn học",
  "Lịch sử Thế giới",
  "Nhật Bản",
  "Vật lý",
  "Nghệ thuật",
  "Tâm lý học",
  "Thiếu nhi",
  "Y học",
  "Ngôn ngữ",
  "Kinh tế",
  "Âm nhạc",
  "Y sinh",
  "Giáo dục",
  "Mẹ và bé",
  "Quản trị",
  "Cuộc sống",
  "Ẩm thực",
];

export default function BookList() {
  return (
    <Box component="section" mt="xl">
      <Container size="xl">
        <div style={{ textAlign: "center" }}>
          <Title order={1}>Sách mới phát hành</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus
            lacus faucibus lectus, sed cursused eros ligula non odio.
          </Text>
        </div>

        <div className={styles.bookList}>
          <div className={styles.bookListFilter}>
            <Box p={12}>
              <Title order={2}>Search</Title>
              <Group>
                <Input placeholder="Search name or author ..." />
                <Button variant="outline">
                  <IconSearch size={16} />
                </Button>
              </Group>
            </Box>
          </div>
          <div className={styles.bookListContent}></div>
        </div>
      </Container>
    </Box>
  );
}
