import { useEffect, useState } from "react";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import StarRating from "../components/Elements/StarRating";
import { Usd } from "../components/Elements/Curency";
import Button from "../components/Elements/Button";
import { products } from "../constants/productData";
import CardProduct from "../components/Elements/CardProduct";
import SizeName from "../components/Elements/SizeName";
import { useParams } from "react-router-dom";
import DropList from "../components/Elements/DropList/DropList";
import Budge from "../components/Elements/Budge/Budge";
import useDatacart from "../hook/useDatacart";
import { useGlobalState } from "../hooks/globalState/useGlobalState";
import Alert from "../components/Elements/Notification/Alert";

const TabProduct = () => {
  return (
    <div>
      <p className="tx-3 font-bold py-4 xl:py-8">Product Details</p>

      <p className="tx-2 mb-2 text-black-60">
        <strong>Product Name:</strong> Mentioned above<br />
        <strong>Material:</strong> 100% Cotton<br />
        <strong>Color:</strong> Available in Provided colors<br />
        <strong>Sizes:</strong> S, M, L, XL<br />
        <strong>Care Instructions:</strong> Machine wash cold with like colors, tumble dry low.<br />
      </p>

    </div>
  );
};
const TabFaq = () => {
  return (
    <div>
      <p className="tx-3 font-bold py-4 xl:py-8">FAQs</p>
      
      <p className="tx-2 mb-2 text-black-60">
        <strong>What payment methods do you accept?</strong><br />
        We accept various payment methods, including credit/debit cards, PayPal, and bank transfers to ensure a convenient shopping experience.
      </p>
      
      <p className="tx-2 mb-2 text-black-60">
        <strong>How can I track my order?</strong><br />
        Once your order is shipped, you will receive a confirmation email with a tracking number and a link to monitor your shipment's progress.
      </p>
      
      <p className="tx-2 mb-2 text-black-60">
        <strong>What is your return policy?</strong><br />
        We offer a hassle-free 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange.
      </p>
      
      <p className="tx-2 mb-2 text-black-60">
        <strong>Do you offer international shipping?</strong><br />
        Yes, we ship worldwide! Shipping costs and delivery times may vary based on your location, and you can find this information during checkout.
      </p>
      
      <p className="tx-2 mb-2 text-black-60">
        <strong>How can I contact customer support?</strong><br />
        Our customer support team is here to help! You can reach us via email at support@shop.co or through our contact form on the website.
      </p>
    </div>
  );
};

const tabs = [
  {
    name: "Product Details",
    content: <TabProduct />,
  },

  {
    name: "FAQs",
    content: <TabFaq />,
  },
];

const Images = ({ variant }) => {
  const [imgShow, setImgShow] = useState(0);

  return (
    <div className="images  flex-1 flex flex-col xl:flex-row gap-4">
      <div className="flex flex-nowrap flex-row xl:flex-col w-full xl:w-1/3 gap-4 order-2 xl:order-1">
        {variant.image.map((img, i) => (
          <div
            key={i}
            className="flex-1 w-1/3 xl:w-full aspect-square rounded-xl overflow-hidden cursor-pointer outline-none hover:outline hover:outline-black-40 smooth bg-black-10"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              onClick={() => setImgShow(i)}
            />
          </div>
        ))}
      </div>
      <div className="w-full order-1 xl:order-2 aspect-square overflow-hidden  rounded-xl bg-black-10">
        <AnimatePresence>
          <motion.img
            key={variant.image[imgShow]}
            src={variant.image[imgShow]}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full object-cover cursor-pointer"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
const DetailPage = () => {
  const { id } = useParams();
  const [theproduct, setTheProduct] = useState(
    products.find((p) => p.id == id)
  );

  const [tabContent, setTabContent] = useState(tabs[1]);
  const [variant, setVariant] = useState(theproduct.variant[0]);
  const [size, setSize] = useState(theproduct.size[2]);
  const [qty, setQty] = useState(1);

  const dataCart = useDatacart(id, theproduct, variant, size, qty)

  const productSlices = products.slice(0, 5);

  const addToCart = useGlobalState((state) => state.addToCart); 

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTheProduct(products.find((p) => p.id == id));
    setVariant(theproduct.variant[0]);
  }, [id, theproduct]);

 

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [variant]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="main-container">
        <hr />
        <Budge thisPage={"detail"} />
        <div className="flex gap-4 gap-y-8 xl:gap-8 flex-col xl:flex-row justify-center">
          <Images variant={variant} />
          <div className="details flex-1">
            <div className="flex flex-col gap-6 card-price">
              <div className="detail flex gap-3 flex-col">
                <h2>{theproduct.name}</h2>
                <div className="flex gap-8 mt-2 items-center">
                  <StarRating
                    rating={theproduct.rating}
                    styles={" origin-left scale-125"}
                  />
                  <p className="tx-2">({theproduct.rating}/5)</p>
                </div>
                <div className="flex gap-3">
                  {theproduct.discount ? (
                    <div className="flex gap-3">
                      <p className="price">
                        <Usd>
                          {(theproduct.price * (100 - theproduct.discount)) /
                            100}
                        </Usd>
                      </p>
                      <p className="price-discount">
                        <Usd>{theproduct.price}</Usd>
                      </p>
                      <span className="discount">{`${theproduct.discount}%`}</span>
                    </div>
                  ) : (
                    <p className="price">
                      <Usd>{theproduct.price}</Usd>
                    </p>
                  )}
                </div>
                <p className="tx-2 text-black-60">{theproduct.description}</p>
              </div>
              <hr />
              <div className="color flex gap-3 flex-col">
                <p className="tx-2 text-black-60">Select Color</p>
                <div className="flex gap-3">
                  {theproduct.variant.map((vr, i) => (
                    <div
                      key={i}
                      onClick={() => setVariant(vr)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        vr === variant && "outline"
                      } hover:outline outline-black-20 overflow-hidden cursor-pointer`}
                      style={{ backgroundColor: vr.color.hex }}
                    >
                      {vr === variant && (
                        <motion.i
                          className={`${
                            vr.color == "#F7F7F4"
                              ? "text-black-40"
                              : "text-white"
                          } tx-3 ic-checklist block`}
                          layoutId="checklist"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="size flex gap-3 flex-col">
                <p className="tx-2 text-black-60">Choose Size</p>
                <div className="flex gap-3">
                  {theproduct.size.map((sz, i) => (
                    <div
                      key={i}
                      onClick={() => setSize(sz)}
                      className={`tx-1 px-4 py-3 rounded-full cursor-pointer smooth ${
                        size === sz
                          ? "text-white bg-black-100"
                          : "text-black-60 bg-black-10 hover:text-white hover:bg-black-100 "
                      }`}
                    >
                      <SizeName s={sz} />
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="btn flex gap-5 w-full">
                <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black-10 rounded-full">
                  <i
                    className="ic-minus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                    onClick={() => setQty(qty - 1)}
                  />
                  <p className="tx-2 p-2 font-bold">{qty}</p>
                  <i
                    className="ic-plus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                    onClick={() => setQty(qty + 1)}
                  />
                </div>
                <Button
                  type="primary"
                  label="add to cart"
                  styles="max-w-full flex-1"
                  icon="ic-cart"
                  onClk={() => addToCart(dataCart)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-container mt-12 xl:mt-20 ">
        <ul className="flex text-center">
          {tabs.map((tab, i) => (
            <li
              key={i}
              onClick={() => setTabContent(tab)}
              className={`flex-1 relative tx-2 py-3 cursor-pointer smooth ${
                tab === tabContent
                  ? "text-black-100"
                  : "text-black-60 hover:text-black-100"
              }`}
            >
              {tab.name}
              {tab === tabContent && (
                <motion.div
                  className="absolute w-full top-full border-b-2 bg-black-10 "
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>
        <hr />
        <div className="h-full">
          <AnimatePresence>
            <motion.div
              key={tabContent ? tabContent.name : null}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {tabContent ? tabContent.content : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="mt-12 xl:mt-16">
        <div className="main-container">
          <h2 className="text-center">you might also like</h2>
        </div>
        <div className="main-container flex gap-6 flex-nowrap xl:flex-wrap overflow-x-scroll hide-scroll-bar mt-12 xl:mt-16">
          {productSlices.map((product, i) => (
            <CardProduct key={i} product={product} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default DetailPage;
