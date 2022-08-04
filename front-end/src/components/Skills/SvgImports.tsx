import { ReactComponent as Angular } from "../../assets/svg/skills/angular.svg";
import { ReactComponent as Bootstrap } from "../../assets/svg/skills/bootstrap.svg";
import { ReactComponent as Cpp } from "../../assets/svg/skills/cpp.svg";
import { ReactComponent as Css } from "../../assets/svg/skills/css.svg";
import { ReactComponent as Express } from "../../assets/svg/skills/express.svg";
import { ReactComponent as Go } from "../../assets/svg/skills/go.svg";
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
    category: "web",
  },
  {
    text: "Bootstrap",
    element: Bootstrap,
    percentage: 87,
    category: "web",
  },
  {
    text: "C++",
    element: Cpp,
    percentage: 75,
    category: "other",
  },
  {
    text: "CSS3",
    element: Css,
    percentage: 84,
    category: "web",
  },
  {
    text: "Express",
    element: Express,
    percentage: 90,
    category: "web",
  },
  {
    text: "Go",
    element: Go,
    percentage: 57,
    category: "web",
  },
  {
    text: "HTML5",
    element: Html,
    percentage: 91,
    category: "web",
  },
  {
    text: "Java",
    element: Java,
    percentage: 81,
    category: "other",
  },
  {
    text: "JavaScript",
    element: JavaScript,
    percentage: 94,
    category: "web",
  },
  {
    text: "Jest",
    element: Jest,
    percentage: 68,
    category: "web",
  },
  {
    text: "Linux",
    element: Linux,
    percentage: 73,
    category: "tools",
  },
  {
    text: "MongoDB",
    element: MongoDB,
    percentage: 86,
    category: "web",
  },
  {
    text: "Next",
    element: Next,
    percentage: 85,
    category: "web",
  },
  {
    text: "Office",
    element: Office,
    percentage: 91,
    category: "tools",
  },
  {
    text: "Python3",
    element: Python,
    percentage: 92,
    category: "other",
  },
  {
    text: "React",
    element: ReactIcon,
    percentage: 92,
    category: "web",
  },
  {
    text: "SQL",
    element: Sql,
    percentage: 88,
    category: "other",
  },
  {
    text: "TypeScript",
    element: Typescript,
    percentage: 77,
    category: "web",
  },
  {
    text: "VB .NET",
    element: Vbdotnet,
    percentage: 71,
    category: "web",
  },
  {
    text: "Vue",
    element: Vue,
    percentage: 76,
    category: "web",
  },
];

const compare = (el1: any, el2: any): number => {
  if (el1.percentage > el2.percentage) return -1;
  if (el1.percentage < el2.percentage) return 1;
  return 0;
};

SVGs.sort(compare);

export default SVGs;
