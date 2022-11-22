import ProductPages from "./ProductPages";
import ResponsiveGrid from "./ResponsiveGrid";

const productsLayout = (props) => {
  return (
    <div>
      <ResponsiveGrid />
      <br />
      <br />
      <ProductPages />
    </div>
  );
};
export default productsLayout;
