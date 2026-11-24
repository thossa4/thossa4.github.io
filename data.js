/* =========================================================
   ALL SITE CONTENT LIVES HERE.
   Edit this file to update the portfolio — no need to touch
   index.html, styles.css, or main.js.
   ========================================================= */

const SITE = {
  profile: {
    name: "Tanvir Hossain",
    initials: "TH",
    title: "Ph.D. Student in Geography",
    affiliation: "Department of Geography & Anthropology · Louisiana State University",
    location: "Baton Rouge, LA",
    // Put your photo at assets/headshot.jpg (square works best). If the file is missing, initials show instead.
    photo: "assets/headshot.jpg",
    // Full-bleed hero artwork (made in Canva). If missing, a drawn contour pattern shows instead.
    heroImage: "assets/art/hero.jpg",
    bio: [
      "I'm a geographer working where GIS, remote sensing, and machine learning meet natural hazards. My research builds GeoAI frameworks for multi-hazard susceptibility mapping and land-use vulnerability assessment in coastal Louisiana, so communities and planners can see risk before it arrives.",
      "Before my Ph.D., I trained as an urban and regional planner and environmental economist. I contributed to Dhaka's Detailed Area Plan (2016–2035) and later studied how farming communities adapt to climate change. That mix of planning, economics, and geospatial science shapes how I approach resilience: rigorous models that people can actually use."
    ],
    interests: [
      "GIS & Remote Sensing",
      "GeoAI & Machine Learning",
      "Natural-Hazard Susceptibility & Risk",
      "Coastal Resilience",
      "Land-Use Vulnerability",
      "Spatial Statistics"
    ]
  },

  links: {
    email: "thossa4@lsu.edu",
    scholar: "https://scholar.google.com/citations?user=lsUA2k0AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/tanvir-hossain-315aa912a/",
    github: "",   // optional
    orcid: "",    // optional
    cv: "" // add a CV without your phone number, e.g. "assets/Tanvir_Hossain_CV.pdf"
  },

  education: [
    {
      degree: "Ph.D. in Geography",
      school: "Louisiana State University",
      place: "Baton Rouge, LA",
      dates: "Aug 2024 – Present",
      note: "",
      current: true
    },
    {
      degree: "Graduate Certificate in GIS",
      school: "Louisiana State University",
      place: "Baton Rouge, LA",
      dates: "Aug 2024 – May 2026",
      note: ""
    },
    {
      degree: "M.S. in Agricultural Economics",
      school: "Louisiana State University",
      place: "Baton Rouge, LA",
      dates: "Aug 2022 – Aug 2024",
      note: "Thesis: Farmer's Adaptive Capacity and Adoption of Strategies to Climate Change among Mountain Communities in Nepal"
    },
    {
      degree: "M.S. in Environmental Economics",
      school: "University of Dhaka",
      place: "Bangladesh",
      dates: "Sep 2019 – Jun 2021",
      note: ""
    },
    {
      degree: "B.Sc. in Urban and Regional Planning",
      school: "Bangladesh University of Engineering and Technology (BUET)",
      place: "Bangladesh",
      dates: "May 2012 – Feb 2017",
      note: "Thesis: A Study on Distribution and Locational Effects of Fuel Stations on Traffic Flow in Dhaka City Corporation Areas"
    }
  ],

  // type: "research" | "teaching" | "professional"
  experience: [
    {
      type: "teaching",
      role: "Graduate Teaching Assistant · GEOG 4044 / 4044G",
      org: "Department of Geography & Anthropology, LSU",
      dates: "Aug 2026 – Present",
      bullets: [
        "Assist with class and computer-lab instruction, course administration, grading, and student support for upper-level geography coursework.",
        "Hold regular office hours and give individualized feedback on assignments and course questions."
      ]
    },
    {
      type: "research",
      role: "Graduate Research Assistant",
      org: "LaHouse Research & Education Center, LSU AgCenter",
      dates: "May 2024 – Aug 2026",
      bullets: [
        "Conducted GIS-based analysis, hydrologic modeling, and BMP performance evaluation for a USDA-funded project ($299,982) on urban water-management BMPs from a landscape-resiliency perspective.",
        "Supported field monitoring, data processing, and spatial analysis for landscape and irrigation research."
      ]
    },
    {
      type: "research",
      role: "Summer Research Intern",
      org: "LSU Coastal Ecosystem Design Studio (CEDS)",
      dates: "Jun 2025 – Jul 2025",
      bullets: [
        "Developed GIS and remote-sensing analyses for coastal Louisiana: vulnerability mapping, NDWI change assessment, Sentinel-1 change detection, tract-level zonal statistics, and optimized hot spot analysis.",
        "Prepared maps and stakeholder-facing materials for coastal resilience planning in Pointe-aux-Chênes and Montegut, Terrebonne Parish.",
        "Turned community and stakeholder input into clear geospatial and written products for nontechnical audiences and decision-makers."
      ]
    },
    {
      type: "research",
      role: "Graduate Research Assistant",
      org: "Dept. of Agricultural Economics & Agribusiness, LSU",
      dates: "Aug 2022 – May 2024",
      bullets: [
        "Applied multivariate probit and zero-inflated negative binomial models to analyze adaptive capacity and climate-change responses among mountain communities.",
        "Conducted stochastic frontier production-efficiency and treatment-effect analyses for rice production in the Philippines.",
        "Performed fixed- and random-effects modeling for a meta-analysis on blue carbon sequestration."
      ]
    },
    {
      type: "professional",
      role: "Assistant Town Planner",
      org: "Eastern Housing Limited, Islam Group · Bangladesh",
      dates: "Aug 2019 – Aug 2022",
      bullets: [
        "Conducted market studies, feasibility analyses, and data-driven assessments for new development projects.",
        "Applied GIS-based spatial analysis and mapping for urban planning, site evaluation, and development decisions."
      ]
    },
    {
      type: "research",
      role: "Graduate Research Assistant",
      org: "Dhaka School of Economics, University of Dhaka",
      dates: "Sep 2019 – Jun 2021",
      bullets: [
        "Analyzed the economic effects of remittances on the Bangladesh economy using econometric and statistical methods.",
        "Developed surveys, experimental instruments, and coding frameworks for quantitative research.",
        "Contributed to literature reviews, data analysis, and collaborative faculty research."
      ]
    },
    {
      type: "professional",
      role: "Assistant Town Planner",
      org: "Rajdhani Unnayan Kartripakkha (RAJUK) · Bangladesh",
      dates: "Aug 2018 – Aug 2019",
      bullets: [
        "Contributed to the Detailed Area Plan (2016–2035) for the Dhaka Metropolitan Development Plan.",
        "Prepared urban designs, site layouts, reports, maps, and drawings for large-scale master-planning projects.",
        "Ran Participatory Rural Appraisal and focus group discussions to gather community and stakeholder input."
      ]
    }
  ],

  // Research highlight cards. `tone`: "sea" | "marsh" | "sand" | "earth"
  // Optional `image`: "assets/your-map.jpg" replaces the pattern banner with your own figure.
  highlights: [
    {
      title: "Multi-Hazard Coastal Susceptibility in Deltaic Louisiana",
      status: "Published",
      tags: ["Machine Learning", "Deep Learning", "GIS"],
      summary: "Machine-learning and deep-learning models that map where multiple coastal hazards overlap across Louisiana's delta.",
      link: "https://doi.org/10.3390/ijgi15080346",
      linkLabel: "Read the paper",
      tone: "sea",
      image: "assets/art/hazard.jpg"
    },
    {
      title: "Coastal Vulnerability in Terrebonne Parish",
      status: "Completed",
      tags: ["Sentinel-1", "NDWI", "Hot Spot Analysis"],
      summary: "Radar change detection and water-index change combined with tract-level statistics to support resilience planning in Pointe-aux-Chênes and Montegut.",
      tone: "marsh",
      image: "assets/art/marsh.jpg"
    },
    {
      title: "ML-Enhanced Evapotranspiration for Irrigation Resilience",
      status: "Ongoing",
      tags: ["Machine Learning", "Hydrology", "Irrigation"],
      summary: "Improving reference evapotranspiration estimates for irrigation scheduling in humid Louisiana. Presented at AGU 2024 and 2025.",
      tone: "sand",
      image: "assets/art/irrigation.jpg"
    },
    {
      title: "Climate Adaptation in Mountain Communities of Nepal",
      status: "Completed",
      tags: ["Econometrics", "Household Survey", "Adaptation"],
      summary: "M.S. thesis on how farm households build adaptive capacity and choose climate strategies, using multivariate probit and count models.",
      tone: "earth",
      image: "assets/art/nepal.jpg"
    },
    {
      title: "Thermal Inequity in Louisiana Cities",
      status: "Under review",
      tags: ["Landsat LST", "Environmental Justice", "Earth Engine"],
      summary: "Urban heat islands across 424 census tracts in New Orleans, Baton Rouge, Shreveport and Lafayette, plus an audit that caught hidden Landsat data-quality failures before they skewed the results.",
      tone: "earth",
      image: "assets/art/heat.jpg"
    },
    {
      title: "Deep Learning for Hurricane Crop Damage",
      status: "Ongoing",
      tags: ["Sentinel", "Deep Learning", "Dissertation"],
      summary: "Eight years of multi-temporal imagery used to track crop health and hurricane damage across coastal Louisiana farmland, building on the multi-hazard susceptibility maps.",
      tone: "sea",
      image: "assets/art/cropdamage.jpg"
    }
  ],

  // News strip near the top — newest first. Keep 4–6 items.
  news: [
    { date: "Nov 2026", text: "Co-authored paper on machine learning and remote sensing for drought modeling in Louisiana published in Science of the Total Environment." },
    { date: "Dec 2026", text: "Two abstracts accepted at the AGU Annual Meeting: multi-hazard susceptibility mapping, and climate-smart agriculture." },
    { date: "Aug 2026", text: "Started as Graduate Teaching Assistant for GEOG 4044 at LSU." },
    { date: "Aug 2026", text: "Paper published in ISPRS International Journal of Geo-Information on multi-hazard coastal susceptibility.", link: "https://doi.org/10.3390/ijgi15080346" },
    { date: "2026", text: "Received the AAG-IGIF Graduate Research Award." },
    { date: "Mar 2026", text: "Oral presentation at the AAG Annual Meeting, San Francisco." },
    { date: "Dec 2025", text: "Oral talk and poster at AGU Fall Meeting, New Orleans." }
  ],

  // Pins on the "Places" map. kind: "study" | "work" | "field" | "talk"
  places: [
    { name: "Louisiana State University", place: "Baton Rouge, LA", lat: 30.4133, lng: -91.1800, kind: "study", note: "Ph.D. Geography · M.S. Agricultural Economics · LSU AgCenter research" },
    { name: "Terrebonne Parish", place: "Pointe-aux-Chênes & Montegut, LA", lat: 29.4386, lng: -90.4426, kind: "field", note: "CEDS coastal vulnerability mapping (2025)" },
    { name: "Mustang District", place: "Nepal", lat: 28.9985, lng: 83.8473, kind: "field", note: "M.S. thesis: climate adaptation in mountain communities" },
    { name: "BUET & University of Dhaka", place: "Dhaka, Bangladesh", lat: 23.7265, lng: 90.3925, kind: "study", note: "B.Sc. Urban & Regional Planning · M.S. Environmental Economics" },
    { name: "RAJUK & Eastern Housing", place: "Dhaka, Bangladesh", lat: 23.7330, lng: 90.4172, kind: "work", note: "Assistant Town Planner, 2018–2022" },
    { name: "AAG Annual Meeting", place: "San Francisco, CA", lat: 37.7749, lng: -122.4194, kind: "talk", note: "Oral presentation, March 2026" },
    { name: "AGU Fall Meeting", place: "New Orleans, LA", lat: 29.9511, lng: -90.0715, kind: "talk", note: "Oral + poster, December 2025" },
    { name: "AGU Fall Meeting", place: "Washington, DC", lat: 38.9072, lng: -77.0369, kind: "talk", note: "Poster, December 2024" }
  ],

  // type: "journal" | "chapter" | "review" | "other" | "presentation"
  publications: [
    {
      type: "journal", year: 2026,
      authors: "Hossain, T., & Leitner, M.",
      title: "Multi-Hazard Coastal Susceptibility Mapping Using Machine Learning and Deep Learning in Deltaic Louisiana",
      venue: "ISPRS International Journal of Geo-Information, 15(8), 346",
      link: "https://doi.org/10.3390/ijgi15080346"
    },
    {
      type: "journal", year: 2026,
      authors: "Sresto, M. N. H. M. A., Meng, X., Awasthi, B., Siddika, S., Saha, S., Roy, S., Islam, A. H. M. M., Hossain, T., Ishmam, Z. S., & Setu, S. R.",
      title: "Integrating machine learning and remote sensing for comprehensive drought modeling in Louisiana, USA",
      venue: "Science of the Total Environment, 1056, 182386"
    },
    {
      type: "chapter", year: 2027,
      authors: "Hossain, T., Mostafiz, R. B., Rohli, R. V., & Bushra, N.",
      title: "Drought Risk Mitigation",
      venue: "In The Routledge Handbook of Disaster Mitigation and Preparedness (pp. 145–157). Routledge"
    },
    {
      type: "chapter", year: 2026,
      authors: "Hossain, T., & Mostafiz, R. B.",
      title: "Tropical Cyclone Risk in the Bay of Bengal: Advancing Multi-Hazard Planning and Resilience Strategies",
      venue: "In J. Collins, J. Done, & Y.-J. Zhu (Eds.), Tropical Cyclone Risk and Resilience (pp. 111–138). Springer Nature Switzerland"
    },
    {
      type: "review", year: null,
      authors: "Hossain, T., Al Assi, A., Rohli, R. V., & Mostafiz, R. B.",
      title: "Climate Change Impacts on Global Agricultural Systems: A Comprehensive Systematic Review of Evidence, Mechanisms, and Future Projections",
      venue: "Environmental Management (under review)"
    },
    {
      type: "review", year: 2026,
      authors: "Hossain, T., Mostafiz, R. B., Al Assi, A., & Rohli, R.",
      title: "Climate-Smart Agriculture: Adaptation Strategies, Technology Adoption, and Pathways to Resilient Food Systems",
      venue: "Preprint",
      link: "https://doi.org/10.21203/rs.3.rs-9671861/v1"
    },
    {
      type: "review", year: null,
      authors: "Sujakhu, N. M., Acharya, R., Adusumilli, N., Hossain, T., & He, J.",
      title: "Spatial Heterogeneity in Climate Change Vulnerability and Adaptation Strategies among Mountain Households: Evidence from Mustang District, Nepal",
      venue: "Land Use Policy (under review)"
    },
    {
      type: "review", year: null,
      authors: "Mostafiz, R. B., & Hossain, T.",
      title: "Climate-Induced Migration and Agricultural Resilience: Insights from Hazard-Prone Coastal Louisiana",
      venue: "Springer Nature (submitted)"
    },
    {
      type: "review", year: null,
      authors: "Mostafiz, R. B., & Hossain, T.",
      title: "Environmental Conservation and Economic Incentives",
      venue: "Springer (submitted)"
    },
    {
      type: "review", year: 2026,
      authors: "Hossain, T., & Mostafiz, R. B.",
      title: "Surface Urban Heat Islands and Environmental Justice Reveal a Landsat Data Quality Hazard Across Four Louisiana Cities",
      venue: "Discover Cities (revised after peer review)"
    },
    {
      type: "prep", year: 2026,
      authors: "Hossain, T., Zhou, C., Conger, S., & Rohli, R. V.",
      title: "Estimating Daily Reference Evapotranspiration in Louisiana's Humid Subtropical Climate Using Machine Learning Approaches Under Limited Data Availability",
      venue: "Manuscript in preparation"
    },
    {
      type: "review", year: 2026,
      authors: "Hossain, T., & Mostafiz, R. B.",
      title: "Artificial Intelligence and Geospatial Technologies in Humanitarian Engineering: A Rapid Review of Applications for Disaster Prediction and Resilience",
      venue: "Book chapter, revised after peer review"
    },
    {
      type: "review", year: 2026,
      authors: "Mostafiz, R. B., & Hossain, T.",
      title: "Improving Drought Resilience in Louisiana Agriculture through the DIRT Irrigation Response Tool",
      venue: "Book chapter, revised after peer review"
    },
    {
      type: "review", year: 2026,
      authors: "Mostafiz, R. B., & Hossain, T.",
      title: "Advancing Precision Irrigation in Humid Climates: Machine Learning–Driven Reference Evapotranspiration Modeling for Louisiana Agriculture",
      venue: "Book chapter (submitted)"
    },
    {
      type: "prep", year: 2026,
      authors: "Hossain, T., Serinio, M. N., Adusumilli, N., Llones, C., Capuno, C., & Manalo, U.-N.",
      title: "Impact of Agricultural Training on Technical Efficiency of Rice Farmers in the Philippines: A Stochastic Frontier Analysis",
      venue: "Manuscript in preparation"
    },
    {
      type: "prep", year: 2026,
      authors: "Hossain, T., & Leitner, M.",
      title: "Multi-Temporal Remote Sensing and Deep Learning-Based Agricultural Damage Assessment and Crop Health Monitoring in Coastal Louisiana",
      venue: "Dissertation chapter, manuscript in preparation"
    },
    {
      type: "prep", year: 2026,
      authors: "Friedland, C., Lee, J., Kunku, L., Rahim, M. A., Rohli, R., Mostafiz, R. B., & Hossain, T.",
      title: "Enhancing Resilience: A Geospatial Decision Support Tool for Flood Risk Mitigation in Coastal Louisiana",
      venue: "Manuscript in preparation"
    },
    {
      type: "other", year: 2025,
      authors: "Biswas, J., & Hossain, T.",
      title: "Distribution and Locational Effects of Fuel Stations on Traffic Flow in Dhaka City Corporation Areas",
      venue: "SSRN Working Paper"
    },
    {
      type: "other", year: 2024,
      authors: "Hossain, T., Conger, S. D., Rohli, R. V., & Mostafiz, R. B.",
      title: "Improving Reference Evapotranspiration Estimates for Irrigation Scheduling in Louisiana",
      venue: "AGU Fall Meeting Abstracts 2024, H04-09"
    },
    {
      type: "other", year: 2024,
      authors: "Hossain, T.",
      title: "Farmer's Adaptive Capacity and Adoption of Strategies to Climate Change among Mountain Communities in Nepal",
      venue: "M.S. Thesis, Louisiana State University and Agricultural & Mechanical College"
    },
    {
      type: "presentation", year: 2026,
      authors: "Hossain, T., & Leitner, M.",
      title: "Multi-Hazard Susceptibility Mapping in Deltaic Louisiana: How Spatial Validation Design Governs Apparent Model Transferability",
      venue: "Accepted · AGU Annual Meeting · December 2026"
    },
    {
      type: "presentation", year: 2026,
      authors: "Hossain, T., & Mostafiz, R. B.",
      title: "From Risk to Resilience: A Two-Part Systematic Synthesis of Climate Change Impacts on Global Agriculture and Evidence-Based Climate-Smart Adaptation",
      venue: "Accepted · AGU Annual Meeting · December 2026"
    },
    {
      type: "presentation", year: 2026,
      authors: "Hossain, T., & Leitner, M.",
      title: "Deltaic Geomorphology Governs the Transferability of Machine-Learning Coastal Hazard Models in Louisiana",
      venue: "Abstract · GSA Connects 2026"
    },
    {
      type: "presentation", year: 2026,
      authors: "Hossain, T., & Mostafiz, R. B.",
      title: "Compound Hazards, Crop Sensitivity, and Climate-Smart Adaptation",
      venue: "EGU General Assembly 2026 (EGU26)"
    },
    {
      type: "presentation", year: 2026,
      authors: "Hossain, T.",
      title: "Developing a Machine Learning Framework for Hazard Susceptibility Mapping and Land Use Vulnerability Assessment in Coastal Louisiana",
      venue: "Oral presentation · AAG Annual Meeting, San Francisco, CA · March 2026"
    },
    {
      type: "presentation", year: 2025,
      authors: "Hossain, T.",
      title: "Machine Learning-Enhanced Reference Evapotranspiration Modeling for Irrigation Resilience in Humid Louisiana",
      venue: "Oral presentation · AGU Fall Meeting, New Orleans, LA · December 2025 · H42D-04"
    },
    {
      type: "presentation", year: 2025,
      authors: "Hossain, T.",
      title: "Growing Against the Odds: Natural Hazards and the Fragility of Agricultural Systems",
      venue: "Poster · AGU Fall Meeting, New Orleans, LA · December 2025 · GC31J-0801"
    },
    {
      type: "presentation", year: 2024,
      authors: "Hossain, T.",
      title: "Improving Reference Evapotranspiration Estimates for Irrigation Scheduling in Louisiana",
      venue: "Poster · AGU Fall Meeting, Washington, DC · December 2024"
    }
  ],

  // Your name as it appears in author lists — gets bolded automatically
  highlightAuthor: "Hossain, T.",

  awards: [
    { name: "AAG-IGIF Graduate Research Award", org: "American Association of Geographers", date: "2026" },
    { name: "Graduate Student Association Travel Award", org: "Louisiana State University", date: "FY 2025–2026" }
  ],

  skills: [
    { group: "GIS & Remote Sensing", items: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ERDAS IMAGINE", "ENVI"] },
    { group: "Programming", items: ["Python", "R", "SQL"] },
    { group: "Geospatial & Data Analysis", items: ["Machine Learning", "Deep Learning", "Spatial Statistics", "SPSS", "Excel"] },
    { group: "Hazard Assessment", items: ["Hazus", "FAST"] },
    { group: "Design & Planning", items: ["AutoCAD", "Adobe Photoshop", "Adobe Illustrator"] }
  ],

  memberships: [
    { name: "American Association of Geographers (AAG)", years: "2025 – Present" },
    { name: "American Geophysical Union (AGU)", years: "2024 – Present" },
    { name: "NSF NHERI Graduate Student Council", years: "2024 – Present" },
    { name: "Agricultural & Applied Economics Association", years: "2022 – Present" },
    { name: "Institute of Mathematical Statistics", years: "2022 – Present" },
    { name: "Bangladesh Institute of Planners", years: "2012 – Present" }
  ],

  training: [
    { name: "Data Analysis with Python", date: "March 2023" },
    { name: "Agribusiness Boot Camp", date: "August 2022" }
  ]
};
