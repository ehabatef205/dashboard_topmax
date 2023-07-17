import axios from "../axios";

const createproduct = async (
  name,
  desc,
  image,
  images,
  SKU,
  category_id,
  price,
  quantity
) => {
  return await axios.post(`/product`, {
    name: name,
    desc: desc,
    image: image,
    images: images,
    SKU: SKU,
    category_id: category_id,
    price: price,
    quantity: quantity,
  });
};
export default createproduct;
