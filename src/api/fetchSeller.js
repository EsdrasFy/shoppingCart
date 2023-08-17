const fetchSeller = async (idSeller) => {
  const response = await fetch(`https://api.mercadolibre.com/users/${idSeller}`);
  const data = await response.json();
  return data;
};
// nao esta funcionando e volta apenas erro
export default fetchSeller