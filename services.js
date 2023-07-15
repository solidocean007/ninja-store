import { NINJA_API, COMMERCE_URL } from "./constants";

async function fetchProducts() {
  try {
    const response = await fetch(COMMERCE_URL, {
      headers: {
        'X-Authorization': NINJA_API,
      },
    });

    if (response.ok) {
      const json = await response.json();
      // console.log(json, ":json")
      const storeData = json.data;
      const formattedData = storeData
      .filter(item => item && item.name)
      .map((item)=>{
        const {
          name,
          inventory: {available = 0} = {},
          image: { url = "" } = {},
          price,
          categories,
          description = "",
        } = item;
        
        return {
          name,
          inventory: available,
          imageUrl: url,
          price: price?.formatted_with_symbol || "",
          category: categories.length > 0 ? categories[0].name : 'Uncategorized',

          description,
        };
        });
       return formattedData;
    } else {
      throw new Error('Invalid HTTP request');
    }
  } catch (error) {
    throw error;
  }
}

export default fetchProducts;
