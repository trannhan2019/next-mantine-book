"use client";

import React from "react";
import classes from "./header.module.css";
import {
  Anchor,
  Avatar,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconLock,
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

const dataMenu = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "BOOKS",
    url: "/book",
  },
  {
    title: "E-BOOKS",
    url: "/e-book",
  },
];

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box component="header" className={classes.header}>
      <Container size="xl" h="100%">
        <Group h="100%" justify="space-between" py="sm">
          <Box className={classes.logo}>
            <Anchor component={Link} href="/">
              <Image
                src="/img/logo.png"
                alt="logo"
                sizes="100vw"
                objectFit="cover"
                fill
              />
            </Anchor>
          </Box>

          <Group visibleFrom="sm" gap="xl">
            {dataMenu.map((item) => {
              return (
                <Anchor
                  className={classes.link}
                  key={item.title}
                  component={Link}
                  href={item.url}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </Group>

          <Box visibleFrom="sm">
            {true ? (
              <NavUser
                user={{ name: "John Doe", email: "john.doe@example.com" }}
                close={close}
              />
            ) : (
              <Button
                leftSection={<IconLock size={16} />}
                color="orange"
                size="md"
              >
                Login
              </Button>
            )}
          </Box>

          <Burger size="sm" hiddenFrom="sm" opened={opened} onClick={open} />
          {/* drawer */}
          <Drawer opened={opened} onClose={close} position="right" size="xs">
            <Stack>
              {dataMenu.map((item) => {
                return (
                  <Anchor
                    className={classes.link}
                    key={item.title}
                    component={Link}
                    href={item.url}
                    onClick={close}
                  >
                    {item.title}
                  </Anchor>
                );
              })}
              <NavUser
                user={{ name: "John Doe", email: "john.doe@example.com" }}
                close={close}
              />
            </Stack>
          </Drawer>
        </Group>
      </Container>
    </Box>
  );
}

function NavUser({
  user,
  close,
}: {
  user: { name: string; email: string };
  close: () => void;
}) {
  return (
    <Menu trigger="hover">
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar src="https://github.com/shadcn.png" size="md" />
            <Stack gap={0}>
              <Text size="sm" fw={500}>
                {user.name}
              </Text>
              <Text c="dimmed" size="xs">
                {user.email}
              </Text>
            </Stack>
            <IconChevronDown size={16} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown w={200}>
        <Menu.Item
          component={Link}
          href="/profile"
          leftSection={<IconUser size={16} />}
          onClick={close}
        >
          Profile
        </Menu.Item>

        <Menu.Item
          component={Link}
          href="/settings"
          leftSection={<IconSettings size={16} />}
          onClick={close}
        >
          Settings
        </Menu.Item>

        <Menu.Item
          component={Link}
          color="red"
          href="/logout"
          leftSection={<IconLogout size={16} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
