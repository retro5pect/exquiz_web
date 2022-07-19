import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavIndex from "./components/navIndex";
import SchoolList from "./components/schoolList";

import {
  Button,
  Grid,
  SimpleGrid,
  Input,
  Card,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";
import {
  Emphasis,
  FileX,
  Login,
  ReportMoney,
  UserCircle,
  Pencil,
  Archive,
} from "tabler-icons-react";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div
      style={{
        scrollSnapAlign: "start",
        scrollSnapPointsY: "repeat(100vh)",
        scrollSnapType: "y mandatory",
      }}
    >
      <Head>
        <title>exquiz.me - 실시간 퀴즈 플랫폼</title>
        <meta name="description" content="exquiz.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{}}>{NavIndex()}</header>

      <main style={{ marginLeft: 20, marginRight: 20 }}>
        <div style={{ height: "100vh" }}>
          <div
            style={{
              height: "55vh",
              textAlign: "center",
            }}
          >
            <div>
              <div></div>
              <p
                style={{
                  fontSize: 36,
                  textDecoration: "underline orange 10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                퀴즈에 경험을 더하다<br></br> exquiz.me
              </p>
            </div>
            <Button
              onClick={() => {
                alert("체험관은 지금 닫았습니다. 돌아가");
              }}
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              component="a"
              rel="noopener noreferrer"
              href="/#"
              leftIcon={<Pencil size={32} />}
              styles={(theme) => ({
                root: {
                  fontWeight: "bold",
                  fontSize: 16,
                  marginRight: 10,
                  color: "white",
                  backgroundColor: "white",
                  border: 0,
                  height: 42,

                  "&:hover": {
                    backgroundColor: theme.fn.darken("#FFFFFF", 0.05),
                  },
                },

                leftIcon: {
                  marginRight: 5,
                },
              })}
            >
              한 번 체험해보기
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              component="a"
              rel="noopener noreferrer"
              href="/play"
              leftIcon={<Login size={32} />}
              styles={(theme) => ({
                root: {
                  fontWeight: "bold",
                  fontSize: 16,
                  marginRight: 10,
                  color: "white",
                  backgroundColor: "white",
                  border: 0,
                  height: 42,

                  "&:hover": {
                    backgroundColor: theme.fn.darken("#FFFFFF", 0.05),
                  },
                },

                leftIcon: {
                  marginRight: 5,
                },
              })}
            >
              방 입장하기
            </Button>
          </div>
          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              약 3,677개의 학교에서<br></br> exquiz.me를 사용중입니다.
            </p>
            <div style={{ textAlign: "center" }}>{SchoolList()}</div>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              아래에서 간단히 체험해보세요.
            </p>
          </div>
          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "left" }}>
              - exquiz.me는 직관적인 문제 제작 툴을 제공합니다. 직접 해보세요!
            </p>
            <div style={{ width: "60vw", textAlign: "center" }}>
              <SimpleGrid cols={2} spacing="xs">
                <div>
                  <Input variant="default" placeholder="선지 1" />
                </div>
                <div>
                  <Input variant="default" placeholder="선지 2" />
                </div>
                <div>
                  <Input variant="default" placeholder="선지 3" />
                </div>
                <div>
                  <Input variant="default" placeholder="선지 4" />
                </div>
              </SimpleGrid>
            </div>
          </div>
        </div>

        <div>
          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "right" }}>
              exquiz.me는 새로운 퀴즈 경험을 제시합니다 -
            </p>
          </div>

          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "left" }}>
              - exquiz.me는 재미있는 스코어보드와 통계를 제공합니다.
            </p>
          </div>
        </div>
        <div>
          <div style={{ height: "10vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              아래에서 나에게 가장 맞는 플랜을 선택해보세요.
            </p>
          </div>

          <div style={{ height: "50vh" }}>
            <div style={{ width: 340, margin: "auto" }}>
              <Card shadow="sm" p="lg">
                <Card.Section></Card.Section>

                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>무료 플랜</Text>
                </Group>

                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  익스퀴즈미가 제공하는 무료 서비스 입니다.
                </Text>

                <Button
                  variant="light"
                  color="gray"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  현재 이용 중
                </Button>
              </Card>
              <Card shadow="sm" p="lg">
                <Card.Section></Card.Section>

                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>스탠다드 플랜 (실속형)</Text>
                  <Badge color="blue" variant="light">
                    30% 할인 특가
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  퀴즈 제작 및 참여의 필수적인 기능만 골라서 합리적인 가격에
                  제공합니다.
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  <span
                    style={{ color: "gray", textDecoration: "line-through" }}
                  >
                    월 5,990
                  </span>{" "}
                  &nbsp;→ 월 3,990원
                </Button>
              </Card>
              <Card shadow="sm" p="lg">
                <Card.Section></Card.Section>

                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>프리미엄 플랜</Text>
                  <Badge color="orange" variant="light">
                    모든 서비스 이용 가능
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  퀴즈 제작 및 참여의 모든 과정에서 최고의 서비스를 제공합니다.
                </Text>

                <Button
                  variant="light"
                  color="orange"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  월 7,990원
                </Button>
              </Card>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            background: "white",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            right: "10px",
            bottom: "10px",
            cursor: "pointer",
          }}
        ></div>
      </main>

      <footer className={styles.footer}>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://retro5pect.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright ⓒ 2022 exquiz.me All rights reserved. | Team MUMOMU.
        </a>
      </footer>
    </div>
  );
};

export default Home;
