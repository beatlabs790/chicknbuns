const menuData = [
  {
    category: "Specials",
    icon: "🔥",
    items: [
      { id: "sp1", name: "Chicken Burger", price: 119, description: "Crispy fried chicken breast with lettuce, mayo and melted cheese on a toasted bun.", veg: false, image: "chicken-burger.jpg" },
      { id: "sp2", name: "Double Cheese Pull Pizza", price: 199, description: "Loaded with mozzarella cheese, herbs, and spicy chicken chunks.", veg: false, image: "pizza-cheese-pull.jpg" },
      { id: "sp3", name: "Premium Chocolate Brownie", price: 89, description: "Rich, fudgy chocolate brownie topped with chocolate drizzle.", veg: true, image: "chocolate-brownie.jpg" },
      { id: "sp4", name: "Fresh Prep Veg Pizza", price: 149, description: "Artisanal hand-stretched pizza loaded with fresh veggies, herbs, and marinara.", veg: true, image: "pizza-in-prep.jpg" }
    ]
  },
  {
    category: "Chinese",
    icon: "🥢",
    items: [
      { id: "ch1", name: "Chilli Chicken", price: 149, sizeInfo: "6 Pcs", description: "Tender chicken cooked with fresh bell peppers, onions, and hot green chillies in Chinese sauces.", veg: false, image: "chili-chicken-snacks.jpg" },
      { id: "ch2", name: "Chicken Drums Of Heaven", price: 199, sizeInfo: "6 Pcs", description: "Juicy chicken wings coated in a spicy red marinade, fried and tossed in sweet-sour-spicy sauce.", veg: false },
      { id: "ch3", name: "Chicken 65", price: 149, sizeInfo: "6 Pcs", description: "Crisp, spicy fried chicken chunks tempered with curry leaves and yoghurt sauce.", veg: false },
      { id: "ch4", name: "Chilli Mushroom", price: 149, sizeInfo: "6 Pcs", description: "Stir-fried mushrooms in a fiery spicy and sweet sauce.", veg: true },
      { id: "ch5", name: "Chilli Paneer", price: 149, sizeInfo: "6 Pcs", description: "Paneer cubes tossed in a spicy, tangy, and sweet chilli sauce.", veg: true }
    ]
  },
  {
    category: "Rolls",
    icon: "🌯",
    items: [
      { id: "rl1", name: "Egg Roll", price: 55, description: "Classic street roll with egg omelette, layered inside a crispy paratha.", veg: false, image: "egg-roll.png" },
      { id: "rl2", name: "Double Egg Roll", price: 65, description: "Extra egg omelette rolled in a flaky, warm flatbread.", veg: false },
      { id: "rl3", name: "Chicken Egg Roll", price: 80, description: "Crispy paratha wrap stuffed with spiced chicken chunks and egg.", veg: false },
      { id: "rl4", name: "Double Egg Chicken Roll", price: 100, description: "Loaded flatbread with double egg coating and savory spiced chicken.", veg: false },
      { id: "rl5", name: "Paneer Egg Roll", price: 80, description: "Delicious wrap combining soft paneer cubes with egg omelette.", veg: false },
      { id: "rl6", name: "Paneer Roll", price: 75, description: "Flaky paratha loaded with marinated paneer, onions, and spicy chutneys.", veg: true },
      { id: "rl7", name: "Veg Roll", price: 50, description: "Healthy wrap stuffed with a seasoned mix of fresh vegetables.", veg: true }
    ]
  },
  {
    category: "Noodles",
    icon: "🍜",
    items: [
      { id: "nd1", name: "Chicken Noodles", prices: { half: 70, full: 129 }, description: "Stir-fried noodles with chicken shreds, fresh veggies, and light soy sauce.", veg: false },
      { id: "nd2", name: "Chicken & Egg Noodles", prices: { half: 75, full: 139 }, description: "Stir-fried noodles with fluffy egg scrambles and tender chicken chunks.", veg: false },
      { id: "nd3", name: "Chicken Schzewan Noodles", prices: { half: 80, full: 149 }, description: "Spicy Schezwan sauce tossed noodles with chicken and veggies.", veg: false },
      { id: "nd4", name: "Egg Noodles", prices: { half: 60, full: 109 }, description: "Classic noodles stir-fried with egg scrambles and mixed veggies.", veg: false },
      { id: "nd5", name: "Veg Noodles", prices: { half: 50, full: 100 }, description: "Healthy stir-fried noodles tossed with a load of crisp vegetables.", veg: true },
      { id: "nd6", name: "Veg Schzewan Noodles", prices: { half: 60, full: 119 }, description: "Fiery Schezwan style wok-tossed noodles with mixed vegetables.", veg: true },
      { id: "nd7", name: "Paneer Noodles", prices: { half: 75, full: 129 }, description: "Noodles stir-fried with paneer chunks and colorful bell peppers.", veg: true },
      { id: "nd8", name: "Paneer Schzewan Noodles", prices: { half: 80, full: 139 }, description: "Spicy wok-tossed noodles with soft paneer cubes and red chillies.", veg: true }
    ]
  },
  {
    category: "Snacks",
    icon: "🍟",
    items: [
      { id: "sn1", name: "French Fries", price: 49, description: "Crispy, golden potato fingers salted to perfection.", veg: true },
      { id: "sn2", name: "Perry Perry Fries", price: 59, description: "Crispy fries tossed in spicy peri peri seasoning.", veg: true },
      { id: "sn3", name: "Cheese Perry Perry Fries", price: 79, description: "Spicy peri peri fries drizzled with creamy melted cheese sauce.", veg: true },
      { id: "sn4", name: "Cheese Garlic Bread", price: 109, description: "Baked bread slices topped with garlic butter and a thick layer of melted cheese.", veg: true },
      { id: "sn5", name: "Crispy Corn Chill", price: 119, description: "Crisp fried corn kernels tossed with onions, green chillies, and spices.", veg: true },
      { id: "sn6", name: "Veg Strips", price: 119, sizeInfo: "8 Pcs", description: "Crunchy crumb-coated vegetable strips fried to golden crisp.", veg: true },
      { id: "sn7", name: "Veg Smiley", price: 119, sizeInfo: "8 Pcs", description: "Crispy, soft-centered potato smiley faces, a kids favorite.", veg: true },
      { id: "sn8", name: "Veg Spring Roll", price: 199, sizeInfo: "8 Pcs", description: "Crispy fried wrappers loaded with a savory mixed vegetable filling.", veg: true }
    ]
  },
  {
    category: "Pasta",
    icon: "🍝",
    items: [
      { id: "ps1", name: "White Sauce Chicken Pasta", price: 129, description: "Creamy Alfredo style pasta cooked with tender chicken breast pieces and herbs.", veg: false },
      { id: "ps2", name: "Red Sauce Chicken Pasta", price: 129, description: "Tangy Marinara style pasta cooked with juicy chicken, garlic, and fresh herbs.", veg: false },
      { id: "ps3", name: "White Sauce Pasta", price: 119, description: "Penne pasta in a rich, creamy, cheese-loaded white sauce.", veg: true },
      { id: "ps4", name: "Red Sauce Pasta", price: 119, description: "Penne pasta cooked in a slow-simmered zesty Italian red tomato sauce.", veg: true }
    ]
  },
  {
    category: "Zinger Roll",
    icon: "🌯",
    items: [
      { id: "zr1", name: "Thai Spicy Chicken Roll", price: 119, description: "Zesty Thai-marinated crispy chicken strips in a soft flatbread.", veg: false },
      { id: "zr2", name: "Indian Tandoori Chicken Roll", price: 119, description: "Tandoori spiced chicken loaded with mint chutney in a fresh roll.", veg: false },
      { id: "zr3", name: "Classic Chicken Roll", price: 109, description: "Simple, delicious roll with fried chicken strips and standard mayonnaise.", veg: false },
      { id: "zr4", name: "Double Chicken Roll", price: 149, description: "Double portion of crispy chicken strips loaded into a single wrap.", veg: false },
      { id: "zr5", name: "Indian Spicy Veg Roll", price: 99, description: "Crispy mixed veg patty wrapped with spicy Indian chutneys and onions.", veg: true },
      { id: "zr6", name: "Tandoori Veg Roll", price: 109, description: "Paneer or veg nuggets wrapped with smoky tandoori sauce.", veg: true },
      { id: "zr7", name: "Classic Paneer Roll", price: 119, description: "Soft paneer fingers pane-fried and wrapped with cheese mayo.", veg: true }
    ]
  },
  {
    category: "Momo",
    icon: "🥟",
    items: [
      { id: "mm1", name: "Chicken Steamed Momo", price: 99, sizeInfo: "8 Pcs", description: "Steamed dumplings packed with juicy minced chicken stuffing, served with hot spicy chutney.", veg: false },
      { id: "mm2", name: "Chicken Fried Momo", price: 109, sizeInfo: "8 Pcs", description: "Crispy fried chicken dumplings with crunchy coating.", veg: false },
      { id: "mm3", name: "Chicken Crispy Momo", price: 129, sizeInfo: "8 Pcs", description: "Double-coated crunchy fried chicken dumplings tossed with spices.", veg: false },
      { id: "mm4", name: "Veg Steamed Momo", price: 70, sizeInfo: "8 Pcs", description: "Freshly steamed dumplings loaded with finely chopped garden vegetables.", veg: true, image: "veg-momo.png" },
      { id: "mm5", name: "Veg Fried Momo", price: 80, sizeInfo: "8 Pcs", description: "Crisp fried vegetable dumplings.", veg: true },
      { id: "mm6", name: "Veg Crispy Momo", price: 99, sizeInfo: "8 Pcs", description: "Crunchy crumb-coated vegetable momos fried to perfection.", veg: true },
      { id: "mm7", name: "Paneer Steamed Momo", price: 80, sizeInfo: "8 Pcs", description: "Dumplings stuffed with rich, soft, spiced paneer crumbs.", veg: true },
      { id: "mm8", name: "Paneer Fried Momo", price: 90, sizeInfo: "8 Pcs", description: "Fried momos with soft paneer filling.", veg: true },
      { id: "mm9", name: "Paneer Crispy Momo", price: 129, sizeInfo: "8 Pcs", description: "Super crispy outer shell with spiced paneer stuffing.", veg: true }
    ]
  },
  {
    category: "Wraps",
    icon: "🌯",
    items: [
      { id: "wp1", name: "Crispy Chicken Wrap", price: 129, description: "Crispy chicken tenders wrapped with lettuce, onion, and mayonnaise.", veg: false },
      { id: "wp2", name: "Italian Chicken Wrap", price: 139, description: "Chicken strips tossed in Italian seasoning, marinara, and cheese slice in a wrap.", veg: false },
      { id: "wp3", name: "Spicy Paneer Wrap", price: 129, description: "Crunchy spiced paneer patty with liquid cheese and hot peri peri sauce in a wrap.", veg: true },
      { id: "wp4", name: "Crispy Vegi Wrap", price: 119, description: "Crispy loaded vegetable patty with mayonnaise and salads wrapped in a flat tortilla.", veg: true }
    ]
  },
  {
    category: "Sandwich",
    icon: "🥪",
    items: [
      { id: "sd1", name: "Chicken Grill Sandwich", price: 109, description: "Grilled bread slices containing spiced shredded chicken, herbs, and cheese.", veg: false },
      { id: "sd2", name: "Spicy Chicken Sandwich", price: 119, description: "Hot, spiced chicken breast cooked with chillies, onions, and mayonnaise grilled inside bread.", veg: false },
      { id: "sd3", name: "Italian Chicken Sandwich", price: 129, description: "Shedded chicken cooked in Italian herbs, olives, capsicum and mozzarella grilled.", veg: false },
      { id: "sd4", name: "Veg Grill Sandwich", price: 89, description: "Classic grilled sandwich with cucumber, tomatoes, onions, potatoes and mint chutney.", veg: true },
      { id: "sd5", name: "Paneer Grill Sandwich", price: 99, description: "Spiced paneer cubes with green chutney and melted cheese grilled to crisp.", veg: true },
      { id: "sd6", name: "Cheese Grill Sandwich", price: 99, description: "Double layer of cheese slice and shredded cheese grilled till gooey.", veg: true }
    ]
  },
  {
    category: "Maggi",
    icon: "🍜",
    items: [
      { id: "mg1", name: "Crispy Chicken Maggi", price: 100, description: "Maggi noodles tossed with vegetables and topped with crispy chicken nuggets.", veg: false },
      { id: "mg2", name: "Crispy Chicken & Egg Maggi", price: 110, description: "Maggi cooked with scrambled eggs and crispy chicken bites.", veg: false },
      { id: "mg3", name: "Egg Maggi", price: 65, description: "Maggi noodles cooked with scrambled egg, onions, and green chillies.", veg: false },
      { id: "mg4", name: "Veg Maggi", price: 50, description: "Classic Indian street-style Maggi loaded with vegetables.", veg: true, image: "veg-maggi.png" },
      { id: "mg5", name: "Veg Butter Maggi", price: 60, description: "Rich, buttery vegetables Maggi with extra spice mix.", veg: true },
      { id: "mg6", name: "Veg Cheese Maggi", price: 80, description: "Hot Maggi noodles topped with a generous slice of cheese.", veg: true }
    ]
  },
  {
    category: "Beverages",
    icon: "🥤",
    items: [
      { id: "bv1", name: "Chocolate Shake", price: 99, description: "Thick, creamy milkshake blended with dark chocolate syrup and cocoa.", veg: true },
      { id: "bv2", name: "Strawberry Shake", price: 89, description: "Sweet milkshake blended with premium strawberries and cream.", veg: true },
      { id: "bv3", name: "Pineapple Shake", price: 89, description: "Refreshing tropical shake made with sweet pineapple pulp.", veg: true },
      { id: "bv4", name: "Blueberry Shake", price: 109, description: "Exotic shake loaded with sweet, tangy blueberries.", veg: true },
      { id: "bv5", name: "Blackcurrant Shake", price: 99, description: "Fruity milkshake with deep blackcurrant flavors.", veg: true },
      { id: "bv6", name: "Mango Shake", price: 80, description: "A classic thick shake made with ripe Alphonso mangoes.", veg: true },
      { id: "bv7", name: "Oreo Shake", price: 109, description: "Creamy vanilla shake blended with crunchy Oreo cookies and chocolate chips.", veg: true, image: "oreo-shake.png" },
      { id: "bv8", name: "Kit Kat Shake", price: 119, description: "Thick shake loaded with blended Kit Kat chocolate bars.", veg: true },
      { id: "bv9", name: "Cold Coffee", price: 70, description: "Chilled whipped coffee blended with milk and sugar.", veg: true },
      { id: "bv10", name: "Cold Coffee & Ice Cream", price: 89, description: "Our classic cold coffee served with a large scoop of vanilla ice cream.", veg: true },
      { id: "bv11", name: "Virgin Mohito", price: 89, description: "Fizzy mocktail with muddled fresh mint leaves, lime juice, and sugar syrup.", veg: true },
      { id: "bv12", name: "Blue Lagoon", price: 89, description: "A citrusy mocktail with a beautiful blue hue, lime, and soda.", veg: true }
    ]
  },
  {
    category: "Ice cream",
    icon: "🍨",
    items: [
      { id: "ic1", name: "Chocolate Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Two rich scoops of creamy chocolate ice cream.", veg: true },
      { id: "ic2", name: "Strawberry Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Two scoops of fresh fruity strawberry ice cream.", veg: true },
      { id: "ic3", name: "Mango Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Creamy mango flavoured double scoop.", veg: true },
      { id: "ic4", name: "Blackcurrent Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Two scoops packed with delicious blackcurrant berries.", veg: true },
      { id: "ic5", name: "Pistachio Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Rich, nutty pistachio ice cream.", veg: true },
      { id: "ic6", name: "Tooty Fruity Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Fun, colorfully studded double scoop ice cream.", veg: true },
      { id: "ic7", name: "American Nuts Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Vanilla based double scoop loaded with chocolate fudge and mixed dry fruits.", veg: true },
      { id: "ic8", name: "Blind Love Ice Cream", price: 70, sizeInfo: "2 Scp", description: "Special blend scoop with mixed fruit chunks and syrup.", veg: true }
    ]
  },
  {
    category: "Coffee",
    icon: "☕",
    items: [
      { id: "cf1", name: "Cappuccino", price: 79, description: "Espresso with steamed milk and a thick layer of foam.", veg: true },
      { id: "cf2", name: "Flat White", price: 99, description: "Smooth espresso poured over textured microfoam milk.", veg: true },
      { id: "cf3", name: "Mocha", price: 109, description: "Rich espresso combined with hot chocolate syrup and steamed milk.", veg: true },
      { id: "cf4", name: "Latte", price: 99, description: "Creamy espresso with steamed milk and a very light layer of foam.", veg: true },
      { id: "cf5", name: "Classic Coffee", price: 49, description: "Traditional hot milk coffee brewed to perfection.", veg: true },
      { id: "cf6", name: "Lemon Tea", price: 29, description: "Soothing black tea infused with fresh lemon juice and honey.", veg: true },
      { id: "cf7", name: "Espresso Shot", price: 49, description: "Concentrated shot of robust espresso.", veg: true },
      { id: "cf8", name: "Americano", price: 79, description: "Rich espresso diluted with hot water for a smooth black coffee.", veg: true }
    ]
  }
];
