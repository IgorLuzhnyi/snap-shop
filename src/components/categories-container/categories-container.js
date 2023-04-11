import { CategoriesContainer } from "./categories-container.styled";
import DirectoryItem from "../directory-item/directory-item";

const CategoriesContainer = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesContainer;
