import { pool } from './db.js';

const products = [
  {
    id: 1,
    name: "Premium Whey Protein",
    description: "25g Protein per Serving, Chocolate",
    price: 49.99,
    category: "Supplements",
    image: "/images/whey-protein.webp",
  },
  {
    id: 2,
    name: "Resistance Bands Set",
    description: "5-Level Latex Bands, Full Body",
    price: 29.99,
    category: "Equipment",
    image: "/images/resistance-bands.webp",
  },
  {
    id: 3,
    name: "Performance Training Shoes",
    description: "Lightweight Mesh, Responsive Sole",
    price: 129.99,
    category: "Footwear",
    image: "/images/training-shoes.webp",
  },
  {
    id: 4,
    name: "Pro Yoga Mat",
    description: "6mm Non-Slip, Eco-Friendly TPE",
    price: 44.99,
    category: "Equipment",
    image: "/images/yoga-mat.webp",
  },
  {
    id: 5,
    name: "Adjustable Dumbbells",
    description: "5–52.5 lbs, Quick-Change System",
    price: 349.99,
    category: "Equipment",
    image: "/images/dumbbells.webp",
  },
  {
    id: 6,
    name: "Elite Gym Bag",
    description: "40L Capacity, Shoe Compartment",
    price: 64.99,
    category: "Accessories",
    image: "/images/gym-bag.webp",
  },
  {
    id: 7,
    name: "Compression Joggers",
    description: "4-Way Stretch, Moisture-Wicking",
    price: 59.99,
    category: "Apparel",
    image: "/images/joggers.webp",
  },
  {
    id: 8,
    name: "Massage Gun Pro",
    description: "30-Speed, 6 Attachments, Deep Tissue",
    price: 149.99,
    category: "Recovery",
    image: "/images/massage-gun.webp",
  },
  {
    id: 9,
    name: "Indoor Spin Cycle",
    description: "Magnetic Resistance, LCD Display",
    price: 499.99,
    category: "Cycles",
    image: "/images/spin-cycle.webp",
  },
  {
    id: 10,
    name: "Lifting Gloves",
    description: "Padded Palm, Wrist Support",
    price: 24.99,
    category: "Accessories",
    image: "/images/lifting-gloves.webp",
  },
  {
    id: 11,
    name: "Performance Hoodie",
    description: "Fleece-Lined, Athletic Fit",
    price: 74.99,
    category: "Apparel",
    image: "/images/hoodie.webp",
  },
  {
    id: 12,
    name: "Stainless Steel Water Bottle",
    description: "32oz, Double-Wall Insulated",
    price: 19.99,
    category: "Accessories",
    image: "/images/water-bottle.webp",
  },
];

async function seed() {
  try {
    console.log('Seeding products...');
    for (const p of products) {
      await pool.query(
        `INSERT INTO products (id, title, description, sellprice, category, image1, createdat, updatedat) 
         VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
         ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title`,
        [p.id, p.name, p.description, p.price, p.category, p.image]
      );
    }
    console.log('✅ Seeding successful!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed!');
    console.error(err);
    process.exit(1);
  }
}

seed();
