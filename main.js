/* Renders the page from SITE (data.js). You normally don't need to edit this file. */
(function () {
  "use strict";
  const S = typeof SITE !== "undefined" ? SITE : null;
  if (!S) return;

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 9.5l10 6.5 10-6.5L12 3Z" fill="currentColor"/><path d="M6 12.5V17c0 1.7 2.7 3.5 6 3.5s6-1.8 6-3.5v-4.5L12 16.4 6 12.5Z" fill="currentColor" opacity=".7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s2 .9 2 2.3V16M11.5 10.5V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.9 5.8 3.2 5.8 3.2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 10v6M9 7.6v.1M12 10v6h1.8a3 3 0 0 0 0-6H12Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chev: '<svg class="tl__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  const L = S.links || {};
  const P = S.profile || {};
  const ext = (href, cls, icon, label) =>
    `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${icon}${label}</a>`;

  // ---------- Hero ----------
  $("logo-initials").textContent = P.initials || "";
  $("hero-name").textContent = P.name;
  $("hero-title").textContent = P.title;
  $("hero-aff").textContent = P.affiliation;

  const profileLinks = () => {
    const out = [];
    if (L.cv) out.push(ext(L.cv, "btn", ICONS.download, "Download CV"));
    if (L.scholar) out.push(ext(L.scholar, "btn", ICONS.scholar, "Google Scholar"));
    if (L.linkedin) out.push(ext(L.linkedin, "btn", ICONS.linkedin, "LinkedIn"));
    if (L.github) out.push(ext(L.github, "btn", ICONS.github, "GitHub"));
    if (L.orcid) out.push(ext(L.orcid, "btn", ICONS.orcid, "ORCID"));
    return out.join("");
  };
  const emailBtn = L.email ? `<a class="btn btn--primary" href="mailto:${esc(L.email)}">${ICONS.mail}Email me</a>` : "";
  $("hero-cta").innerHTML = emailBtn + profileLinks();

  const photo = $("hero-photo");
  const avatar = `<div class="avatar" role="img" aria-label="${esc(P.name)}">${esc(P.initials)}</div>`;
  const caption = P.location ? `<figcaption>${esc(P.location)}</figcaption>` : "";
  photo.innerHTML = avatar + caption;
  if (P.photo) {
    const img = new Image();
    img.alt = `Portrait of ${P.name}`;
    img.onload = () => { photo.innerHTML = ""; photo.appendChild(img); photo.insertAdjacentHTML("beforeend", caption); };
    img.src = P.photo; // if missing, the initials avatar simply stays
  }

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Full-bleed hero art ----------
  if (P.heroImage) {
    const art = new Image();
    art.onload = () => {
      const el = $("hero-art");
      el.style.backgroundImage = `url("${P.heroImage}")`;
      el.classList.add("is-loaded");
      $("top").classList.add("has-art");
    };
    art.src = P.heroImage;
  }

  // ---------- News ticker ----------
  const news = S.news || [];
  if (news.length) {
    const item = (n, hidden) => `<li${hidden ? ' aria-hidden="true"' : ""}><time>${esc(n.date)}</time>${esc(n.text)}${
      n.link ? ` <a href="${esc(n.link)}" target="_blank" rel="noopener"${hidden ? ' tabindex="-1"' : ""}>Read ↗</a>` : ""}</li>`;
    const track = $("news");
    track.innerHTML = news.map((n) => item(n, false)).join("") + (reduceMotion ? "" : news.map((n) => item(n, true)).join(""));
    if (reduceMotion) { track.style.animation = "none"; track.style.flexWrap = "wrap"; track.style.width = "auto"; track.style.gap = "8px 32px"; }
  } else {
    document.querySelector(".news").remove();
  }

  // ---------- Stats (count up) ----------
  const allPubs = S.publications || [];
  const stats = [
    { n: (S.education || []).length, label: "Degrees & certificates" },
    { n: allPubs.filter((p) => p.type !== "presentation").length, label: "Papers, chapters & manuscripts" },
    { n: allPubs.filter((p) => p.type === "presentation").length, label: "Conference presentations" },
    { n: new Date().getFullYear() - 2018, label: "Years in planning & research", suffix: "+" }
  ];
  $("stats").innerHTML = stats.map((s) =>
    `<div class="stat"><div class="stat__num" data-to="${s.n}" data-suffix="${esc(s.suffix || "")}">${s.n}${esc(s.suffix || "")}</div><div class="stat__label">${esc(s.label)}</div></div>`).join("");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const countUp = (el) => {
      const to = +el.dataset.to, suf = el.dataset.suffix, t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * e) + suf;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const nums = document.querySelectorAll(".stat__num");
    nums.forEach((el) => { el.textContent = "0" + el.dataset.suffix; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { countUp(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach((el) => io.observe(el));
  }

  // ---------- Contour background (procedural topo map) ----------
  (function drawContours() {
    const svg = $("contours");
    const W = 1400, H = 800;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const peaks = [
      { x: 1080, y: 300, levels: 14, step: 34, seed: 1.3 },
      { x: 180, y: 760, levels: 9, step: 38, seed: 4.1 }
    ];
    let d = "";
    peaks.forEach((pk) => {
      for (let k = 1; k <= pk.levels; k++) {
        const base = k * pk.step;
        const pts = [];
        const N = 120;
        for (let i = 0; i <= N; i++) {
          const t = (i / N) * Math.PI * 2;
          const r = base
            + Math.sin(t * 3 + pk.seed + k * 0.35) * (6 + k * 1.6)
            + Math.sin(t * 5 - pk.seed * 2 + k * 0.2) * (3 + k * 0.9)
            + Math.cos(t * 2 + k * 0.5) * k * 2.2;
          pts.push(`${(pk.x + Math.cos(t) * r * 1.25).toFixed(1)} ${(pk.y + Math.sin(t) * r * 0.85).toFixed(1)}`);
        }
        d += `<path class="${k % 5 === 0 ? "major" : ""}" d="M${pts.join("L")}Z"/>`;
      }
    });
    svg.innerHTML = d;
  })();

  // ---------- About ----------
  $("about-bio").innerHTML = (P.bio || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("interests").innerHTML = (P.interests || []).map((i) => `<li>${esc(i)}</li>`).join("");
  $("awards").innerHTML = (S.awards || []).map((a) =>
    `<li><strong>${esc(a.name)}</strong><span>${esc(a.org)} · ${esc(a.date)}</span></li>`).join("");

  // ---------- Research highlights ----------
  const bannerSVG = (i) => {
    let d = "";
    for (let k = 0; k < 9; k++) {
      const y0 = 14 + k * 14;
      let p = `M0 ${y0}`;
      for (let x = 20; x <= 600; x += 20) {
        const y = y0 + Math.sin(x / 70 + k * 0.6 + i * 1.7) * (6 + k) + Math.sin(x / 31 + i) * 2.5;
        p += ` L${x} ${y.toFixed(1)}`;
      }
      d += `<path d="${p}"/>`;
    }
    return `<svg viewBox="0 0 600 128" preserveAspectRatio="none" aria-hidden="true">${d}</svg>`;
  };
  $("highlights").innerHTML = (S.highlights || []).map((h, i) => `
    <article class="rcard tone-${esc(h.tone || "sea")} reveal">
      <div class="rcard__banner">
        ${bannerSVG(i)}
        ${h.image ? `<img src="${esc(h.image)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
        <span class="rcard__status">${esc(h.status)}</span>
      </div>
      <div class="rcard__body">
        <div class="tags">${(h.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <h3>${esc(h.title)}</h3>
        <p>${esc(h.summary)}</p>
        ${(h.methods || []).length ? `<ul class="rcard__methods">${h.methods.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>` : ""}
        ${h.page ? `<a class="text-link" href="${esc(h.page)}">Explore the project →</a>` : ""}
        ${h.link ? `<a class="text-link" href="${esc(h.link)}" target="_blank" rel="noopener">${esc(h.linkLabel || "Learn more")} ↗</a>` : ""}
      </div>
    </article>`).join("");

  // ---------- Gallery + lightbox ----------
  const gal = S.gallery || [];
  const gsec = $("gallery");
  if (!gal.length) { if (gsec) gsec.remove(); document.querySelector('a[href="#gallery"]')?.remove(); }
  else {
    $("gallery-grid").innerHTML = gal.map((g, i) => `
      <figure class="gitem ${g.size ? "gitem--" + esc(g.size) : ""} reveal">
        <button type="button" data-i="${i}" aria-label="View photo: ${esc(g.caption)}">
          <img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"${g.focus ? ` style="object-position:${esc(g.focus)}"` : ""}>
        </button>
        <figcaption><span class="mono">${esc(g.event)}</span>${esc(g.caption)}</figcaption>
      </figure>`).join("");
    const lb = $("lightbox"), lbImg = $("lightbox-img"), lbCap = $("lightbox-cap");
    const openLb = (i) => {
      const g = gal[i]; lbImg.src = g.src; lbImg.alt = g.caption;
      lbCap.innerHTML = `<span class="mono">${esc(g.event)}</span>${esc(g.caption)}`;
      if (lb.showModal) lb.showModal(); else window.open(g.src, "_blank");
    };
    $("gallery-grid").addEventListener("click", (e) => { const b = e.target.closest("button[data-i]"); if (b) openLb(+b.dataset.i); });
    $("lightbox-close").addEventListener("click", () => lb.close());
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  }

  // ---------- Publications ----------
  const PUB_TYPES = [
    ["all", "All"],
    ["journal", "Journal articles"],
    ["chapter", "Book chapters"],
    ["review", "Under review"],
    ["prep", "In preparation"],
    ["other", "Other works"],
    ["presentation", "Presentations"]
  ];
  const PUB_LABEL = {
    journal: "Journal article", chapter: "Book chapter", review: "Under review / submitted", prep: "In preparation",
    other: "Working paper · abstract · thesis", presentation: "Conference presentation"
  };
  const pubs = S.publications || [];
  const boldMe = (authors) => {
    const me = S.highlightAuthor;
    const safe = esc(authors);
    return me ? safe.split(esc(me)).join(`<strong>${esc(me)}</strong>`) : safe;
  };
  if (L.scholar) $("scholar-link").href = L.scholar; else $("scholar-link").remove();

  $("pubs").innerHTML = pubs.map((p) => `
    <li class="pub" data-type="${esc(p.type)}">
      <div class="pub__year">${p.year ? esc(p.year) : "—"}</div>
      <div>
        <span class="pub__type">${esc(PUB_LABEL[p.type] || p.type)}</span>
        <h3 class="pub__title">${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</h3>
        <p class="pub__authors">${boldMe(p.authors)}</p>
        <p class="pub__venue">${esc(p.venue)}</p>
        ${p.link ? `<a class="pub__link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link.replace(/^https?:\/\//, ""))} ↗</a>` : ""}
      </div>
    </li>`).join("");
  makeTabs($("pub-tabs"), PUB_TYPES, pubs, ".pub");

  // ---------- Experience ----------
  const EXP_TYPES = [["all", "All"], ["research", "Research"], ["teaching", "Teaching"], ["professional", "Professional"]];
  const exp = S.experience || [];
  $("timeline").innerHTML = exp.map((e, i) => `
    <li class="tl tl--${esc(e.type)} reveal" data-type="${esc(e.type)}">
      <details${i < 2 ? " open" : ""}>
        <summary>
          <span class="tl__role">${esc(e.role)}</span>
          <span class="tl__date">${esc(e.dates)}</span>
          <span class="tl__org">${esc(e.org)}<span class="tl__kind">${esc(e.type)}</span></span>
          ${ICONS.chev}
        </summary>
        <ul>${(e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </details>
    </li>`).join("");
  makeTabs($("exp-tabs"), EXP_TYPES, exp, ".tl");

  // ---------- Places map ----------
  const KINDS = { study: "Studied", work: "Worked", field: "Fieldwork & research", talk: "Presented" };
  const places = S.places || [];
  $("map-legend").innerHTML = Object.entries(KINDS)
    .filter(([k]) => places.some((p) => p.kind === k))
    .map(([k, label]) => `<li><i class="k-${k}"></i>${esc(label)}</li>`).join("");
  $("place-list").innerHTML = places.map((p, i) => `
    <li><button type="button" data-i="${i}"><i class="k-${esc(p.kind)}"></i><strong>${esc(p.name)}</strong><span>${esc(p.place)}</span></button></li>`).join("");

  const Leaf = window.L; // Leaflet — note: `L` inside this file means S.links
  if (Leaf && places.length) {
    const isDark = () => (root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    // Esri gray basemaps: no API key needed (attribution required)
    const tileUrl = () => `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/${isDark() ? "World_Dark_Gray_Base" : "World_Light_Gray_Base"}/MapServer/tile/{z}/{y}/{x}`;
    const map = Leaf.map("map", { scrollWheelZoom: false, worldCopyJump: true });
    const tiles = Leaf.tileLayer(tileUrl(), {
      maxZoom: 16,
      attribution: 'Tiles &copy; <a href="https://www.esri.com">Esri</a> &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors'
    }).addTo(map);
    const color = (k) => k === "talk" ? "#b4465e"
      : getComputedStyle(document.documentElement).getPropertyValue({ study: "--sea", work: "--marsh", field: "--accent" }[k] || "--brand").trim();
    const markers = places.map((p) => Leaf.marker([p.lat, p.lng], {
      icon: Leaf.divIcon({ className: "", html: `<div class="pin" style="background:${color(p.kind)}"></div>`, iconSize: [16, 16], iconAnchor: [8, 8], popupAnchor: [0, -8] }),
      title: p.name
    }).addTo(map).bindPopup(`<strong>${esc(p.name)}</strong><small>${esc(p.place)} · ${esc(KINDS[p.kind] || "")}</small><br>${esc(p.note)}`));
    map.fitBounds(Leaf.featureGroup(markers).getBounds(), { padding: [30, 30] });
    $("place-list").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const i = +btn.dataset.i;
      document.querySelectorAll("#place-list button").forEach((b) => b.classList.toggle("is-active", b === btn));
      map.flyTo([places[i].lat, places[i].lng], 8, { duration: reduceMotion ? 0 : 1.2 });
      markers[i].openPopup();
    });
    // Re-tile on theme change
    new MutationObserver(() => tiles.setUrl(tileUrl())).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  } else {
    $("map").innerHTML = '<div class="map-fallback">Map unavailable offline. The places are listed alongside.</div>';
  }

  // ---------- Education ----------
  $("edu").innerHTML = (S.education || []).map((e) => `
    <article class="card edu__item reveal ${e.current ? "is-current" : ""}">
      <div class="edu__date">${esc(e.dates)}${e.current ? '<span class="badge">In progress</span>' : ""}</div>
      <h3>${esc(e.degree)}</h3>
      <p class="edu__school">${esc(e.school)} · ${esc(e.place)}</p>
      ${e.note ? `<p class="edu__note">${esc(e.note)}</p>` : ""}
    </article>`).join("");

  // ---------- Skills / memberships / training ----------
  $("skill-groups").innerHTML = (S.skills || []).map((g) => `
    <div class="card skill reveal">
      <h3>${esc(g.group)}</h3>
      <div class="chips">${(g.items || []).map((s) => `<span>${esc(s)}</span>`).join("")}</div>
    </div>`).join("");
  $("memberships").innerHTML = (S.memberships || []).map((m) => `<li><span>${esc(m.name)}</span><span>${esc(m.years)}</span></li>`).join("");
  $("training").innerHTML = (S.training || []).map((t) => `<li><span>${esc(t.name)}</span><span>${esc(t.date)}</span></li>`).join("");

  // ---------- Contact / footer ----------
  const email = $("contact-email");
  if (L.email) { email.href = `mailto:${L.email}`; email.textContent = L.email; } else email.remove();
  $("contact-links").innerHTML = profileLinks();
  $("footer-copy").textContent = `© ${new Date().getFullYear()} ${P.name}`;

  // ---------- Tabs helper ----------
  function makeTabs(container, types, items, selector) {
    const counts = { all: items.length };
    items.forEach((it) => { counts[it.type] = (counts[it.type] || 0) + 1; });
    const visible = types.filter(([k]) => counts[k]);
    container.innerHTML = visible.map(([k, label], i) =>
      `<button class="tab" role="tab" aria-selected="${i === 0}" data-filter="${k}">${esc(label)}<span class="count">${counts[k]}</span></button>`).join("");
    const list = container.closest("section").querySelectorAll(selector);
    container.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".tab");
      if (!btn) return;
      const f = btn.dataset.filter;
      container.querySelectorAll(".tab").forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      list.forEach((el) => {
        el.hidden = f !== "all" && el.dataset.type !== f;
        if (!el.hidden) el.classList.add("is-in");
      });
    });
  }

  // ---------- Theme toggle ----------
  $("theme-toggle").addEventListener("click", () => {
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.dataset.theme || (sysDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- Mobile nav ----------
  const burger = $("nav-burger"), links = $("nav-links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  });

  // ---------- Nav border + active section + reveal ----------
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const navLinks = [...links.querySelectorAll("a")];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

    root.classList.add("js-ready");
    const rev = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); rev.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));
  }
})();
