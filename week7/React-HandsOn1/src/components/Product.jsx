function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      {/* Product Details */}
      <div className="p-4 space-y-2">
        
        {/* Name */}
        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600">
          ${product.price}
        </p>

      </div>
    </div>
  );
}

export default Product;