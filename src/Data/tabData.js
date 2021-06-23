import { FaCss3, FaHtml5, FaJsSquare, FaSass,FaReact} from "react-icons/fa";
import { SiDart } from "react-icons/si";
// import { GrReactjs } from "react-icons/Gr";


const tabData = [
  {
    tab_name: "home.js",
    routeUrl: "/",
    logo: <FaJsSquare className="logo js" />,
  },
  {
    tab_name: "projects.css",
    routeUrl: "/projects",
    logo: <FaCss3 className="logo css" />,
  },
  {
    tab_name: "skills.html",
    routeUrl: "/skills",
    logo: <FaHtml5 className="logo html" />,
  },
  {
    tab_name: "experience.jsx",
    routeUrl: "/experience",
    logo: <FaReact className="logo dart" />,
  },
  {
    tab_name: "about.sass",
    routeUrl: "/about",
    logo: <FaSass className="logo sass" />,
  },
];

export default tabData;
