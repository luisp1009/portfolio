// ============================================================
// LUIS PAREDES PORTFOLIO
// ============================================================

// ============================================================
// AI CONFIGURATION
// ============================================================

/*
  LOCAL OLLAMA + NODE
  -------------------

  Leave this blank:

  const PORTFOLIO_AI_API = "";

  When you run:

  npm run dev

  the requests use:

  /api/health
  /api/chat


  GITHUB PAGES
  ------------

  GitHub Pages cannot directly run Ollama.

  Once you host your backend somewhere,
  replace this with the backend URL.

  Example:

  const PORTFOLIO_AI_API =
    "https://api.luis-paredes.com";
*/

const PORTFOLIO_AI_API = "";

// ============================================================
// PROJECTS
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

// ============================================================
// REDUCED MOTION
// ============================================================

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// ============================================================
// SCROLL HELPER
// ============================================================

function smoothScrollTo(selector) {
  const target = document.querySelector(selector);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",

    block: "start",
  });
}

// ============================================================
// YEAR
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

// ============================================================
// LIGHT / DARK MODE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("dark-mode-toggle");

  if (!toggle) {
    return;
  }

  let enabled = false;

  try {
    enabled = localStorage.getItem("darkMode") === "true";
  } catch (error) {
    console.warn("Unable to read theme preference:", error);
  }

  toggle.checked = enabled;

  document.body.classList.toggle("dark-mode", enabled);

  toggle.addEventListener("change", function () {
    const isEnabled = toggle.checked;

    document.body.classList.toggle("dark-mode", isEnabled);

    try {
      localStorage.setItem("darkMode", String(isEnabled));
    } catch (error) {
      console.warn("Unable to save theme preference:", error);
    }
  });
});

// ============================================================
// HEADER SCROLL
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");

  if (!header) {
    return;
  }

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true,
  });
});

// ============================================================
// MOBILE NAVIGATION
//
// ONE BUTTON:
// CLOSED = HAMBURGER
// OPEN   = X
//
// Header and logo never move.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobileMenuToggle");

  const overlay = document.getElementById("mobileNavOverlay");

  if (!toggle || !overlay) {
    return;
  }

  const menuLinks = overlay.querySelectorAll(
    '.mobile-overlay-links a[href^="#"]',
  );

  let menuOpen = false;

  // ========================================================
  // OPEN
  // ========================================================

  function openMenu() {
    if (menuOpen) {
      return;
    }

    menuOpen = true;

    overlay.classList.add("is-open");

    toggle.classList.add("is-open");

    overlay.setAttribute("aria-hidden", "false");

    toggle.setAttribute("aria-expanded", "true");

    toggle.setAttribute("aria-label", "Close navigation");

    document.body.classList.add("mobile-menu-open");
  }

  // ========================================================
  // CLOSE
  // ========================================================

  function closeMenu() {
    if (!menuOpen) {
      return;
    }

    menuOpen = false;

    overlay.classList.remove("is-open");

    toggle.classList.remove("is-open");

    overlay.setAttribute("aria-hidden", "true");

    toggle.setAttribute("aria-expanded", "false");

    toggle.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("mobile-menu-open");
  }

  // ========================================================
  // SAME BUTTON OPEN / CLOSE
  // ========================================================

  toggle.addEventListener("click", function () {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // ========================================================
  // MENU LINKS
  // ========================================================

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      event.preventDefault();

      closeMenu();

      /*
              Let the overlay begin disappearing
              before the page scrolls.
            */

      window.setTimeout(
        function () {
          smoothScrollTo(href);
        },
        reducedMotion ? 0 : 130,
      );
    });
  });

  // ========================================================
  // ESC
  // ========================================================

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
    }
  });

  // ========================================================
  // RESIZE
  // ========================================================

  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth >= 992 && menuOpen) {
        closeMenu();
      }
    },
    {
      passive: true,
    },
  );
});

// ============================================================
// DESKTOP NAVIGATION
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll('.desktop-navigation a[href^="#"]')
    .forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (!href || href === "#") {
          return;
        }

        event.preventDefault();

        smoothScrollTo(href);
      });
    });
});

// ============================================================
// ACTIVE NAV
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(
    [
      '.desktop-navigation .nav-link[href^="#"]',
      '.mobile-overlay-links a[href^="#"]',
    ].join(","),
  );

  const sectionSelectors = ["#main", "#projects", "#about", "#contact"];

  const sections = sectionSelectors
    .map(function (selector) {
      return document.querySelector(selector);
    })
    .filter(Boolean);

  function setActiveLink(id) {
    links.forEach(function (link) {
      const href = link.getAttribute("href");

      /*
            Ask AI lives inside Contact.

            When Contact is active we leave
            Ask AI as its own click destination,
            but Contact receives the scroll state.
          */

      link.classList.toggle("active", href === `#${id}`);
    });
  }

  function updateActiveSection() {
    const offset = 155;

    let current = sections[0];

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section;
      }
    });

    if (current) {
      setActiveLink(current.id);
    }
  }

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });
});

// ============================================================
// PROJECT SHOWCASE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("workProjectList");

  const projectLink = document.getElementById("workProjectLink");

  const projectImage = document.getElementById("workProjectImage");

  const browserContent = document.getElementById("workBrowserContent");

  const previewNumber = document.getElementById("workPreviewNumber");

  const previewTitle = document.getElementById("workPreviewTitle");

  const previewProject = document.getElementById("workPreviewProject");

  const previewDomain = document.getElementById("workPreviewDomain");

  const projectMonogram = document.getElementById("workProjectMonogram");

  const projectPreview = document.getElementById("workProjectPreview");

  const projectVisual = document.querySelector(".work-project-visual");

  const browserWindow = document.querySelector(".work-browser-window");

  const cursorView = document.getElementById("workCursorView");

  const mouseLight = document.getElementById("workMouseLight");

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

  // ========================================================
  // ESCAPE HTML
  // ========================================================

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")

      .replaceAll("<", "&lt;")

      .replaceAll(">", "&gt;")

      .replaceAll('"', "&quot;")

      .replaceAll("'", "&#039;");
  }

  // ========================================================
  // PROJECT LIST
  // ========================================================

  function renderProjectList() {
    list.innerHTML = projects
      .map(function (project, index) {
        return `
                <button
                  class="work-project-item${index === 0 ? " active" : ""}"
                  type="button"
                  role="tab"
                  aria-selected="${index === 0 ? "true" : "false"}"
                  data-project-index="${index}"
                >

                  <span class="work-project-number">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <span class="work-project-name">

                    ${escapeHTML(project.title)}

                    <small>
                      Website project
                    </small>

                  </span>

                  <span class="work-project-arrow">
                    ↗
                  </span>

                </button>
              `;
      })
      .join("");
  }

  // ========================================================
  // INITIALS
  // ========================================================

  function makeMonogram(title) {
    const words = title.trim().split(/\s+/).filter(Boolean);

    if (!words.length) {
      return "LP";
    }

    if (words.length === 1) {
      return words[0]
        .replace(/[^A-Za-z0-9]/g, "")
        .slice(0, 3)
        .toUpperCase();
    }

    return words
      .slice(0, 3)
      .map(function (word) {
        return word[0];
      })
      .join("")
      .toUpperCase();
  }

  // ========================================================
  // DOMAIN
  // ========================================================

  function getDomain(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (error) {
      return "Live website";
    }
  }

  // ========================================================
  // SELECT PROJECT
  // ========================================================

  function selectProject(index) {
    const project = projects[index];

    if (!project) {
      return;
    }

    const items = list.querySelectorAll(".work-project-item");

    items.forEach(function (item, itemIndex) {
      const active = itemIndex === index;

      item.classList.toggle("active", active);

      item.setAttribute("aria-selected", String(active));
    });

    // LINK

    projectLink.href = project.url;

    projectLink.setAttribute("aria-label", `Visit ${project.title} website`);

    // NUMBER

    previewNumber.textContent = `${String(index + 1).padStart(
      2,
      "0",
    )} / ${String(projects.length).padStart(2, "0")}`;

    // TEXT

    previewTitle.textContent = project.title;

    previewProject.textContent = project.title;

    previewDomain.textContent = getDomain(project.url);

    projectMonogram.textContent = makeMonogram(project.title);

    // IMAGE

    browserContent.classList.remove("image-missing");

    projectImage.alt = `${project.title} website preview`;

    projectImage.src = project.image;

    // TRANSITION

    if (
      projectPreview &&
      typeof projectPreview.animate === "function" &&
      !reducedMotion
    ) {
      projectPreview.animate(
        [
          {
            opacity: 0.72,

            transform: "translateY(4px)",
          },

          {
            opacity: 1,

            transform: "translateY(0)",
          },
        ],
        {
          duration: 220,

          easing: "cubic-bezier(.2,.8,.2,1)",
        },
      );
    }
  }

  // ========================================================
  // RENDER
  // ========================================================

  renderProjectList();

  // ========================================================
  // IMAGE FALLBACK
  // ========================================================

  projectImage.addEventListener("error", function () {
    browserContent.classList.add("image-missing");
  });

  projectImage.addEventListener("load", function () {
    browserContent.classList.remove("image-missing");
  });

  // ========================================================
  // PROJECT EVENTS
  // ========================================================

  list.querySelectorAll(".work-project-item").forEach(function (item) {
    const index = Number(item.dataset.projectIndex);

    // HOVER

    item.addEventListener("mouseenter", function () {
      selectProject(index);
    });

    // KEYBOARD

    item.addEventListener("focus", function () {
      selectProject(index);
    });

    // MOBILE CLICK

    item.addEventListener("click", function () {
      selectProject(index);
    });
  });

  selectProject(0);

  // ========================================================
  // PROJECT MOUSE EFFECT
  // ========================================================

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
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
    currentRotateX += (targetRotateX - currentRotateX) * 0.14;

    currentRotateY += (targetRotateY - currentRotateY) * 0.14;

    browserWindow.style.transform = `rotateX(${currentRotateX}deg)
         rotateY(${currentRotateY}deg)`;

    const difference =
      Math.abs(targetRotateX - currentRotateX) +
      Math.abs(targetRotateY - currentRotateY);

    if (difference > 0.01) {
      animationFrame = requestAnimationFrame(animateTilt);
    } else {
      animationFrame = null;
    }
  }

  function startTilt() {
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(animateTilt);
    }
  }

  projectVisual.addEventListener("pointermove", function (event) {
    const rect = projectVisual.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const percentX = x / rect.width;

    const percentY = y / rect.height;

    targetRotateY = (percentX - 0.5) * 4.5;

    targetRotateX = (0.5 - percentY) * 3.5;

    // CURSOR

    cursorView.style.left = `${x}px`;

    cursorView.style.top = `${y}px`;

    // LIGHT

    mouseLight.style.left = `${x}px`;

    mouseLight.style.top = `${y}px`;

    startTilt();
  });

  projectVisual.addEventListener("pointerleave", function () {
    targetRotateX = 0;

    targetRotateY = 0;

    startTilt();
  });
});

// ============================================================
// PORTFOLIO AI / OLLAMA
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const aiStatus = document.getElementById("aiStatus");

  const aiStatusDot = document.getElementById("aiStatusDot");

  const chatForm = document.getElementById("chatForm");

  const chatInput = document.getElementById("chatInput");

  const chatMessages = document.getElementById("chatMessages");

  const sendButton = document.getElementById("sendButton");

  const suggestions = document.querySelectorAll(
    ".portfolio-question-suggestion",
  );

  if (!chatForm || !chatInput || !chatMessages || !sendButton) {
    return;
  }

  // ========================================================
  // API
  // ========================================================

  const configuredApi = PORTFOLIO_AI_API.trim().replace(/\/$/, "");

  const localHosts = ["localhost", "127.0.0.1"];

  const isLocal = localHosts.includes(window.location.hostname);

  /*
      LOCAL:

      API_BASE = ""

      So:
      /api/chat
      /api/health


      GITHUB PAGES WITHOUT SERVER:

      API_BASE = null


      REMOTE SERVER:

      API_BASE =
      https://api.example.com
    */

  const API_BASE = configuredApi || (isLocal ? "" : null);

  // ========================================================
  // STATUS
  // ========================================================

  function setAIStatus(message, state = "") {
    if (aiStatus) {
      aiStatus.textContent = message;
    }

    if (aiStatusDot) {
      aiStatusDot.classList.remove("online", "offline");

      if (state) {
        aiStatusDot.classList.add(state);
      }
    }
  }

  // ========================================================
  // MESSAGE
  // ========================================================

  function addChatMessage(text, type) {
    const message = document.createElement("div");

    message.className =
      "portfolio-chat-message " +
      (type === "user"
        ? "portfolio-user-message"
        : "portfolio-assistant-message");

    if (type === "assistant") {
      const avatar = document.createElement("div");

      avatar.className = "portfolio-message-avatar";

      avatar.textContent = "✦";

      const content = document.createElement("div");

      content.textContent = text;

      message.appendChild(avatar);

      message.appendChild(content);
    } else {
      message.textContent = text;
    }

    chatMessages.appendChild(message);

    chatMessages.scrollTo({
      top: chatMessages.scrollHeight,

      behavior: reducedMotion ? "auto" : "smooth",
    });

    return message;
  }

  // ========================================================
  // INPUT SIZE
  // ========================================================

  function resizeChatInput() {
    chatInput.style.height = "auto";

    chatInput.style.height = `${Math.min(chatInput.scrollHeight, 120)}px`;
  }

  // ========================================================
  // STATUS CHECK
  // ========================================================

  async function checkAIStatus() {
    /*
        GitHub Pages without a configured
        server should NOT request:
        github.io/api/health
      */

    if (!API_BASE) {
      setAIStatus("AI backend not connected", "offline");

      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/health`, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Health check failed");
      }

      const data = await response.json();

      if (data.ollama === "online") {
        setAIStatus("Ollama online", "online");
      } else {
        setAIStatus("Ollama offline", "offline");
      }
    } catch (error) {
      console.warn("AI health check:", error);

      setAIStatus("AI unavailable", "offline");
    }
  }

  // ========================================================
  // ASK PORTFOLIO
  // ========================================================

  async function askPortfolio(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      return;
    }

    addChatMessage(cleanQuestion, "user");

    chatInput.value = "";

    resizeChatInput();

    // ======================================================
    // NO REMOTE BACKEND
    // ======================================================

    if (!API_BASE) {
      window.setTimeout(function () {
        addChatMessage(
          "The portfolio AI interface is ready, but the Ollama backend has not been connected to this deployed site yet.",
          "assistant",
        );
      }, 250);

      return;
    }

    sendButton.disabled = true;

    chatInput.disabled = true;

    const loading = addChatMessage("Thinking...", "assistant");

    loading.classList.add("portfolio-loading-message");

    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },

        body: JSON.stringify({
          message: cleanQuestion,
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch (error) {
        data = {};
      }

      loading.remove();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "The portfolio assistant could not answer that question.",
        );
      }

      const answer = (data.answer || "").trim();

      if (!answer) {
        throw new Error("The AI returned an empty response.");
      }

      addChatMessage(answer, "assistant");
    } catch (error) {
      loading.remove();

      console.error("Portfolio AI error:", error);

      addChatMessage(
        error.message || "The portfolio AI is currently unavailable.",
        "assistant",
      );
    } finally {
      sendButton.disabled = false;

      chatInput.disabled = false;

      chatInput.focus();
    }
  }

  // ========================================================
  // FORM
  // ========================================================

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    askPortfolio(chatInput.value);
  });

  // ========================================================
  // ENTER TO SEND
  // ========================================================

  chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!sendButton.disabled) {
        chatForm.requestSubmit();
      }
    }
  });

  // ========================================================
  // RESIZE INPUT
  // ========================================================

  chatInput.addEventListener("input", resizeChatInput);

  // ========================================================
  // SUGGESTIONS
  // ========================================================

  suggestions.forEach(function (button) {
    button.addEventListener("click", function () {
      askPortfolio(button.textContent.trim());
    });
  });

  // ========================================================
  // INITIAL CHECK
  // ========================================================

  checkAIStatus();
});
