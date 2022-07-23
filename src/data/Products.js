// import uniqid from "uniqid";

const products = [
  {
    id: "kamikaze-green-hoodie",
    name: "Kamikaze Green Hoodie",
    description:
      "Unisex fleece pullover hoodie in military green with matching drawcords. Black text printed on front chest, black text printed down back center, and multi-color patch on right wrist.",
    mainImage: require("../assets/Kamikaze_Green_Hoodie_Male_Model_Front_1024x1024_f9d40831-2f58-4a08-a853-eb1f057ea1b8_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Green_Hoodie_Female_Model_Front_1024x1024_61b11c74-3050-43cb-9064-cb8cc8b63746_1024x1024.webp"),
    additionalImages: [
      require("../assets/Kamikaze_Green_Hoodie_Male_Model_Back_1024x1024_c48eea22-2dba-4ef3-b730-891fce314c7d_1024x1024.webp"),
      require("../assets/Kamikaze_Green_Hoodie_Female_Model_Back_1024x1024_db7bee31-f3c9-4ebf-b6e4-f902babd7ef5_1024x1024.jpg"),
    ],
    size: "medium",
    quantity: 0,
    price: 60,
  },
  {
    id: "kamikaze-green-cropped-hoodie",
    name: "Kamikaze Green Cropped Hoodie",
    description:
      "WOMENS FLEECE PULLOVER HOODIE IN MILITARY GREEN WITH MATCHING DRAWCORDS. BLACK TEXT PRINTED ON FRONT CHEST, BLACK TEXT PRINTED DOWN BACK CENTER, AND MULTI-COLOR PATCH ON RIGHT WRIST.!",
    mainImage: require("../assets/Kamikaze_Crop_-_Front_-_Liv_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Crop_-_Detail_-_Liv_1024x1024.webp"),
    additionalImages: [
      require("../assets/Kamikaze_Crop_-_Front_-_Gina_1024x1024.webp"),
      require("../assets/Kamikaze_Crop_-_Back_-_Gina_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 60,
  },
  {
    id: "top-gunner-patch-cropped-hoodie",
    name: "Top Gunner Patch Cropped Hoodie",
    description:
      "M. MATHERS REPORTING FOR DUTY. DIRECT EMBROIDERY ON CHEST AND HAND SEWN ARM PATCH ON A BLACK CHAMPION HOODIE.",
    mainImage: require("../assets/Top_Gunner_Crop_-_Gina_1024x1024.webp"),
    secondaryImage: require("../assets/Top_Gunner_Crop_-_Detail_-_Gina02_1024x1024.webp"),
    additionalImages: [
      require("../assets/Top_Gunner_Crop_-_Liv_1024x1024.webp"),
      require("../assets/EM-GenStock_W_TopGunner-CroppedHoodie_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 60,
  },
  {
    id: "top-gunner-patch-hoodie",
    name: "Top Gunner Patch Hoodie",
    description:
      "M. Mathers reporting for duty. Direct embroidery on chest and hand sewn arm patch on a black Champion hoodie",
    mainImage: require("../assets/Top_Gunner_Patch_Hoodie_Male_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Top_Gunner_Patch_Hoodie_Male_Model_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Top_Gunner_Patch_Hoodie_Female_Model_1024x1024.webp"),
      require("../assets/Top_Gunner_Patch_Hoodie_flat_lay_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 65,
  },
  {
    id: "womens-plane-cropped-hoodie",
    name: "Women's Plane Cropped Hoodie",
    description:
      "Plane from the official Kamikaze album art wraps around the right side with Kamikaze printed in sandstone on the left arm of a black hoodie.",
    mainImage: require("../assets/Women_s_Plane_Cropped_Hoodie_Female_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Women_s_Plane_Cropped_Hoodie_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Women_s_Plane_Cropped_Hoodie_Front_1024x1024.webp"),
      require("../assets/Women_s_Plane_Cropped_Hoodie_Back_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 60,
  },
  {
    id: "death-before-defeat-lightweight-black-bomber",
    name: "Death Before Defeat Lightweight Black Bomber",
    description:
      "Unisex lightweight bomber in black. White text printed on front left chest and gray scale image printed on back.",
    mainImage: require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Male_Model_Front_1024x1024.webp"),
    secondaryImage: require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Male_Model_Back_1024x1024.webp"),
    additionalImages: [
      require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Female_Model_Front_1024x1024.webp"),
      require("../assets/Death_Before_Defeat_Lightweight_Black_Bomber_Female_Model_Back_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 70,
  },
  {
    id: "unconquered-black-long-sleeve",
    name: "Unconquered Black Long Sleeve",
    description:
      "100% cotton long sleeve t-shirt in black. Gray scale image printed on front with red text printed on right arm.",
    mainImage: require("../assets/Unconquered_Black_Long_Sleeve_Male_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Unconquered_Black_Long_Sleeve_Male_Model_Detail_1024x1024.webp"),
    additionalImages: [
      require("../assets/Unconquered_Black_Long_Sleeve_Female_Model_1024x1024.webp"),
      require("../assets/Unconquered_Black_Long_Sleeve_Famel_Model_Detail_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 35,
  },
  {
    id: "plane-crewneck",
    name: "Plane Crewneck",
    description:
      "Plane from the official Kamikaze album art wraps around the right side with Kamikaze printed in black on the left arm of a sandstone crew neck.",
    mainImage: require("../assets/Plane_Crewneck_Female_Model_Front_1024x1024.webp"),
    secondaryImage: require("../assets/Plane_Crewneck_Female_Model_Back_1024x1024.webp"),
    additionalImages: [
      require("../assets/Plane_Crewneck_Male_Model_Detail_2_1024x1024.webp"),
      require("../assets/Plane_Crewneck_Male_Model_Detail_1024x1024.webp"),
    ],
    size: "medium",
    quantity: 0,
    price: 60,
  },
  {
    id: "kamikaze-hat",
    name: "Kamikaze Hat",
    description: "Text embroidered in white on front of a black New Era hat.",
    mainImage: require("../assets/Kamikaze_Hat_Female_Model_1024x1024.webp"),
    secondaryImage: require("../assets/Kamikaze_Hat_Male_Model_1024x1024.webp"),
    additionalImages: [require("../assets/Kamikaze_Hat_1024x1024.webp")],
    size: "medium",
    quantity: 0,
    price: 30,
  },
];

export default products;
