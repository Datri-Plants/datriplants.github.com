import styles from "../nicepage.module.css";
import sectionTwoStyles from "../components/SectionTwo.module.css";

import ProductsLayout from "./ProductsLayout";
const DatriPlantsHeader = (props) => {
    return (
        <div>
            
            <section className={`${styles['u-align-right']} ${styles['u-clearfix']} ${styles['u-image']} ${sectionTwoStyles['u-section-2']}`} id="sec-0263">
    <div className={`${styles['u-clearfix']} ${styles['u-sheet']} ${sectionTwoStyles['u-sheet-1']} `}>
      <h1 className={`${styles['u-custom-font']} ${sectionTwoStyles['u-text-1']} ${styles['u-font-roboto-slab']} ${styles['u-text']} ${styles['u-text-palette-4-dark-2']} `}>
        <b>
          <span style={{fontSize: "6.25rem"}}>Datri&nbsp;<span style={{fontWeight: 400}}> Plants</span> </span><span>&nbsp;</span><span
            style={{fontWeight: 400}}></span></b>
      </h1>
      <h4 className={`${sectionTwoStyles['u-custom-font']} ${sectionTwoStyles['u-text-2']} ${styles['u-text-grey-50']} ${styles['u-text-default']} ${styles['u-text']} ${sectionTwoStyles['u-font-roboto-slab']}`}>
        what we do and who we are
      </h4>
      <p className={`${styles['u-text']} ${styles['u-text-grey-50']} ${sectionTwoStyles['u-text-3']}`}>
        When you are faced with a large wall to fill, it’s important to fill
        it out with furniture that is proportionate to the scale of the wall
        so that whatever pieces you have sitting on or in front of the wall
        won’t be dwarfed by the wall.
      </p>
    </div>
  </section>
  <section className={`${styles['u-align-center']} ${styles['u-clearfix']} ${sectionTwoStyles['u-section-3']}`} id="sec-b9a6">
    <div className={`${styles['u-sheet']} ${styles['u-clearfix']} ${sectionTwoStyles['u-sheet-1']}`}>  
      <p><ProductsLayout /></p>
      <a href="https://www.scmp.com/lifestyle/interiors-living/article/2126797/why-we-should-be-greening-our-homes-plants-top-trend-2018"
        className={`${styles['u-border-2']} ${styles['u-border-grey-dark-1']} ${styles['u-btn']} ${styles['u-button-style']} ${sectionTwoStyles['u-btn-4']}`} target="_blank" rel="noreferrer"> &emsp; learn more &emsp; </a>
    </div>
  </section>
        </div>
    );
};
export default DatriPlantsHeader;
