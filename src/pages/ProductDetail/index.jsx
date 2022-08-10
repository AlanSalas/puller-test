import { useEffect } from "react";
import NavigationButton from "components/NavigationButton";
import Author from "components/Author";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import noImage from "assets/no-image.jpg";
import useStore from "store/useStore";
import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct } from "api/product";

const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = useStore((state) => state.productDetail);
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const endLoad = useStore((state) => state.finishLoading);
  const fetchProductDetail = useStore((state) => state.fetchProductDetail);
  const navigate = useNavigate();
  const handleGoBack = () => navigate("/");
  const handleGoToEdit = () => navigate(`/product/edit/${product._id}`, { state: `/product/${product._id}` });

  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  const handleDelete = async () => {
    startLoad();
    const res = await deleteProduct(id);
    if (res?.status === 200) {
      toast.success(res?.data?.message);
      navigate("/");
    } else {
      toast.error(res?.data?.message);
    }
    endLoad();
  };

  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <div className="w-100 mt-2">
          {product?.image?.secureUrl ? (
            <img className="product-detail-image" src={product.image.secureUrl} alt={product.title} />
          ) : (
            <img className="product-detail-image" src={noImage} alt={product.title} />
          )}
          <p className="color-tertiary font-lg bold my-1">{product?.title}</p>
          <p className="color-tertiary font-default text-right my-1">${product?.price?.$numberDecimal} FRQTAL</p>
          {product?.user && (
            <Author image={product?.user?.image?.secureUrl} username={product?.user?.username} detail />
          )}
          <p className="color-tertiary font-lg my-1">{product.description}</p>
          <GroupCategories
            onClick={() => {}}
            categories={[{ _id: product?.category, name: product?.category }]}
            detail
          />
          <div className="my-3 d-flex justify-space-around">
            <Button style={btnStyle} color="btn--info" onClick={handleGoToEdit}>
              Edit <AiOutlineEdit />
            </Button>
            <Button onClick={handleDelete} style={btnStyle} color="btn--error">
              {loading ? (
                "Loading..."
              ) : (
                <>
                  Delete <AiOutlineDelete />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
