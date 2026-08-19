const categories = [
  { name: 'Restaurants', icon: 'R', count: '248 listings', color: '#fff0d5' },
  { name: 'Clothing', icon: 'C', count: '184 listings', color: '#f5eaff' },
  { name: 'Cafes', icon: 'F', count: '148 listings', color: '#e5f7ff' },
  { name: 'Salons', icon: 'S', count: '84 listings', color: '#ffe9f5' },
  { name: 'Electronics', icon: 'E', count: '126 listings', color: '#ebf8ee' },
  { name: 'Jewellery', icon: 'J', count: '72 listings', color: '#fff0e6' },
  { name: 'Gyms', icon: 'G', count: '32 listings', color: '#edf7ff' },
  { name: 'Hotels', icon: 'H', count: '26 listings', color: '#f5f1ff' },
  { name: 'Services', icon: 'V', count: '90 listings', color: '#eafaf2' },
  { name: 'Healthcare', icon: 'H', count: '58 listings', color: '#eaf3ff' }
];

const areas = [
  { name: 'Ghogha Circle', businesses: 220 },
  { name: 'Rajpath', businesses: 118 },
  { name: 'Madhavpara', businesses: 98 },
  { name: 'Sidsar', businesses: 90 },
  { name: 'Shree Krishna Nagar', businesses: 74 },
  { name: 'Bharatnagar', businesses: 68 }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 699,
    span: '₹699 / reel',
    description: 'Perfect for new local businesses',
    features: ['Business profile', 'Search visibility', 'Category listing', 'Customer reviews'],
    popular: false
  },
  {
    name: 'Growth',
    price: 2499,
    span: '₹2,499 / month',
    description: 'Most popular local business package',
    features: ['Everything in Starter', 'Featured placement', 'Reel showcase', 'Analytics access'],
    popular: true
  },
  {
    name: 'Premium',
    price: 6999,
    span: '₹6,999 / month',
    description: 'Maximum local visibility and reach',
    features: ['Priority placement', 'Home page exposure', 'Advanced insights', 'Priority support'],
    popular: false
  }
];

const businesses = [
  {
    id: 1,
    name: 'ABC Fashion House',
    category: 'Clothing',
    area: 'Rajpath',
    rating: 4.8,
    reviews: 182,
    description: 'Trendy fashion, premium streetwear and festive collections for every occasion.',
    featured: true,
    verified: true,
    new: false,
    openNow: true,
    hasReels: true,
    brand: 'ABC',
    keywords: ['fashion', 'clothing', 'women', 'men', 'designer'],
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    logo: 'A',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    website: 'https://abcfashion.example',
    instagram: '@abcfashion',
    address: 'Rajpath Road, Bhavnagar',
    hours: '10:00 AM - 9:00 PM'
  },
  {
    id: 2,
    name: 'Tea Post',
    category: 'Restaurants',
    area: 'Ghogha Circle',
    rating: 4.9,
    reviews: 214,
    description: 'Modern Gujarati dining with creative plates, live vibes and family-friendly ambiance.',
    featured: true,
    verified: true,
    new: true,
    openNow: true,
    hasReels: true,
    brand: 'Saffron',
    keywords: ['food', 'restaurant', 'gujarati', 'dinner', 'family'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    logo: 'S',
    phone: '+91 90990 11223',
    whatsapp: '+91 90990 11223',
    website: 'https://saffronbistro.example',
    instagram: '@saffronbistro',
    address: 'Ghogha Circle, Bhavnagar',
    hours: '12:00 PM - 11:00 PM'
  },
  {
    id: 3,
    name: 'Bloom & Glow Salon',
    category: 'Salons',
    area: 'Madhavpara',
    rating: 4.7,
    reviews: 94,
    description: 'Hair, makeup and skincare studio designed for modern confidence and self-care.',
    featured: false,
    verified: true,
    new: false,
    openNow: false,
    hasReels: false,
    brand: 'Bloom',
    keywords: ['salon', 'beauty', 'makeup', 'spa', 'hair'],
    image: 'https://images.unsplash.com/photo-1521590832167-7ac2d28f0f92?auto=format&fit=crop&w=1200&q=80',
    logo: 'B',
    phone: '+91 98244 77889',
    whatsapp: '+91 98244 77889',
    website: 'https://bloomglow.example',
    instagram: '@bloomglow',
    address: 'Madhavpara Road, Bhavnagar',
    hours: '9:00 AM - 8:00 PM'
  },
  {
    id: 4,
    name: 'Pulse Gym',
    category: 'Gyms',
    area: 'Sidsar',
    rating: 4.6,
    reviews: 146,
    description: 'Strength training, cardio, functional workouts and personal coaching for all levels.',
    featured: true,
    verified: false,
    new: true,
    openNow: true,
    hasReels: true,
    brand: 'Pulse',
    keywords: ['gym', 'fitness', 'workout', 'bodybuilding', 'health'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    logo: 'P',
    phone: '+91 93111 80304',
    whatsapp: '+91 93111 80304',
    website: 'https://pulsegym.example',
    instagram: '@pulsegym',
    address: 'Sidsar, Bhavnagar',
    hours: '5:00 AM - 10:00 PM'
  },
  {
    id: 5,
    name: 'Metro Electronics',
    category: 'Electronics',
    area: 'Bharatnagar',
    rating: 4.4,
    reviews: 88,
    description: 'Smartphones, audio, appliances and tech accessories with after-sales support.',
    featured: false,
    verified: true,
    new: false,
    openNow: true,
    hasReels: false,
    brand: 'Metro',
    keywords: ['electronics', 'mobile', 'audio', 'tech', 'appliance'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    logo: 'M',
    phone: '+91 99884 22110',
    whatsapp: '+91 99884 22110',
    website: 'https://metroelectronics.example',
    instagram: '@metroelectronics',
    address: 'Bharatnagar, Bhavnagar',
    hours: '10:00 AM - 9:00 PM'
  },
  {
    id: 6,
    name: 'Café Nook',
    category: 'Cafes',
    area: 'Shree Krishna Nagar',
    rating: 4.8,
    reviews: 121,
    description: 'Coffee, desserts and a relaxed community vibe for work, dates and catch-ups.',
    featured: false,
    verified: true,
    new: true,
    openNow: true,
    hasReels: true,
    brand: 'Nook',
    keywords: ['coffee', 'cafe', 'desserts', 'breakfast', 'meeting'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    logo: 'N',
    phone: '+91 97222 34341',
    whatsapp: '+91 97222 34341',
    website: 'https://cafenook.example',
    instagram: '@cafenook',
    address: 'Shree Krishna Nagar, Bhavnagar',
    hours: '8:00 AM - 10:00 PM'
  }
];

const reels = [
  {
    title: 'Fresh bites at Tea Post',
    caption: 'Experience signature flavors and evening ambience in the heart of the city.',
    business: 'Tea Post',
    category: 'Restaurants',
    views: '21.4K',
    date: '2 days ago',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Dress to impress this festive season',
    caption: 'Discover premium festive looks and trending silhouettes from ABC Fashion House.',
    business: 'ABC Fashion House',
    category: 'Clothing',
    views: '18.1K',
    date: '5 days ago',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    poster: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Fitness energy that keeps you moving',
    caption: 'Inside Pulse Gym with coaching, transformation stories and daily routines.',
    business: 'Pulse Gym',
    category: 'Gyms',
    views: '12.6K',
    date: '1 week ago',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  }
];

const state = {
  searchQuery: '',
  selectedCategory: 'all',
  selectedArea: 'all',
  sortBy: 'recommended',
  filters: {
    rating: 0,
    openNow: false,
    hasReels: false,
    featured: false,
    new: false
  }
};

const categoryGrid = document.getElementById('categoryGrid');
const featuredBusinesses = document.getElementById('featuredBusinesses');
const directoryGrid = document.getElementById('directoryGrid');
const areaGrid = document.getElementById('areaGrid');
const reelsGrid = document.getElementById('reelsGrid');
const pricingGrid = document.getElementById('pricingGrid');
const searchInput = document.getElementById('mainSearch');
const searchSuggestions = document.getElementById('searchSuggestions');
const categoryFilter = document.getElementById('categoryFilter');
const areaFilter = document.getElementById('areaFilter');
const ratingFilter = document.getElementById('ratingFilter');
const sortFilter = document.getElementById('sortFilter');
const modal = document.getElementById('businessModal');
const modalContent = document.getElementById('modalContent');

function normalize(value) {
  return (value || '').toLowerCase().trim();
}

function getBusinesses() {
  return businesses;
}

function renderCategories() {
  if (!categoryGrid) return;

  categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card" data-category="${category.name}" style="background: linear-gradient(180deg, #fff, ${category.color});">
          <div class="category-thumb">${category.icon}</div>
          <h3>${category.name}</h3>
          <p>${category.count}</p>
        </button>
      `
    )
    .join('');

  categoryGrid.querySelectorAll('.category-card').forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      state.selectedCategory = category;
      if (categoryFilter) categoryFilter.value = category;
      const val = normalize(state.searchQuery);
      state.searchQuery = val || category;
      if (searchInput) searchInput.value = val || category;
      renderDirectory();
    });
  });
}

function renderFeaturedBusinesses() {
  if (!featuredBusinesses) return;

  featuredBusinesses.innerHTML = getBusinesses()
    .filter((b) => b.featured)
    .slice(0, 4)
    .map(
      (business) => `
        <article class="business-card" data-business-id="${business.id}">
          <div class="card-image" style="background-image:url('${business.image}');">
            <div class="card-overlay"></div>
            <div class="badge-row">
              <span class="badge ${business.featured ? 'featured' : ''}">${business.featured ? 'Featured' : 'Popular'}</span>
              ${business.verified ? '<span class="badge">Verified</span>' : ''}
            </div>
            <div class="card-identity">
              <div class="logo-badge">${business.logo}</div>
              <div>
                <div class="business-category">${business.category}</div>
                <div class="meta-row"><span>${business.area}</span></div>
              </div>
            </div>
          </div>
          <div class="business-meta">
            <h3>${business.name}</h3>
            <div class="meta-row">
              <span>${business.area}</span>
              <span>${business.openNow ? 'Open now' : 'Closed'}</span>
            </div>
            <div class="rating-line">
              <span class="star-fill">★★★★★</span>
              <span>${business.rating.toFixed(1)} (${business.reviews})</span>
            </div>
            <p class="business-description">${business.description}</p>
            <div class="card-actions">
              <button class="primary-btn small">View profile</button>
              <span class="business-category">${business.hasReels ? 'Reel' : 'Local'}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  featuredBusinesses.querySelectorAll('.business-card').forEach((card) => {
    card.addEventListener('click', () => openBusinessModal(Number(card.dataset.businessId)));
  });
}

function renderAreas() {
  if (!areaGrid) return;

  areaGrid.innerHTML = areas
    .map(
      (area) => `
        <button class="area-card" data-area="${area.name}">
          <strong>${area.name}</strong>
          <span>${area.businesses} businesses</span>
        </button>
      `
    )
    .join('');

  areaGrid.querySelectorAll('.area-card').forEach((areaCard) => {
    areaCard.addEventListener('click', () => {
      const area = areaCard.dataset.area;
      state.selectedArea = area;
      if (areaFilter) areaFilter.value = area;
      state.searchQuery = area;
      if (searchInput) searchInput.value = area;
      renderDirectory();
    });
  });
}

function renderReels() {
  if (!reelsGrid) return;

  reelsGrid.innerHTML = reels
    .map(
      (reel) => `
        <article class="reel-card">
          <div class="reel-thumb">
            <video
              class="reel-video"
              muted
              loop
              autoplay
              playsinline
              preload="metadata"
              poster="${reel.poster}"
            >
              <source src="${reel.video}" type="video/mp4" />
            </video>
            <div class="video-overlay"></div>
            <div class="play-pill">▶</div>
          </div>
          <div class="reel-content">
            <div class="reel-header">
              <div class="reel-logo">${reel.business.slice(0, 1)}</div>
              <div>
                <div class="reel-title">${reel.business}</div>
                <div class="reel-meta">${reel.category}</div>
              </div>
            </div>
            <div class="reel-caption">${reel.caption}</div>
            <div class="reel-footer">
              <span>${reel.views} views</span>
              <span>${reel.date}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderPricing() {
  if (!pricingGrid) return;

  pricingGrid.innerHTML = pricingPlans
    .map(
      (plan) => `
        <div class="pricing-card ${plan.popular ? 'featured-plan' : ''}">
          <div class="plan-name">${plan.name}</div>
          <div class="plan-price">₹${plan.price.toLocaleString('en-IN')} <span>/month</span></div>
          <div>${plan.description}</div>
          <ul class="plan-list">
            ${plan.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
          <button class="${plan.popular ? 'primary-btn' : 'secondary-btn'}">Select plan</button>
        </div>
      `
    )
    .join('');
}

function getSuggestionResults() {
  const q = normalize(searchInput.value);
  if (!q) return [];

  const matches = getBusinesses()
    .map((business) => {
      const text = [
        business.name,
        business.category,
        business.area,
        business.brand,
        business.keywords.join(' '),
        business.description
      ].join(' ').toLowerCase();

      let score = 0;
      if (text.includes(q)) score += 100;
      if (business.name.toLowerCase().includes(q)) score += 30;
      if (business.category.toLowerCase().includes(q)) score += 25;
      if (business.area.toLowerCase().includes(q)) score += 20;
      if (business.brand.toLowerCase().includes(q)) score += 20;

      return { business, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.business);

  return matches;
}

function renderSuggestions() {
  if (!searchSuggestions) return;

  const suggestions = getSuggestionResults();

  if (!suggestions.length) {
    searchSuggestions.innerHTML = '';
    return;
  }

  searchSuggestions.innerHTML = `
    <div class="suggestion-list">
      ${suggestions
        .map(
          (business) => `
            <button class="suggestion-item" data-business-id="${business.id}">
              <span>${business.name}</span>
              <small>${business.category} • ${business.area}</small>
            </button>
          `
        )
        .join('')}
    </div>
  `;

  searchSuggestions.querySelectorAll('.suggestion-item').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.businessId);
      openBusinessModal(id);
      searchSuggestions.innerHTML = '';
    });
  });
}

function getFilteredBusinesses() {
  const query = normalize(state.searchQuery);
  let list = [...getBusinesses()];

  if (query) {
    list = list.filter((business) => {
      const haystack = [
        business.name,
        business.category,
        business.area,
        business.brand,
        business.keywords.join(' '),
        business.description
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query) || business.name.toLowerCase().includes(query);
    });
  }

  if (state.selectedCategory !== 'all') {
    list = list.filter((business) => business.category === state.selectedCategory);
  }

  if (state.selectedArea !== 'all') {
    list = list.filter((business) => business.area === state.selectedArea);
  }

  if (state.filters.rating > 0) {
    list = list.filter((business) => business.rating >= state.filters.rating);
  }

  if (state.filters.openNow) {
    list = list.filter((business) => business.openNow);
  }

  if (state.filters.hasReels) {
    list = list.filter((business) => business.hasReels);
  }

  if (state.filters.featured) {
    list = list.filter((business) => business.featured);
  }

  if (state.filters.new) {
    list = list.filter((business) => business.new);
  }

  switch (state.sortBy) {
    case 'popular':
      list.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      list.sort((a, b) => Number(b.new) - Number(a.new));
      break;
    case 'alphabetical':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => {
        let result = Number(b.featured) - Number(a.featured);
        if (result === 0) result = b.rating - a.rating;
        if (result === 0) result = b.reviews - a.reviews;
        return result;
      });
      break;
  }

  return list;
}

function renderDirectory() {
  if (!directoryGrid) return;

  const businessesToRender = getFilteredBusinesses();

  if (!businessesToRender.length) {
    directoryGrid.innerHTML = `
      <div class="empty-state">
        <h3>No businesses found for "${state.searchQuery || 'your search'}"</h3>
        <p>Try another search or explore categories to discover local favorites.</p>
      </div>
    `;
    return;
  }

  directoryGrid.innerHTML = businessesToRender
    .map(
      (business) => `
        <article class="business-card" data-business-id="${business.id}">
          <div class="card-image" style="background-image:url('${business.image}');">
            <div class="card-overlay"></div>
            <div class="badge-row">
              <span class="badge ${business.featured ? 'featured' : ''}">${business.featured ? 'Featured' : 'Popular'}</span>
              <span class="badge">${business.hasReels ? 'Reels' : 'Local'}</span>
            </div>
            <div class="card-identity">
              <div class="logo-badge">${business.logo}</div>
              <div>
                <div class="business-category">${business.category}</div>
                <div class="meta-row"><span>${business.area}</span></div>
              </div>
            </div>
          </div>
          <div class="business-meta">
            <h3>${business.name}</h3>
            <div class="meta-row">
              <span>${business.area}</span>
              <span>${business.openNow ? 'Open now' : 'Closed'}</span>
            </div>
            <div class="rating-line">
              <span class="star-fill">★★★★★</span>
              <span>${business.rating.toFixed(1)} (${business.reviews})</span>
            </div>
            <p class="business-description">${business.description}</p>
            <div class="card-actions">
              <button class="primary-btn small">View profile</button>
              <span class="business-category">${business.verified ? 'Verified' : 'New'}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  directoryGrid.querySelectorAll('.business-card').forEach((card) => {
    card.addEventListener('click', () => openBusinessModal(Number(card.dataset.businessId)));
  });
}

function openBusinessModal(id) {
  if (!modal || !modalContent) return;

  const business = getBusinesses().find((item) => item.id === id);
  if (!business) return;

  modalContent.innerHTML = `
    <div class="modal-layout">
      <div>
        <div class="modal-cover" style="background-image: url('${business.image}')"></div>
        <div class="modal-header">
          <div>
            <div class="eyebrow">${business.category}</div>
            <h3>${business.name}</h3>
          </div>
          <span class="badge ${business.featured ? 'featured' : ''}">${business.featured ? 'Featured' : 'Popular'}</span>
        </div>
        <div class="rating-line">
          <span class="star-fill">★★★★★</span>
          <span>${business.rating.toFixed(1)} / 5 · ${business.reviews} reviews</span>
        </div>
        <div class="modal-body">
          <p>${business.description}</p>
          <div class="mini-stat-box">
            <strong>${business.area}</strong>
            <span>${business.address}</span>
          </div>
          <div class="inline-actions">
            <button class="primary-btn small">Call</button>
            <button class="secondary-btn">WhatsApp</button>
            <button class="secondary-btn">Get Directions</button>
          </div>
        </div>
      </div>
      <div>
        <div class="mini-stat-box">
          <strong>${business.openNow ? 'Open now' : 'Closed'}</strong>
          <span>Hours: ${business.hours}</span>
        </div>
        <ul class="info-list" style="margin-top: 18px;">
          <li><strong>Phone:</strong> ${business.phone}</li>
          <li><strong>WhatsApp:</strong> ${business.whatsapp}</li>
          <li><strong>Website:</strong> ${business.website}</li>
          <li><strong>Instagram:</strong> ${business.instagram}</li>
          <li><strong>Address:</strong> ${business.address}</li>
        </ul>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  if (modal) modal.classList.add('hidden');
}

function setupFilters() {
  if (!categoryFilter || !areaFilter || !ratingFilter || !sortFilter) return;

  categoryFilter.innerHTML = `
    <option value="all">All categories</option>
    ${categories.map((category) => `<option value="${category.name}">${category.name}</option>`).join('')}
  `;

  areaFilter.innerHTML = `
    <option value="all">All areas</option>
    ${areas.map((area) => `<option value="${area.name}">${area.name}</option>`).join('')}
  `;

  categoryFilter.addEventListener('change', (event) => {
    state.selectedCategory = event.target.value;
    renderDirectory();
  });

  areaFilter.addEventListener('change', (event) => {
    state.selectedArea = event.target.value;
    renderDirectory();
  });

  ratingFilter.addEventListener('change', (event) => {
    state.filters.rating = Number(event.target.value);
    renderDirectory();
  });

  sortFilter.addEventListener('change', (event) => {
    state.sortBy = event.target.value;
    renderDirectory();
  });

  const openToggle = document.getElementById('openNowToggle');
  const reelsToggle = document.getElementById('reelsToggle');
  const featuredToggle = document.getElementById('featuredToggle');
  const newToggle = document.getElementById('newToggle');

  if (openToggle) openToggle.addEventListener('change', (event) => {
    state.filters.openNow = event.target.checked;
    renderDirectory();
  });

  if (reelsToggle) reelsToggle.addEventListener('change', (event) => {
    state.filters.hasReels = event.target.checked;
    renderDirectory();
  });

  if (featuredToggle) featuredToggle.addEventListener('change', (event) => {
    state.filters.featured = event.target.checked;
    renderDirectory();
  });

  if (newToggle) newToggle.addEventListener('change', (event) => {
    state.filters.new = event.target.checked;
    renderDirectory();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    state.searchQuery = event.target.value;
    renderSuggestions();
    renderDirectory();
  });
}

document.querySelector('.tag-btn[data-search]')?.addEventListener('click', (event) => {
  const target = event.currentTarget;
  const query = target.dataset.search;
  if (searchInput) searchInput.value = query;
  state.searchQuery = query;
  renderSuggestions();
  renderDirectory();
});

document.querySelectorAll('.tag-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const query = button.dataset.search;
    if (searchInput) searchInput.value = query;
    state.searchQuery = query;
    renderSuggestions();
    renderDirectory();
  });
});

if (document.querySelector('.modal-close')) document.querySelector('.modal-close').addEventListener('click', closeModal);
if (document.querySelector('[data-close="true"]')) document.querySelector('[data-close="true"]').addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

if (categoryGrid || featuredBusinesses || areaGrid || reelsGrid || pricingGrid || directoryGrid) {
  renderCategories();
  renderFeaturedBusinesses();
  renderAreas();
  renderReels();
  renderPricing();
  setupFilters();
  renderDirectory();
}
