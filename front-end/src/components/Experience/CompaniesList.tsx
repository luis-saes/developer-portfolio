import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as Comp } from "../../assets/svg/companies/comp.svg";
import { ReactComponent as Embraer } from "../../assets/svg/companies/embraer.svg";
import { ReactComponent as Gt } from "../../assets/svg/companies/gt.svg";

export interface CompaniesListInterface {
  text: string;
  element: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  link: string;
}

const CompaniesList: CompaniesListInterface[] = [
  {
    text: "Embraer",
    element: Embraer,
    link: "https://embraer.com/",
  },
  {
    text: "Comp Jr.",
    element: Comp,
    link: "https://compjunior.com.br/",
  },
  {
    text: "GT",
    element: Gt,
    link: "https://gtglobal.tech/",
  },
];

export default CompaniesList;
