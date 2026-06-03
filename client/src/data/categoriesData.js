// banner images
import formalWearBanner from "../assets/images/category/Category Banners/img 7.png";
import sportsWearBanner from "../assets/images/category/Category Banners/img 1.png";
import workWearBanner from "../assets/images/category/Category Banners/img 2.png";
import sportsUniformBanner from "../assets/images/category/Category Banners/img 3.png";
import healthcareBanner from "../assets/images/category/Category Banners/img 4.png";
import hospitalityBanner from "../assets/images/category/Category Banners/img 5.png";
import accessoriesBanner from "../assets/images/category/Category Banners/img 6.png";

// product images
import productImage from "../assets/images/category/product.png";

const products = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Tailored Blazer",
  moq: "MOQ 50 Units",
  desc: "Unit based: 15-43L",
  image: productImage,
}));

export const categoriesData = {
  "formal-wear": {
    title: "Formal Wear",
    subtitle: "Elegant attire for professional occasions.",
    banner: formalWearBanner,
    products,
  },
  "sports-wear": {
    title: "Sports Wear",
    subtitle: "Performance apparel engineered for movement.",
    banner: sportsWearBanner,
    products,
  },

  "work-wear": {
    title: "Work Wear",
    subtitle: "Heavy-duty apparel for industrial workforces.",
    banner: workWearBanner,
    products,
  },

  "sports-uniform": {
    title: "Sports Uniform",
    subtitle: "Team kits built to perform under pressure.",
    banner: sportsUniformBanner,
    products,
  },

  "health-care": {
    title: "Healthcare",
    subtitle: "Antibacterial fabrics, surgical precision.",
    banner: healthcareBanner,
    products,
  },

  hospitality: {
    title: "Hospitality",
    subtitle: "Front-of-house elegance, back-of-house durability.",
    banner: hospitalityBanner,
    products,
  },

  accessories: {
    title: "Accessories",
    subtitle: "The details that finish the kit.",
    banner: accessoriesBanner,
    products,
  },
};