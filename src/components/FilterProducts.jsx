import { Button } from "react-bootstrap";
import { useGlobalContext } from "../context";
import Rating from "./Rating";

const FilterProducts = () => {
  /* using useGlobalContext() to consume below contex value */
  const { sort, byOutStock, byFastDelivery, byRating, filterDispatch } = useGlobalContext();

  return (
    <div className="side filter">
      <h2>Filter Products</h2>
      <form className="d-flex flex-column gap-4">
        {/* "Ascending" Radio Input */}
        <div>
          <input
            type="radio"
            name="order"
            id="asc"
            checked={sort === "LowToHigh"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "LowToHigh" })
            }
          />
          <label htmlFor="asc">Ascending</label>
        </div>
        {/* "Descending" Radio Input */}
        <div>
          <input
            type="radio"
            name="order"
            id="desc"
            checked={sort === "HighToLow"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "HighToLow" })
            }
          />
          <label htmlFor="desc">Descending</label>
        </div>
        {/* "OutOfStock" Checkbox Input */}
        <div>
          <input
            type="checkbox"
            name="OutOfStock"
            id="outstock"
            checked={byOutStock}
            onChange={() => filterDispatch({ type: "FILTER_BY_STOCK" })}
          />
          <label htmlFor="outstock">Include Out of Stock</label>
        </div>
        {/* "FastDelivery" Checkbox Input */}
        <div>
          <input
            type="checkbox"
            name="FastDelivery"
            id="delivery"
            checked={byFastDelivery}
            onChange={() => filterDispatch({ type: "FILTER_BY_DELIVERY" })}
          />
          <label htmlFor="delivery">Fast Delivery Only</label>
        </div>
        {/* Rating */}
        <div className="rating">
          <label>Rating:</label>
          <Rating
            rating={byRating}
            onClick={(i) =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
            }
            clickable
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* Clear Filters Button */}
        <Button
          className="btn-light"
          onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear Filters
        </Button>
      </form>
    </div>
  );
};

export default FilterProducts;
