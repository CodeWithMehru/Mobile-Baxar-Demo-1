import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState } from "react";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [bannerIndex, setBannerIndex] = useState(0);

  const productImages = [
    "https://images.pexels.com/photos/18403789/pexels-photo-18403789.jpeg",
    "https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg",
    "https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg",
    "https://images.pexels.com/photos/32858913/pexels-photo-32858913.jpeg",
    "https://images.pexels.com/photos/6373086/pexels-photo-6373086.jpeg",
    "https://images.pexels.com/photos/35005241/pexels-photo-35005241.jpeg",
    "https://images.pexels.com/photos/8105648/pexels-photo-8105648.jpeg",
    "https://images.pexels.com/photos/3623359/pexels-photo-3623359.jpeg",
    "https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg",
    "https://images.pexels.com/photos/12957102/pexels-photo-12957102.jpeg",
  ];

  const banners = [
    { id: 1, image: "https://images.pexels.com/photos/5625048/pexels-photo-5625048.jpeg" },
    { id: 2, image: "https://images.pexels.com/photos/12957102/pexels-photo-12957102.jpeg" },
    { id: 3, image: "https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg" },
    { id: 4, image: "https://images.pexels.com/photos/8105648/pexels-photo-8105648.jpeg" },
  ];

  const brands = [
    { id: 1, name: "Apple", image: "https://images.pexels.com/photos/18403789/pexels-photo-18403789.jpeg" },
    { id: 2, name: "Samsung", image: "https://images.pexels.com/photos/12957102/pexels-photo-12957102.jpeg" },
    { id: 3, name: "OnePlus", image: "https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg" },
    { id: 4, name: "Pixel", image: "https://images.pexels.com/photos/35005241/pexels-photo-35005241.jpeg" },
    { id: 5, name: "Vivo", image: "https://images.pexels.com/photos/32858913/pexels-photo-32858913.jpeg" },
    { id: 6, name: "iQOO", image: "https://images.pexels.com/photos/6373086/pexels-photo-6373086.jpeg" },
    { id: 7, name: "OPPO", image: "https://images.pexels.com/photos/8105648/pexels-photo-8105648.jpeg" },
    { id: 8, name: "Realme", image: "https://images.pexels.com/photos/3623359/pexels-photo-3623359.jpeg" },
  ];

  const topProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      currentPrice: 48000,
      originalPrice: 129900,
      discount: 63,
      image: productImages[0],
      rating: 4.5,
      reviews: 124,
      specs: "128GB",
      quality: "Good",
    },
    {
      id: 2,
      name: "Vivo V40 Pro 5G",
      currentPrice: 24500,
      originalPrice: 54999,
      discount: 55,
      image: productImages[1],
      rating: 4.3,
      reviews: 89,
      specs: "8GB RAM, 256GB",
      quality: "Good",
    },
    {
      id: 3,
      name: "Apple iPhone 15",
      currentPrice: 39500,
      originalPrice: 79600,
      discount: 50,
      image: productImages[2],
      rating: 4.6,
      reviews: 156,
      specs: "128GB",
      quality: "Good",
    },
    {
      id: 4,
      name: "Vivo V50 5G",
      currentPrice: 28500,
      originalPrice: 42999,
      discount: 34,
      image: productImages[3],
      rating: 4.2,
      reviews: 67,
      specs: "8GB RAM, 128GB",
      quality: "Good",
    },
    {
      id: 5,
      name: "Motorola g42",
      currentPrice: 5000,
      originalPrice: 16999,
      discount: 71,
      image: productImages[4],
      rating: 4.1,
      reviews: 45,
      specs: "4GB RAM, 64GB",
      quality: "Fair",
    },
  ];

  const flashSaleProducts = [
    {
      id: 1,
      name: "FireBoltt Starlight",
      currentPrice: 1049,
      originalPrice: 14999,
      discount: 93,
      image: productImages[5],
      rating: 4.0,
      reviews: 32,
      specs: "Smart Watch",
      quality: "Good",
    },
    {
      id: 2,
      name: "FireBoltt Visionary",
      currentPrice: 1049,
      originalPrice: 16999,
      discount: 94,
      image: productImages[6],
      rating: 3.9,
      reviews: 28,
      specs: "Smart Watch",
      quality: "Good",
    },
    {
      id: 3,
      name: "Noise ColorFit Pro 2",
      currentPrice: 400,
      originalPrice: 4999,
      discount: 92,
      image: productImages[7],
      rating: 3.8,
      reviews: 19,
      specs: "Smart Watch",
      quality: "Fair",
    },
    {
      id: 4,
      name: "VIVO X200 FE 5G",
      currentPrice: 42500,
      originalPrice: 59999,
      discount: 29,
      image: productImages[8],
      rating: 4.4,
      reviews: 112,
      specs: "8GB RAM, 256GB",
      quality: "Good",
    },
    {
      id: 5,
      name: "Vivo T4x 5G",
      currentPrice: 14000,
      originalPrice: 17999,
      discount: 22,
      image: productImages[9],
      rating: 4.2,
      reviews: 58,
      specs: "8GB RAM, 128GB",
      quality: "Good",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Realme P3x 5G",
      currentPrice: 13000,
      originalPrice: 17999,
      discount: 28,
      image: productImages[0],
      rating: 4.3,
      reviews: 78,
      specs: "8GB RAM, 256GB",
      quality: "Good",
    },
    {
      id: 2,
      name: "Realme C61",
      currentPrice: 7200,
      originalPrice: 11999,
      discount: 40,
      image: productImages[1],
      rating: 4.0,
      reviews: 43,
      specs: "4GB RAM, 128GB",
      quality: "Fair",
    },
    {
      id: 3,
      name: "OPPO Reno11 5G",
      currentPrice: 19500,
      originalPrice: 36999,
      discount: 47,
      image: productImages[2],
      rating: 4.5,
      reviews: 95,
      specs: "8GB RAM, 256GB",
      quality: "Good",
    },
    {
      id: 4,
      name: "Samsung Galaxy A15",
      currentPrice: 12000,
      originalPrice: 18999,
      discount: 37,
      image: productImages[3],
      rating: 4.1,
      reviews: 52,
      specs: "6GB RAM, 128GB",
      quality: "Good",
    },
    {
      id: 5,
      name: "OnePlus 12R",
      currentPrice: 35000,
      originalPrice: 44999,
      discount: 22,
      image: productImages[4],
      rating: 4.6,
      reviews: 134,
      specs: "12GB RAM, 256GB",
      quality: "Good",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const ProductCard = ({
    product,
  }: {
    product: (typeof topProducts)[0];
  }) => (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 md:h-48 object-contain p-4"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.discount}% OFF
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-xs md:text-sm font-medium text-gray-900 truncate">
            {product.name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-bold text-gray-900">₹{product.currentPrice.toLocaleString()}</span>
            <span className="text-xs text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          <div className="mt-2 text-xs text-green-600 font-medium">
            {product.quality}
          </div>
          <div className="text-xs text-gray-500">{product.specs}</div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-gray-50">
      <div className="pt-16 pb-20 md:pb-0">
        {/* Banner Slider */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {banners.map((banner) => (
                <Link
                  key={banner.id}
                  to={`/banner/${banner.id}`}
                  className="flex-shrink-0 w-full snap-start"
                >
                  <img
                    src={banner.image}
                    alt="Banner"
                    className="w-full h-40 md:h-64 object-cover rounded-lg"
                  />
                </Link>
              ))}
            </div>

            {/* Banner Navigation Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setBannerIndex(idx)}
                  className={`w-2 h-2 rounded-full transition ${
                    idx === bannerIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Popular Brands */}
        <section className="max-w-7xl mx-auto px-4 py-6 bg-white mt-2 rounded-lg">
          <div className="mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Popular Brands
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/products?brand=${brand.name}`}
                className="flex flex-col items-center gap-2 p-2 rounded-lg hover:shadow-md transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full md:w-20 md:h-20 object-contain"
                />
                <span className="text-xs md:text-sm text-center text-gray-900">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Products */}
        <section className="max-w-7xl mx-auto px-4 py-6 mt-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Top Products
            </h2>
            <Link
              to="/products"
              className="text-primary hover:underline text-sm"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Offer Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6 mt-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold">
              Festive Season Sale!
            </h3>
            <p className="text-sm md:text-base mt-2">
              Up to 40% off on all accessories
            </p>
            <button className="mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Flash Sale */}
        <section className="max-w-7xl mx-auto px-4 py-6 mt-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Flash Sale
              </h2>
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                Ends in 02:15:30
              </div>
            </div>
            <Link
              to="/products?flash-sale=true"
              className="text-primary hover:underline text-sm"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {flashSaleProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-40 md:w-56">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="max-w-7xl mx-auto px-4 py-6 mt-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Best Sellers
            </h2>
            <Link
              to="/products?best-sellers=true"
              className="text-primary hover:underline text-sm"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Second Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6 mt-2">
          <img
            src="https://images.pexels.com/photos/5625048/pexels-photo-5625048.jpeg"
            alt="Promotional Banner"
            className="w-full rounded-lg object-cover h-40 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
