import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/pages/About.module.scss";
import CodeAnimation from "../components/animation";
import { FiChevronRight } from "react-icons/fi";

const work = [
  {
    title: "Front-end Developer",
    company: "BugBase Security",
    location: "Karnataka, India",
    date: "December 2022 – Present",
    description: `Collaborated with team of 5 programmers to raise efficiency by 25%. Designed and wrote quality code for developing the latest user-facing features and built reusable components and hooks
for future use to increase customer retention by 40%. Migrated the website from ReactJs to NextJs`,
  },
  {
    title: "Full Stack Development Intern",
    company: "Upflux",
    location: "Remote",
    date: "January 2023 – March 2023",
    description: `Migrated the database from MongoDB to PostgreSQL decreasing load time by 40% and data storage by 50%. Debugged the application while ensuring cross-platform optimization for mobile phones and responsiveness. Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.`,
  },
  {
    title: "Management Member",
    company: "Project MANAS",
    location: "IIT Kanpur",
    date: "May 2022 – March 2023",
    description: `Led a team of 5 to design and develop a new website for the team. Used ReactJs to increase front-end performance by
20%.`,
  },
  {
    title: "Frontend Development Intern",
    company: "Octanet",
    location: "Remote",
    date: "August 2023 - September 2023",
    description: "Completed all 3 tasks, which included Creating a clone of Instagram Website. Also was in Top 5 performers who won exclusive Goodies provided by Octanet."
  }

];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Bhanu Pratap</title>
      </Head>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.heading}>About Me</div>

        <div className={Styles.aboutText}>
          I like to learn new tools and technologies and experiment with them. I
          am a keen observer and a quick learner, and pick up anything that
          piques my attention. My interests predominantly lie in Full-stack
          development and Designing, actively working on Full Stack development
          projects for Web and mobile. I am also constantly reading, learning,
          and upskilling myself about fintech, blockchain, web3, and the latest
          technologies.
        </div>

        <div className={Styles.heading}>Work Experience</div>
        {work.map((item, index) => {
          let color =
            index % 4 === 0
              ? "#FEA55F"
              : index % 4 === 1
              ? "#43D9AD"
              : index % 4 === 2
              ? "#E99287"
              : "#C98BDF";
          return (
            <div className={Styles.work} key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: color,
                }}
              >
                <div className={Styles.workTitle}>{item.title}</div>
                <div className={Styles.workDate}>{item.date}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={Styles.workCompany}>{item.company}</div>
                <div className={Styles.workLocation}>{item.location}</div>
              </div>

              <div className={Styles.workDescription}>{item.description}</div>
            </div>
          );
        })}

        <div className={Styles.heading} id="contact">
          Contact
        </div>
        <div className={Styles.contact}>
          Hit me up using my email{" "}
          <a href="mailto:mr.bhanupratapjha@gmail.com" style={{ color: "#fea55f" }}>
            mr.bhanupratapjha@gmail.com
          </a>{" "}
          or you can reach out to me through any of my social medias listed
          below.
        </div>
      </div>

      <Footer />
    </>
  );
}
