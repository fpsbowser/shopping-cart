import uniqid from "uniqid";

const products = [
  {
    id: uniqid(),
    name: "Kamikaze Green Hoodie",
    description: "",
    mainImage: require("../assets/Kamikaze_Green_Hoodie_Male_Model_Front_1024x1024_f9d40831-2f58-4a08-a853-eb1f057ea1b8_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Green_Hoodie_Female_Model_Front_1024x1024_61b11c74-3050-43cb-9064-cb8cc8b63746_1024x1024.webp"),
    additionalImages: [
      require("../assets/Kamikaze_Green_Hoodie_Male_Model_Back_1024x1024_c48eea22-2dba-4ef3-b730-891fce314c7d_1024x1024.webp"),
      require("../assets/Kamikaze_Green_Hoodie_Female_Model_Back_1024x1024_db7bee31-f3c9-4ebf-b6e4-f902babd7ef5_1024x1024.jpg"),
    ],
    size: "",
    quantity: 0,
    price: 60,
  },
  {
    id: uniqid(),
    name: "Kamikaze Green Cropped Hoodie",
    description: "",
    mainImage: require("../assets/Kamikaze_Crop_-_Front_-_Liv_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Crop_-_Detail_-_Liv_1024x1024.webp"),
    additionalImages: [
      require("../assets/Kamikaze_Crop_-_Front_-_Gina_1024x1024.webp"),
      require("../assets/Kamikaze_Crop_-_Back_-_Gina_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 60,
  },
  {
    id: uniqid(),
    name: "Top Gunner Patch Cropped Hoodie",
    description: "",
    mainImage: require("../assets/Top_Gunner_Crop_-_Gina_1024x1024.webp"),
    secondaryImage: require("../assets/Top_Gunner_Crop_-_Detail_-_Gina02_1024x1024.webp"),
    additionalImages: [
      require("../assets/Top_Gunner_Crop_-_Liv_1024x1024.webp"),
      require("../assets/EM-GenStock_W_TopGunner-CroppedHoodie_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 60,
  },
  {
    id: uniqid(),
    name: "Top Gunner Patch Hoodie",
    description: "",
    mainImage: require("../assets/Top_Gunner_Patch_Hoodie_Male_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Top_Gunner_Patch_Hoodie_Male_Model_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Top_Gunner_Patch_Hoodie_Female_Model_1024x1024.webp"),
      require("../assets/Top_Gunner_Patch_Hoodie_flat_lay_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 65,
  },
  {
    id: uniqid(),
    name: "Women's Plane Cropped Hoodie",
    description: "",
    mainImage: require("../assets/Women_s_Plane_Cropped_Hoodie_Female_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Women_s_Plane_Cropped_Hoodie_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Women_s_Plane_Cropped_Hoodie_Front_1024x1024.webp"),
      require("../assets/Women_s_Plane_Cropped_Hoodie_Back_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 60,
  },
  {
    id: uniqid(),
    name: "Death Before Defeat Lightweight Black Bomber",
    description: "",
    mainImage: require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Male_Model_Front_1024x1024.webp"),
    secondaryImage: require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Male_Model_Back_1024x1024.webp"),
    additionalImages: [
      require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Female_Model_Front_1024x1024.webp"),
      require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Female_Model_Back_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 70,
  },
  {
    id: uniqid(),
    name: "Unconquered Black Long Sleeve",
    description: "",
    mainImage: require("../assets/Unconquered_Black_Long_Sleeve_Male_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Unconquered_Black_Long_Sleeve_Male_Model_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Unconquered_Black_Long_Sleeve_Female_Model_1024x1024.webp"),
      require("../assets/Unconquered_Black_Long_Sleeve_Famel_Model_Detail_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 35,
  },
  {
    id: uniqid(),
    name: "Plane Crewneck",
    description: "",
    mainImage: require("../assets/Plane_Crewneck_Female_Model_Front_1024x1024.webp"),
    secondaryImage: require("../assets/Plane_Crewneck_Female_Model_Back_1024x1024.webp"),
    additionalImages: [
      require("../assets/Plane_Crewneck_Male_Model_Detail_2_1024x1024.webp"),
      require("../assets/Plane_Crewneck_Male_Model_Detail_1024x1024.webp"),
    ],
    size: "",
    quantity: 0,
    price: 60,
  },
  {
    id: uniqid(),
    name: "Kamikaze Hat",
    description: "",
    mainImage: require("../assets/Kamikaze_Hat_Female_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Hat_Male_Model_1024x1024.webp"),
    additionalImages: [require("../assets/Kamikaze_Hat_1024x1024.webp")],
    size: "",
    quantity: 0,
    price: 30,
  },
  // {
  //   id: uniqid(),
  //   name: "Banner",
  //   description: "",
  //   mainImage: require("../assets/Kamakaze_Banner_NEW_1600x.webp"),
  //   secondaryImage: null,
  //   additionalImages: null,
  //   size: null,
  //   quantity: null,
  //   price: null,
  // },
];

export default products;
