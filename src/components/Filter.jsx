export function Filter({filters, setFilters}){
    const handleChange = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    return (
        <header>
            <input onChange={handleChange} type="range" name="" id="" />
            <p>{filters.minPrice}</p>
        </header>
    )
}