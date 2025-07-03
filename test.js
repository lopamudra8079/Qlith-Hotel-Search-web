// Hotel Data
const hotelData = [
  {
    id: 1,
    name: "Golden Tulip Candolim",
    location: "Candolim, Goa",
    city: "Goa",
    rating: 8.2,
    ratingText: "Very good",
    reviews: 6282,
    price: 15807,
    originalPrice: 20000,
    discount: 22,
    provider: "Agoda",
    amenities: ["Free cancellation", "Wi-Fi", "Pool"],
    stars: 4,
    image:
      "./main/manali.jpg.avif",
    coordinates: [15.5167, 73.7667],
    description: "Luxury beachfront resort with stunning ocean views.",
  },
  {
    id: 2,
    name: "Jaipur Palace Hotel",
    location: "Jaipur, Rajasthan",
    city: "Jaipur",
    rating: 8.8,
    ratingText: "Excellent",
    reviews: 2100,
    price: 24599,
    originalPrice: 30000,
    discount: 20,
    provider: "Booking.com",
    amenities: ["Free Wi-Fi", "Palace architecture", "Royal dining"],
    stars: 5,
    image:
      "https://cdn.kiwicollection.com/media/property/PR240943/xl/240943-01-Poolside-at%20The%20Leela%20Palace%20Jaipur.jpg?cb=1715815272",
    coordinates: [26.9124, 75.7873],
    description: "Magnificent palace hotel offering royal treatment.",
  },
  {
    id: 3,
    name: "Mumbai Grand Hotel",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    rating: 8.5,
    ratingText: "Very good",
    reviews: 3456,
    price: 18500,
    originalPrice: 22000,
    discount: 16,
    provider: "MakeMyTrip",
    amenities: ["City center", "Business facilities", "Rooftop restaurant"],
    stars: 4,
    image:
      "https://imgs.search.brave.com/yhf7p9qE08prRScUaDewaMAIHf-ZocSxxTvi5rOOf24/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWEvOTcvYzQvZTMv/dXJiYW5pY2EtZXVj/bGlkLWhvdGVsLmpw/Zw",
    coordinates: [19.076, 72.8777],
    description: "Modern hotel in the heart of Mumbai.",
  },
  {
    id: 4,
    name: "Udaipur Lake Palace",
    location: "Udaipur, Rajasthan",
    city: "Udaipur",
    rating: 9.1,
    ratingText: "Excellent",
    reviews: 1890,
    price: 35000,
    originalPrice: 42000,
    discount: 17,
    provider: "Taj Hotels",
    amenities: ["Lake view", "Heritage property", "Boat transfer"],
    stars: 5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [24.5854, 73.7125],
    description: "Iconic floating palace on Lake Pichola.",
  },
  {
    id: 5,
    name: "Manali Snow View Resort",
    location: "Manali, Himachal Pradesh",
    city: "Manali",
    rating: 8.3,
    ratingText: "Very good",
    reviews: 2567,
    price: 12500,
    originalPrice: 15000,
    discount: 17,
    provider: "Goibibo",
    amenities: ["Mountain view", "Heating", "Adventure sports"],
    stars: 4,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7f/ae/4b/exterior.jpg?w=700&h=-1&s=1",
    coordinates: [32.2396, 77.1887],
    description: "Cozy mountain resort with breathtaking Himalayan views.",
  },
  {
    id: 6,
    name: "Delhi Heritage Hotel",
    location: "New Delhi, Delhi",
    city: "Delhi",
    rating: 8.7,
    ratingText: "Excellent",
    reviews: 4123,
    price: 16800,
    originalPrice: 20000,
    discount: 16,
    provider: "Cleartrip",
    amenities: ["Metro connectivity", "Heritage architecture", "Multi-cuisine restaurant"],
    stars: 4,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.qGHErvZ6MSAVo9OkVjrLdgHaEL?pid=Api&H=90&W=160",
    coordinates: [28.6139, 77.209],
    description: "Heritage hotel in the capital city.",
  },
  {
    id: 7,
    name: "Pride Plaza Hotel",
    location: "Nainital, Uttarakhand",
    city: "Nainital",
    rating: 8.4,
    ratingText: "Very good",
    reviews: 1876,
    price: 14500,
    originalPrice: 18000,
    discount: 19,
    provider: "Yatra",
    amenities: ["Lake view", "Boating", "Mountain trekking"],
    stars: 4,
    image:
      "https://res.cloudinary.com/simplotel/image/upload/x_0,y_117,w_2240,h_1262,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/pride-plaza-hotel-new-delhi/_A4A5632_ufudnj",
    coordinates: [29.3803, 79.4636],
    description: "Serene lakeside resort in the hills.",
  },
  {
    id: 8,
    name: "Mussoorie Hill Station Hotel",
    location: "Mussoorie, Uttarakhand",
    city: "Mussoorie",
    rating: 8.1,
    ratingText: "Very good",
    reviews: 2234,
    price: 13800,
    originalPrice: 17000,
    discount: 18,
    provider: "Thomas Cook",
    amenities: ["Hill view", "Cable car nearby", "Colonial architecture"],
    stars: 4,
    image:
      "https://travelogyindia.b-cdn.net/storage/app/upload/taj-mahal-hotel.jpg",
    coordinates: [30.4598, 78.0664],
    description: "Colonial charm in the Queen of Hills.",
  },
  {
    id: 9,
    name: "Lonavala Valley Resort",
    location: "Lonavala, Maharashtra",
    city: "Lonavala",
    rating: 7.9,
    ratingText: "Good",
    reviews: 3421,
    price: 9500,
    originalPrice: 12000,
    discount: 21,
    provider: "Goibibo",
    amenities: ["Valley view", "Waterfall nearby", "Adventure activities"],
    stars: 3,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [18.7537, 73.4068],
    description: "Perfect weekend getaway near Mumbai.",
  },
  {
    id: 10,
    name: "Rishikesh Ganga Resort",
    location: "Rishikesh, Uttarakhand",
    city: "Rishikesh",
    rating: 8.6,
    ratingText: "Excellent",
    reviews: 1987,
    price: 11200,
    originalPrice: 14000,
    discount: 20,
    provider: "MMT",
    amenities: ["River view", "Yoga classes", "Adventure sports"],
    stars: 4,
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/219625932_20210122152751.jpg",
    coordinates: [30.0869, 78.2676],
    description: "Spiritual retreat by the holy Ganges.",
  },
  {
    id: 11,
    name: "Mumbai Marina Beach Hotel",
    location: "Mumbai",
    city: "Mumbai",
    rating: 8.3,
    ratingText: "Very good",
    reviews: 2876,
    price: 15600,
    originalPrice: 19000,
    discount: 18,
    provider: "Booking.com",
    amenities: ["Beach view", "Business center", "South Indian cuisine"],
    stars: 4,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.e1DMoXpaNl7PMJ4Q-x6gLwHaE7?pid=Api&P=0&h=180",
    coordinates: [13.0827, 80.2707],
    description: "Beachfront hotel in the cultural capital.",
  },
  {
    id: 12,
    name: "Delhi Heritage Hotel",
    location: "Delhi",
    city: "Delhi",
    rating: 8.5,
    ratingText: "Very good",
    reviews: 2145,
    price: 16200,
    originalPrice: 20000,
    discount: 19,
    provider: "Expedia",
    amenities: ["Mountain view", "Heritage building", "Mall road nearby"],
    stars: 4,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/11/ff/9a/radisson-blu-plaza-delhi.jpg?w=700&h=-1&s=1",
    coordinates: [31.1048, 77.1734],
    description: "Colonial elegance in the summer capital.",
  },
  {
    id: 13,
    name: "Digha Sea Beach Resort",
    location: "Digha, West Bengal",
    city: "Digha",
    rating: 7.8,
    ratingText: "Good",
    reviews: 1654,
    price: 8900,
    originalPrice: 11000,
    discount: 19,
    provider: "Cleartrip",
    amenities: ["Sea view", "Beach access", "Seafood restaurant"],
    stars: 3,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.5fKRnxg5BGIoYQO7X1bsXQHaFj?pid=Api&P=0&h=180",
    coordinates: [21.6283, 87.5233],
    description: "Budget-friendly beach resort in Bengal.",
  },
  {
    id: 14,
    name: "Mahabaleshwar Hill Resort",
    location: "Mahabaleshwar, Maharashtra",
    city: "Mahabaleshwar",
    rating: 8.2,
    ratingText: "Very good",
    reviews: 1876,
    price: 12800,
    originalPrice: 16000,
    discount: 20,
    provider: "Yatra",
    amenities: ["Hill station", "Strawberry farms", "Scenic viewpoints"],
    stars: 4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [17.9334, 73.6582],
    description: "Strawberry capital with scenic beauty.",
  },
  {
    id: 15,
    name: "Bengaluru Tech City Hotel",
    location: "Bengaluru, Karnataka",
    city: "Bengaluru",
    rating: 8.4,
    ratingText: "Very good",
    reviews: 3245,
    price: 17500,
    originalPrice: 21000,
    discount: 17,
    provider: "Agoda",
    amenities: ["Tech hub location", "Business facilities", "Rooftop bar"],
    stars: 4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [12.9716, 77.5946],
    description: "Modern hotel in India's Silicon Valley.",
  },
  {
    id: 16,
    name: "Pune Business Hotel",
    location: "Pune, Maharashtra",
    city: "Pune",
    rating: 8.1,
    ratingText: "Very good",
    reviews: 2567,
    price: 14200,
    originalPrice: 17500,
    discount: 19,
    provider: "MMT",
    amenities: ["Business district", "Conference rooms", "IT hub nearby"],
    stars: 4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [18.5204, 73.8567],
    description: "Perfect for business travelers in Pune.",
  },
  {
    id: 17,
    name: "Bali Tropical Resort",
    location: "Ubud, Bali",
    city: "Bali",
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 2876,
    price: 22500,
    originalPrice: 28000,
    discount: 20,
    provider: "Booking.com",
    amenities: ["Tropical setting", "Spa treatments", "Rice terrace view"],
    stars: 5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.2kxTjNyo2exf_yrMpoJPwQHaFj?pid=Api&P=0&h=180",
    coordinates: [-8.5069, 115.2625],
    description: "Tropical paradise in the heart of Bali.",
  },
  {
    id: 18,
    name: "Mauritius Beach Resort",
    location: "Port Louis, Mauritius",
    city: "Mauritius",
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 1543,
    price: 28900,
    originalPrice: 35000,
    discount: 17,
    provider: "Expedia",
    amenities: ["Private beach", "Water sports", "Luxury spa"],
    stars: 5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.O8P7r8CEJ78d8OONaEWd8QHaD5?pid=Api&P=0&h=180",
    coordinates: [-20.1609, 57.5012],
    description: "Luxury island resort with pristine beaches.",
  },
  {
    id: 19,
    name: "Toshali Sands Puri",
    location: "Puri, Odisha",
    city: "Puri",
    rating: 8.0,
    ratingText: "Very good",
    reviews: 9834,
    price: 13342,
    originalPrice: 16500,
    discount: 19,
    provider: "Expedia",
    amenities: ["Beach access", "Restaurant", "Spa"],
    stars: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzx7cDzXQ0lzgml2DF_N9QQHTidyCxn2cbZ7K4fbtYIN2vA-ubuNujgAHKBBbG_j1dQA&usqp=CAU",
    coordinates: [19.8135, 85.8312],
    description: "Beachside resort perfect for family vacations.",
  },
  {
    id: 20,
    name: "The Barefoot Eco Hotel",
    location: "puri",
    city: "puri",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1726,
    price: 14214,
    originalPrice: 17000,
    discount: 17,
    provider: "Hotel Site",
    amenities: ["Breakfast included", "Eco-friendly", "Snorkeling"],
    stars: 5,
    image: "https://tse4.mm.bing.net/th/id/OIP.zwnU61lpcEpuPqEOFAV3QQHaE8?pid=Api&P=0&h=180",
    coordinates: [6.7676, 73.1717],
    description: "Eco-friendly paradise resort with crystal clear waters.",
  },
    {
    id: 21,
    name: "Tropical Resort",
    location: "Bali",
    city: "Bali",
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 2876,
    price: 22500,
    originalPrice: 28000,
    discount: 20,
    provider: "Booking.com",
    amenities: ["Tropical setting", "Spa treatments", "Rice terrace view"],
    stars: 5,
    image:
      "https://happho.com/wp-content/uploads/2022/06/decor2.jpg",
    coordinates: [-8.5069, 115.2625],
    description: "Tropical paradise in the heart of Bali.",
  },
    {
    id: 22,
    name: "Beach Resort",
    location: "Mauritius",
    city: "Mauritius",
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 1543,
    price: 28900,
    originalPrice: 35000,
    discount: 17,
    provider: "Expedia",
    amenities: ["Private beach", "Water sports", "Luxury spa"],
    stars: 5,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.nVMGGf7aOpo_6vIHZ75wCwHaE7?pid=Api&P=0&h=180",
    coordinates: [-20.1609, 57.5012],
    description: "Luxury island resort with pristine beaches.",
  },
    {
    id: 23,
    name: "Hotel Empires",
    location: "Bhubaneshwar",
    city: "Bhubaneshwar",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1726,
    price: 1214,
    originalPrice: 7000,
    discount: 17,
    provider: "Hotel Site",
    amenities: ["Breakfast included", "Eco-friendly", "Snorkeling"],
    stars: 5,
    image: "https://r1imghtlak.mmtcdn.com/2c6a5d420aa711eea0e90a58a9feac02.jpg?&output-quality=75&downsize=520:350&output-format=jpg&downsize=480:336&crop=480:336",
    coordinates: [6.7676, 73.1717],
    description: "Eco-friendly paradise resort with crystal clear waters.",
  },
    {
    id: 24,
    name: "Hotel Pushpak",
    location: "Bhubaneshwar",
    city: "Bhubaneshwar",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1726,
    price: 2214,
    originalPrice: 3000,
    discount: 10,
    provider: "Hotel Site",
    amenities: ["Breakfast included", "Eco-friendly", "Snorkeling"],
    stars: 5,
    image: "https://content.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.1233143797s6j7i5.dc/catalogue/hotel-pushpak-kalpana-square-bhubaneshwar-2-star-hotels-meeb9tmm91.jpg",
    coordinates: [6.7676, 73.1717],
    description: "Eco-friendly paradise resort with crystal clear waters.",
  },
    {
    id: 25,
    name: "Mayfair Lagoon Hotel",
    location: "Bhubaneshwar",
    city: "Bhubaneshwar",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1726,
    price: 14214,
    originalPrice: 17000,
    discount: 17,
    provider: "Hotel Site",
    amenities: ["Breakfast included", "Eco-friendly", "Snorkeling"],
    stars: 5,
    image: "https://media.easemytrip.com/media/hotel/shl-1903187650662/roomimage/roomimageejadau.jpg",
    coordinates: [6.7676, 73.1717],
    description: "Eco-friendly paradise resort with crystal clear waters.",
  },
  {
    id: 26,
    name: "Royal Grand Heritage",
    location: "Puri, Odisha",
    city: "Puri",
    rating: 8.0,
    ratingText: "Very good",
    reviews: 9834,
    price:2934,
    originalPrice: 3667,
    discount: 10,
    provider: "Expedia",
    amenities: ["Beach access", "Restaurant", "Spa"],
    stars: 4,
    image:
      "https://media.easemytrip.com/media/hotel/shl-2212701582106/common/commonhjjv3s.jpg",
    coordinates: [19.8135, 85.8312],
    description: "Beachside resort perfect for family vacations.",
  },
  {
    id: 27,
    name: "Grand Heritage",
    location: "Goa",
    city: "Goa",
    rating: 8.0,
    ratingText: "Very good",
    reviews: 9834,
    price:2934,
    originalPrice: 3667,
    discount: 10,
    provider: "Expedia",
    amenities: ["Beach access", "Restaurant", "Spa"],
    stars: 4,
    image:
      "./main/Goa.jpg",
    coordinates: [19.8135, 85.8312],
    description: "Beachside resort perfect for family vacations.",
  },
]

// Cities and Destinations Data
const citiesData = [
  {
    name: "Mumbai",
    hotels: 5213,
    avgPrice: 4205,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&h=200&fit=crop",
  },
  {
    name: "Jaipur",
    hotels: 4877,
    avgPrice: 3397,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/61/1e/57/swimming-pool.jpg?w=1400&h=-1&s=1",
  },
  {
    name: "Delhi",
    hotels: 12577,
    avgPrice: 5307,
    image: "https://robbreport.com/wp-content/uploads/2013/06/831971.jpg?w=943",
  },
  {
    name: "Udaipur",
    hotels: 2577,
    avgPrice: 5333,
    image: "https://tse1.mm.bing.net/th/id/OIP.eJ9j-IEFjK13JtzAlbQbzAHaE5?pid=Api&P=0&h=180",
  },
  {
    name: "Manali",
    hotels: 1877,
    avgPrice: 4500,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
  },
  {
    name: "Goa",
    hotels: 3200,
    avgPrice: 6800,
    image: "https://tse1.mm.bing.net/th/id/OIP.lUfdE1Wgg7ts2V60bhjEcAHaEK?pid=Api&P=0&h=180",
  },
]

const destinationsData = [
  {
    name: "Maldives",
    hotels: 2123,
    avgPrice: 23345,
    image: "https://tse1.mm.bing.net/th/id/OIP.EbmHdAszDAqsWYqGQvApAAHaE7?pid=Api&P=0&h=180",
  },
  {
    name: "Bali",
    hotels: 2377,
    avgPrice: 12397,
    image: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/0b/d9/0beca549d2648ff26c14d3d397b0a05d2c6685f3d2a53cdde5e6f22a20aa.jpeg",
  },
  {
    name: "Mauritius",
    hotels: 1237,
    avgPrice: 11397,
    image: "https://tse4.mm.bing.net/th/id/OIP.yaM5RY8GEoaXaFtb8MGJtgHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Thailand",
    hotels: 4500,
    avgPrice: 8500,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
  },
  {
    name: "Dubai",
    hotels: 1800,
    avgPrice: 15000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop",
  },
  {
    name: "Singapore",
    hotels: 2100,
    avgPrice: 18000,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=200&fit=crop",
  },
]

// Global Variables
let currentUser = null
let selectedHotel = null
let currentBooking = null
let selectedPaymentMethod = null
let map = null
let mapMarkers = []
let currentSearchResults = []

// Utility Functions
const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

const generateStars = (rating) => "⭐".repeat(Math.floor(rating))

const calculateNights = (checkin, checkout) => Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 3600 * 24))

// Storage Functions
const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))
const getFromStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

// Authentication Functions
function checkAuth() {
  const user = getFromStorage("currentUser")
  if (user) {
    currentUser = user
    hideAuthGuard()
    updateUserProfile()
  } else {
    showAuthGuard()
  }
}

function showAuthGuard() {
  document.getElementById("authGuard").classList.remove("hidden")
}

function hideAuthGuard() {
  document.getElementById("authGuard").classList.add("hidden")
}

function showLogin() {
  closeModal("registerModal")
  document.getElementById("loginModal").classList.remove("hidden")
}

function showRegister() {
  closeModal("loginModal")
  document.getElementById("registerModal").classList.remove("hidden")
}

function handleLogin(event) {
  event.preventDefault()
  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  const users = getFromStorage("users") || []
  const user = users.find((u) => u.email === email && u.password === password)

  if (user) {
    currentUser = user
    saveToStorage("currentUser", user)
    hideAuthGuard()
    updateUserProfile()
    closeModal("loginModal")
    showMessage("Login successful!", "success")
  } else {
    showMessage("Invalid email or password!", "error")
  }
}

function handleRegister(event) {
  event.preventDefault()
  const name = document.getElementById("registerName").value
  const email = document.getElementById("registerEmail").value
  const phone = document.getElementById("registerPhone").value
  const password = document.getElementById("registerPassword").value

  const users = getFromStorage("users") || []

  if (users.find((u) => u.email === email)) {
    showMessage("Email already registered!", "error")
    return
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    phone,
    password,
    registeredAt: new Date().toISOString(),
  }

  users.push(newUser)
  saveToStorage("users", users)

  currentUser = newUser
  saveToStorage("currentUser", newUser)

  hideAuthGuard()
  updateUserProfile()
  closeModal("registerModal")
  showMessage("Registration successful!", "success")
}

function logout() {
  currentUser = null
  localStorage.removeItem("currentUser")
  showAuthGuard()
  showMessage("Logged out successfully!", "success")
}

// User Profile Functions
function updateUserProfile() {
  if (!currentUser) return

  const profileHTML = `
        <div class="relative">
            <button onclick="toggleUserDropdown()" class="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span class="hidden md:block">${currentUser.name}</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </button>
            <div id="userDropdown" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <div class="py-2">
                    <button onclick="showProfile()" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Profile
                    </button>
                    <button onclick="showBookingHistory()" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Booking History
                    </button>
                    <hr class="my-2">
                    <button onclick="logout()" class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    `

  document.getElementById("userProfile").innerHTML = profileHTML
  document.getElementById("mobileUserProfile").innerHTML = `
        <button onclick="showProfile()" class="block w-full text-left py-2 text-gray-700">My Profile</button>
        <button onclick="showBookingHistory()" class="block w-full text-left py-2 text-gray-700">Booking History</button>
        <button onclick="logout()" class="block w-full text-left py-2 text-red-600">Logout</button>
    `
}

function toggleUserDropdown() {
  const dropdown = document.getElementById("userDropdown")
  dropdown.classList.toggle("hidden")
}

function showProfile() {
  if (!currentUser) return

  const bookings = getFromStorage("userBookings") || []
  const userBookings = bookings.filter((b) => b.userId === currentUser.id)

  document.getElementById("profileContent").innerHTML = `
        <div class="space-y-4">
            <div class="text-center">
                <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </div>
                <h3 class="text-xl font-bold">${currentUser.name}</h3>
                <p class="text-gray-600">${currentUser.email}</p>
            </div>
            <div class="border-t pt-4">
                <div class="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-primary">${userBookings.length}</div>
                        <div class="text-sm text-gray-600">Total Bookings</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-primary">${userBookings.filter((b) => b.status === "confirmed").length}</div>
                        <div class="text-sm text-gray-600">Active Bookings</div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-4">
                <h4 class="font-semibold mb-2">Account Details</h4>
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Phone:</span>
                        <span>${currentUser.phone}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Member Since:</span>
                        <span>${formatDate(currentUser.registeredAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    `

  document.getElementById("profileModal").classList.remove("hidden")
}

// Hotel Functions
function createHotelCard(hotel) {
  return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${hotel.name}</h3>
                <p class="text-gray-600 text-sm mb-2">📍 ${hotel.location}</p>
                <div class="flex items-center mb-2">
                    <span class="text-yellow-500">${generateStars(hotel.stars)}</span>
                    <span class="ml-2 text-sm text-gray-600">${hotel.rating} (${hotel.reviews} reviews)</span>
                </div>
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <span class="text-2xl font-bold text-gray-900">${formatPrice(hotel.price)}</span>
                        <span class="text-sm text-gray-600">/night</span>
                    </div>
                    <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">${hotel.discount}% off</span>
                </div>
                <button onclick="openBookingModal(${hotel.id})" class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                    Book Now
                </button>
            </div>
        </div>
    `
}

function searchHotels(city, checkin, checkout, guests, rooms) {
  let results = hotelData.filter(
    (hotel) =>
      hotel.city.toLowerCase().includes(city.toLowerCase()) ||
      hotel.location.toLowerCase().includes(city.toLowerCase()),
  )

  if (results.length === 0) {
    results = hotelData.slice(0, 5) // Show 5 hotels as requested
  } else {
    results = results.slice(0, 5) // Limit to 5 hotels
  }

  return results
}

function displaySearchResults(results, searchCity) {
  currentSearchResults = results
  document.getElementById("searchResults").classList.remove("hidden")
  document.getElementById("resultsTitle").textContent = `Hotels in ${searchCity}`
  document.getElementById("resultsCount").textContent = `${results.length} hotels found`

  const container = document.getElementById("hotelResults")
  container.innerHTML = results.map((hotel) => createHotelCard(hotel)).join("")

  initializeMap(results)
  document.getElementById("searchResults").scrollIntoView({ behavior: "smooth" })
}

// Map Functions
function initializeMap(hotels) {
  if (map) {
    map.remove()
  }

  map = window.L.map("map").setView([20.5937, 78.9629], 5)

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map)

  mapMarkers = []

  hotels.forEach((hotel) => {
    const marker = window.L.marker(hotel.coordinates)
      .addTo(map)
      .bindPopup(`
                <div class="text-center">
                    <h3 class="font-bold">${hotel.name}</h3>
                    <p class="text-sm text-gray-600">${hotel.location}</p>
                    <p class="font-semibold">${formatPrice(hotel.price)}/night</p>
                    <button onclick="openBookingModal(${hotel.id})" class="mt-2 bg-primary text-white px-4 py-1 rounded text-sm">
                        Book Now
                    </button>
                </div>
            `)

    mapMarkers.push(marker)
  })

  if (hotels.length > 0) {
    const group = new window.L.featureGroup(mapMarkers)
    map.fitBounds(group.getBounds().pad(0.1))
  }
}

// Booking Functions
function openBookingModal(hotelId) {
  if (!currentUser) {
    showMessage("Please login to book hotels", "error")
    return
  }

  selectedHotel = hotelData.find((hotel) => hotel.id === hotelId)
  if (!selectedHotel) return

  document.getElementById("selectedHotelInfo").innerHTML = `
        <div class="bg-gray-50 rounded-lg p-4">
            <img src="${selectedHotel.image}" alt="${selectedHotel.name}" class="w-full h-32 object-cover rounded-lg mb-4">
            <h3 class="font-bold text-lg">${selectedHotel.name}</h3>
            <p class="text-gray-600">${selectedHotel.location}</p>
            <div class="flex items-center mt-2">
                <span class="text-yellow-500">${generateStars(selectedHotel.stars)}</span>
                <span class="ml-2 text-sm">${selectedHotel.rating} (${selectedHotel.reviews} reviews)</span>
            </div>
            <p class="text-xl font-bold mt-2">${formatPrice(selectedHotel.price)} per night</p>
        </div>
    `

  // Set default dates
  const today = new Date().toISOString().split("T")[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]
  document.getElementById("bookingCheckin").value = today
  document.getElementById("bookingCheckout").value = tomorrow

  updateBookingSummary()
  document.getElementById("bookingModal").classList.remove("hidden")
}

function updateBookingSummary() {
  if (!selectedHotel) return

  const checkin = document.getElementById("bookingCheckin").value
  const checkout = document.getElementById("bookingCheckout").value
  const guests = document.getElementById("bookingGuests").value
  const rooms = document.getElementById("bookingRooms").value

  if (checkin && checkout) {
    const nights = calculateNights(checkin, checkout)
    const totalPrice = selectedHotel.price * nights * Number.parseInt(rooms)*Number.parseInt(guests)
    const taxes = Math.round(totalPrice * 0.18)
    const finalTotal = totalPrice + taxes

    document.getElementById("bookingSummary").innerHTML = `
            <h3 class="font-bold mb-4">Booking Summary</h3>
            <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                    <span>Hotel:</span>
                    <span>${selectedHotel.name}</span>
                </div>
                <div class="flex justify-between">
                    <span>Check-in:</span>
                    <span>${formatDate(checkin)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Check-out:</span>
                    <span>${formatDate(checkout)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Nights:</span>
                    <span>${nights}</span>
                </div>
                <div class="flex justify-between">
                    <span>Guests:</span>
                    <span>${guests}</span>
                </div>
                <div class="flex justify-between">
                    <span>Rooms:</span>
                    <span>${rooms}</span>
                </div>
                <div class="flex justify-between">
                    <span>Room Rate:</span>
                    <span>${formatPrice(selectedHotel.price)} × ${nights} nights × ${rooms} rooms</span>
                </div>
                <div class="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${formatPrice(totalPrice)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Taxes & Fees:</span>
                    <span>${formatPrice(taxes)}</span>
                </div>
                <div class="flex justify-between border-t pt-2 font-bold">
                    <span>Total:</span>
                    <span>${formatPrice(finalTotal)}</span>
                </div>
            </div>
        `
  }
}

function handleBooking(event) {
  event.preventDefault()
  if (!selectedHotel || !currentUser) return

  const checkin = document.getElementById("bookingCheckin").value
  const checkout = document.getElementById("bookingCheckout").value
  const guests = document.getElementById("bookingGuests").value
  const rooms = document.getElementById("bookingRooms").value
  const specialRequests = document.getElementById("specialRequests").value

  if (new Date(checkin) >= new Date(checkout)) {
    showMessage("Check-out date must be after check-in date", "error")
    return
  }

  const nights = calculateNights(checkin, checkout)
  const totalPrice = selectedHotel.price * nights * Number.parseInt(rooms)
  const taxes = Math.round(totalPrice * 0.18)
  const finalTotal = totalPrice + taxes

  currentBooking = {
    id: Date.now(),
    userId: currentUser.id,
    hotel: selectedHotel,
    checkin,
    checkout,
    guests,
    rooms,
    nights,
    totalAmount: finalTotal,
    specialRequests,
    status: "pending",
    bookingDate: new Date().toISOString(),
  }

  closeModal("bookingModal")
  document.getElementById("paymentModal").classList.remove("hidden")
}

// Payment Functions
function selectPayment(method) {
  selectedPaymentMethod = method
  document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.checked = radio.value === method
  })
  document.getElementById("confirmPayment").disabled = false
  document.getElementById("confirmPayment").classList.remove("opacity-50")
}

function confirmPayment() {
  if (!currentBooking || !selectedPaymentMethod) return

  // Show loading state
  document.getElementById("confirmPayment").innerHTML = "Processing..."
  document.getElementById("confirmPayment").disabled = true

  // Simulate payment processing
  setTimeout(() => {
    currentBooking.status = "confirmed"
    currentBooking.paymentMethod = selectedPaymentMethod
    currentBooking.paymentDate = new Date().toISOString()

    // Save booking
    const bookings = getFromStorage("userBookings") || []
    bookings.push(currentBooking)
    saveToStorage("userBookings", bookings)

    closeModal("paymentModal")
    showMessage("Booking confirmed successfully!", "success")

    // Reset
    currentBooking = null
    selectedPaymentMethod = null
    selectedHotel = null
  }, 2000)
}

// Booking History Functions
function showBookingHistory() {
  if (!currentUser) return

  const bookings = getFromStorage("userBookings") || []
  const userBookings = bookings.filter((b) => b.userId === currentUser.id)

  if (userBookings.length === 0) {
    document.getElementById("historyContent").innerHTML = `
            <div class="text-center py-8">
                <div class="text-gray-400 mb-4">
                    <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-600">No bookings yet</h3>
                <p class="text-gray-500">Your booking history will appear here</p>
            </div>
        `
  } else {
    document.getElementById("historyContent").innerHTML = `
            <div class="space-y-4">
                ${userBookings
                  .map(
                    (booking) => `
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="font-bold text-lg">${booking.hotel.name}</h3>
                                <p class="text-gray-600">${booking.hotel.location}</p>
                                <p class="text-sm text-gray-500">Booking ID: #${booking.id}</p>
                            </div>
                            <div class="text-right">
                                <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                  booking.status === "confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : booking.status === "cancelled"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }">
                                    ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                            <div>
                                <span class="text-gray-600">Check-in:</span>
                                <div class="font-semibold">${formatDate(booking.checkin)}</div>
                            </div>
                            <div>
                                <span class="text-gray-600">Check-out:</span>
                                <div class="font-semibold">${formatDate(booking.checkout)}</div>
                            </div>
                            <div>
                                <span class="text-gray-600">Guests:</span>
                                <div class="font-semibold">${booking.guests}</div>
                            </div>
                            <div>
                                <span class="text-gray-600">Total:</span>
                                <div class="font-semibold">${formatPrice(booking.totalAmount)}</div>
                            </div>
                        </div>
                        ${
                          booking.status === "confirmed"
                            ? `
                            <button onclick="cancelBooking(${booking.id})" class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition">
                                Cancel Booking
                            </button>
                        `
                            : ""
                        }
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `
  }

  document.getElementById("historyModal").classList.remove("hidden")
}

function cancelBooking(bookingId) {
  if (!confirm("Are you sure you want to cancel this booking?")) return

  const bookings = getFromStorage("userBookings") || []
  const bookingIndex = bookings.findIndex((b) => b.id === bookingId)

  if (bookingIndex !== -1) {
    bookings[bookingIndex].status = "cancelled"
    bookings[bookingIndex].cancelledDate = new Date().toISOString()
    saveToStorage("userBookings", bookings)

    showMessage("Booking cancelled successfully!", "success")
    showBookingHistory() // Refresh the history
  }
}

// Filter Functions
function applyFilters() {
  const sortFilter = document.getElementById("sortFilter").value
  const priceFilter = document.getElementById("priceFilter").value

  let results = [...currentSearchResults]

  // Apply price filter
  if (priceFilter !== "all") {
    results = results.filter((hotel) => {
      switch (priceFilter) {
        case "budget":
          return hotel.price < 10000
        case "mid":
          return hotel.price >= 10000 && hotel.price <= 20000
        case "luxury":
          return hotel.price > 20000
        default:
          return true
      }
    })
  }

  // Apply sorting
  results.sort((a, b) => {
    switch (sortFilter) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const container = document.getElementById("hotelResults")
  container.innerHTML = results.map((hotel) => createHotelCard(hotel)).join("")

  document.getElementById("resultsCount").textContent = `${results.length} hotels found`
  initializeMap(results)
}

// UI Functions
function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden")

  // Reset forms and states
  if (modalId === "bookingModal") {
    document.getElementById("bookingForm").reset()
  } else if (modalId === "loginModal") {
    document.getElementById("loginForm").reset()
  } else if (modalId === "registerModal") {
    document.getElementById("registerForm").reset()
  } else if (modalId === "paymentModal") {
    selectedPaymentMethod = null
    document.querySelectorAll('input[name="payment"]').forEach((radio) => (radio.checked = false))
    document.getElementById("confirmPayment").disabled = true
    document.getElementById("confirmPayment").classList.add("opacity-50")
    document.getElementById("confirmPayment").innerHTML = "Confirm Payment"
  }
}

function showMessage(message, type) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg font-semibold ${
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`
  messageDiv.textContent = message

  document.body.appendChild(messageDiv)

  setTimeout(() => {
    messageDiv.remove()
  }, 3000)
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden")
}

function showTab(tab) {
  if (tab === "cities") {
    document.getElementById("citiesTab").className = "pb-2 border-b-2 border-primary text-primary font-semibold"
    document.getElementById("destinationsTab").className = "pb-2 text-gray-600 font-semibold"
    document.getElementById("citiesContent").classList.remove("hidden")
    document.getElementById("destinationsContent").classList.add("hidden")
  } else {
    document.getElementById("destinationsTab").className = "pb-2 border-b-2 border-primary text-primary font-semibold"
    document.getElementById("citiesTab").className = "pb-2 text-gray-600 font-semibold"
    document.getElementById("destinationsContent").classList.remove("hidden")
    document.getElementById("citiesContent").classList.add("hidden")
  }
}

function searchByCity(cityName) {
  document.getElementById("cityInput").value = cityName

  const today = new Date().toISOString().split("T")[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]
  document.getElementById("checkinDate").value = today
  document.getElementById("checkoutDate").value = tomorrow

  handleSearch()
}

function handleSearch(event) {
  if (event) event.preventDefault()

  const city = document.getElementById("cityInput").value.trim()
  const checkin = document.getElementById("checkinDate").value
  const checkout = document.getElementById("checkoutDate").value
  const guests = document.getElementById("numGuests").value
  const rooms = document.getElementById("numRooms").value

  if (!city) {
    showMessage("Please enter a destination", "error")
    return
  }

  if (!checkin || !checkout) {
    showMessage("Please select check-in and check-out dates", "error")
    return
  }

  if (new Date(checkin) >= new Date(checkout)) {
    showMessage("Check-out date must be after check-in date", "error")
    return
  }

  const results = searchHotels(city, checkin, checkout, guests, rooms)
  displaySearchResults(results, city)
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Check authentication
  checkAuth()

  // Load default hotels
  const defaultContainer = document.getElementById("defaultHotels")
  defaultContainer.innerHTML = hotelData
    .slice(0, 4)
    .map((hotel) => createHotelCard(hotel))
    .join("")

  // Load cities and destinations
  document.getElementById("citiesContent").innerHTML = citiesData
    .map(
      (city) => `
        <div onclick="searchByCity('${city.name}')" class="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src="${city.image}" alt="${city.name}" class="w-full h-24 object-cover">
            <div class="p-3">
                <h3 class="font-bold">${city.name}</h3>
                <p class="text-sm text-gray-600">${city.hotels} Hotels</p>
                <p class="text-sm text-gray-600">${formatPrice(city.avgPrice)} Avg.</p>
            </div>
        </div>
    `,
    )
    .join("")

  document.getElementById("destinationsContent").innerHTML = destinationsData
    .map(
      (dest) => `
        <div onclick="searchByCity('${dest.name}')" class="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-24 object-cover">
            <div class="p-3">
                <h3 class="font-bold">${dest.name}</h3>
                <p class="text-sm text-gray-600">${dest.hotels} Hotels</p>
                <p class="text-sm text-gray-600">${formatPrice(dest.avgPrice)} Avg.</p>
            </div>
        </div>
    `,
    )
    .join("")

  // Set minimum date for date inputs
  const today = new Date().toISOString().split("T")[0]
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    input.setAttribute("min", today)
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#userProfile")) {
      document.getElementById("userDropdown")?.classList.add("hidden")
    }
  })
})
