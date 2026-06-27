// Global Cart & Theme State Management
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLoader();
  updateCartBadge();
  setupMobileNavActiveLink();
  initCookieBanner();

  // Route-specific initializations
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "index.html" || page === "") {
    initHomeReviews();
    initTableBooking();
  } else if (page === "menu.html") {
    initMenuPage();
  } else if (page === "cart.html") {
    initCartPage();
  } else if (page === "devs.html") {
    // Developers page specific animations/handlers can go here
  }
});

/* ==========================================
   THEME TOGGLER
   ========================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      showToast(`Switched to ${newTheme} theme`);
    });
  });
}

/* ==========================================
   PAGE LOADER
   ========================================== */
function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    // Ensure loader shows for at least 800ms for premium branding feel
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 800);
  }
}

/* ==========================================
   NAVIGATION
   ========================================== */
function setupMobileNavActiveLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // Desktop active styling
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === page || (page === "index.html" && href === "/")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile active styling
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
  mobileNavItems.forEach(item => {
    const href = item.getAttribute("href");
    if (href === page || (page === "index.html" && href === "/")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

/* ==========================================
   CART STATE FUNCTIONS
   ========================================== */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  });
}

function addToCart(item, quantity = 1, size = null) {
  const cart = getCart();
  const cartItemId = size ? `${item.id}-${size}` : item.id;
  const existingItemIndex = cart.findIndex(cartItem => cartItem.cartItemId === cartItemId);

  const price = size && item.prices ? item.prices[size] : item.price;
  const displayName = size ? `${item.name} (${size.toUpperCase()})` : item.name;

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: item.id,
      cartItemId: cartItemId,
      name: displayName,
      price: price,
      image: item.image || "logo.png",
      veg: item.veg,
      size: size,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added ${displayName} to cart!`);
}

function addToCartById(itemId) {
  if (typeof menuData === 'undefined') {
    showToast("Menu data not loaded yet!");
    return;
  }
  let foundItem = null;
  for (const cat of menuData) {
    foundItem = cat.items.find(item => item.id === itemId);
    if (foundItem) break;
  }
  if (foundItem) {
    addToCart(foundItem);
  } else {
    showToast("Item not found!");
  }
}

/* ==========================================
   TOAST NOTIFICATION
   ========================================== */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast glass-card";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-color);"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  // Animate and remove
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

/* ==========================================
   INDEX/HOME PAGE LOGIC
   ========================================== */
function initHomeReviews() {
  const reviews = [
    {
      author: "Zaid Raza Khan",
      title: "Local Guide · 151 reviews · 806 photos",
      text: "Chick N Buns is a great go-to spot for a quick bite. The food tastes really good, especially the Maggi—definitely worth trying. The owner or staff are humble and friendly, which makes the experience even better. Prices are a bit on the ...",
      rating: 5
    },
    {
      author: "Ashhar Saleem",
      title: "Local Guide · 14 reviews · 2 photos",
      text: "Had pizza here. Far better than pizza hut and dominos to be honest and that too at much lower price.",
      rating: 5
    },
    {
      author: "Daniyal Alam",
      title: "Local Guide · 7 reviews · 6 photos",
      text: "Very good environment, friendly people enjoy chicken popcorn, and burgers.",
      rating: 5
    }
  ];

  const slider = document.querySelector(".review-slider");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  if (!slider || !indicatorsContainer) return;

  // Clear placeholders
  slider.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  reviews.forEach((review, index) => {
    // Create Slide
    const slide = document.createElement("div");
    slide.className = `review-slide ${index === 0 ? "active" : ""}`;
    
    let starsHtml = "";
    for (let i = 0; i < review.rating; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }

    slide.innerHTML = `
      <div class="review-rating">${starsHtml}</div>
      <p class="review-text">"${review.text}"</p>
      <h4 class="review-author">${review.author}</h4>
      <p class="review-author-title">${review.title}</p>
    `;
    slider.appendChild(slide);

    // Create Indicator Dot
    const dot = document.createElement("div");
    dot.className = `indicator-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToReviewSlide(index));
    indicatorsContainer.appendChild(dot);
  });

  let currentSlide = 0;
  let slideInterval = setInterval(nextReviewSlide, 5000);

  function goToReviewSlide(index) {
    currentSlide = index;
    const slides = document.querySelectorAll(".review-slide");
    const dots = document.querySelectorAll(".indicator-dot");

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Reset interval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextReviewSlide, 5000);
  }

  function nextReviewSlide() {
    let next = currentSlide + 1;
    if (next >= reviews.length) {
      next = 0;
    }
    goToReviewSlide(next);
  }
}

/* ==========================================
   MENU PAGE LOGIC
   ========================================== */
let activeCategory = "Specials";
let foodFilter = "all"; // all, veg, nonveg
let searchQuery = "";

function initMenuPage() {
  renderCategories();
  renderMenu();
  setupFilterListeners();
  setupLightbox();

  // Search input event
  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }
}

function renderCategories() {
  const container = document.getElementById("categories-slider");
  if (!container || typeof menuData === "undefined") return;

  container.innerHTML = "";

  menuData.forEach((cat) => {
    const tab = document.createElement("button");
    tab.className = `category-tab ${cat.category === activeCategory ? "active" : ""}`;
    tab.innerHTML = `<span>${cat.icon}</span> ${cat.category}`;
    tab.addEventListener("click", () => {
      activeCategory = cat.category;
      
      // Update active category class
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      renderMenu();

      // Smooth scroll target category title into viewport
      const targetSec = document.getElementById(`category-${cat.category.toLowerCase().replace(/\s+/g, '-')}`);
      if (targetSec) {
        const headerOffset = 100;
        const elementPosition = targetSec.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
    container.appendChild(tab);
  });
}

function setupFilterListeners() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      foodFilter = chip.getAttribute("data-filter");
      renderMenu();
    });
  });
}

function renderMenu() {
  const gridContainer = document.getElementById("menu-grid-container");
  if (!gridContainer || typeof menuData === "undefined") return;

  gridContainer.innerHTML = "";

  menuData.forEach((cat) => {
    // Filter items based on activeCategory, foodFilter, and search query
    // If activeCategory is set, we still render other categories but highlight active one,
    // OR we filter the view to show the items matching the criteria.
    // To make it look like a seamless single-page SSR menu, let's render matching sections.
    
    const matchedItems = cat.items.filter(item => {
      // 1. Theme Filter (veg/nonveg)
      if (foodFilter === "veg" && !item.veg) return false;
      if (foodFilter === "nonveg" && item.veg) return false;

      // 2. Search Query Filter
      if (searchQuery !== "") {
        const nameMatch = item.name.toLowerCase().includes(searchQuery);
        const descMatch = item.description && item.description.toLowerCase().includes(searchQuery);
        return nameMatch || descMatch;
      }

      // 3. Category Filter
      // If we don't have search query, we display the category that is selected
      if (searchQuery === "") {
        return cat.category === activeCategory;
      }

      return true;
    });

    if (matchedItems.length === 0) return;

    // Create Category Section
    const section = document.createElement("div");
    section.className = "menu-category-section";
    section.id = `category-${cat.category.toLowerCase().replace(/\s+/g, '-')}`;

    section.innerHTML = `
      <div class="menu-category-title-wrap">
        <span style="font-size: 1.8rem;">${cat.icon}</span>
        <h2 class="menu-category-title">${cat.category}</h2>
      </div>
      <div class="menu-grid"></div>
    `;

    const grid = section.querySelector(".menu-grid");

    matchedItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card glass-card";
      
      const hasImage = item.image ? true : false;
      const imgPath = hasImage ? item.image : "logo.png";
      const vegDotClass = item.veg ? "veg" : "nonveg";
      const vegDotTitle = item.veg ? "Veg" : "Non-Veg";

      // Formulate price block (handles Noodles sizes)
      let priceHtml = "";
      let footActionsHtml = "";
      
      if (item.prices) {
        // Multi-pricing (Half / Full)
        priceHtml = `<span class="menu-item-price">₹${item.prices.half} <span style="font-size: 0.8rem; color: var(--text-muted);">half</span></span>`;
        
        footActionsHtml = `
          <div style="display:flex; align-items:center; gap:8px;">
            <select class="menu-item-size-select" id="size-select-${item.id}">
              <option value="half">Half - ₹${item.prices.half}</option>
              <option value="full">Full - ₹${item.prices.full}</option>
            </select>
            <button class="btn btn-primary add-to-cart-btn" data-id="${item.id}" data-type="multi" style="padding: 8px 16px; font-size: 0.85rem;">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        `;
      } else {
        // Single pricing
        priceHtml = `<span class="menu-item-price">₹${item.price}</span>`;
        footActionsHtml = `
          ${item.sizeInfo ? `<span class="menu-item-size-info">${item.sizeInfo}</span>` : '<span></span>'}
          <button class="btn btn-primary add-to-cart-btn" data-id="${item.id}" data-type="single" style="padding: 8px 16px; font-size: 0.85rem;">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        `;
      }

      card.innerHTML = `
        <div class="menu-item-image-wrapper">
          <img src="${imgPath}" class="menu-item-image" alt="${item.name}" loading="lazy" onerror="this.src='logo.png'">
          <div class="menu-item-tag ${vegDotClass}" title="${vegDotTitle}">
            <span class="dot-indicator ${vegDotClass}"></span>
          </div>
        </div>
        <div class="menu-item-body">
          <div class="menu-item-head">
            <h3 class="menu-item-name">${item.name}</h3>
            ${priceHtml}
          </div>
          <p class="menu-item-desc">${item.description || "Freshly cooked to order, hot and savory."}</p>
          <div class="menu-item-foot">
            ${footActionsHtml}
          </div>
        </div>
      `;

      // Event listener for cart button
      const addBtn = card.querySelector(".add-to-cart-btn");
      addBtn.addEventListener("click", (e) => {
        const type = addBtn.getAttribute("data-type");
        if (type === "single") {
          addToCart(item, 1);
        } else {
          const sizeSelect = card.querySelector(".menu-item-size-select");
          const selectedSize = sizeSelect ? sizeSelect.value : "half";
          addToCart(item, 1, selectedSize);
        }
      });

      grid.appendChild(card);
    });

    gridContainer.appendChild(section);
  });

  if (gridContainer.children.length === 0) {
    gridContainer.innerHTML = `
      <div class="cart-empty-state glass-card" style="margin: 40px auto; max-width: 500px;">
        <div class="cart-empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <h3>No items found</h3>
        <p>Try adjusting your filters or search term</p>
      </div>
    `;
  }
}

/* ==========================================
   PHYSICAL MENU LIGHTBOX
   ========================================== */
function setupLightbox() {
  const openBtn = document.getElementById("open-physical-menu");
  const lightbox = document.getElementById("physical-menu-lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const pagination = document.getElementById("lightbox-pagination");

  if (!openBtn || !lightbox) return;

  const menuImages = [
    "menu-page-1.png",
    "menu-page-2.png",
    "menu-page-3.png",
    "menu-page-4.png"
  ];
  let currentImgIndex = 0;

  // Render images dynamically inside lightbox
  const slider = lightbox.querySelector(".lightbox-slider");
  // remove old images except arrows
  const existingImgs = slider.querySelectorAll(".lightbox-img");
  existingImgs.forEach(i => i.remove());

  menuImages.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = `lightbox-img ${idx === 0 ? "active" : ""}`;
    img.alt = `Menu Page ${idx + 1}`;
    slider.appendChild(img);
  });

  openBtn.addEventListener("click", () => {
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; // disable scroll
    updateLightboxUI();
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // enable scroll
  });

  prevBtn.addEventListener("click", () => {
    navigateLightbox(-1);
  });

  nextBtn.addEventListener("click", () => {
    navigateLightbox(1);
  });

  // Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (diff > 50) {
      navigateLightbox(-1); // Swipe Right -> Prev
    } else if (diff < -50) {
      navigateLightbox(1); // Swipe Left -> Next
    }
  }

  function navigateLightbox(direction) {
    const imgs = lightbox.querySelectorAll(".lightbox-img");
    imgs[currentImgIndex].classList.remove("active");

    currentImgIndex += direction;
    if (currentImgIndex >= menuImages.length) {
      currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
      currentImgIndex = menuImages.length - 1;
    }

    imgs[currentImgIndex].classList.add("active");
    updateLightboxUI();
  }

  function updateLightboxUI() {
    pagination.textContent = `Page ${currentImgIndex + 1} of ${menuImages.length}`;
  }
}

/* ==========================================
   CART PAGE LOGIC
   ========================================== */
function initCartPage() {
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const subtotalElement = document.getElementById("cart-subtotal");
  const gstElement = document.getElementById("cart-gst");
  const totalElement = document.getElementById("cart-total");
  const summaryPanel = document.getElementById("cart-summary-card");
  const layout = document.getElementById("cart-layout-grid");

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    // Hide panel grid columns on desktop if empty
    if (layout) layout.style.gridTemplateColumns = "1fr";
    if (summaryPanel) summaryPanel.style.display = "none";
    
    container.innerHTML = `
      <div class="cart-empty-state glass-card">
        <div class="cart-empty-icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <h3>Your Cart is Empty</h3>
        <p>Browse our premium menu and add delicious meals to your cart!</p>
        <a href="menu.html" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> View Menu</a>
      </div>
    `;
    return;
  }

  // Restore layout columns if not empty
  if (layout && window.innerWidth >= 768) {
    layout.style.gridTemplateColumns = "1.6fr 1fr";
  }
  if (summaryPanel) summaryPanel.style.display = "block";

  container.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='logo.png'">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <p class="cart-item-meta">₹${item.price} each</p>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price-calc">₹${item.price * item.quantity}</div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="qty-control">
            <button class="qty-btn dec-qty" data-id="${item.cartItemId}"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn inc-qty" data-id="${item.cartItemId}"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="remove-item-btn" data-id="${item.cartItemId}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    `;

    // Quantity Inc/Dec listeners
    row.querySelector(".dec-qty").addEventListener("click", () => updateQty(item.cartItemId, -1));
    row.querySelector(".inc-qty").addEventListener("click", () => updateQty(item.cartItemId, 1));
    row.querySelector(".remove-item-btn").addEventListener("click", () => removeItem(item.cartItemId));

    container.appendChild(row);
  });

  // Calculate prices
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST for cafes
  const total = subtotal + gst;

  if (subtotalElement) subtotalElement.textContent = `₹${subtotal}`;
  if (gstElement) gstElement.textContent = `₹${gst}`;
  if (totalElement) totalElement.textContent = `₹${total}`;

  // Setup WhatsApp checkout link
  const waBtn = document.getElementById("whatsapp-checkout");
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const waUrl = getWhatsAppOrderUrl(cart, total);
      window.open(waUrl, "_blank");
    });
  }
}

function updateQty(cartItemId, delta) {
  const cart = getCart();
  const index = cart.findIndex(item => item.cartItemId === cartItemId);
  if (index > -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
  }
}

function removeItem(cartItemId) {
  let cart = getCart();
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  saveCart(cart);
  renderCart();
  showToast("Item removed from cart");
}

function getWhatsAppOrderUrl(cart, total) {
  const phone = "9801351304";
  let text = `*New Order - CHICK'N'BUN'S*\n`;
  text += `--------------------------------\n`;
  
  cart.forEach((item, index) => {
    text += `${index + 1}. *${item.name}* x ${item.quantity} - ₹${item.price * item.quantity}\n`;
  });

  text += `--------------------------------\n`;
  text += `*Subtotal:* ₹${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}\n`;
  text += `*GST (5%):* ₹${Math.round(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 0.05)}\n`;
  text += `*Total Amount:* ₹${total}\n\n`;
  text += `Please prepare my order. I am calling to confirm.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/91${phone}?text=${encodedText}`;
}

/* ==========================================
   COOKIE CONSENT
   ========================================== */
function initCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  if (!cookieBanner || !acceptBtn) return;

  const consent = localStorage.getItem("cookieConsent");
  if (consent !== "accepted") {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 2000);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.classList.remove("show");
    showToast("Cookie preferences updated!");
  });
}

/* ==========================================
   TABLE BOOKING
   ========================================== */
function initTableBooking() {
  const bookingForm = document.getElementById("table-booking-form");
  if (!bookingForm) return;

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("booking-name").value.trim();
    const phone = document.getElementById("booking-phone").value.trim();
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const guests = document.getElementById("booking-guests").value;
    const type = document.getElementById("booking-type").value;
    const notes = document.getElementById("booking-notes").value.trim();

    if (!name || !phone || !date || !time) {
      showToast("Please fill in all required fields!");
      return;
    }

    const waPhone = "9801351304";
    let text = `*New Table Reservation - CHICK'N'BUN'S*\n`;
    text += `------------------------------------\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Date:* ${date}\n`;
    text += `*Time:* ${time}\n`;
    text += `*Guests:* ${guests} People\n`;
    text += `*Reservation Type:* ${type}\n`;
    if (notes) {
      text += `*Notes/Requests:* ${notes}\n`;
    }
    text += `------------------------------------\n`;
    text += `Please confirm my reservation request. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/91${waPhone}?text=${encodedText}`;
    
    showToast("Opening WhatsApp to send reservation request...");
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  });
}
