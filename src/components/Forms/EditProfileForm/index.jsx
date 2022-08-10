import { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import useStore from "store/useStore";
import { AiOutlineUser, AiOutlineMail, AiOutlineFileImage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { updateProfileSchema } from "components/Forms/validationSchemas";
import { updateUser } from "api/user";

const EditProfileForm = () => {
  const profile = useStore((state) => state.profile);
  const [image, setImage] = useState(profile?.image?.secureUrl ? profile.image.secureUrl : null);
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      lastName: profile.lastName,
      email: profile.email,
    },
    onSubmit: async (values, { resetForm }) => {
      startLoad();
      const res = await updateUser(image, values, profile?._id);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        resetForm();
        navigate("/profile");
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: updateProfileSchema,
  });

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      {image && (
        <div className="w-10rem h-10rem mx-auto mb-1">
          <img className="w-100 h-100 rounded" src={typeof image === "string" ? image : URL.createObjectURL(image)} />
        </div>
      )}
      <Input
        icon={AiOutlineUser}
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        icon={AiOutlineUser}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <Input
        icon={AiOutlineMail}
        type="text"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Input
        icon={AiOutlineFileImage}
        type="file"
        name="image"
        placeholder="Upload Image"
        onChange={handleChangeImage}
      />
      <div className="w-100 d-flex flex-dir-column justify-center align-center">
        <Button type="submit" color="btn--info">
          {loading ? "Loading..." : "Edit"}
        </Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
