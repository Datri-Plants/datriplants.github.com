import { Fragment } from "react";
import DatriPlantsHeader from "../../src/components/DatriPlantsHeader";
import Navs from "./Navs";
import '../App.css';

const Header = (props) => {
  return (
    <Fragment>
      <header>
      
      <Navs />
      <DatriPlantsHeader />
      </header> 
      
    </Fragment>
  );
};
export default Header;