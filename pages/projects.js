import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/pages/Project.module.scss";
import indusby from "../components/images/indusbyFigma.webp";
import sexedify from "../components/images/sexedifyFigma.webp";
import svayam from "../components/images/svayamFigma.webp";

const projects = [
  {
    name: "Svayam",
    description: "E-Commerce Platform for Self Help Groups",
    technologies: "Next.js, Node.js, IPFS",
    link: "https://svayam.vercel.app/",
    image: svayam,
  },
  {
    name: "Indusby",
    description: "B2B portal for listing Industrial waste",
    technologies: "Ionic, Firebase, React.js",
    link: "https://indusby.netlify.app/",
    image: indusby,
  },
  {
    name: "SexEdify",
    description: "All things sex education.",
    technologies: "React, Sass, GraphQL",
    link: "https://sexedify.co/",
    image: sexedify,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Jyothsna Ashok</title>
      </Head>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.heading}>Projects</div>
        <div className={Styles.projects}>
          {projects.map((project, index) => (
            <div className={Styles.project} key={index}>
              {project.name}{" "}
              <span style={{ color: "#607b96", fontSize: "0.8rem" }}>
                // {project.technologies}
              </span>
              <div className={Styles.projectCard}>
                <div className={Styles.projectImage}>
                  {project.image && (
                    <Image
                      src={project?.image}
                      layout="responsive"
                      style={{ objectFit: "cover", height: "50%" }}
                    ></Image>
                  )}
                </div>
                <div className={Styles.projectTitle}>
                  {project.description}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={Styles.projectButton}>view-project</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
