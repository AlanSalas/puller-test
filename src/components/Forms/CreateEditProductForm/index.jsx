import Input from "components/Input";
import Button from "components/Button";
import GroupCategories from "components/GroupCategories";
import { AiOutlineShop, AiOutlineDollar, AiOutlineAlignCenter, AiOutlineFileImage } from "react-icons/ai";

const CreateEditProductForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={AiOutlineShop} type="text" placeholder="Title" />
      <Input icon={AiOutlineDollar} type="number" placeholder="Price" />
      <Input icon={AiOutlineAlignCenter} type="text" placeholder="Description" />
      <Input icon={AiOutlineFileImage} type="file" placeholder="Upload Image" />
      <GroupCategories form />
      <Button type="btn--info">Create</Button>
    </form>
  );
};

export default CreateEditProductForm;
