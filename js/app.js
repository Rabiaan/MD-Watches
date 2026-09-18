// ============ CONFIG ============
const WHATSAPP_PHONE = '923262436436';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`;

function whatsappOrder(productName) {
  const msg = encodeURIComponent(`Hi MD Watches! I'm interested in the ${productName}. Please share details and price.`);
  window.open(`${WHATSAPP_LINK}?text=${msg}`, '_blank');
}

// ============ DATA ============
const WATCH_PRODUCTS = [
  {
    id: 'md-prx-navy',
    name: 'MD PRX Integrated Navy Sunburst',
    tagline: 'Sport & Integrated',
    category: 'sport',
    categoryLabel: 'Sport & Integrated',
    price: 'Contact for Details',
    image: 'images/watch_steel_noir_1789464042061.jpg',
    caseDiameter: '40 mm',
    caseMaterial: '316L Solid Stainless Steel',
    strapMaterial: 'Integrated Steel Bracelet',
    movement: 'Automatic Movement',
    waterResistance: '5 ATM (50m)',
    description: 'Continuous lines, tapered solid steel links, tapisserie dial, and bold octagonal case engineered for active modern living. A signature sport piece built with architectural precision.',
    isNew: true,
    isTrending: true,
  },
  {
    id: 'md-gmt-royal',
    name: 'MD Two-Tone GMT Royal Blue',
    tagline: 'Classic & Dress',
    category: 'classic',
    categoryLabel: 'Classic & Dress',
    price: 'Contact for Details',
    image: 'images/watch_chrono_gold_1789464022691.jpg',
    caseDiameter: '41 mm',
    caseMaterial: 'Two-Tone 316L Steel & Gold',
    strapMaterial: 'Two-Tone Oyster Bracelet',
    movement: 'GMT Automatic Movement',
    waterResistance: '10 ATM (100m)',
    description: 'Timeless rectangular profiles, fluted bezel accents, and refined dress timepiece for formal occasions and understated boardroom elegance.',
    isTrending: true,
  },
  {
    id: 'md-skeleton-octagon',
    name: 'MD Skeleton Octagon Openwork',
    tagline: 'Mechanical Skeleton',
    category: 'skeleton',
    categoryLabel: 'Mechanical Skeleton',
    price: 'Contact for Details',
    image: 'images/watch_steel_noir_1789464042061.jpg',
    caseDiameter: '42 mm',
    caseMaterial: 'Brushed 316L Steel',
    strapMaterial: 'Integrated Steel Bracelet',
    movement: 'Mechanical Skeleton Calibre',
    waterResistance: '5 ATM (50m)',
    description: 'Exposed balance wheels, intricate gear trains, and openwork dial celebrating the visible pulse of mechanical horology on your wrist.',
    isNew: true,
  },
  {
    id: 'md-horizon-nautilus',
    name: 'MD Horizon Nautilus Charcoal',
    tagline: 'Sport & Integrated',
    category: 'sport',
    categoryLabel: 'Sport & Integrated',
    price: 'Contact for Details',
    image: 'images/watch_white_chrono_1789479379672.jpg',
    caseDiameter: '41 mm',
    caseMaterial: '316L Solid Stainless Steel',
    strapMaterial: 'Integrated Steel Bracelet',
    movement: 'Automatic Movement',
    waterResistance: '10 ATM (100m)',
    description: 'A bold nautilus-inspired silhouette with charcoal sunburst dial, engineered for both daily wear and formal statement pieces.',
  },
  {
    id: 'md-sky-gold',
    name: 'MD Sky-Dweller Gold Edition',
    tagline: 'Executive Collection',
    category: 'classic',
    categoryLabel: 'Classic & Dress',
    price: 'Contact for Details',
    image: 'images/watch_sky_gold_1789479364201.jpg',
    caseDiameter: '42 mm',
    caseMaterial: 'Gold Plated 316L Steel',
    strapMaterial: 'Three-Link Gold-Tone Bracelet',
    movement: 'Automatic Movement',
    waterResistance: '5 ATM (50m)',
    description: 'Executive-grade finishing with sunburst champagne dial, gold-plated indices, and a polished bezel designed for distinguished presence.',
    isTrending: true,
  },
  {
    id: 'md-yacht-rose',
    name: 'MD Yacht-Master Rose Gold',
    tagline: 'Sport & Integrated',
    category: 'sport',
    categoryLabel: 'Sport & Integrated',
    price: 'Contact for Details',
    image: 'images/watch_everose_yacht_1789479393408.jpg',
    caseDiameter: '40 mm',
    caseMaterial: 'Rose Gold PVD 316L Steel',
    strapMaterial: 'Oysterflex Rubber Strap',
    movement: 'Automatic Movement',
    waterResistance: '10 ATM (100m)',
    description: 'Sport-ready rose gold finishing with bidirectional bezel and luminous markers, transitioning effortlessly from yacht deck to evening event.',
  },
  {
    id: 'md-chrono-gold',
    name: 'MD Chrono Heritage 42',
    tagline: 'Classic & Dress',
    category: 'classic',
    categoryLabel: 'Classic & Dress',
    price: 'Contact for Details',
    image: 'images/watch_chrono_gold_1789464022691.jpg',
    caseDiameter: '42 mm',
    caseMaterial: 'Rose Gold Ion-Plated 316L Steel',
    strapMaterial: 'Italian Alligator Leather',
    movement: 'Automatic Chronograph',
    waterResistance: '10 ATM (100m)',
    description: 'Triple sub-dials with polished rose gold indexes, double domed sapphire crystal with anti-reflective coating, and exhibition case back showcasing the decorated mechanical rotor.',
    isNew: true,
  },
  {
    id: 'md-daytona-champ',
    name: 'MD Cosmograph Daytona Champagne',
    tagline: 'Mechanical Skeleton',
    category: 'skeleton',
    categoryLabel: 'Mechanical Skeleton',
    price: 'Contact for Details',
    image: 'images/watch_daytona_champ_1789479448197.jpg',
    caseDiameter: '40 mm',
    caseMaterial: '316L Solid Stainless Steel',
    strapMaterial: 'Three-Link Steel Bracelet',
    movement: 'Automatic Chronograph',
    waterResistance: '5 ATM (50m)',
    description: 'Chronograph precision with champagne sunburst dial and tachymeter bezel. A sporty yet refined timepiece for the discerning collector.',
  },
];

const FEATURED_WATCCHES = [
  {
    id: 'featured-prx',
    name: 'MD PRX Integrated Navy Sunburst',
    category: 'Sport & Integrated',
    image: 'images/watch_steel_noir_1789464042061.jpg',
    caseDiameter: '40mm',
    materialBadge: 'Sport',
  },
  {
    id: 'featured-gmt',
    name: 'MD Two-Tone GMT Royal Blue',
    category: 'Classic & Dress',
    image: 'images/watch_chrono_gold_1789464022691.jpg',
    caseDiameter: '41mm',
    materialBadge: 'Classic',
  },
  {
    id: 'featured-skeleton',
    name: 'MD Skeleton Octagon Openwork',
    category: 'Mechanical Skeleton',
    image: 'images/watch_steel_noir_1789464042061.jpg',
    caseDiameter: '42mm',
    materialBadge: 'Skeleton',
  },
  {
    id: 'featured-nautilus',
    name: 'MD Horizon Nautilus Charcoal',
    category: 'Sport & Integrated',
    image: 'images/watch_white_chrono_1789479379672.jpg',
    caseDiameter: '41mm',
    materialBadge: 'Sport',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Timepieces', count: 8 },
  { id: 'sport', label: 'Sport & Integrated', count: 3 },
  { id: 'classic', label: 'Classic & Dress', count: 3 },
  { id: 'skeleton', label: 'Mechanical Skeleton', count: 2 },
];

const CURATION_STEPS = [
  {
    num: '01',
    title: 'Selection',
    desc: 'Curating balanced case geometries, textured tapisserie dials, and dependable movements tailored for distinction.',
  },
  {
    num: '02',
    title: 'Calibration',
    desc: 'Hands clearance testing, crown screw-down and setting feel, quickset date changing, and timekeeping accuracy check.',
  },
  {
    num: '03',
    title: 'Inspection',
    desc: 'Surface polish inspection, mineral/sapphire crystal clarity check, and link articulation tolerance verification.',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'Cushioned in a luxury presentation gift box, bubble-armored, and swiftly dispatched to your doorstep across Pakistan.',
  },
];

// ============ STATE ============
let activeCategory = 'all';
let selectedProductId = '';
let quickViewProductIndex = null;

// ============ HELPERS ============
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ============ CART (CHECKS OUT VIA WHATSAPP) ============
let cartItems = [];

function getCartCount() {
  return cartItems.reduce((sum, it) => sum + it.qty, 0);
}

function findProductById(id) {
  return WATCH_PRODUCTS.find(p => p.id === id);
}

function updateCartCount() {
  const count = getCartCount();
  const headerBadge = document.getElementById('cart-count');
  const drawerBadge = document.getElementById('cart-badge-count');
  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.classList.toggle('hidden', count === 0);
  }
  if (drawerBadge) {
    drawerBadge.textContent = count;
    drawerBadge.classList.toggle('hidden', count === 0);
  }
}

function addToCart(id) {
  const product = findProductById(id);
  if (!product) return;
  const existing = cartItems.find(it => it.id === id);
  if (existing) existing.qty += 1;
  else cartItems.push({ id, name: product.name, price: product.price, qty: 1 });
  updateCartCount();
  renderCart();
  showToast(`${product.name} added to cart`);
}

function changeQty(id, delta) {
  const item = cartItems.find(it => it.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartItems = cartItems.filter(it => it.id !== id);
  updateCartCount();
  renderCart();
}

function clearCart() {
  cartItems = [];
  updateCartCount();
  renderCart();
}

function renderCart() {
  const empty = document.getElementById('cart-empty');
  const list = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');
  const totalItems = document.getElementById('cart-total-items');
  if (!list) return;
  if (cartItems.length === 0) {
    list.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    if (footer) footer.classList.add('hidden');
    return;
  }
  if (empty) empty.classList.add('hidden');
  if (footer) footer.classList.remove('hidden');
  if (totalItems) totalItems.textContent = `${getCartCount()} item(s)`;
  list.innerHTML = cartItems.map(it => {
    const product = findProductById(it.id);
    const img = product ? product.image : '';
    return `
    <div class="cart-item">
      <div class="cart-item-thumb"><img src="${img}" alt="${it.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-top">
          <p class="cart-item-name">${it.name}</p>
          <button class="cart-item-remove" onclick="changeQty('${it.id}', -${it.qty})" aria-label="Remove ${it.name}">&times;</button>
        </div>
        <p class="cart-item-sub">${it.price}</p>
        <div class="cart-item-bottom">
          <div class="qty-toggle">
            <button onclick="changeQty('${it.id}', -1)" aria-label="Decrease quantity">&minus;</button>
            <span>${it.qty}</span>
            <button onclick="changeQty('${it.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  const isOpen = drawer.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function cartBrowse() {
  toggleCart();
  setTimeout(() => {
    const section = document.getElementById('collections');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function cartCheckout() {
  if (cartItems.length === 0) return;
  const lines = cartItems.map(it => `- ${it.name} (Qty ${it.qty})`).join('%0A');
  const total = getCartCount();
  const msg = encodeURIComponent(`Hi MD Watches! I'd like to order:%0A${lines}%0A%0ATotal ${total} item(s). Please share price and payment details.`);
  window.open(`${WHATSAPP_LINK}?text=${msg}`, '_blank');
  toggleCart();
}

// ============ FEATURED WATCHES ============
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = FEATURED_WATCCHES.map((w, i) => `
    <div class="special-card reveal reveal-delay-${i % 3}" onclick="openQuickViewByProduct('${w.id}')">
      <div class="special-card-visual">
        <img src="${w.image}" alt="${w.name}" class="special-card-img">
        <div class="special-card-overlay"></div>
        <div class="special-card-top">
          <span class="material-badge">${w.materialBadge}</span>
        </div>
        <div class="special-card-spacer"></div>
        <div class="case-diameter-pill">${w.caseDiameter}</div>
        <div class="special-card-actions" onclick="event.stopPropagation()">
          <button class="inspect-btn" onclick="openQuickViewByProduct('${w.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Inspect</span>
          </button>
          <button class="add-cart-square-btn" onclick="event.stopPropagation();whatsappOrder('${w.name.replace(/'/g, "\\'")}')" title="Order on WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
        </div>
      </div>
      <div class="special-card-details">
        <h3 class="special-card-name">${w.name}</h3>
        <p class="special-card-price">${w.category}</p>
      </div>
    </div>`).join('');
}

// ============ CATEGORIES SECTION ============
function renderCategoryCards() {
  const grid = document.getElementById('category-cards-grid');
  if (!grid) return;
  const cats = [
    {
      title: 'Sport & Integrated',
      subtitle: 'Signature Pillar',
      desc: 'Continuous lines, tapered solid steel links, tapisserie dials, and bold octagonal or tonneau cases engineered for active modern living.',
      btn: 'Explore Sport Collection',
      img: 'images/watch_steel_noir_1789464042061.jpg',
    },
    {
      title: 'Mechanical & Skeleton',
      subtitle: 'Horological Art',
      desc: 'Exposed balance wheels, intricate gear trains, and openwork dials celebrating the visible pulse of mechanical horology on your wrist.',
      btn: 'Explore Skeleton Art',
      img: 'images/watch_steel_noir_1789464042061.jpg',
    },
    {
      title: 'Classic & Dress',
      subtitle: 'Timeless Elegance',
      desc: 'Timeless rectangular profiles, fluted bezels, and refined dress timepieces for formal occasions and understated boardroom elegance.',
      btn: 'Explore Classic Collection',
      img: 'images/watch_chrono_gold_1789464022691.jpg',
    },
  ];
  grid.innerHTML = cats.map((c, i) => `
    <div class="category-card reveal reveal-delay-${i}" onclick="setCategory('${c.title.includes('Sport') ? 'sport' : c.title.includes('Skeleton') ? 'skeleton' : 'classic'}')">
      <div class="category-card-img-wrap">
        <img src="${c.img}" alt="${c.title}" class="category-card-img">
        <div class="category-card-overlay"></div>
      </div>
      <div class="category-card-body">
        <span class="category-card-subtitle">${c.subtitle}</span>
        <h3 class="category-card-title">${c.title}</h3>
        <p class="category-card-desc">${c.desc}</p>
        <span class="category-card-btn">${c.btn} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
      </div>
    </div>`).join('');
}

// ============ CURATION STEPS ============
function renderCuration() {
  const grid = document.getElementById('curation-grid');
  if (!grid) return;
  grid.innerHTML = CURATION_STEPS.map((s, i) => `
    <div class="curation-step reveal reveal-delay-${i % 4}">
      <span class="curation-num">${s.num}</span>
      <h4 class="curation-title">${s.title}</h4>
      <p class="curation-desc">${s.desc}</p>
    </div>`).join('');
}

// ============ PRODUCT CAROUSEL ============
let searchQuery = '';

function handleSearch(value) {
  searchQuery = value.trim().toLowerCase();
  const clearBtn = document.getElementById('header-search-clear');
  if (clearBtn) clearBtn.classList.toggle('hidden', searchQuery === '');
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById('header-search-input');
  if (input) input.value = '';
  handleSearch('');
}

function getFilteredProducts() {
  const byCategory = activeCategory === 'all'
    ? WATCH_PRODUCTS
    : WATCH_PRODUCTS.filter(p => p.category === activeCategory);
  if (!searchQuery) return byCategory;
  return byCategory.filter(p =>
    `${p.name} ${p.categoryLabel} ${p.tagline}`.toLowerCase().includes(searchQuery)
  );
}

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  container.innerHTML = CATEGORIES.map(c => `
    <button class="filter-btn ${c.id === activeCategory ? 'active' : ''}" onclick="setCategory('${c.id}')">
      <span>${c.label}</span>
      <span class="filter-count">(${c.count})</span>
    </button>`).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  clearSearch();
  renderCategoryFilters();
  renderProducts();
  initReveal();
  const section = document.getElementById('collections');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const container = document.getElementById('product-carousel');
  container.innerHTML = filtered.map((p, i) => {
    const isSelected = selectedProductId === p.id;
    return `
    <div class="product-card ${isSelected ? 'selected' : ''} reveal reveal-delay-${i % 4}" onclick="selectProduct('${p.id}')">
      <div class="product-card-inner" onclick="event.stopPropagation();openQuickView(${WATCH_PRODUCTS.findIndex(w=>w.id===p.id)})">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-card-hover-badge">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Quick View
          </span>
        </div>
      </div>
      <div class="product-card-details">
        <div class="product-card-info">
          <h3 class="product-card-name ${isSelected ? 'white-text' : 'neutral-text'}" onclick="event.stopPropagation();openQuickView(${WATCH_PRODUCTS.findIndex(w=>w.id===p.id)})">${p.name}</h3>
          <p class="product-card-price ${isSelected ? 'white-price' : 'neutral-price'}">${p.price}</p>
        </div>
        <div class="product-card-actions">
          <button class="add-cart-round-btn cart-add-btn ${isSelected ? 'selected-btn' : 'neutral-btn'}"
                  onclick="event.stopPropagation();addToCart('${p.id}')"
                  title="Add to Cart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
          <!-- WhatsApp product button commented out
          <button class="add-cart-round-btn whatsapp-round-btn"
                  onclick="event.stopPropagation();whatsappOrder('${p.name.replace(/'/g, "\\'")}')"
                  title="Order on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          -->
        </div>
      </div>
    </div>`;
  }).join('');
}

function selectProduct(id) {
  selectedProductId = id;
  renderProducts();
}

function scrollCarousel(dir) {
  const el = document.getElementById('product-carousel');
  el.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

// ============ QUICK VIEW ============
function openQuickView(index) {
  quickViewProductIndex = index;
  const product = WATCH_PRODUCTS[index];
  if (!product) return;
  document.getElementById('qv-image').src = product.image;
  document.getElementById('qv-image').alt = product.name;
  document.getElementById('qv-category').textContent = product.categoryLabel;
  document.getElementById('qv-name').textContent = product.name;
  document.getElementById('qv-tagline').textContent = product.tagline;
  document.getElementById('qv-price').textContent = product.price;
  document.getElementById('qv-description').textContent = product.description;
  document.getElementById('qv-diameter').textContent = product.caseDiameter;
  document.getElementById('qv-movement').textContent = product.movement;
  document.getElementById('qv-case').textContent = product.caseMaterial;
  document.getElementById('qv-water').textContent = product.waterResistance;
  const trendingEl = document.getElementById('qv-trending');
  if (product.isTrending) { trendingEl.classList.remove('hidden'); } else { trendingEl.classList.add('hidden'); }
  const origPriceEl = document.getElementById('qv-original-price');
  origPriceEl.classList.add('hidden');
  document.getElementById('quick-view-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openQuickViewByProduct(id) {
  const index = WATCH_PRODUCTS.findIndex(p => p.id === id);
  if (index >= 0) openQuickView(index);
}

function closeQuickView() {
  document.getElementById('quick-view-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function addFromModal(action) {
  if (quickViewProductIndex === null) return;
  const product = WATCH_PRODUCTS[quickViewProductIndex];
  if (action === 'cart') {
    addToCart(product.id);
  } else {
    whatsappOrder(product.name);
    closeQuickView();
  }
}

// ============ MOBILE MENU ============
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const isOpen = !menu.classList.contains('hidden');
  if (isOpen) {
    menu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
}

function scrollToSection(id) {
  toggleMobileMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============ HERO CLOCK ============
function renderHeroClock() {
  const svg = document.getElementById('hero-clock');
  if (!svg) return;
  let ticks = '';
  for (let i = 0; i < 60; i++) {
    const angle = (i * 360) / 60;
    const isHour = i % 5 === 0;
    ticks += `<line x1="50" y1="${isHour ? '4' : '7'}" x2="50" y2="${isHour ? '14' : '11'}" stroke="white" stroke-width="${isHour ? '2' : '0.8'}" stroke-opacity="${isHour ? '0.95' : '0.45'}" transform="rotate(${angle} 50 50)" />`;
  }
  svg.innerHTML = ticks +
    `<line x1="50" y1="50" x2="50" y2="28" stroke="white" stroke-width="2.8" stroke-linecap="round" transform="rotate(-58 50 50)" />` +
    `<line x1="50" y1="50" x2="50" y2="20" stroke="white" stroke-width="2.2" stroke-linecap="round" transform="rotate(58 50 50)" />` +
    `<line id="clock-second-hand" x1="50" y1="54" x2="50" y2="16" stroke="#e69c5e" stroke-width="1" stroke-linecap="round" transform="rotate(0 50 50)" />` +
    `<circle cx="50" cy="50" r="3" fill="#241b18" stroke="white" stroke-width="1.8" />` +
    `<circle cx="50" cy="50" r="1" fill="#e69c5e" />`;
}
function updateClockHand() {
  const hand = document.getElementById('clock-second-hand');
  if (!hand) return;
  const deg = new Date().getSeconds() * 6;
  hand.setAttribute('transform', `rotate(${deg} 50 50)`);
}

// ============ LOADING SCREEN ============
function buildDialTicks() {
  const g = document.getElementById('load-dial');
  if (!g) return;
  let html = '';
  for (let i = 0; i <= 30; i++) {
    const angle = i * 6;
    const isHour = i % 5 === 0;
    const r1 = isHour ? 32 : 38;
    const r2 = 44;
    const rad = angle * Math.PI / 180;
    html += `<line x1="${(140 + r1 * Math.sin(rad)).toFixed(2)}" y1="${(70 - r1 * Math.cos(rad)).toFixed(2)}" x2="${(140 + r2 * Math.sin(rad)).toFixed(2)}" y2="${(70 - r2 * Math.cos(rad)).toFixed(2)}" stroke-width="${isHour ? 3 : 1.2}" stroke-opacity="${isHour ? 0.9 : 0.45}" />`;
  }
  g.innerHTML = html;
}

function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  buildDialTicks();
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.body.style.overflow = '';
    screen.classList.add('hidden');
  }, 3700);
}

// ============ SCROLL REVEAL ============
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in-view'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  renderHeroClock();
  renderFeatured();
  renderCategoryCards();
  renderCuration();
  renderCategoryFilters();
  renderProducts();
  initReveal();
  setInterval(updateClockHand, 1000);

  // Close modals on backdrop click
  document.getElementById('quick-view-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quick-view-modal') closeQuickView();
  });

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
    }
  });
});
