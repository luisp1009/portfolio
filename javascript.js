// ============================================================
// LUIS PAREDES PORTFOLIO
// ============================================================


// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  {
    title: "Aerial Recovery",
    url: "https://aerialrecovery.org/",
    image: "./images/aerial-recovery.png",
  },
  {
    title: "The Christendom Coalition",
    url: "https://christendomcoalition.org/",
    image: "./images/christendom-coalition.png",
  },
  {
    title: "Christian Women",
    url: "https://christianwomenforisrael.org/",
    image: "./images/christian-women-for-israel.png",
  },
  {
    title: "Rachel Holt",
    url: "https://rachelholtcom.structure.site/",
    image: "./images/rachel-holt.png",
  },
  {
    title: "Kent Emmons",
    url: "https://kentemmonscom.structure.site/",
    image: "./images/kent-emons.png",
  },
  {
    title: "Conservative HQ",
    url: "https://conservativehq.com/",
    image: "./images/conservativeHq.png",
  },
  {
    title: "Free Press",
    url: "https://freepressfoundation.org/",
    image: "./images/freepress.png",
  },
  {
    title: "L-Strategies",
    url: "https://lstrategies.org",
    image: "./images/l-strategies.jpg",
  },
  {
    title: "Veterans for Trump",
    url: "https://vfaf.us/",
    image: "./images/veterans-for-trump.jpg",
  },
  {
    title: "The Justice Project",
    url: "https://thejusticeprojectcom.structure.site/",
    image: "./images/the-justice-project.jpg",
  },
  {
    title: "Honor the Brave",
    url: "https://honorthebrave.com/",
    image: "./images/honor-the-brave.png",
  },
  {
    title: "Believe Media",
    url: "https://www.believemedia.co/",
    image: "./images/Believe-media.png",
  },
  {
    title: "Pitch Pro",
    url: "https://yourpitchprocom.structure.site/",
    image: "./images/PitchPro.png",
  },
  {
    title: "Beehive Bookkeeping",
    url: "https://beehivebookkeepingco.structure.site/",
    image: "./images/Beehive.png",
  },
  {
    title: "South Shore Press",
    url: "https://southshorepresscom.structure.site/",
    image: "./images/SouthShorePress.png",
  },
  {
    title: "Zero Tolerance",
    url: "https://zerotolerancepac.com",
    image: "./images/ZeroTolerance.png",
  },
  {
    title: "Monetize my Mansion",
    url: "https://monetizemymansion.com",
    image: "./images/monetize-my-mansion.png",
  },
  {
    title: "Patriot Uncensored",
    url: "https://patriotuncensored.com/",
    image: "./images/patriot-uncensored.png",
  },
  {
    title: "Law Enforcement Today",
    url: "https://lawenforcementtoday.com/help-a-hero",
    image: "./images/law-enforcement-today.png",
  },
  {
    title: "Washington Intelligence",
    url: "https://washingtonintelligence.com",
    image: "./images/washington-intelligence.png",
  },
  {
    title: "Feeling Amazing Daily",
    url: "https://feelamazingdaily.com",
    image: "./images/feeling-amazing.png",
  },
  {
    title: "Boutique",
    url: "https://boutiquetemplateclonecom.structure.site/",
    image: "./images/boutique.png",
  },
];

const webApps = [
  {
    title: "NVDA Option Pro",
    url: "https://nvda-option-pro.onrender.com/",
    image: "./images/options.png",
  },
  {
    title: "Vimeo Latest Widget",
    url: "https://vimeo-latest-widget.onrender.com/",
    image: "./images/vimeo.png",
  },
  {
    title: "Site Tree Crawler",
    url: "https://site-tree-crawler.onrender.com/",
    image: "./images/site-crawler.png",
  },
  {
    title: "YouTube Latest Widget",
    url: "https://youtube-latest-widget.onrender.com/",
    image: "./images/youtube-fetch.png",
  },
  {
    title: "Vocabulary Tests",
    url: "https://vocabulary-tests.netlify.app/",
    image: "./images/vocabulary.png",
  }
];


// ============================================================
// GLOBAL
// ============================================================

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


// ============================================================
// SMOOTH SCROLL
// ============================================================

function smoothScrollTo(selector) {
  const target = document.querySelector(selector);

  if (!target) return;

  target.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });
}


// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initTheme();
  initHeader();
  initMobileNav();
  initDesktopNav();
  initActiveNav();
  initProjects();
});


// ============================================================
// YEAR
// ============================================================

function initYear() {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


// ============================================================
// LIGHT / DARK MODE
// ============================================================

function initTheme() {
  const toggle = document.getElementById("dark-mode-toggle");

  if (!toggle) return;

  let enabled = false;

  try {
    enabled = localStorage.getItem("darkMode") === "true";
  } catch (error) {
    console.warn("Unable to read theme preference:", error);
  }

  toggle.checked = enabled;

  document.body.classList.toggle(
    "dark-mode",
    enabled
  );

  toggle.addEventListener("change", () => {
    const isEnabled = toggle.checked;

    document.body.classList.toggle(
      "dark-mode",
      isEnabled
    );

    try {
      localStorage.setItem(
        "darkMode",
        String(isEnabled)
      );
    } catch (error) {
      console.warn(
        "Unable to save theme preference:",
        error
      );
    }
  });
}


// ============================================================
// HEADER SCROLL
// ============================================================

function initHeader() {
  const header = document.getElementById("siteHeader");

  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 12
    );
  };

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true,
    }
  );
}


// ============================================================
// MOBILE NAV
// ============================================================

function initMobileNav() {
  const toggle = document.getElementById(
    "mobileMenuToggle"
  );

  const overlay = document.getElementById(
    "mobileNavOverlay"
  );

  if (!toggle || !overlay) return;

  const menuLinks = overlay.querySelectorAll(
    '.mobile-overlay-links a[href^="#"]'
  );

  let menuOpen = false;


  function setMenu(open) {
    menuOpen = open;

    overlay.classList.toggle(
      "is-open",
      open
    );

    toggle.classList.toggle(
      "is-open",
      open
    );

    document.body.classList.toggle(
      "mobile-menu-open",
      open
    );

    overlay.setAttribute(
      "aria-hidden",
      String(!open)
    );

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    toggle.setAttribute(
      "aria-label",
      open
        ? "Close navigation"
        : "Open navigation"
    );
  }


  toggle.addEventListener("click", () => {
    setMenu(!menuOpen);
  });


  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href) return;

      event.preventDefault();

      setMenu(false);

      window.setTimeout(() => {
        smoothScrollTo(href);
      }, reducedMotion ? 0 : 130);
    });
  });


  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        menuOpen
      ) {
        setMenu(false);
      }
    }
  );


  window.addEventListener(
    "resize",
    () => {
      if (
        window.innerWidth >= 992 &&
        menuOpen
      ) {
        setMenu(false);
      }
    },
    {
      passive: true,
    }
  );
}


// ============================================================
// DESKTOP NAV
// ============================================================

function initDesktopNav() {
  document
    .querySelectorAll(
      '.desktop-navigation a[href^="#"]'
    )
    .forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          const href =
            link.getAttribute("href");

          if (
            !href ||
            href === "#"
          ) {
            return;
          }

          event.preventDefault();

          smoothScrollTo(href);
        }
      );
    });
}


// ============================================================
// ACTIVE NAV LINK
// ============================================================

function initActiveNav() {
  const links = document.querySelectorAll(
    [
      '.desktop-navigation .nav-link[href^="#"]',
      '.mobile-overlay-links a[href^="#"]',
    ].join(",")
  );

  const sections = [
    "#main",
    "#projects",
    "#about",
    "#contact",
  ]
    .map((selector) =>
      document.querySelector(selector)
    )
    .filter(Boolean);

  if (!sections.length) return;


  function setActive(id) {
    links.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
          `#${id}`
      );
    });
  }


  function updateActiveSection() {
    const marker =
      window.scrollY +
      160;

    let current =
      sections[0];


    sections.forEach((section) => {
      if (
        marker >=
        section.offsetTop
      ) {
        current = section;
      }
    });


    const atBottom =
      window.innerHeight +
      window.scrollY >=
      document.documentElement.scrollHeight -
        10;


    if (atBottom) {
      const contact =
        document.querySelector(
          "#contact"
        );

      if (contact) {
        current = contact;
      }
    }


    setActive(
      current.id
    );
  }


  updateActiveSection();


  window.addEventListener(
    "scroll",
    updateActiveSection,
    {
      passive: true,
    }
  );


  window.addEventListener(
    "resize",
    updateActiveSection,
    {
      passive: true,
    }
  );
}


// ============================================================
// PROJECTS
// ============================================================

function initProjects() {
  const list =
    document.getElementById(
      "workProjectList"
    );

  const projectLink =
    document.getElementById(
      "workProjectLink"
    );

  const projectImage =
    document.getElementById(
      "workProjectImage"
    );

  const browserContent =
    document.getElementById(
      "workBrowserContent"
    );

  const previewNumber =
    document.getElementById(
      "workPreviewNumber"
    );

  const previewTitle =
    document.getElementById(
      "workPreviewTitle"
    );

  const previewProject =
    document.getElementById(
      "workPreviewProject"
    );

  const previewDomain =
    document.getElementById(
      "workPreviewDomain"
    );

  const projectMonogram =
    document.getElementById(
      "workProjectMonogram"
    );

  const projectPreview =
    document.getElementById(
      "workProjectPreview"
    );

  const projectVisual =
    document.querySelector(
      ".work-project-visual"
    );

  const browserWindow =
    document.querySelector(
      ".work-browser-window"
    );

  const cursorView =
    document.getElementById(
      "workCursorView"
    );

  const mouseLight =
    document.getElementById(
      "workMouseLight"
    );

  const projectTypeLabel =
    document.getElementById(
      "workProjectTypeLabel"
    );

  const projectDescription =
    document.getElementById(
      "workProjectDescription"
    );

  const projectDetailLabel =
    document.getElementById(
      "workProjectDetailLabel"
    );

  const categoryTabs =
    document.querySelectorAll(
      ".project-type-tab"
    );


  if (
    !list ||
    !projectLink ||
    !projectImage ||
    !browserContent ||
    !previewNumber ||
    !previewTitle ||
    !previewProject ||
    !previewDomain ||
    !projectMonogram
  ) {
    return;
  }


  // ==========================================================
  // CATEGORY STATE
  // ==========================================================

  let currentCategory =
    "websites";

  let activeProjects =
    projects;


  // ==========================================================
  // HELPERS
  // ==========================================================

  function escapeHTML(value) {
    return String(value)
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      );
  }


  function makeMonogram(title) {
    const words =
      title
        .trim()
        .split(/\s+/)
        .filter(Boolean);


    if (!words.length) {
      return "LP";
    }


    if (words.length === 1) {
      return words[0]
        .replace(
          /[^A-Za-z0-9]/g,
          ""
        )
        .slice(
          0,
          3
        )
        .toUpperCase();
    }


    return words
      .slice(
        0,
        3
      )
      .map(
        (word) =>
          word[0]
      )
      .join("")
      .toUpperCase();
  }


  function getDomain(url) {
    try {
      return new URL(url)
        .hostname
        .replace(
          /^www\./,
          ""
        );
    } catch {
      return "Live project";
    }
  }


  // ==========================================================
  // IMAGE FALLBACK
  // ==========================================================

  projectImage.addEventListener(
    "error",
    () => {
      browserContent.classList.add(
        "image-missing"
      );
    }
  );


  projectImage.addEventListener(
    "load",
    () => {
      browserContent.classList.remove(
        "image-missing"
      );
    }
  );


  // ==========================================================
  // SELECT PROJECT
  // ==========================================================

  function selectProject(index) {
    const project =
      activeProjects[index];


    if (!project) {
      return;
    }


    const projectItems =
      list.querySelectorAll(
        ".work-project-item"
      );


    projectItems.forEach(
      (
        item,
        itemIndex
      ) => {
        const active =
          itemIndex ===
          index;


        item.classList.toggle(
          "active",
          active
        );


        item.setAttribute(
          "aria-selected",
          String(active)
        );
      }
    );


    // ========================================================
    // LINK
    // ========================================================

    projectLink.href =
      project.url;


    projectLink.setAttribute(
      "aria-label",
      `Visit ${project.title}`
    );


    // ========================================================
    // NUMBER
    // ========================================================

    previewNumber.textContent =
      `${String(
        index + 1
      ).padStart(
        2,
        "0"
      )} / ${String(
        activeProjects.length
      ).padStart(
        2,
        "0"
      )}`;


    // ========================================================
    // PROJECT INFO
    // ========================================================

    previewTitle.textContent =
      project.title;


    previewProject.textContent =
      project.title;


    previewDomain.textContent =
      getDomain(
        project.url
      );


    projectMonogram.textContent =
      makeMonogram(
        project.title
      );


    // ========================================================
    // IMAGE
    // ========================================================

    browserContent.classList.remove(
      "image-missing"
    );


    projectImage.alt =
      `${project.title} project preview`;


    projectImage.src =
      project.image;


    // ========================================================
    // CATEGORY-SPECIFIC COPY
    // ========================================================

    if (
      currentCategory ===
      "apps"
    ) {
      if (projectTypeLabel) {
        projectTypeLabel.textContent =
          "LIVE WEB APPLICATION";
      }


      if (projectDetailLabel) {
        projectDetailLabel.textContent =
          "LIVE APP";
      }


      if (projectDescription) {
        projectDescription.textContent =
          "Select an application from the list to preview it. Click the image above to open the live web app.";
      }
    } else {
      if (projectTypeLabel) {
        projectTypeLabel.textContent =
          "LIVE WEBSITE";
      }


      if (projectDetailLabel) {
        projectDetailLabel.textContent =
          "LIVE SITE";
      }


      if (projectDescription) {
        projectDescription.textContent =
          "Select a website from the list to preview it. Click the image above to visit the live website.";
      }
    }


    // ========================================================
    // PREVIEW ANIMATION
    // ========================================================

    if (
      projectPreview &&
      typeof projectPreview.animate ===
        "function" &&
      !reducedMotion
    ) {
      projectPreview.animate(
        [
          {
            opacity: 0.72,
            transform:
              "translateY(4px)",
          },

          {
            opacity: 1,
            transform:
              "translateY(0)",
          },
        ],
        {
          duration: 220,

          easing:
            "cubic-bezier(.2,.8,.2,1)",
        }
      );
    }
  }


  // ==========================================================
  // RENDER PROJECT LIST
  // ==========================================================

  function renderProjects() {
    const projectTypeText =
      currentCategory ===
      "apps"
        ? "Web application"
        : "Website project";


    list.innerHTML =
      activeProjects
        .map(
          (
            project,
            index
          ) => `
            <button
              class="work-project-item${
                index === 0
                  ? " active"
                  : ""
              }"
              type="button"
              role="tab"
              aria-selected="${
                index === 0
                  ? "true"
                  : "false"
              }"
              data-project-index="${index}"
            >

              <span class="work-project-number">
                ${String(
                  index + 1
                ).padStart(
                  2,
                  "0"
                )}
              </span>

              <span class="work-project-name">
                ${escapeHTML(
                  project.title
                )}

                <small>
                  ${projectTypeText}
                </small>
              </span>

              <span class="work-project-arrow">
                ↗
              </span>

            </button>
          `
        )
        .join("");


    // RESET SCROLL POSITION
    list.scrollTop = 0;


    // ADD EVENTS TO NEW ITEMS
    list
      .querySelectorAll(
        ".work-project-item"
      )
      .forEach(
        (item) => {
          const index =
            Number(
              item.dataset
                .projectIndex
            );


          item.addEventListener(
            "mouseenter",
            () => {
              selectProject(
                index
              );
            }
          );


          item.addEventListener(
            "focus",
            () => {
              selectProject(
                index
              );
            }
          );


          item.addEventListener(
            "click",
            () => {
              selectProject(
                index
              );
            }
          );
        }
      );


    selectProject(0);
  }


  // ==========================================================
  // CATEGORY TABS
  // ==========================================================

  categoryTabs.forEach(
    (tab) => {
      tab.addEventListener(
        "click",
        () => {
          const category =
            tab.dataset
              .projectType;


          if (
            !category ||
            category ===
              currentCategory
          ) {
            return;
          }


          currentCategory =
            category;


          // ==================================================
          // SELECT DATA ARRAY
          // ==================================================

          activeProjects =
            currentCategory ===
            "apps"
              ? webApps
              : projects;


          // ==================================================
          // UPDATE TAB STATE
          // ==================================================

          categoryTabs.forEach(
            (button) => {
              const isActive =
                button ===
                tab;


              button.classList.toggle(
                "active",
                isActive
              );


              button.setAttribute(
                "aria-selected",
                String(
                  isActive
                )
              );
            }
          );


          // ==================================================
          // RENDER NEW CATEGORY
          // ==================================================

          renderProjects();
        }
      );
    }
  );


  // ==========================================================
  // FIRST RENDER
  // ==========================================================

  renderProjects();


  // ==========================================================
  // MOUSE / TILT EFFECT
  // ==========================================================

  const canHover =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;


  if (
    !projectVisual ||
    !browserWindow ||
    !cursorView ||
    !mouseLight ||
    !canHover ||
    reducedMotion
  ) {
    return;
  }


  let targetRotateX = 0;
  let targetRotateY = 0;

  let currentRotateX = 0;
  let currentRotateY = 0;

  let animationFrame = null;


  function animateTilt() {
    currentRotateX +=
      (
        targetRotateX -
        currentRotateX
      ) * 0.14;


    currentRotateY +=
      (
        targetRotateY -
        currentRotateY
      ) * 0.14;


    browserWindow.style.transform =
      `rotateX(${currentRotateX}deg) ` +
      `rotateY(${currentRotateY}deg)`;


    const difference =
      Math.abs(
        targetRotateX -
        currentRotateX
      ) +
      Math.abs(
        targetRotateY -
        currentRotateY
      );


    if (
      difference >
      0.01
    ) {
      animationFrame =
        requestAnimationFrame(
          animateTilt
        );
    } else {
      animationFrame =
        null;
    }
  }


  function startTilt() {
    if (
      !animationFrame
    ) {
      animationFrame =
        requestAnimationFrame(
          animateTilt
        );
    }
  }


  projectVisual.addEventListener(
    "pointermove",
    (event) => {
      const rect =
        projectVisual
          .getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      const percentX =
        x /
        rect.width;


      const percentY =
        y /
        rect.height;


      targetRotateY =
        (
          percentX -
          0.5
        ) * 4.5;


      targetRotateX =
        (
          0.5 -
          percentY
        ) * 3.5;


      // CURSOR

      cursorView.style.left =
        `${x}px`;


      cursorView.style.top =
        `${y}px`;


      // LIGHT

      mouseLight.style.left =
        `${x}px`;


      mouseLight.style.top =
        `${y}px`;


      startTilt();
    }
  );


  projectVisual.addEventListener(
    "pointerleave",
    () => {
      targetRotateX = 0;

      targetRotateY = 0;

      startTilt();
    }
  );
}