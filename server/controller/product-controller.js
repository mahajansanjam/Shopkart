
import product from '../model/product-schema.js';

export const getProducts = async(request,response)=>{
    try {
        const products =await product.find({});

        response.status(200).json(products);
    } catch (error){
        response.status(500).json({ message:error.message});

    }
}
export const getproductById = async (request,response) =>{
    try {
         const id = request.params.id;
         const products = await product.findOne({'_id' : id})

         return response.status(200).json(products);
    } catch (error) {
        response.status(500).json({message: error.message})

    }
}