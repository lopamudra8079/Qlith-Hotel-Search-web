// ===== COMPREHENSIVE HOTEL DATA =====
const hotelData = [
  {
    id: 1,
    name: "Golden Tulip Candolim, Goa",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [15.5167, 73.7667],
    description: "Luxury beachfront resort with stunning ocean views.",
  },
  {
    id: 2,
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
    id: 3,
    name: "The Barefoot Eco Hotel",
    location: "Hanimaadhoo, Maldives",
    city: "Maldives",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1726,
    price: 14214,
    originalPrice: 17000,
    discount: 17,
    provider: "Hotel Site",
    amenities: ["Breakfast included", "Eco-friendly", "Snorkeling"],
    stars: 5,
    image: "https://www.scubatravel.com/holidays/resorts/maldives/noomadi/gallery/image6.jpg",
    coordinates: [6.7676, 73.1717],
    description: "Eco-friendly paradise resort with crystal clear waters.",
  },
  {
    id: 4,
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
    id: 5,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [19.076, 72.8777],
    description: "Modern hotel in the heart of Mumbai.",
  },
  {
    id: 6,
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
    id: 7,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [32.2396, 77.1887],
    description: "Cozy mountain resort with breathtaking Himalayan views.",
  },
  {
    id: 8,
    name: "Lonavala",
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
      "./main/lonavala.jpg.avif",
    coordinates: [28.6139, 77.209],
    description: "Heritage hotel in the capital city.",
  },
  {
    id: 9,
    name: "Nainital",
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
      "./main/nainital.jpg",
    coordinates: [29.3803, 79.4636],
    description: "Serene lakeside resort in the hills.",
  },
  {
    id: 10,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [30.4598, 78.0664],
    description: "Colonial charm in the Queen of Hills.",
  },
  {
    id: 11,
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
    id: 12,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [30.0869, 78.2676],
    description: "Spiritual retreat by the holy Ganges.",
  },
  {
    id: 13,
    name: "Chennai Marina Beach Hotel",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [13.0827, 80.2707],
    description: "Beachfront hotel in the cultural capital.",
  },
  {
    id: 14,
    name: "Shimla Heritage Hotel",
    location: "Shimla, Himachal Pradesh",
    city: "Shimla",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [31.1048, 77.1734],
    description: "Colonial elegance in the summer capital.",
  },
  {
    id: 15,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [21.6283, 87.5233],
    description: "Budget-friendly beach resort in Bengal.",
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [-8.5069, 115.2625],
    description: "Tropical paradise in the heart of Bali.",
  },
  {
    id: 20,
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14678175.jpg?k=16c1f3831e690c8c0c955f383be5d4f2c12e6a91653ba10e5ff7046554d3af04&o=&hp=1",
    coordinates: [-20.1609, 57.5012],
    description: "Luxury island resort with pristine beaches.",
  },
]

// ===== GLOBAL VARIABLES =====
let currentSearchResults = [],
  selectedHotel = null,
  map = null,
  mapMarkers = [],
  currentUser = null

// ===== UTILITY FUNCTIONS =====
const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price)
const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
const generateStars = (rating) => "⭐".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))
const calculateNights = (checkin, checkout) => Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 3600 * 24))

// ===== STORAGE FUNCTIONS =====
const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))
const getFromStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

// ===== SEARCH FUNCTIONALITY =====
const searchHotels = (city, checkin, checkout, guests) => {
  let results = hotelData.filter(
    (hotel) =>
      hotel.city.toLowerCase().includes(city.toLowerCase()) ||
      hotel.location.toLowerCase().includes(city.toLowerCase()),
  )
  if (results.length === 0) results = hotelData
  saveToStorage("trivagoLastSearch", { city, checkin, checkout, guests, timestamp: new Date().toISOString() })
  return results
}

const displaySearchResults = (results, searchCity) => {
  const sections = ["hotel-results", "defaultHotels"].map((id) => document.getElementById(id))
  sections[1].style.display = "none"
  sections[0].style.display = "block"

  document.getElementById("resultsTitle").textContent = `Hotels in ${searchCity}`
  document.getElementById("resultsCount").textContent = `${results.length} hotels found`

  const container = document.getElementById("searchResultsContainer")
  container.innerHTML = ""
  results.forEach((hotel) => container.appendChild(createHotelCard(hotel)))

  initializeMap(results)
  sections[0].scrollIntoView({ behavior: "smooth" })
}

const createHotelCard = (hotel) => {
  const card = document.createElement("div")
  card.className = "hotel-card fade-in"
  card.innerHTML = `
    <img src="${hotel.image}" class="hotel-img" alt="${hotel.name}">
    <div class="card-content">
      <h2 class="hotel-name">${hotel.name}</h2>
      <p class="hotel-rating"><strong>${hotel.rating} - ${hotel.ratingText}</strong> (${hotel.reviews})</p>
      <p class="hotel-location">📍 ${hotel.location}</p>
      <div class="discount-box">
        <span class="discount-label">${hotel.discount}% Less than usual</span>
      </div>
      <p class="hotel-provider">${hotel.provider} ${hotel.amenities
        .slice(0, 2)
        .map((amenity) => `✔ ${amenity}`)
        .join(" ")}</p>
      <div class="price-date-box">
        <div>
          <span class="hotel-price">${formatPrice(hotel.price)}</span>
          <span class="per-night-text">per night</span>
        </div>
        <div class="hotel-date">Today - Tomorrow</div>
      </div>
      <button class="check-deal-button book-now-btn" data-hotel-id="${hotel.id}">Book Now</button>
      <div class="star-rating">${generateStars(hotel.stars)}</div>
    </div>
  `
  card.querySelector(".book-now-btn").addEventListener("click", () => openBookingModal(hotel.id))
  return card
}

// ===== MAP FUNCTIONALITY =====
const initializeMap = (hotels) => {
  if (map) map.remove()
  map = window.L.map("map").setView([20.5937, 78.9629], 5)
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map)

  mapMarkers.forEach((marker) => map.removeLayer(marker))
  mapMarkers = []

  hotels.forEach((hotel) => {
    const marker = window.L.marker(hotel.coordinates)
      .addTo(map)
      .bindPopup(`
      <div class="map-popup">
        <h3>${hotel.name}</h3>
        <p>${hotel.location}</p>
        <p><strong>${formatPrice(hotel.price)}</strong> per night</p>
        <button onclick="openBookingModal(${hotel.id})" class="btn-primary">Book Now</button>
      </div>
    `)
    mapMarkers.push(marker)
  })

  if (hotels.length > 0) {
    const group = new window.L.featureGroup(mapMarkers)
    map.fitBounds(group.getBounds().pad(0.1))
  }
}

// ===== BOOKING FUNCTIONALITY =====
const openBookingModal = (hotelId) => {
  selectedHotel = hotelData.find((hotel) => hotel.id === hotelId)
  if (!selectedHotel) return

  document.getElementById("selectedHotelInfo").innerHTML = `
    <div class="selected-hotel-card">
      <img src="${selectedHotel.image}" alt="${selectedHotel.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
      <h3>${selectedHotel.name}</h3>
      <p><strong>Location:</strong> ${selectedHotel.location}</p>
      <p><strong>Rating:</strong> ${selectedHotel.rating} - ${selectedHotel.ratingText} (${selectedHotel.reviews} reviews)</p>
      <p><strong>Price:</strong> ${formatPrice(selectedHotel.price)} per night</p>
      <p><strong>Amenities:</strong> ${selectedHotel.amenities.join(", ")}</p>
    </div>
  `

  const lastSearch = getFromStorage("trivagoLastSearch")
  const today = new Date().toISOString().split("T")[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]

  document.getElementById("bookingCheckin").value = lastSearch?.checkin || today
  document.getElementById("bookingCheckout").value = lastSearch?.checkout || tomorrow

  updateBookingSummary()
  document.getElementById("booking-form").style.display = "flex"
  document.body.style.overflow = "hidden"
}

const updateBookingSummary = () => {
  if (!selectedHotel) return

  const checkin = document.getElementById("bookingCheckin").value
  const checkout = document.getElementById("bookingCheckout").value
  const guests = document.getElementById("numGuests").value
  const rooms = document.getElementById("numRooms").value

  if (checkin && checkout) {
    const nights = calculateNights(checkin, checkout)
    const totalPrice = selectedHotel.price * nights * Number.parseInt(rooms)
    const taxes = Math.round(totalPrice * 0.18)
    const finalTotal = totalPrice + taxes

    document.getElementById("bookingSummaryDetails").innerHTML = `
      <div class="summary-row"><span>Hotel:</span><span>${selectedHotel.name}</span></div>
      <div class="summary-row"><span>Check-in:</span><span>${formatDate(checkin)}</span></div>
      <div class="summary-row"><span>Check-out:</span><span>${formatDate(checkout)}</span></div>
      <div class="summary-row"><span>Nights:</span><span>${nights}</span></div>
      <div class="summary-row"><span>Guests:</span><span>${guests}</span></div>
      <div class="summary-row"><span>Rooms:</span><span>${rooms}</span></div>
      <div class="summary-row"><span>Room Rate:</span><span>${formatPrice(selectedHotel.price)} × ${nights} nights × ${rooms} rooms</span></div>
      <div class="summary-row"><span>Subtotal:</span><span>${formatPrice(totalPrice)}</span></div>
      <div class="summary-row"><span>Taxes & Fees:</span><span>${formatPrice(taxes)}</span></div>
      <div class="summary-row total"><span><strong>Total:</strong></span><span><strong>${formatPrice(finalTotal)}</strong></span></div>
    `
  }
}

const showBookingConfirmation = (bookingData) => {
  const nights = calculateNights(bookingData.checkin, bookingData.checkout)
  const totalPrice = selectedHotel.price * nights * Number.parseInt(bookingData.rooms)
  const taxes = Math.round(totalPrice * 0.18)
  const finalTotal = totalPrice + taxes

  document.getElementById("confirmationDetails").innerHTML = `
    <div class="booking-reference"><h3>Booking Reference: #TRV${Date.now().toString().slice(-6)}</h3></div>
    <div class="guest-details">
      <h4>Guest Details</h4>
      <p><strong>Name:</strong> ${bookingData.guestName}</p>
      <p><strong>Email:</strong> ${bookingData.guestEmail}</p>
      <p><strong>Phone:</strong> ${bookingData.guestPhone}</p>
    </div>
    <div class="hotel-details">
      <h4>Hotel Details</h4>
      <p><strong>Hotel:</strong> ${selectedHotel.name}</p>
      <p><strong>Location:</strong> ${selectedHotel.location}</p>
      <p><strong>Check-in:</strong> ${formatDate(bookingData.checkin)}</p>
      <p><strong>Check-out:</strong> ${formatDate(bookingData.checkout)}</p>
      <p><strong>Nights:</strong> ${nights}</p>
      <p><strong>Guests:</strong> ${bookingData.guests}</p>
      <p><strong>Rooms:</strong> ${bookingData.rooms}</p>
    </div>
    <div class="payment-details">
      <h4>Payment Summary</h4>
      <p><strong>Total Amount:</strong> ${formatPrice(finalTotal)}</p>
      <p><strong>Payment Status:</strong> <span style="color: #28a745;">Confirmed</span></p>
    </div>
    ${bookingData.specialRequests ? `<div class="special-requests"><h4>Special Requests</h4><p>${bookingData.specialRequests}</p></div>` : ""}
  `

  const completeBookingData = {
    ...bookingData,
    hotel: selectedHotel,
    bookingReference: `TRV${Date.now().toString().slice(-6)}`,
    totalAmount: finalTotal,
    bookingDate: new Date().toISOString(),
    status: "Confirmed",
  }
  saveToStorage("trivagoLastBooking", completeBookingData)

  document.getElementById("booking-summary").style.display = "flex"
  document.body.style.overflow = "hidden"
  closeModal("booking-form")
}

const displayLastBooking = () => {
  const lastBooking = getFromStorage("trivagoLastBooking")
  if (!lastBooking) return

  document.getElementById("lastBookingCard").innerHTML = `
    <div class="last-booking-content">
      <div class="booking-header">
        <h3>Your Last Booking</h3>
        <span class="booking-status confirmed">✅ Confirmed</span>
      </div>
      <div class="booking-details">
        <div class="hotel-info">
          <img src="${lastBooking.hotel.image}" alt="${lastBooking.hotel.name}" style="width: 100px; height: 80px; object-fit: cover; border-radius: 8px;">
          <div class="hotel-text">
            <h4>${lastBooking.hotel.name}</h4>
            <p>${lastBooking.hotel.location}</p>
            <p><strong>Booking Ref:</strong> ${lastBooking.bookingReference}</p>
          </div>
        </div>
        <div class="booking-dates">
          <p><strong>Check-in:</strong> ${formatDate(lastBooking.checkin)}</p>
          <p><strong>Check-out:</strong> ${formatDate(lastBooking.checkout)}</p>
          <p><strong>Total:</strong> ${formatPrice(lastBooking.totalAmount)}</p>
        </div>
      </div>
      <button onclick="openBookingModal(${lastBooking.hotel.id})" class="btn-primary">Book Again</button>
    </div>
  `
  document.getElementById("last-booking").style.display = "block"
}

// ===== FILTER FUNCTIONALITY =====
const applyFilters = () => {
  const sortFilter = document.getElementById("sortFilter").value
  const priceFilter = document.getElementById("priceFilter").value
  let filteredResults = [...currentSearchResults]

  if (priceFilter !== "all") {
    filteredResults = filteredResults.filter((hotel) => {
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

  filteredResults.sort((a, b) => {
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

  const resultsContainer = document.getElementById("searchResultsContainer")
  resultsContainer.innerHTML = ""
  filteredResults.forEach((hotel) => resultsContainer.appendChild(createHotelCard(hotel)))
  document.getElementById("resultsCount").textContent = `${filteredResults.length} hotels found`
  initializeMap(filteredResults)
}

// ===== SEARCH HANDLERS =====
const searchByCity = (cityName) => {
  document.getElementById("cityInput").value = cityName
  const today = new Date().toISOString().split("T")[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]
  document.getElementById("checkinDate").value = today
  document.getElementById("checkoutDate").value = tomorrow
  handleSearch()
}

const handleSearch = () => {
  const city = document.getElementById("cityInput").value.trim()
  const checkin = document.getElementById("checkinDate").value
  const checkout = document.getElementById("checkoutDate").value
  const guests = document.getElementById("guestsInput").value

  if (!city) return alert("Please enter a destination")
  if (!checkin || !checkout) return alert("Please select check-in and check-out dates")
  if (new Date(checkin) >= new Date(checkout)) return alert("Check-out date must be after check-in date")

  const results = searchHotels(city, checkin, checkout, guests)
  currentSearchResults = results
  displaySearchResults(results, city)
}

// city and destination

    function showTab(tab) {
      // Toggle active tab
      document.getElementById('cityTab').classList.remove('active');
      document.getElementById('destTab').classList.remove('active');

      // Toggle content visibility
      document.getElementById('cities').classList.add('hidden');
      document.getElementById('destinations').classList.add('hidden');

      if (tab === 'cities') {
        document.getElementById('cityTab').classList.add('active');
        document.getElementById('cities').classList.remove('hidden');
      } else {
        document.getElementById('destTab').classList.add('active');
        document.getElementById('destinations').classList.remove('hidden');
      }
    }

// ===== LOGIN FUNCTIONALITY =====
const openLoginModal = () => {
  document.getElementById("login-modal").style.display = "flex"
  document.body.style.overflow = "hidden"
}

const handleLogin = (email, password) => {
  currentUser = {
    email,
    name: email.split("@")[0],
    avatar: email.charAt(0).toUpperCase(),
    loginTime: new Date().toISOString(),
  }
  closeModal("login-modal")
  updateNavbarForLoggedInUser()
  showMessage(`Welcome back, ${currentUser.name}!`, "#28a745")
}

const socialLogin = (provider) => {
  currentUser = {
    email: `user@${provider}.com`,
    name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
    avatar: provider.charAt(0).toUpperCase(),
    loginTime: new Date().toISOString(),
    provider,
  }
  closeModal("login-modal")
  updateNavbarForLoggedInUser()
  showMessage(`Welcome back, ${currentUser.name}!`, "#28a745")
}

const updateNavbarForLoggedInUser = () => {
  const loginNavLink = document.getElementById("loginNavLink")
  const loginNavLinkMobile = document.getElementById("loginNavLinkMobile")

  if (loginNavLink && currentUser) {
    loginNavLink.innerHTML = `
      <div class="user-dropdown">
        <div class="user-profile" onclick="toggleUserDropdown()">
          <div class="user-avatar">${currentUser.avatar}</div>
          <span>${currentUser.name}</span>
          <svg class="icon" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
            <path d="M7 10l5 5 5-5z" fill="currentColor"/>
          </svg>
        </div>
        <div class="dropdown-menu" id="userDropdown">
          <div class="dropdown-item"><strong>${currentUser.name}</strong><br><small>${currentUser.email}</small></div>
          <div class="dropdown-item" onclick="alert('Profile page would open here'); toggleUserDropdown()">My Profile</div>
          <div class="dropdown-item" onclick="alert('My Bookings page would open here'); toggleUserDropdown()">My Bookings</div>
          <div class="dropdown-item" onclick="alert('Favorites page would open here'); toggleUserDropdown()">Favorites</div>
          <div class="dropdown-item logout" onclick="logout()">Log out</div>
        </div>
      </div>
    `
    loginNavLink.removeAttribute("onclick")
  }

  if (loginNavLinkMobile && currentUser) {
    loginNavLinkMobile.innerHTML = `<div class="user-avatar">${currentUser.avatar}</div>${currentUser.name}`
    loginNavLinkMobile.removeAttribute("onclick")
    loginNavLinkMobile.onclick = () => logout()
  }
}

const logout = () => {
  currentUser = null
  const loginNavLink = document.getElementById("loginNavLink")
  const loginNavLinkMobile = document.getElementById("loginNavLinkMobile")
  ;[loginNavLink, loginNavLinkMobile].forEach((link) => {
    if (link) {
      link.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-6 8a6 6 0 0 1 12 0z"></path></svg>Log in`
      link.onclick = () => openLoginModal()
    }
  })
  showMessage("You have been logged out successfully!", "#dc3545")
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const toggleUserDropdown = () => {
  const dropdown = document.getElementById("userDropdown")
  if (dropdown) dropdown.classList.toggle("show")
}

// ===== UTILITY FUNCTIONS =====
const closeModal = (modalId) => {
  document.getElementById(modalId).style.display = "none"
  document.body.style.overflow = "auto"
  if (modalId === "booking-form") document.getElementById("bookingForm").reset()
  if (modalId === "login-modal") document.getElementById("loginForm").reset()
  if (modalId === "booking-summary") {
    displayLastBooking()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

const clearCity = () => (document.getElementById("cityInput").value = "")
const showCities = () => document.getElementById("cities").scrollIntoView({ behavior: "smooth" })
const showDestinations = () => document.getElementById("destinations").scrollIntoView({ behavior: "smooth" })

const showMessage = (text, color) => {
  const msg = document.createElement("div")
  msg.style.cssText = `position: fixed; top: 20px; right: 20px; background: ${color}; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-weight: 500;`
  msg.textContent = text
  document.body.appendChild(msg)
  setTimeout(() => msg.parentNode?.removeChild(msg), 3000)
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  document.getElementById("hamburgerBtn")?.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu")
    const isActive = mobileMenu.classList.toggle("active")
    document.getElementById("hamburgerBtn").setAttribute("aria-expanded", isActive)
  })

  // Search form submission
  document.getElementById("searchForm")?.addEventListener("submit", (e) => {
    e.preventDefault()
    handleSearch()
  })

  document.getElementById("checkinDate").value = ""
  document.getElementById("checkoutDate").value = ""

  document.getElementById("checkinDate")?.addEventListener("change", updateDateDisplays)
  document.getElementById("checkoutDate")?.addEventListener("change", updateDateDisplays)
})

  // Booking form submission
  document.getElementById("bookingForm")?.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = {
      guestName: document.getElementById("guestName").value,
      guestEmail: document.getElementById("guestEmail").value,
      guestPhone: document.getElementById("guestPhone").value,
      checkin: document.getElementById("bookingCheckin").value,
      checkout: document.getElementById("bookingCheckout").value,
      guests: document.getElementById("numGuests").value,
      rooms: document.getElementById("numRooms").value,
      specialRequests: document.getElementById("specialRequests").value,
    }

    if (!formData.guestName || !formData.guestEmail || !formData.guestPhone)
      return alert("Please fill in all required fields")
    if (new Date(formData.checkin) >= new Date(formData.checkout))
      return alert("Check-out date must be after check-in date")

    showBookingConfirmation(formData)
  })

  // Login form submission
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      if (!email || !password) return alert("Please fill in all fields")

      const submitBtn = document.querySelector(".login-continue-btn")
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Logging in..."
      submitBtn.disabled = true

      setTimeout(() => {
        handleLogin(email, password)
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 1000)
    })

  // Filter change events
  ;["sortFilter", "priceFilter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", applyFilters)
  })

  // Booking form field changes
  ;["bookingCheckin", "bookingCheckout", "numGuests", "numRooms"].forEach((fieldId) => {
    document.getElementById(fieldId)?.addEventListener("change", updateBookingSummary)
  })

  // Load default hotels
  const defaultContainer = document.getElementById("defaultHotels")
  if (defaultContainer) {
    hotelData.slice(0, 4).forEach((hotel) => defaultContainer.appendChild(createHotelCard(hotel)))
  }

  // Load last search data
  const lastSearch = getFromStorage("trivagoLastSearch")
  if (lastSearch) {
    document.getElementById("cityInput").value = lastSearch.city || ""
    document.getElementById("checkinDate").value = lastSearch.checkin || ""
    document.getElementById("checkoutDate").value = lastSearch.checkout || ""
    document.getElementById("guestsInput").value = lastSearch.guests || "2 Guests, 1 Room"
  }

  // Display last booking
  displayLastBooking()

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    ;["booking-form", "booking-summary", "login-modal"].forEach((modalId) => {
      if (e.target === document.getElementById(modalId)) closeModal(modalId)
    })

    const dropdown = document.getElementById("userDropdown")
    const userProfile = document.querySelector(".user-profile")
    if (dropdown && !userProfile?.contains(e.target)) dropdown.classList.remove("show")
  })

  // Set minimum date for date inputs
  const today = new Date().toISOString().split("T")[0]
  document.querySelectorAll('input[type="date"]').forEach((input) => input.setAttribute("min", today))

// ===== GLOBAL FUNCTIONS =====
window.openBookingModal = openBookingModal
window.closeModal = closeModal
window.searchByCity = searchByCity
window.clearCity = clearCity
window.showCities = showCities
window.showDestinations = showDestinations
window.openLoginModal = openLoginModal
window.socialLogin = socialLogin
window.toggleUserDropdown = toggleUserDropdown
window.logout = logout
