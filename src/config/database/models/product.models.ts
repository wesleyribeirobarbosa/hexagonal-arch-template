import mongoose,{ Schema } from 'mongoose';

const ProductSchema = new Schema({
 name: {
   type: String,
   unique: true,
 },
 price: String,
});

const ProductModel = mongoose.model('ProductModel', ProductSchema);

export default ProductModel;
