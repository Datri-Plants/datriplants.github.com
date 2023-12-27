import { Fragment } from "react";
import DatriPlantsHeader from "../../src/components/DatriPlantsHeader";
import Navs from "./Navs";
import '../App.css';
import HeroImage from "./HeroComponent";
const Header = (props) => {
  return (
    <Fragment>
      <header>
      <Navs />
      <HeroImage></HeroImage>
      
      <DatriPlantsHeader />
      </header> 
      
    </Fragment>
  );
};
export default Header;