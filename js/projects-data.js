/* ==========================================================
   LensBro — Shared Projects Database & Storage Management
   Bypasses CORS restrictions on file:// protocol loading
   ========================================================== */

const LENSBRO_DEFAULT_PROJECTS = [
  // ─── COLOR GRADING CATEGORY ───
  {
    id: "proj-color-1",
    title: "Neon Nights Delhi",
    category: "color-grading",
    client: "VoxMedia Group",
    location: "New Delhi",
    thumbnail: "https://images.unsplash.com/photo-1678542561901-5d75778930ef?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4",
    link: "https://youtube.com",
    overview: "A nocturnal journey exploring Delhi's bustling, neon-saturated back alleys after dark. The grade implements a cinematic teal-and-orange structure with stylized high-contrast shadows and glowing highlights, bringing out the cyberpunk essence of modern India.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-color-2",
    title: "Desert Mirage",
    category: "color-grading",
    client: "Nomad Apparel",
    location: "Rajasthan",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800",
    videoUrl: "",
    link: "https://vimeo.com",
    overview: "A warm, sun-baked mood board for a luxury desert activewear campaign. We designed custom LUTs with rich gold midtones, balanced earthy hues, and soft pastel skies to invoke a sense of calm, timeless elegance.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-color-3",
    title: "Autumn Whispers",
    category: "color-grading",
    client: "Himalayan Stills",
    location: "Manali",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
    videoUrl: "",
    link: "https://instagram.com",
    overview: "Designed for a poetic nature documentary. This grade emphasizes lush rust-red and orange foliage, muted organic greens, and a hazy mist vibe. It elevates the digital frames to feel organic, filmic, and highly emotional.",
    featured: false,
    showOnVideography: true
  },
  {
    id: "proj-color-4",
    title: "Cyberpunk Alleyways",
    category: "color-grading",
    client: "Riot Wear",
    location: "Tokyo",
    thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2022/10/04/133491-756991118_large.mp4",
    link: "https://youtube.com",
    overview: "High-contrast urban look for streetwear commercial. Heavy purple and magenta neon saturation with crushed black levels and soft, blooming lens artifacts that simulate high-end vintage cinematic glass.",
    featured: false,
    showOnVideography: true
  },

  // ─── VIDEO EDITING CATEGORY ───
  {
    id: "proj-edit-1",
    title: "Urban Explorer",
    category: "video-editing",
    client: "Rhythm & Sole",
    location: "Mumbai",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2022/10/04/133491-756991118_large.mp4",
    link: "https://youtube.com",
    overview: "An energetic commercial with razor-sharp rhythmic editing. Cuts and speed ramps align seamlessly with a heavy electronic breakbeat, driving dynamic visual engagement for a high-end streetwear launch.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-edit-2",
    title: "Vogue Behind the Scenes",
    category: "video-editing",
    client: "Vogue India",
    location: "Studio 11",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    videoUrl: "",
    link: "https://vimeo.com",
    overview: "A sleek, smooth editorial assembly with matches-on-action, split screens, and elegant motion graphic overlays. Keeps the viewer hooked while reflecting the luxurious nature of high-end fashion shoots.",
    featured: false,
    showOnVideography: true
  },
  {
    id: "proj-edit-3",
    title: "Retro Recall",
    category: "video-editing",
    client: "Sound & Vision",
    location: "Studio 88",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/12/203878-922675732_large.mp4",
    link: "https://youtube.com",
    overview: "An experimental short featuring VHS glitch transitions, analog grain, chromatic aberration, and modular sound effects. Designed for a nostalgic lofi audio brand, it evokes late 80s living rooms.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-edit-4",
    title: "Sound & Fury",
    category: "video-editing",
    client: "Metropolis Records",
    location: "Live Tour",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
    videoUrl: "",
    link: "https://youtube.com",
    overview: "Multi-cam live concert montage edited with intense pacing, flashing overlays, visual triggers, and immersive bass drops. Perfectly duplicates the visceral adrenaline rush of standing in front of a live arena stage.",
    featured: false,
    showOnVideography: true
  },

  // ─── VIDEOGRAPHY CATEGORY ───
  {
    id: "proj-video-1",
    title: "Hauz Khas Heritage",
    category: "videography",
    client: "Delhi Tourism",
    location: "South Delhi",
    thumbnail: "https://images.unsplash.com/photo-1745826092440-0d6542010bcc?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/12/203878-922675732_large.mp4",
    link: "https://youtube.com",
    overview: "Immersive drone cinematography and handheld gimbal tracking shots showcasing the breathtaking contrast of 14th-century lake ruins nestled right against South Delhi's bustling luxury cafe rows.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-video-2",
    title: "India Gate Grandeur",
    category: "videography",
    client: "Visual Chronicles",
    location: "Central Delhi",
    thumbnail: "https://images.unsplash.com/photo-1600258881099-e78a5e3b77ff?q=80&w=800",
    videoUrl: "",
    link: "https://vimeo.com",
    overview: "A cinematic tribute to India's monumental historic gate. Captured using high-frame-rate anamorphic lenses at dawn, rendering spectacular lens flares, golden soft backlighting, and heavy crowd scale views.",
    featured: false,
    showOnVideography: true
  },
  {
    id: "proj-video-3",
    title: "Monsoon Symphony",
    category: "videography",
    client: "Weather Network",
    location: "Western Ghats",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4",
    link: "https://youtube.com",
    overview: "Macro cinematography exploring slow-motion rain droplets, flowing forest streams, and fog-swirled valleys. Heavy focus on sound-capture textures and cinematic framing of wild Indian nature.",
    featured: true,
    showOnVideography: true
  },
  {
    id: "proj-video-4",
    title: "Corporate Horizon",
    category: "videography",
    client: "Infinity Tech",
    location: "Cyber City Gurugram",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    videoUrl: "",
    link: "https://youtube.com",
    overview: "Ultra-sharp 8K architectural drone flyovers, high-key corporate office tracking shots, and professional corporate interview set-ups. Establishes a bold and commanding visual footprint for a tech giant.",
    featured: false,
    showOnVideography: true
  },

  // ─── REELS CATEGORY (INSTAGRAM 9:16 LAYOUT) ───
  {
    id: "proj-reel-1",
    title: "Street Dreams Tokyo",
    category: "reels",
    client: "Urban Culture",
    location: "Tokyo Socials",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600",
    videoUrl: "https://cdn.pixabay.com/video/2022/10/04/133491-756991118_large.mp4",
    link: "https://instagram.com",
    overview: "A rapid-cut visual story capturing Tokyo's night fashion scene. Shot on vertical cinema rigs and timed to a heavy electronic beat, this reel went viral with over 500K views. We styled it with retro chromatic aberration and dynamic speed ramps.",
    featured: true,
    likes: "18.4K",
    comments: "428",
    showOnReels: true
  },
  {
    id: "proj-reel-2",
    title: "Golden Hour Escape",
    category: "reels",
    client: "Soleil Wear",
    location: "Goa Beaches",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/12/203878-922675732_large.mp4",
    link: "https://instagram.com",
    overview: "A dreamlike vertical sunset lookbook featuring soft golden hour light leaks, analog camera grain, and smooth tracking sequences. Perfectly optimized for engagement and high-end fashion branding.",
    featured: true,
    likes: "12.2K",
    comments: "256",
    showOnReels: true
  },
  {
    id: "proj-reel-3",
    title: "Neon CP Pulse",
    category: "reels",
    client: "Riot Cybernetics",
    location: "Connaught Place",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4",
    link: "https://instagram.com",
    overview: "High-contrast neon vertical sequence exploring late-night Delhi. Focuses heavily on deep shadows, glowing CP cafe lights, and CP corridors structured in a 9:16 portrait template.",
    featured: false,
    likes: "9.8K",
    comments: "185",
    showOnReels: true
  },
  {
    id: "proj-reel-4",
    title: "Raw Expression",
    category: "reels",
    client: "Aesthetic Stills",
    location: "Studio Black",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
    videoUrl: "",
    link: "https://instagram.com",
    overview: "A vertical fashion portrait compilation testing high-contrast key lighting and shadow profiles. Shot entirely in black & white, it highlights high-fashion styling and clean transitions.",
    featured: false,
    likes: "6.5K",
    comments: "112",
    showOnReels: true
  },

  // ─── OTHER CATEGORY (DESIGN, STILLS) ───
  {
    id: "proj-other-1",
    title: "Editorial Fashion Stills",
    category: "other",
    client: "Savoir Magazine",
    location: "Studio Black",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800",
    videoUrl: "",
    link: "https://behance.net",
    overview: "A series of high-fashion editorial portraits exploring moody shadow profiles, projection patterns, and bold graphic compositions. Focuses heavily on raw emotion, texture, and structured styling.",
    featured: true
  },
  {
    id: "proj-other-2",
    title: "Kinetic Typography",
    category: "other",
    client: "Beatbox Festival",
    location: "Socials",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    videoUrl: "",
    link: "https://behance.net",
    overview: "Dynamic, rapid-fire title design and motion kinetic typography generated to highlight a major live music lineup. Uses bold fonts, high-contrast textures, and fast beats to stimulate crowd excitement.",
    featured: false
  },
  {
    id: "proj-other-3",
    title: "Projection Mapping Live",
    category: "other",
    client: "Sonic Arts Collective",
    location: "Red Fort",
    thumbnail: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=800",
    videoUrl: "",
    link: "https://vimeo.com",
    overview: "A dynamic and hypnotic digital exhibition mapped directly onto historical architecture walls. Generates an interactive loop matching ambient synthesizer audio cues in a public gallery space.",
    featured: false
  }
];


const LENSBRO_DEFAULT_INFLUENCERS = [
  {
    id: "inf-1",
    name: "Aria Sharma",
    followers: "1.4M",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    instagramUrl: "https://instagram.com",
    bio: "Lifestyle and fashion storyteller focusing on seamless transitions & aesthetics.",
    collabs: "38"
  },
  {
    id: "inf-2",
    name: "Kabir Mehta",
    followers: "850K",
    location: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    instagramUrl: "https://instagram.com",
    bio: "Automotive filmmaker exploring technical camera speed ramps & engine notes.",
    collabs: "45"
  },
  {
    id: "inf-3",
    name: "Riya Sen",
    followers: "2.1M",
    location: "Goa Socials",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
    instagramUrl: "https://instagram.com",
    bio: "Luxury travel blogger documenting remote mountain vistas & organic stays.",
    collabs: "52"
  },
  {
    id: "inf-4",
    name: "Vikram Malhotra",
    followers: "420K",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    instagramUrl: "https://instagram.com",
    bio: "Fitness athlete showing clean street calisthenics visual pacing.",
    collabs: "29"
  }
];

// Helper database manager object
const LensbroDB = {
  // Key names in LocalStorage
  STORAGE_KEY: "lensbro_projects_database",
  STORAGE_KEY_INFLUENCERS: "lensbro_influencers_database",

  // Retrieve current database from LocalStorage, or initialize it
  getAllProjects: function() {
    try {
      // Migrate old key if it exists
      const oldData = localStorage.getItem("lensbros_projects_database");
      if (oldData) {
        localStorage.setItem(this.STORAGE_KEY, oldData);
        localStorage.removeItem("lensbros_projects_database");
      }

      let localData = localStorage.getItem(this.STORAGE_KEY);
      if (!localData) {
        this.saveProjects(LENSBRO_DEFAULT_PROJECTS);
        return LENSBRO_DEFAULT_PROJECTS;
      }
      let parsed = JSON.parse(localData);

      // Strict Validation Check
      if (!Array.isArray(parsed) || parsed.length === 0) {
        this.saveProjects(LENSBRO_DEFAULT_PROJECTS);
        return LENSBRO_DEFAULT_PROJECTS;
      }

      // Auto-upgrade: ensure reels category exists
      const hasReels = parsed.some(p => p.category === 'reels');
      if (!hasReels) {
        this.saveProjects(LENSBRO_DEFAULT_PROJECTS);
        return LENSBRO_DEFAULT_PROJECTS;
      }
      return parsed;
    } catch(e) {
      console.warn("localStorage read failed. Falling back to static defaults.", e);
      return LENSBRO_DEFAULT_PROJECTS;
    }
  },

  // Save database array back into LocalStorage
  saveProjects: function(projectsArray) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projectsArray));
    } catch(e) {
      console.warn("localStorage write failed. Changes are session-only.", e);
    }
  },

  // Reset database back to default static list
  resetDatabase: function() {
    this.saveProjects(LENSBRO_DEFAULT_PROJECTS);
    return LENSBRO_DEFAULT_PROJECTS;
  },

  // Retrieve influencers from LocalStorage, or initialize them
  getAllInfluencers: function() {
    try {
      // Migrate old key if it exists
      const oldData = localStorage.getItem("lensbros_influencers_database");
      if (oldData) {
        localStorage.setItem(this.STORAGE_KEY_INFLUENCERS, oldData);
        localStorage.removeItem("lensbros_influencers_database");
      }

      let localData = localStorage.getItem(this.STORAGE_KEY_INFLUENCERS);
      if (!localData) {
        this.saveInfluencers(LENSBRO_DEFAULT_INFLUENCERS);
        return LENSBRO_DEFAULT_INFLUENCERS;
      }
      let parsed = JSON.parse(localData);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        this.saveInfluencers(LENSBRO_DEFAULT_INFLUENCERS);
        return LENSBRO_DEFAULT_INFLUENCERS;
      }
      return parsed;
    } catch(e) {
      console.warn("localStorage influencer read failed. Falling back to defaults.", e);
      return LENSBRO_DEFAULT_INFLUENCERS;
    }
  },

  // Save influencers back into LocalStorage
  saveInfluencers: function(influencersArray) {
    try {
      localStorage.setItem(this.STORAGE_KEY_INFLUENCERS, JSON.stringify(influencersArray));
    } catch(e) {
      console.warn("localStorage influencer write failed. Changes are session-only.", e);
    }
  },

  // Reset influencers back to default list
  resetInfluencers: function() {
    this.saveInfluencers(LENSBRO_DEFAULT_INFLUENCERS);
    return LENSBRO_DEFAULT_INFLUENCERS;
  }
};
