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
      <>
        <div>
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
          <p>{filters.minPrice}</p>
        </div>
        <div>
          <label htmlFor={categoryID}>Categoría</label>
          <select onChange={handleChangeCategory} name="" id={categoryID}>
            <option value="all">Todas</option>
            <option value="laptops">Laptop</option>
            <option value="smartphones">Celulares</option>
          </select>
        </div>
      </>
    );
}