import { ReactComponent as Angular } from "../../assets/svg/skills/angular.svg";
import { ReactComponent as Bootstrap } from "../../assets/svg/skills/bootstrap.svg";
import { ReactComponent as Cpp } from "../../assets/svg/skills/cpp.svg";
import { ReactComponent as Css } from "../../assets/svg/skills/css.svg";
import { ReactComponent as Express } from "../../assets/svg/skills/express.svg";
import { ReactComponent as Html } from "../../assets/svg/skills/html.svg";
import { ReactComponent as Java } from "../../assets/svg/skills/java.svg";
import { ReactComponent as JavaScript } from "../../assets/svg/skills/javascript.svg";
import { ReactComponent as Jest } from "../../assets/svg/skills/jest.svg";
import { ReactComponent as Linux } from "../../assets/svg/skills/linux.svg";
import { ReactComponent as MongoDB } from "../../assets/svg/skills/mongodb.svg";
import { ReactComponent as Next } from "../../assets/svg/skills/next.svg";
import { ReactComponent as Office } from "../../assets/svg/skills/office.svg";
import { ReactComponent as Python } from "../../assets/svg/skills/python.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/skills/react.svg";
import { ReactComponent as Sql } from "../../assets/svg/skills/sql.svg";
import { ReactComponent as Typescript } from "../../assets/svg/skills/typescript.svg";
import { ReactComponent as Vbdotnet } from "../../assets/svg/skills/vb-dotnet.svg";
import { ReactComponent as Vue } from "../../assets/svg/skills/vue.svg";

const SVGs = [
  {
    text: "Angular",
    element: Angular,
    percentage: 60,
  },
  {
    text: "Bootstrap",
    element: Bootstrap,
    percentage: 87,
  },
  {
    text: "C++",
    element: Cpp,
    percentage: 75,
  },
  {
    text: "CSS3",
    element: Css,
    percentage: 84,
  },
  {
    text: "Express",
    element: Express,
    percentage: 90,
  },
  {
    text: "HTML5",
    element: Html,
    percentage: 91,
  },
  {
    text: "Java",
    element: Java,
    percentage: 81,
  },
  {
    text: "JavaScript",
    element: JavaScript,
    percentage: 94,
  },
  {
    text: "Jest",
    element: Jest,
    percentage: 68,
  },
  {
    text: "Linux",
    element: Linux,
    percentage: 73,
  },
  {
    text: "MongoDB",
    element: MongoDB,
    percentage: 86,
  },
  {
    text: "Next",
    element: Next,
    percentage: 85,
  },
  {
    text: "Office",
    element: Office,
    percentage: 91,
  },
  {
    text: "Python3",
    element: Python,
    percentage: 92,
  },
  {
    text: "React",
    element: ReactIcon,
    percentage: 92,
  },
  {
    text: "SQL",
    element: Sql,
    percentage: 88,
  },
  {
    text: "TypeScript",
    element: Typescript,
    percentage: 77,
  },
  {
    text: "VB .NET",
    element: Vbdotnet,
    percentage: 71,
  },
  {
    text: "Vue",
    element: Vue,
    percentage: 76,
  },
];

const compare = (el1: any, el2: any): number => {
  if (el1.percentage > el2.percentage) return -1;
  if (el1.percentage < el2.percentage) return 1;
  return 0;
};

SVGs.sort(compare);

export default SVGs;
