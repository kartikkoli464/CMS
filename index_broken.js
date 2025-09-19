// Enhanced College Club Management System JavaScript with Bootstrap & Animations

// Sample events data with additional fields for enhanced UI
const eventsData = [
  {
    title: "Annual Tech Fest 2025",
    club: "Computer Science Club",
    date: "October 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium",
    description:
      "Join us for an exciting day of technology presentations, coding competitions, and workshops. Open to all students interested in technology and innovation.",
    status: "upcoming",
    icon: "bi-cpu",
    color: "primary",
  },
  {
    title: "Cultural Night",
    club: "Arts & Culture Society",
    date: "September 28, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "College Grounds",
    description:
      "Experience the rich cultural diversity of our college through music, dance, and art performances by talented students.",
    status: "upcoming",
    icon: "bi-palette",
    color: "info",
  },
  {
    title: "Football Championship",
    club: "Sports Club",
    date: "September 22, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Sports Complex",
    description:
      "Inter-college football championship finals. Come support our team as they compete for the championship title.",
    status: "ongoing",
    icon: "bi-trophy",
    color: "warning",
  },
  {
    title: "Entrepreneurship Workshop",
    club: "Business Club",
    date: "October 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    description:
      "Learn from successful entrepreneurs about starting your own business. Includes networking session and Q&A.",
    status: "upcoming",
    icon: "bi-lightbulb",
    color: "success",
  },
  {
    title: "Environmental Awareness Drive",
    club: "Green Club",
    date: "September 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Campus Wide",
    description:
      "Tree plantation drive and awareness campaign about environmental conservation. Refreshments provided.",
    status: "completed",
    icon: "bi-tree",
    color: "success",
  },
  {
    title: "Photography Contest",
    club: "Photography Club",
    date: "October 20, 2025",
    time: "All Day",
    location: "Online Submission",
    description:
      "Submit your best photographs in various categories. Winners will be featured in the college magazine.",
    status: "upcoming",
    icon: "bi-camera",
    color: "secondary",
  },
];

// Sample clubs data
const clubsData = [
  {
    name: "Computer Science Club",
    description:
      "Exploring the latest in technology, programming, and innovation. Join us for coding workshops, hackathons, and tech talks.",
    president: "Alex Johnson",
    members: 85,
    founded: "2018",
    category: "Technology",
    icon: "bi-cpu",
    color: "primary",
    activities: [
      "Coding Workshops",
      "Hackathons",
      "Tech Talks",
      "Project Development",
    ],
    meetingDay: "Wednesdays",
    meetingTime: "6:00 PM",
    location: "Computer Lab 1",
  },
  {
    name: "Arts & Culture Society",
    description:
      "Celebrating creativity through various art forms including music, dance, drama, and visual arts.",
    president: "Sarah Williams",
    members: 120,
    founded: "2015",
    category: "Arts",
    icon: "bi-palette",
    color: "info",
    activities: [
      "Art Exhibitions",
      "Cultural Shows",
      "Music Concerts",
      "Drama Performances",
    ],
    meetingDay: "Fridays",
    meetingTime: "5:30 PM",
    location: "Arts Studio",
  },
  {
    name: "Sports Club",
    description:
      "Promoting physical fitness and competitive sports. Participate in various tournaments and maintain an active lifestyle.",
    president: "Mike Chen",
    members: 150,
    founded: "2012",
    category: "Sports",
    icon: "bi-trophy",
    color: "warning",
    activities: [
      "Football Tournaments",
      "Basketball League",
      "Swimming",
      "Athletics",
    ],
    meetingDay: "Mondays",
    meetingTime: "4:00 PM",
    location: "Sports Complex",
  },
  {
    name: "Business Club",
    description:
      "Developing entrepreneurial skills and business acumen through workshops, networking events, and case studies.",
    president: "Emily Davis",
    members: 95,
    founded: "2019",
    category: "Business",
    icon: "bi-lightbulb",
    color: "success",
    activities: [
      "Business Workshops",
      "Networking Events",
      "Case Study Competitions",
      "Startup Pitches",
    ],
    meetingDay: "Thursdays",
    meetingTime: "7:00 PM",
    location: "Business Hall",
  },
  {
    name: "Green Club",
    description:
      "Environmental conservation and sustainability initiatives. Making our campus and community more eco-friendly.",
    president: "David Martinez",
    members: 75,
    founded: "2020",
    category: "Environment",
    icon: "bi-tree",
    color: "success",
    activities: [
      "Tree Plantation",
      "Recycling Drives",
      "Awareness Campaigns",
      "Clean-up Events",
    ],
    meetingDay: "Saturdays",
    meetingTime: "10:00 AM",
    location: "Green Garden",
  },
  {
    name: "Photography Club",
    description:
      "Capturing moments and exploring the art of photography through workshops, photo walks, and exhibitions.",
    president: "Lisa Thompson",
    members: 60,
    founded: "2021",
    category: "Arts",
    icon: "bi-camera",
    color: "secondary",
    activities: [
      "Photo Walks",
      "Photography Workshops",
      "Exhibitions",
      "Contests",
    ],
    meetingDay: "Sundays",
    meetingTime: "2:00 PM",
    location: "Photography Studio",
  },
];

// Sample members data
const membersData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    club: "Computer Science Club",
    year: "Final Year",
    major: "Computer Science",
    email: "alex.johnson@college.edu",
    phone: "+1 (555) 123-4567",
    joinedDate: "August 2022",
    achievements: [
      "Best Coder Award 2024",
      "Hackathon Winner",
      "Tech Talk Speaker",
    ],
    avatar: "bi-person-circle",
    color: "primary",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "President",
    club: "Arts & Culture Society",
    year: "Third Year",
    major: "Fine Arts",
    email: "sarah.williams@college.edu",
    phone: "+1 (555) 234-5678",
    joinedDate: "September 2021",
    achievements: [
      "Best Artist Award",
      "Cultural Show Director",
      "Art Exhibition Organizer",
    ],
    avatar: "bi-person-circle",
    color: "info",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "President",
    club: "Sports Club",
    year: "Final Year",
    major: "Sports Science",
    email: "mike.chen@college.edu",
    phone: "+1 (555) 345-6789",
    joinedDate: "August 2021",
    achievements: ["Football Captain", "MVP 2024", "Sports Leadership Award"],
    avatar: "bi-person-circle",
    color: "warning",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "President",
    club: "Business Club",
    year: "Final Year",
    major: "Business Administration",
    email: "emily.davis@college.edu",
    phone: "+1 (555) 456-7890",
    joinedDate: "January 2022",
    achievements: [
      "Young Entrepreneur Award",
      "Business Plan Winner",
      "Leadership Excellence",
    ],
    avatar: "bi-person-circle",
    color: "success",
  },
  {
    id: 5,
    name: "David Martinez",
    role: "President",
    club: "Green Club",
    year: "Third Year",
    major: "Environmental Science",
    email: "david.martinez@college.edu",
    phone: "+1 (555) 567-8901",
    joinedDate: "March 2022",
    achievements: [
      "Environmental Champion",
      "Sustainability Leader",
      "Green Initiative Award",
    ],
    avatar: "bi-person-circle",
    color: "success",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "President",
    club: "Photography Club",
    year: "Second Year",
    major: "Visual Arts",
    email: "lisa.thompson@college.edu",
    phone: "+1 (555) 678-9012",
    joinedDate: "September 2023",
    achievements: [
      "Photography Contest Winner",
      "Exhibition Curator",
      "Visual Storyteller Award",
    ],
    avatar: "bi-person-circle",
    color: "secondary",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Vice President",
    club: "Computer Science Club",
    year: "Third Year",
    major: "Computer Engineering",
    email: "james.wilson@college.edu",
    phone: "+1 (555) 789-0123",
    joinedDate: "October 2022",
    achievements: [
      "Code Review Champion",
      "Mentorship Excellence",
      "Innovation Award",
    ],
    avatar: "bi-person-circle",
    color: "primary",
  },
  {
    id: 8,
    name: "Maria Garcia",
    role: "Secretary",
    club: "Arts & Culture Society",
    year: "Second Year",
    major: "Music",
    email: "maria.garcia@college.edu",
    phone: "+1 (555) 890-1234",
    joinedDate: "August 2023",
    achievements: [
      "Music Composition Award",
      "Concert Organizer",
      "Talent Show Winner",
    ],
    avatar: "bi-person-circle",
    color: "info",
  },
];

// DOM elements
const loginPage = document.getElementById("loginPage");
const homepage = document.getElementById("homepage");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const logoutBtn = document.getElementById("logoutBtn");
const eventsContainer = document.getElementById("eventsContainer");
const clubsContainer = document.getElementById("clubsContainer");
const membersContainer = document.getElementById("membersContainer");

// Demo credentials
const validCredentials = {
  username: "admin",
  password: "password123",
};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    showHomepage();
  } else {
    showLoginPage();
  }

  // Set up event listeners
  setupEventListeners();

  // Add loading animation to login form
  addLoadingAnimations();
});

// Set up all event listeners
function setupEventListeners() {
  // Login form submission
  loginForm.addEventListener("submit", handleLogin);

  // Logout button
  logoutBtn.addEventListener("click", handleLogout);

  // Add smooth scroll for navigation links
  document.querySelectorAll(".nav-link-custom").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      if (target && target !== "#") {
        document.querySelector(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Enhanced login handler with animations
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const submitBtn = event.target.querySelector('button[type="submit"]');

  // Add loading state
  showLoadingState(submitBtn);

  // Clear previous error messages
  hideError();

  // Simulate authentication delay for better UX
  setTimeout(() => {
    // Validate credentials
    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      // Success animation
      showSuccessAnimation(submitBtn, () => {
        showHomepage();
        loginForm.reset();
      });
    } else {
      // Failed login
      showError("Invalid username or password. Please try again.");
      hideLoadingState(submitBtn);

      // Shake animation for error
      addShakeAnimation(loginForm.closest(".card"));

      // Clear password field for security
      document.getElementById("password").value = "";
    }
  }, 1500);
}

// Enhanced logout with confirmation
function handleLogout() {
  // Add confirmation with custom modal
  if (confirm("Are you sure you want to logout?")) {
    // Add logout animation
    const navbar = document.querySelector(".navbar");
    navbar.style.transform = "translateY(-100%)";

    setTimeout(() => {
      // Clear session data
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");

      // Show login page
      showLoginPage();

      // Reset navbar position
      navbar.style.transform = "translateY(0)";

      // Clear any error messages
      hideError();
    }, 300);
  }
}

// Enhanced page transitions
function showLoginPage() {
  loginPage.classList.add("active");
  homepage.classList.remove("active");

  // Refresh AOS animations
  setTimeout(() => {
    AOS.refresh();
    document.getElementById("username").focus();
  }, 100);
}

function showHomepage() {
  console.log("🏠 showHomepage called");
  loginPage.classList.remove("active");
  homepage.classList.add("active");

  // Load all sections with staggered animation
  console.log("📅 Loading events data...");
  loadEventsWithAnimation();
  console.log("🏫 Loading clubs data...");
  loadClubsWithAnimation();
  console.log("👥 Loading members data...");
  loadMembersWithAnimation();

  // Update welcome message
  updateWelcomeMessage();

  // Refresh AOS animations
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}

// Enhanced events loading with staggered animations
function loadEventsWithAnimation() {
  console.log(
    "📅 loadEventsWithAnimation called, events count:",
    eventsData.length
  );
  console.log("📅 eventsContainer exists:", !!eventsContainer);
  if (!eventsContainer) return;
  eventsContainer.innerHTML = "";

  eventsData.forEach((event, index) => {
    setTimeout(() => {
      console.log(`📅 Creating event card ${index + 1}:`, event.title);
      const eventCard = createEnhancedEventCard(event, index);
      eventsContainer.appendChild(eventCard);

      // Add entrance animation
      eventCard.style.opacity = "0";
      eventCard.style.transform = "translateY(30px)";

      setTimeout(() => {
        eventCard.style.transition = "all 0.6s ease";
        eventCard.style.opacity = "1";
        eventCard.style.transform = "translateY(0)";
      }, 50);
    }, index * 150);
  });
}

// Create enhanced event card with Bootstrap styling
function createEnhancedEventCard(event, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  // Simple test card to debug
  colDiv.innerHTML = `
    <div class="card h-100" style="background: white; border: 2px solid red;">
      <div class="card-header bg-primary text-white">
        <h5>${event.title}</h5>
      </div>
      <div class="card-body">
        <p><strong>Club:</strong> ${event.club}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button class="btn btn-primary" onclick="alert('Event: ${event.title}')">View Details</button>
      </div>
    </div>
  `;

  return colDiv;
}

// Enhanced clubs loading with staggered animations
function loadClubsWithAnimation() {
  console.log(
    "🏫 loadClubsWithAnimation called, clubs count:",
    clubsData.length
  );
  console.log("🏫 clubsContainer exists:", !!clubsContainer);
  if (!clubsContainer) return;
  clubsContainer.innerHTML = "";

  clubsData.forEach((club, index) => {
    setTimeout(() => {
      console.log(`🏫 Creating club card ${index + 1}:`, club.name);
      const clubCard = createEnhancedClubCard(club, index);
      clubsContainer.appendChild(clubCard);

      // Add entrance animation
      clubCard.style.opacity = "0";
      clubCard.style.transform = "translateY(30px)";

      setTimeout(() => {
        clubCard.style.transition = "all 0.6s ease";
        clubCard.style.opacity = "1";
        clubCard.style.transform = "translateY(0)";
      }, 50);
    }, index * 150);
  });
}

// Create enhanced club card with Bootstrap styling
function createEnhancedClubCard(club, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  colDiv.innerHTML = `
    <div class="club-card h-100 card-3d-effect" data-aos="flip-left" data-aos-delay="${
      index * 150
    }">
      <div class="card-header-gradient bg-gradient-${club.color}">
        <div class="d-flex align-items-center">
          <div class="icon-container me-3">
            <i class="${
              club.icon
            }" style="font-size: 2.5rem; color: white;"></i>
          </div>
          <div class="flex-grow-1">
            <h4 class="card-title mb-1 text-white">${club.name}</h4>
            <div class="club-category text-white-50">
              <i class="bi bi-tag-fill me-1"></i>${club.category}
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-body-content p-4">
        <div class="club-stats row mb-3">
          <div class="col-6 text-center">
            <div class="stat-number text-${club.color} fw-bold fs-4">${
    club.members
  }</div>
            <div class="stat-label text-muted small">Members</div>
          </div>
          <div class="col-6 text-center">
            <div class="stat-number text-${club.color} fw-bold fs-4">${
    club.founded
  }</div>
            <div class="stat-label text-muted small">Founded</div>
          </div>
        </div>
        
        <div class="club-leadership mb-3">
          <div class="event-info mb-2">
            <i class="bi bi-person-badge text-${club.color}"></i>
            <span class="fw-semibold">President: ${club.president}</span>
          </div>
        </div>
        
        <p class="club-description text-muted mb-3">${club.description}</p>
        
        <div class="meeting-info bg-light rounded p-3 mb-3">
          <h6 class="text-${club.color} mb-2">
            <i class="bi bi-calendar-event me-1"></i>Meeting Schedule
          </h6>
          <div class="d-flex align-items-center text-muted small">
            <i class="bi bi-clock me-2"></i>
            <span>${club.meetingDay}s at ${club.meetingTime}</span>
          </div>
          <div class="d-flex align-items-center text-muted small mt-1">
            <i class="bi bi-geo-alt me-2"></i>
            <span>${club.location}</span>
          </div>
        </div>
        
        <div class="club-activities mb-3">
          <h6 class="text-${club.color} mb-2">
            <i class="bi bi-lightning me-1"></i>Activities
          </h6>
          <div class="d-flex flex-wrap gap-1">
            ${club.activities
              .map(
                (activity) =>
                  `<span class="badge bg-${club.color} bg-opacity-10 text-${club.color} small">${activity}</span>`
              )
              .join("")}
          </div>
        </div>
        
        <div class="card-footer-actions">
          <button class="btn btn-${
            club.color
          } w-100 shadow-sm hover-lift" onclick="showClubDetails('${
    club.name
  }')">
            <i class="bi bi-people me-2"></i>Join Club
          </button>
        </div>
      </div>
    </div>
    </div>
  `;

  return colDiv;
}

// Enhanced members loading with staggered animations
function loadMembersWithAnimation() {
  console.log(
    "👥 loadMembersWithAnimation called, members count:",
    membersData.length
  );
  console.log("👥 membersContainer exists:", !!membersContainer);
  if (!membersContainer) return;
  membersContainer.innerHTML = "";

  membersData.forEach((member, index) => {
    setTimeout(() => {
      console.log(`👥 Creating member card ${index + 1}:`, member.name);
      const memberCard = createEnhancedMemberCard(member, index);
      membersContainer.appendChild(memberCard);

      // Add entrance animation
      memberCard.style.opacity = "0";
      memberCard.style.transform = "translateY(30px)";

      setTimeout(() => {
        memberCard.style.transition = "all 0.6s ease";
        memberCard.style.opacity = "1";
        memberCard.style.transform = "translateY(0)";
      }, 50);
    }, index * 150);
  });
}

// Create enhanced member card with Bootstrap styling
function createEnhancedMemberCard(member, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  // Simple test card to debug
  colDiv.innerHTML = `
    <div class="card h-100" style="background: white; border: 2px solid green;">
      <div class="card-header bg-success text-white">
        <h5>${member.name}</h5>
      </div>
      <div class="card-body">
        <p><strong>Role:</strong> ${member.role}</p>
        <p><strong>Club:</strong> ${member.club}</p>
        <p><strong>Year:</strong> ${member.year}</p>
        <p><strong>Major:</strong> ${member.major}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <button class="btn btn-success" onclick="alert('Member: ${member.name}')">View Profile</button>
      </div>
    </div>
  `;

  return colDiv;
}

// Enhanced members loading with staggered animations
      
      <div class="card-body-content p-4">
        <div class="member-info mb-3">
          <div class="info-item d-flex align-items-center mb-2">
            <div class="info-icon text-${member.color} me-3">
              <i class="bi bi-building"></i>
            </div>
            <div class="info-content">
              <span class="fw-semibold">${member.club}</span>
            </div>
          </div>
          
          <div class="info-item d-flex align-items-center mb-2">
            <div class="info-icon text-${member.color} me-3">
              <i class="bi bi-mortarboard"></i>
            </div>
            <div class="info-content">
              <span>${member.year} Year</span>
              <div class="text-muted small">${member.major}</div>
            </div>
          </div>
          
          <div class="info-item d-flex align-items-center mb-2">
            <div class="info-icon text-${member.color} me-3">
              <i class="bi bi-envelope"></i>
            </div>
            <div class="info-content">
              <span class="small text-muted">${member.email}</span>
            </div>
          </div>
          
          <div class="info-item d-flex align-items-center mb-3">
            <div class="info-icon text-${member.color} me-3">
              <i class="bi bi-calendar-check"></i>
            </div>
            <div class="info-content">
              <span class="small">Joined ${member.joinedDate}</span>
            </div>
          </div>
        </div>
        
        <div class="member-achievements mb-3">
          <h6 class="achievements-title text-${member.color} mb-2">
            <i class="bi bi-trophy me-1"></i>Achievements
          </h6>
          <div class="achievements-list">
            ${member.achievements
              .map(
                (achievement) =>
                  `<span class="achievement-badge badge bg-${member.color} bg-opacity-10 text-${member.color} me-1 mb-1 small">${achievement}</span>`
              )
              .join("")}
          </div>
        </div>
        
        <div class="member-actions">
          <div class="d-grid gap-2">
            <button class="btn btn-${
              member.color
            } shadow-sm hover-lift" onclick="showMemberDetails(${member.id})">
              <i class="bi bi-person-lines-fill me-2"></i>View Profile
            </button>
            <button class="btn btn-outline-${
              member.color
            } btn-sm" onclick="sendMessage(${member.id})">
              <i class="bi bi-chat-dots me-1"></i>Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return colDiv;
}

// Show event details in a modal
function showEventDetails(eventTitle) {
  const event = eventsData.find((e) => e.title === eventTitle);
  if (!event) return;
  
  // Simple alert for now - can be enhanced later
  alert(`Event: ${event.title}\nDate: ${event.date}\nTime: ${event.time}\nLocation: ${event.location}\nDescription: ${event.description}`);
}

function showClubDetails(clubName) {
  const club = clubsData.find((c) => c.name === clubName);
  if (!club) return;
  
  // Simple alert for now - can be enhanced later
  alert(`Club: ${club.name}\nPresident: ${club.president}\nMembers: ${club.members}\nFounded: ${club.founded}\nDescription: ${club.description}`);
}

function showMemberDetails(memberId) {
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-${club.color} text-white">
            <h5 class="modal-title">
              <i class="${club.icon} me-2"></i>${club.name}
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <h6><i class="bi bi-person-fill text-${
                  club.color
                } me-2"></i>President</h6>
                <p>${club.president}</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-people text-${
                  club.color
                } me-2"></i>Members</h6>
                <p>${club.members} active members</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h6><i class="bi bi-calendar3 text-${
                  club.color
                } me-2"></i>Founded</h6>
                <p>${club.founded}</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-tag text-${
                  club.color
                } me-2"></i>Category</h6>
                <span class="badge bg-${club.color}">${club.category}</span>
              </div>
            </div>
            <h6><i class="bi bi-card-text text-${
              club.color
            } me-2"></i>Description</h6>
            <p>${club.description}</p>
            
            <h6><i class="bi bi-clock text-${
              club.color
            } me-2"></i>Meeting Schedule</h6>
            <p><strong>Day:</strong> ${club.meetingDay}s<br>
               <strong>Time:</strong> ${club.meetingTime}<br>
               <strong>Location:</strong> ${club.location}</p>
            
            <h6><i class="bi bi-list-ul text-${
              club.color
            } me-2"></i>Activities</h6>
            <ul class="list-group list-group-flush">
              ${club.activities
                .map(
                  (activity) => `<li class="list-group-item">${activity}</li>`
                )
                .join("")}
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-${club.color}">
              <i class="bi bi-person-plus me-1"></i>Join Club
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal if any
  const existingModal = document.getElementById("clubModal");
  if (existingModal) {
    existingModal.remove();
  }

  // Add modal to DOM and show
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  const modal = new bootstrap.Modal(document.getElementById("clubModal"));
  modal.show();
}

// Show member details in a modal
function showMemberDetails(memberId) {
  const member = membersData.find((m) => m.id === memberId);
  if (!member) return;

  // Create and show Bootstrap modal
  const modalHtml = `
    <div class="modal fade" id="memberModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-${member.color} text-white">
            <h5 class="modal-title">
              <i class="bi bi-person-circle me-2"></i>${member.name}
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <i class="${member.avatar} text-${
    member.color
  }" style="font-size: 5rem;"></i>
              <h4 class="mt-2">${member.name}</h4>
              <span class="badge bg-${member.color} fs-6">${member.role}</span>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <h6><i class="bi bi-building text-${
                  member.color
                } me-2"></i>Club</h6>
                <p>${member.club}</p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-mortarboard text-${
                  member.color
                } me-2"></i>Academic Info</h6>
                <p>${member.year}<br>${member.major}</p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <h6><i class="bi bi-envelope text-${
                  member.color
                } me-2"></i>Email</h6>
                <p><a href="mailto:${
                  member.email
                }" class="text-decoration-none">${member.email}</a></p>
              </div>
              <div class="col-md-6">
                <h6><i class="bi bi-telephone text-${
                  member.color
                } me-2"></i>Phone</h6>
                <p><a href="tel:${member.phone}" class="text-decoration-none">${
    member.phone
  }</a></p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <h6><i class="bi bi-calendar-check text-${
                  member.color
                } me-2"></i>Joined Date</h6>
                <p>${member.joinedDate}</p>
              </div>
            </div>
            
            <h6><i class="bi bi-trophy text-${
              member.color
            } me-2"></i>Achievements</h6>
            <div class="mb-3">
              ${member.achievements
                .map(
                  (achievement) =>
                    `<span class="badge bg-light text-dark me-2 mb-2 p-2">${achievement}</span>`
                )
                .join("")}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-${member.color}">
              <i class="bi bi-envelope me-1"></i>Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal if any
  const existingModal = document.getElementById("memberModal");
  if (existingModal) {
    existingModal.remove();
  }

  // Add modal to DOM and show
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  const modal = new bootstrap.Modal(document.getElementById("memberModal"));
  modal.show();
}

// Utility functions
function updateWelcomeMessage() {
  const username = localStorage.getItem("username");
  const heroTitle = document.querySelector(".hero-section h1");
  if (username && heroTitle) {
    heroTitle.innerHTML = `Welcome back, <span class="text-warning">${username}</span>!`;
  }
}

function showLoadingState(button) {
  button.disabled = true;
  button.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
    Logging in...
  `;
}

function hideLoadingState(button) {
  button.disabled = false;
  button.innerHTML = `
    <i class="bi bi-box-arrow-in-right me-2"></i>Login
  `;
}

function showSuccessAnimation(button, callback) {
  button.innerHTML = `
    <i class="bi bi-check-circle me-2"></i>Success!
  `;
  button.className = "btn btn-success btn-lg login-btn";

  setTimeout(callback, 1000);
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("d-none");
  errorMessage.classList.add("show");
}

function hideError() {
  errorMessage.classList.add("d-none");
  errorMessage.classList.remove("show");
}

function addShakeAnimation(element) {
  element.style.animation = "shake 0.5s ease-in-out";
  setTimeout(() => {
    element.style.animation = "";
  }, 500);
}

function addLoadingAnimations() {
  // Add floating animation to login form
  const loginCard = document.querySelector(".login-form.card");
  if (loginCard) {
    loginCard.addEventListener("mouseenter", function () {
      this.style.transform =
        "perspective(1000px) rotateX(-5deg) translateY(-10px)";
    });

    loginCard.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0deg) translateY(0px)";
    });
  }
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getStatusColor(status) {
  switch (status) {
    case "upcoming":
      return "success";
    case "ongoing":
      return "warning";
    case "completed":
      return "secondary";
    default:
      return "primary";
  }
}

// Add CSS for shake animation
const shakeStyles = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;

// Inject shake animation styles
const styleSheet = document.createElement("style");
styleSheet.textContent = shakeStyles;
document.head.appendChild(styleSheet);

// Add scroll effects
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Add parallax effect to floating shapes
window.addEventListener("scroll", function () {
  const shapes = document.querySelectorAll(".shape");
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.3;
    shape.style.transform = `translateY(${rate * speed}px) rotate(${
      scrolled * 0.1
    }deg)`;
  });
});

// Enhanced keyboard navigation
document.addEventListener("keydown", function (event) {
  // ESC key to close modals
  if (event.key === "Escape") {
    const eventModal = bootstrap.Modal.getInstance(
      document.getElementById("eventModal")
    );
    const clubModal = bootstrap.Modal.getInstance(
      document.getElementById("clubModal")
    );
    const memberModal = bootstrap.Modal.getInstance(
      document.getElementById("memberModal")
    );

    if (eventModal) {
      eventModal.hide();
    }
    if (clubModal) {
      clubModal.hide();
    }
    if (memberModal) {
      memberModal.hide();
    }
  }

  // Enter key for login
  if (event.key === "Enter" && loginPage.classList.contains("active")) {
    const loginButton = document.querySelector(".login-btn");
    if (loginButton && !loginButton.disabled) {
      loginForm.dispatchEvent(new Event("submit"));
    }
  }
});
