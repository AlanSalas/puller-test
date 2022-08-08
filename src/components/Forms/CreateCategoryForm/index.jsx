import Input from "components/Input";
import Button from "components/Button";
import { MdCategory } from "react-icons/md";

const CreateCategoryForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={MdCategory} type="text" placeholder="Name" />
      <Button type="btn--info">Create</Button>
    </form>
  );
};

export default CreateCategoryForm;
