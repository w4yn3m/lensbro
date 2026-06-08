# 🎥 LensBro — Photo & Video Agency Portfolio

Welcome to the official repository of **LensBro**, a premium, story-driven portfolio web application designed for high-end photography and video production agencies. Crafted with dynamic GSAP animations, sleek dark-mode glassmorphism aesthetics, and a localized storage-backed content database, this website acts as a high-fidelity digital showcase for client reels, commercial videos, color-grading portfolios, and creator collaborations.

---

## 🌟 Key Features

- **Dynamic Reels Showcase (`9:16` Layout)**: Dedicated TikTok/Instagram-style reels player with customized hover state overlay, likes/comments counters, and modal-based detailed playback.
- **Client & Influencer Collaborations**: Interactive grid highlighting past brand/creator partnerships, including follower counts, collaborative projects, and direct links.
- **Dynamic Content Database (`js/projects-data.js`)**: A localized database manager (`LensbroDB`) that stores project information in `localStorage`. This avoids typical CORS restrictions when running files directly off the local disk (`file:///` protocol) and permits real-time addition/modification of projects.
- **Immersive Cinema Player**: Modal popup component supporting dynamic HTML5 video streaming with full overlay controls, overview text, client meta-tags, and live links.
- **Advanced Micro-Animations**: Built on GSAP (GreenSock Animation Platform) and ScrollTrigger for buttery-smooth page loads, scroll-reveals, scale-ins, and a custom magnetic cursor indicator.
- **Responsive Navigation**: Adaptive top header, mobile hamburger panel, and custom bottom nav bar optimized for iOS and Android web views.

---

## 📂 Project Structure

```text
lensbro/
│
├── index.html            # Dramatic, story-driven Landing Page
├── about.html            # Profile, approach, gear lists, and credentials
├── videography.html      # Desktop aspect-ratio videos (Commercials, Events)
├── reels.html            # Mobile vertical aspect-ratio videos (Reels, TikToks)
├── portfolio.html        # High-fidelity project portfolio grid
├── contact.html          # Dynamic client inquiry and booking form
│
├── assets/               # Image assets, banners, and vector assets
├── css/
│   └── shared.css        # Centralized styling variables, design system, and global tokens
│
├── js/
│   ├── shared.js         # Navigation logic, GSAP animations, page transitions, and cursor
│   └── projects-data.js  # Client-side projects database, LocalStorage manager
│
└── README.md             # Project documentation (this file)
```

---

## ⚙️ Development & Local Setup

Since LensBro uses HTML5 video elements and client-side storage, you can run it directly by double-clicking the `index.html` file, or spin up a local development server for the best performance.

### Method 1: Local HTTP Server (Recommended)
Using a local dev server avoids browser security warnings and ensures absolute asset paths and videos resolve perfectly.

```bash
# Using Python (Built-in)
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```
Navigate to `http://localhost:8000` (or the port specified) in your browser.

### Method 2: Offline File Mode
The database manager includes built-in migration safeguards. If no local web server is running, the site automatically falls back to static defaults stored in `projects-data.js` to ensure the project works seamlessly via the `file:///` protocol.

---

## 📽️ Managing Reels & Video Projects

All portfolio items, videography pages, and reels are driven by a central array of structured JSON objects. To modify, remove, or add new video projects, edit the `LENSBRO_DEFAULT_PROJECTS` array inside [projects-data.js](file:///i:/Stufs/lensbro/js/projects-data.js).

### Data Schema Reference
Each project entry follows this schema:

```javascript
{
  id: "proj-reel-1",                         // Unique project identifier
  title: "Street Dreams Tokyo",              // Project display title
  category: "reels",                         // 'reels', 'color-grading', 'video-editing', 'videography', 'other'
  client: "Urban Culture",                   // Client or brand name
  location: "Tokyo Socials",                 // Shot location metadata
  thumbnail: "https://images.unsplash...",  // Background poster image URL
  videoUrl: "https://cdn.pixabay.com...",   // Absolute link to MP4 video file
  link: "https://instagram.com",             // Live portfolio/social post URL
  overview: "A rapid-cut visual story...",   // Rich description explaining the creative approach
  featured: true,                            // Pin to featured hero banner
  likes: "18.4K",                            // Interaction metrics (for Reels page)
  comments: "428",                           // Discussion metrics (for Reels page)
  showOnReels: true,                          // Filter state toggle
  showOnVideography: false                   // Cross-page visibility toggle
}
```

---

## 🎨 Modifying Design Tokens

Global typography, color palettes, spacing variables, and custom cursor animations are defined inside [shared.css](file:///i:/Stufs/lensbro/css/shared.css). To match a new brand theme, adjust the primary accent colors in the `:root` pseudo-selector:

```css
:root {
  --primary: #020203;       /* Background color */
  --accent: #ff2b00;        /* Hot orange key highlights */
  --accent-glow: #ff2b0066; /* Glowing effects */
  --text: #ffffff;          /* Off-white body typography */
}
```

---

## 🚀 Built With
- **Vanilla HTML5 & CSS3** (Custom Grid and Flexbox layouts)
- **Vanilla JavaScript ES6** (Dynamic DOM manipulation & API state simulation)
- **GSAP & ScrollTrigger** (Immersive timeline-based motion choreography)
- **FontAwesome v6** (Interface vector symbols)
- **Google Fonts** (*Playfair Display* & *Montserrat*)
