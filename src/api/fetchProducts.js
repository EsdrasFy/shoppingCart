const fetchProducts = async (product) =>{
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
    const data = await response.json();
    
    return data.results;
};
export default fetchProducts