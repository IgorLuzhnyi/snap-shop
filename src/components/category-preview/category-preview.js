import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import { CategoryPreviewContainer, Preview } from "./category-preview.styled";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
