import { useFilter } from "../hocks/useFilter";
import { useId } from "react";

export function Filter(){
    const { filters, setFilters } = useFilter();
    const minPriceID = useId();
    const categoryID = useId();

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
      setFilters(prevState => ({
        ...prevState,
        category: event.target.value,
      }));
    };

    return (
      <div className="filter-container">
        <div className="min_price_container">
          <label htmlFor={minPriceID}>Precio mínimo: </label>
          <input
            min={0}
            max={1000}
            onChange={handleChangeMinPrice}
            type="range"
            name=""
            id={minPriceID}
            value={filters.minPrice}
          />
          <p className="min_price_value">${filters.minPrice}</p>
        </div>
        <div className="category_container">
          <label className="category" htmlFor={categoryID}>Categoría</label>
          <select  className="select" onChange={handleChangeCategory} name="" id={categoryID}>
            <option value="all">Todas</option>
            <option value="laptops">Laptop</option>
            <option value="smartphones">Celulares</option>
          </select>
        </div>
      </div>
    );
}