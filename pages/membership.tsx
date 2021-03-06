import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { Button, Grid } from "@mantine/core";
import {
  Emphasis,
  FileX,
  Login,
  ReportMoney,
  UserCircle,
  Pencil,
} from "tabler-icons-react";

function Nav() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 3px 4px -4px black",
      }}
    >
      <Button
        component="a"
        rel="noopener noreferrer"
        href="/"
        leftIcon={<Emphasis size={32} />}
        styles={(theme) => ({
          root: {
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: 10,
            paddingLeft: 0,
            color: "black",
            backgroundColor: "white",
            border: 0,
            height: 42,

            "&:hover": {
              backgroundColor: "white",
              //backgroundColor: theme.fn.darken("#ffffff", 0.05),
            },
          },

          leftIcon: {
            marginRight: 0,
          },
        })}
      >
        xquiz.me
      </Button>
      <span>
        <Button
          onClick={() => {
            alert("구독 연장까지 90일 남았습니다.");
          }}
          variant="gradient"
          gradient={{ from: "yellow", to: "orange" }}
          component="a"
          rel="noopener noreferrer"
          href="#"
          leftIcon={<ReportMoney size={32} />}
          styles={(theme) => ({
            root: {
              fontWeight: "bold",
              fontSize: 16,
              paddingLeft: 15,
              color: "white",
              backgroundColor: "white",
              border: 0,
              height: 42,

              "&:hover": {
                backgroundColor: theme.fn.darken("#ffffff", 0.05),
              },
            },

            leftIcon: {
              marginRight: 5,
            },
          })}
        >
          스탠다드 플랜 이용 중
        </Button>

        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          component="a"
          rel="noopener noreferrer"
          href="/login"
          leftIcon={<UserCircle size={32} />}
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
          내 퀴즈
        </Button>
      </span>
    </div>
  );
}

function SchoolList() {
  let arr = [
    "양정여자고등학교",
    "인덕원고등학교",
    "서울과학고등학교",
    "하나고등학교",
    "민족사관고등학교",
    "대전과학고등학교",
    "휘문고등학교",
    "상산고등학교",
    "대기고등학교",
    "포항제철고등학교",
    "현대고등학교",
    "배재고등학교",
    "경북고등학교",
    "신성고등학교",
    "서문여자고등학교",
    "강서고등학교",
    "목동고등학교",
    "마포고등학교",
    "수지고등학교",
    "서울국제고등학교",
    "북일고등학교",
    "서라벌고등학교",
    "제주고등학교",
    "오현고등학교",
  ];
  let i = 0;
  return (
    <Grid grow gutter={30}>
      {arr.map((school, i) => {
        return (
          <Grid.Col
            key={i}
            style={{
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              borderRadius: "10px",
            }}
            span={2}
          >
            {school}
          </Grid.Col>
        );
      })}
    </Grid>
  );
}

const Home: NextPage = () => {
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

      <header style={{ position: "sticky", zIndex: "100" }}>{Nav()}</header>

      <main style={{ marginLeft: 20, marginRight: 20 }}>
        <div style={{ height: "100vh" }}>
          <div
            style={{
              height: "55vh",
              textAlign: "center",
            }}
          >
            <p
              style={{ fontSize: 36, fontWeight: "bold", textAlign: "center" }}
            >
              퀴즈에 경험을 더하다<br></br> exquiz.me
            </p>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              component="a"
              rel="noopener noreferrer"
              href="/create"
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
              문제 제작하기
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              component="a"
              rel="noopener noreferrer"
              href="/host"
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
              방 생성하기
            </Button>
          </div>
          <div style={{ height: "40vh" }}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              약 3,677개의 학교들이<br></br> exquiz.me를 사용중입니다.
            </p>
            <div style={{ textAlign: "center" }}>{SchoolList()}</div>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
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
          style={{ textDecoration: "none" }}
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
