export function Filter({filters, setFilters}){
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
      <header>
        <div>
          <label htmlFor="minPrice"></label>
          <input
            min={0}
            max={1000}
            onChange={handleChangeMinPrice}
            type="range"
            name=""
            id="minPrice"
          />
          <p>{filters.minPrice}</p>
        </div>
        <div>
          <label htmlFor="category"></label>
          <select onChange={handleChangeCategory} name="" id="category">
            <option value="all">Todas</option>
            <option value="laptops">Laptop</option>
            <option value="smartphones">Celulares</option>
          </select>
        </div>
      </header>
    );
}