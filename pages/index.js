import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/pages/Homepage.module.scss";
import CodeAnimation from "../components/animation";
import { FiChevronRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhanu Pratap</title>
      </Head>

      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <div>Hi, all! I am</div>
          <div className={Styles.landingName}>Bhanu Pratap</div>
          <div className={Styles.landingSubtitle}>
            {" "}
            <FiChevronRight />
            Full Stack Developer
          </div>
          <div className={Styles.landingAbout}>
            /** I am a third year student pursuing
            <br />
            * BTech in Computer Science and Engineering at
            <br />* Indian Institute of Technology, Kanpur. */
          </div>
          <div className={Styles.landingResume}>
            const &nbsp;<span style={{ color: "#43D9AD" }}>resumeLink</span>{" "}
            &nbsp;= &nbsp;
            <a
              href="/Bhanu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E99287" }}
            >
              "Check out my resume"
            </a>
          </div>
        </div>
        <div className={Styles.animationContainer}>
          <CodeAnimation />
        </div>
      </div>

      <Footer />
    </>
  );
}
