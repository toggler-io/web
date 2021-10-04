import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const imageAlt: string = "Comming soon";

  return (
    <>
      <Head>
        <title>Toggler</title>
      </Head>

      <div className={styles.container}>
        <Image
          src="/images/coming-soon.png"
          alt={imageAlt}
          width="1000"
          height="320"
        />
        Toggler
      </div>
    </>
  );
};

export default Home;
