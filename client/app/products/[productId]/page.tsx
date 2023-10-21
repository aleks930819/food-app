import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';

import { getProducts, getSingleProduct } from '@/actions';

import NotFound from '@/app/not-found';
import { ReviewStars } from '@/components/review-stars';
import { Button, SocialIcons } from '@/components/ui';
import { ProductCard, ProductGalleryImages } from '@/components/product';

const ProductDetailsPage = async ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const { productId } = params;
  const product = await getSingleProduct({ productId });

  if (!product) {
    return <NotFound />;
  }

  const data = await getProducts({ query: { limit: 4, categryId: product.categoryId } });

  const filterProducts = data?.products.filter((p) => p.id !== product.id);

  const { name, images, price, quantity, description, category } = product;

  return (
    <div className="max-w-6xl mx-auto px-4 py-0 md:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
        {/* IMAGES */}
        <ProductGalleryImages gallery={images} />
        {/* INFO */}
        <section className=" px-2 py-4 text-start">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <span className="mb-4 block">
            <ReviewStars num={4} />
          </span>
          <p className="text-2xl  mb-4">
            <strong>${price}</strong>
          </p>
          <p className="text-gray-400 mb-4">{description}</p>

          {/* ACTIONS */}
          <div>
            <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
              {/* QUANTITY */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Quantity</span>
                <div className="inline-flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300">
                    <Minus size={14} />
                  </button>

                  <span className="text-lg">
                    <strong>{quantity}</strong>
                  </span>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center  bg-gray-200 hover:text-white hover:bg-primary-light hover-duration-300">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <Button
                variant="primary"
                className="rounded-md  border-none m-auto md:ml-2 w-full md:w-auto flex items-center gap-2"
              >
                <span>
                  <ShoppingCart size={20} />
                </span>
                <span>Add to Cart</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <Button variant="outline" className=" rounded-md w-full  md:w-auto flex items-center gap-2">
                <span>
                  <Heart size={18} />
                </span>
                <span>Add to wishlist</span>
              </Button>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Categories:
            <span>
              <span className="text-gray-400"> {category.name}</span>
            </span>
          </p>
          <p className="text-gray-600 mt-4 flex items-center">
            Share:
            <SocialIcons />
          </p>
        </section>
      </div>
      {/* REVIEWS, DESCRIPTION */}
      <section className="  mb-10 px-2 py-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button variant="dark" className=" border-none w-full md:w-auto">
            <span>Description</span>
          </Button>
          <Button variant="dark" className=" border-none w-full md:w-auto">
            <span>Additional Information</span>
          </Button>
          <Button variant="dark" className=" border-none w-full md:w-auto">
            <span>Reviews</span>
          </Button>
        </div>
        <span className="w-full h-[1px] block bg-gray-200" />
        {/* CONTENT */}
        <div className="p-4">
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
      </section>
      {/* RELATED PRODUCTS */}
      <div className="">
        <h3 className="text-3xl font-semibold  pb-1">Releated products</h3>
        <span className="w-14 h-1 block bg-primary-light" />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10">
          {filterProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
        </section>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
