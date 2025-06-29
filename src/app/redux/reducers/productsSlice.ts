import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "@/type";

const initialState: initialStateType = {
  products: [
    {
      id: "7",
      name: "Grey Leather Handbag",
      description:
        "Elevate your style with this grey Leather Handbag. Crafted from high-quality black leather, it features a sleek, sophisticated design perfect for any occasion. The spacious interior and durable material ensure both elegance and practicality.",
      price: 39,
      category: "bags",
      stock: 45,
      imageUrl: "/assets/images/black__leather__handbag.png",
      createdAt: "2024-06-25T11:00:00Z",
      ratings: 3,
      idealFor: ["Men"],
      isLiked: true,
    },
    {
      id: "1",
      name: "Blue Striped Cotton Bag",
      description:
        "Add a splash of color to your look with our Blue Striped Cotton Bag. Featuring vibrant blue stripes on soft, durable cotton, this bag is perfect for casual outings or as a stylish beach tote. It offers ample space and a playful design.",
      price: 799,
      category: "bags",
      stock: 25,
      imageUrl: "/assets/images/blue__striped__handbag.png",
      createdAt: "2024-08-19T10:00:00Z",
      ratings: 4.4,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "2",
      name: "Grey Striped Handbag",
      description:
        "Noise-cancelling headphones with Bluetooth connectivity and 30-hour battery life.",
      price: 149,
      category: "Accessories",
      stock: 50,
      imageUrl: "/assets/images/grey__striped__handbag.png",
      createdAt: "2024-08-12T14:30:00Z",
      ratings: 4,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "3",
      name: "Black Leather bag",
      description:
        "Powerful laptop with high-speed SSD, 16GB RAM, and a high-definition screen.",
      price: 1299,
      category: "Computers",
      stock: 15,
      imageUrl: "/assets/images/grey__leather__bag.png",
      createdAt: "2024-08-05T09:15:00Z",
      ratings: 3.5,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "4",
      name: "Light Grey Handbag",
      description: "55-inch TV with 4K resolution and smart features.",
      price: 499,
      category: "Electronics",
      stock: 10,
      imageUrl: "/assets/images/black__leather__handbag.png",
      createdAt: "2024-07-29T18:45:00Z",
      ratings: 4.3,
      idealFor: ["Men", "Women"],
      isLiked: true,
    },
    {
      id: "5",
      name: "Chocolate Leather Bag",
      description:
        "Elevate your style with our luxurious Chocolate Leather Handbag. Crafted from high-quality, rich chocolate brown leather, this handbag exudes sophistication and timeless elegance. Its supple texture and deep, warm hue make it a versatile accessory that complements both casual and formal outfits.",
      price: 89,
      category: "Home Appliances",
      stock: 35,
      imageUrl: "/assets/images/chocolate_leather_handbag.png",
      createdAt: "2024-07-23T12:00:00Z",
      ratings: 4.4,
      idealFor: ["Women"],
      isLiked: false,
    },
    {
      id: "6",
      name: "Dino Friend Teddy",
      description:
        "Wearable fitness tracker with heart rate monitoring and step tracking.",
      price: 59,
      category: "Wearables",
      stock: 60,
      imageUrl: "/assets/images/dino_friend_teddy.png",
      createdAt: "2024-07-15T07:30:00Z",
      ratings: 2,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "8",
      name: "White Cap",
      description:
        "Latest generation gaming console with enhanced graphics and exclusive games.",
      price: 399,
      category: "caps",
      stock: 20,
      imageUrl: "/assets/images/white__cap.png",
      createdAt: "2024-05-15T13:45:00Z",
      ratings: 1,
      idealFor: ["Baby & Kids", "Men"],
      isLiked: false,
    },
    {
      id: "9",
      name: "Grey Leather Bag",
      description:
        "Introducing our adorable Little Dinosaur Teddy Toy – the perfect companion for imaginative play and cuddles. This charming teddy is designed to delight children and dinosaur enthusiasts alike with its soft, plush texture and endearing design.",
      price: 79,
      category: "Accessories",
      stock: 40,
      imageUrl: "/assets/images/grey__leather__bag.png",
      createdAt: "2024-04-10T08:20:00Z",
      ratings: 4.9,
      idealFor: ["Men"],
      isLiked: false,
    },
    {
      id: "10",
      name: "Truck Toy",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 199,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/toy__truck.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 4.1,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "11",
      name: "Car Toy",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/toy__car.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 4.5,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "12",
      name: "Sky Blue Teddy Toy",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/teddy__skyblue.png",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 3.1,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "13",
      name: "Brown Teddy Toy",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/teddy__brown.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 4.0,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "14",
      name: "Children Cap",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/children__cap.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 4.7,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "15",
      name: "Brown Teddy Toy",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: "/assets/images/teddy__brown.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 1.0,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "16",
      name: "Golden Analog Watch",
      description:
        "Discover sophistication with our Golden Analog Watch. This exquisite timepiece features a luxurious gold-tone finish that exudes classic charm and modern style. The analog display offers precision and reliability, while the sleek design ensures it complements any outfit, whether for formal occasions or daily wear.",
      price: 300,
      category: "watches",
      stock: 30,
      imageUrl: "/assets/images/golden__analog__watch.jpg",
      createdAt: "2024-03-01T15:30:00Z",
      ratings: 1.0,
      idealFor: ["Men"],
      isLiked: false,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    likeDislikeProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, isLiked: !product.isLiked }
          : product
      );
    },
  },
});

export const { likeDislikeProduct } = productSlice.actions;
export default productSlice.reducer;
