import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getHello } from "../src/services";

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    (async () => {
      const helloResponseData = await getHello();
      setName(helloResponseData.name);
    })();
  }, []);

  return <h1 className={styles.title}>{name}</h1>;
};

export default Home;
