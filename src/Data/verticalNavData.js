import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";

const linkIcons = [
  {
    url: "https://github.com/SurajPatil369/",
    dataTip: "Projects",
    dataFor: "projects",
    icon: <VscExtensions className="icon" />,
  },
  {
    url: "patilsurajh@gmail.com",
    dataTip: "Mail me",
    dataFor: "mail",
    icon: <SiGmail className="icon" />,
  },
  {
    url: "https://www.linkedin.com/in/suraj-patil-1b4950153",
    dataTip: "Reach me on LinkedIn",
    dataFor: "linkedin",
    icon: <SiLinkedin className="icon" />,
  },
  {
    url: "https://github.com/SurajPatil369/",
    dataTip: "Visit my Github",
    dataFor: "github",
    icon: <SiGithub className="icon" />,
  },
  {
    url: "https://www.instagram.com/surajpatil369/",
    dataTip: "Reach me on Instagram",
    dataFor: "instagram",
    icon: <SiInstagram className="icon" />,
  },
];

export { linkIcons };
