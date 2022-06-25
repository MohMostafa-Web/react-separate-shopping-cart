import FilterProducts from "../components/FilterProducts";
import SingleProduct from "../components/SingleProduct";
import { useGlobalContext } from "../context";

const Home = () => {
  /* using useGlobalContext() to consume below contex value */
  const { products, searchQuery, sort, byOutStock, byFastDelivery, byRating } =
    useGlobalContext();

  /* Create function to filter and sort products */
  const mapProducts = () => {
    let sortedProducts = products;

    /* Sort by Price */
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    /* Filter by Search Query */
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    /* Filter by Out of Stock */
    if (!byOutStock) {
      sortedProducts = sortedProducts.filter((item) => item.inStock);
    }

    /* Filter by Fast Delivery */
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((item) => item.fastDelivery);
    }

    /* Filter by Rating */
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (item) => item.rating === byRating
      );
    }
    return sortedProducts;
  };

  return (
    <>
      <FilterProducts />
      <div className="products">
        {/* Run mapProducts() inside return and using map() to create single product */}
        {mapProducts().map((item) => (
          <SingleProduct key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Home;
