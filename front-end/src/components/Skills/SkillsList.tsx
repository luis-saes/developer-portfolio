import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as Angular } from "../../assets/svg/skills/angular.svg";
import { ReactComponent as Aws } from "../../assets/svg/skills/aws.svg";
import { ReactComponent as Azure } from "../../assets/svg/skills/azure.svg";
import { ReactComponent as Bootstrap } from "../../assets/svg/skills/bootstrap.svg";
import { ReactComponent as Cpp } from "../../assets/svg/skills/cpp.svg";
import { ReactComponent as Csharp } from "../../assets/svg/skills/csharp.svg";
import { ReactComponent as Css } from "../../assets/svg/skills/css.svg";
import { ReactComponent as Docker } from "../../assets/svg/skills/docker.svg";
import { ReactComponent as Dotnet } from "../../assets/svg/skills/dotnet.svg";
import { ReactComponent as Express } from "../../assets/svg/skills/express.svg";
import { ReactComponent as Figma } from "../../assets/svg/skills/figma.svg";
import { ReactComponent as Gimp } from "../../assets/svg/skills/gimp.svg";
import { ReactComponent as Git } from "../../assets/svg/skills/git.svg";
import { ReactComponent as Github } from "../../assets/svg/skills/github.svg";
import { ReactComponent as Go } from "../../assets/svg/skills/go.svg";
import { ReactComponent as Html } from "../../assets/svg/skills/html.svg";
import { ReactComponent as Java } from "../../assets/svg/skills/java.svg";
import { ReactComponent as JavaScript } from "../../assets/svg/skills/javascript.svg";
import { ReactComponent as Jest } from "../../assets/svg/skills/jest.svg";
import { ReactComponent as Linux } from "../../assets/svg/skills/linux.svg";
import { ReactComponent as MongoDB } from "../../assets/svg/skills/mongodb.svg";
import { ReactComponent as Next } from "../../assets/svg/skills/next.svg";
import { ReactComponent as NodeFramework } from "../../assets/svg/skills/node.svg";
import { ReactComponent as Office } from "../../assets/svg/skills/office.svg";
import { ReactComponent as Python } from "../../assets/svg/skills/python.svg";
import { ReactComponent as Redux } from "../../assets/svg/skills/redux.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/skills/react.svg";
import { ReactComponent as Rust } from "../../assets/svg/skills/rust.svg";
import { ReactComponent as Sass } from "../../assets/svg/skills/sass.svg";
import { ReactComponent as Sql } from "../../assets/svg/skills/sql.svg";
import { ReactComponent as Typescript } from "../../assets/svg/skills/typescript.svg";
import { ReactComponent as Unity } from "../../assets/svg/skills/unity.svg";
import { ReactComponent as Vbdotnet } from "../../assets/svg/skills/vb-dotnet.svg";
import { ReactComponent as Visualstudio } from "../../assets/svg/skills/visualstudio.svg";
import { ReactComponent as Vscode } from "../../assets/svg/skills/vscode.svg";
import { ReactComponent as Vue } from "../../assets/svg/skills/vue.svg";
import { ReactComponent as WebStorm } from "../../assets/svg/skills/webstorm.svg";

export interface SkillsListInterface {
  text: string;
  element: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  percentage: number;
  category: string;
}

const SkillsList: SkillsListInterface[] = [
  {
    text: "Angular",
    element: Angular,
    percentage: 90,
    category: "web",
  },
  {
    text: "AWS",
    element: Aws,
    percentage: 58,
    category: "web",
  },
  {
    text: "Azure",
    element: Azure,
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
    text: "C#",
    element: Csharp,
    percentage: 91,
    category: "web",
  },
  {
    text: "CSS3",
    element: Css,
    percentage: 84,
    category: "web",
  },
  {
    text: "Docker",
    element: Docker,
    percentage: 70,
    category: "tools",
  },
  {
    text: ".NET",
    element: Dotnet,
    percentage: 87,
    category: "web",
  },
  {
    text: "Express",
    element: Express,
    percentage: 85,
    category: "web",
  },
  {
    text: "Figma",
    element: Figma,
    percentage: 75,
    category: "tools",
  },
  {
    text: "GIMP",
    element: Gimp,
    percentage: 65,
    category: "tools",
  },
  {
    text: "Go",
    element: Go,
    percentage: 57,
    category: "web",
  },
  {
    text: "Git",
    element: Git,
    percentage: 98,
    category: "tools",
  },
  {
    text: "GitHub",
    element: Github,
    percentage: 95,
    category: "tools",
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
    percentage: 84,
    category: "web",
  },
  {
    text: "Next",
    element: Next,
    percentage: 88,
    category: "web",
  },
  {
    text: "Node",
    element: NodeFramework,
    percentage: 90,
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
    text: "Redux",
    element: Redux,
    percentage: 75,
    category: "web",
  },
  {
    text: "React",
    element: ReactIcon,
    percentage: 92,
    category: "web",
  },
  {
    text: "Rust",
    element: Rust,
    percentage: 60,
    category: "other",
  },
  {
    text: "Sass",
    element: Sass,
    percentage: 88,
    category: "web",
  },
  {
    text: "SQL",
    element: Sql,
    percentage: 88,
    category: "web",
  },
  {
    text: "TypeScript",
    element: Typescript,
    percentage: 85,
    category: "web",
  },
  {
    text: "Unity",
    element: Unity,
    percentage: 50,
    category: "other",
  },
  {
    text: "VB .NET",
    element: Vbdotnet,
    percentage: 77,
    category: "web",
  },
  {
    text: "Visual Studio",
    element: Visualstudio,
    percentage: 86,
    category: "tools",
  },
  {
    text: "VS Code",
    element: Vscode,
    percentage: 94,
    category: "tools",
  },
  {
    text: "Vue",
    element: Vue,
    percentage: 76,
    category: "web",
  },
  {
    text: "WebStorm",
    element: WebStorm,
    percentage: 70,
    category: "tools",
  },
];

const compare = (
  el1: SkillsListInterface,
  el2: SkillsListInterface
): number => {
  if (el1.percentage > el2.percentage) return -1;
  if (el1.percentage < el2.percentage) return 1;
  return 0;
};

SkillsList.sort(compare);

export default SkillsList;
