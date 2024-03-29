import { ReactComponent as API } from "../../assets/svg/projects/api.svg";
import { ReactComponent as Calendar } from "../../assets/svg/projects/calendar.svg";
import { ReactComponent as Dashboard } from "../../assets/svg/projects/dashboard.svg";
import { ReactComponent as ShoeShop } from "../../assets/svg/projects/shoe-shop.svg";
import { ReactComponent as Hhs } from "../../assets/svg/projects/hhs.svg";
import { ReactComponent as Construpontes } from "../../assets/svg/projects/construpontes.svg";

export interface CompaniesListInterface {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  link: string;
}

const CompaniesList = [
  {
    icon: API,
    link: "https://github.com/luis-saes/valid-password-api",
  },
  {
    icon: Dashboard,
    link: "https://github.com/luis-saes/portfolio-dashboard",
  },
  {
    icon: Calendar,
    link: "https://github.com/luis-saes/calendario-eventos",
  },
  {
    icon: ShoeShop,
    link: "https://github.com/luis-saes/sapataria-henrique",
  },
  {
    icon: Hhs,
    link: "https://www.hhseletrica.com.br/",
  },
  {
    icon: Construpontes,
    link: "https://pontedeconcreto.com.br/",
  },
];

export default CompaniesList;
