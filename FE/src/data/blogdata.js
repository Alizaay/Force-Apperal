// images
import featuredImage from "../assets/images/blog/feature.png";

import blogOne from "../assets/images/blog/1.png";
import blogTwo from "../assets/images/blog/2.png";
import blogThree from "../assets/images/blog/3.png";
import blogFour from "../assets/images/blog/4.png";
import blogFive from "../assets/images/blog/5.png";
import blogSix from "../assets/images/blog/6.png";

export const featuredBlog = {
  id: 1,
  category: "Industry",
  title: "How to Choose the Right Fabric for Custom Uniforms",
  description:
    "From GSM to finishing, here is how fabric choice influences comfort, durability and brand impact.",
  image: featuredImage,
};

export const blogPosts = [
  {
    id: 1,
    category: "Uniforms",
    title: "Workwear That Performs Under Pressure",
    image: blogOne,
  },
  {
    id: 2,
    category: "Sportswear",
    title: "Building Better Team Kits for Clubs",
    image: blogTwo,
  },
  {
    id: 3,
    category: "Manufacturing",
    title: "Inside Our Apparel Production Process",
    image: blogThree,
  },
  {
    id: 4,
    category: "Healthcare",
    title: "Designing Scrubs for Daily Comfort",
    image: blogFour,
  },
  {
    id: 5,
    category: "Fabric",
    title: "Choosing GSM for Different Apparel Types",
    image: blogFive,
  },
  {
    id: 6,
    category: "Branding",
    title: "Embroidery vs Print: What Works Best?",
    image: blogSix,
  },
];

export const blogCategories = [
  { name: "Fabric Guide", count: 8 },
  { name: "Branding", count: 7 },
  { name: "Sportswear", count: 9 },
  { name: "Workwear", count: 6 },
  { name: "Healthcare", count: 4 },
  { name: "Tips", count: 7 },
];

export const popularPosts = [
  "How to choose premium uniform fabric",
  "Best branding methods for team wear",
  "Bulk apparel ordering checklist",
];