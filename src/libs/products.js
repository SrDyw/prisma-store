import products from '../mock/products.json'

export const getAllProduct = () => {
    return products;
}

export const getProductByID = id => {
    return products.filter(p => p.id == id)[0];
}