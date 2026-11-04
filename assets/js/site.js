const siteContent = {
  publications: window.PAPERS || [],
  news: window.ACTIVITY_EN || [],
  jaActivity: window.ACTIVITY_JA || [],
  jaWriting: window.WRITING_JA || [],
  paperNotes: window.PAPER_NOTES || [],
  editorialRoles: window.EDITORIAL_ROLES_EN || [],
  awards: window.AWARDS_EN || [],
  archiveConferences: window.CONFERENCE_ARCHIVE_EN || [],
  studentsJa: window.STUDENTS_JA || { current: [], doctoral: [], masters: [], outreach: [] },
  committeesJa: window.COMMITTEE_ROLES_JA || [],
  profileEn: window.PROFILE_EN || { education: [], career: [], memberships: [], funding: [] },
  profileJa: window.PROFILE_JA || { education: [], career: [], memberships: [], funding: [] }
};

const createContentLink = ({ label, url }) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  return link;
};

const createPublicationNote = (note) => {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryText = document.createElement("span");
  const kind = document.createElement("span");
  const title = document.createElement("span");
  const state = document.createElement("span");
  const body = document.createElement("div");
  const kindClass = note.kind.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  details.className = `publication-note publication-note-${kindClass}`;
  summaryText.className = "publication-note-summary";
  kind.className = "publication-note-kind";
  title.className = "publication-note-title";
  state.className = "publication-note-state";
  body.className = "publication-note-body";
  kind.textContent = note.kind;
  title.textContent = note.title;

  summaryText.append(kind, title);
  summary.append(summaryText, state);
  details.append(summary);

  (note.paragraphs || []).forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    body.append(paragraph);
  });

  if (note.code) {
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = note.code;
    pre.append(code);
    body.append(pre);
  }

  if (note.links?.length) {
    const links = document.createElement("div");
    links.className = "publication-note-links";
    note.links.forEach((link) => links.append(createContentLink(link)));
    body.append(links);
  }

  details.append(body);
  return details;
};

const renderPublications = (list, publications = [], paperNotes = []) => {
  const sortedPublications = [...publications].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  const notesByPaper = paperNotes.reduce((notes, note) => {
    const paperNotesForId = notes.get(note.paperId) || [];
    paperNotesForId.push(note);
    notes.set(note.paperId, paperNotesForId);
    return notes;
  }, new Map());

  sortedPublications.forEach((item) => {
    const listItem = document.createElement("li");
    const article = document.createElement("article");
    const year = document.createElement("p");
    const content = document.createElement("div");
    const heading = document.createElement("h3");
    const title = createContentLink({ label: item.title, url: item.url });
    const citation = document.createElement("p");
    const links = document.createElement("p");

    article.className = "publication";
    year.className = "publication-year";
    year.textContent = item.year || item.date.slice(0, 4);
    citation.textContent = item.authors;
    links.className = "publication-links";

    if (item.venue) {
      citation.append(document.createTextNode(" · "));
      const venue = document.createElement("em");
      venue.textContent = item.venue;
      citation.append(venue);
    }

    (item.links || []).forEach((link) => links.append(createContentLink(link)));
    heading.append(title);
    content.append(heading, citation, links);
    (notesByPaper.get(item.id) || []).forEach((note) =>
      content.append(createPublicationNote(note))
    );
    article.append(year, content);
    listItem.append(article);
    list.append(listItem);
  });
};

const renderNews = (list, news = []) => {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  sortedNews.forEach((item) => {
    const listItem = document.createElement("li");
    const date = document.createElement("time");
    const summary = document.createElement("p");

    date.dateTime = item.date;
    date.textContent = item.dateLabel;
    summary.textContent = item.text;

    (item.links || []).forEach((link) => {
      summary.append(document.createTextNode(" "));
      summary.append(createContentLink({ label: `${link.label} ↗`, url: link.url }));
    });

    listItem.append(date, summary);
    list.append(listItem);
  });
};

const renderJapaneseActivity = (container, activities = []) => {
  const sortedActivities = [...activities].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  sortedActivities.forEach((item) => {
    const article = document.createElement("article");
    const date = document.createElement("p");
    const heading = document.createElement("h3");
    const summary = document.createElement("p");
    const link = createContentLink({ label: `${item.linkLabel} ↗`, url: item.url });

    article.className = "feature-card";
    date.className = "card-label";
    date.textContent = item.dateLabel;
    heading.textContent = item.title;
    summary.textContent = item.text;
    link.className = "text-link";

    article.append(date, heading, summary, link);
    container.append(article);
  });
};

const renderJapaneseWriting = (container, writings = []) => {
  const sortedWritings = [...writings].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  sortedWritings.forEach((item) => {
    const article = document.createElement("article");
    const year = document.createElement("p");
    const heading = document.createElement("h3");
    const title = createContentLink({ label: item.title, url: item.url });
    const description = document.createElement("p");

    year.className = "publication-year";
    year.textContent = item.year || item.date.slice(0, 4);
    description.textContent = item.description;

    if (item.related) {
      description.append(document.createTextNode(" "));
      description.append(createContentLink(item.related));
    }

    heading.append(title);
    article.append(year, heading, description);
    container.append(article);
  });
};

const renderAcademicRecords = (list, records = []) => {
  records.forEach((item) => {
    const listItem = document.createElement("li");
    const period = document.createElement("p");
    const content = document.createElement("div");
    const title = document.createElement("h4");
    const detail = document.createElement("p");

    period.className = "record-period";
    period.textContent = item.period;
    if (item.url) {
      title.append(createContentLink({ label: item.title, url: item.url }));
    } else {
      title.textContent = item.title;
    }
    detail.textContent = item.detail;

    content.append(title, detail);
    listItem.append(period, content);
    list.append(listItem);
  });
};

const renderMemberships = (list, memberships = []) => {
  memberships.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.append(createContentLink(item));
    list.append(listItem);
  });
};

const renderJapaneseStudents = (list, students = []) => {
  students.forEach((item) => {
    const listItem = document.createElement("li");
    const period = document.createElement("p");
    const content = document.createElement("div");
    const name = document.createElement("h4");

    period.className = "student-period";
    period.textContent = item.period;
    name.textContent = item.romanized
      ? `${item.name} / ${item.romanized}`
      : item.name;
    content.append(name);

    if (item.thesis) {
      const thesis = document.createElement("p");
      const label = document.createElement("span");
      label.className = "student-label";
      label.textContent = "修士論文";
      thesis.append(label, document.createTextNode(item.thesis));
      content.append(thesis);
    }

    if (item.detail) {
      const detail = document.createElement("p");
      detail.textContent = item.detail;
      content.append(detail);
    }

    listItem.append(period, content);
    list.append(listItem);
  });
};

const renderJapaneseCommitteeRoles = (container, groups = []) => {
  groups.forEach((group) => {
    const article = document.createElement("article");
    const heading = document.createElement("h3");
    const roles = document.createElement("ul");

    article.className = "committee-group";
    heading.textContent = group.organization;
    roles.className = "committee-role-list";

    (group.roles || []).forEach((item) => {
      const listItem = document.createElement("li");
      const title = document.createElement("span");
      title.textContent = item.title;
      listItem.append(title);

      if (item.period) {
        const period = document.createElement("span");
        period.className = "committee-period";
        period.textContent = item.period;
        listItem.append(period);
      }

      roles.append(listItem);
    });

    article.append(heading, roles);
    container.append(article);
  });
};

const makeListCollapsible = (list) => {
  const items = [...list.children];
  const visibleItems = Number.parseInt(list.dataset.visibleItems || "0", 10);
  if (!visibleItems || items.length <= visibleItems) return;

  const button = document.createElement("button");
  const moreLabel = list.dataset.moreLabel || "Show older items";
  const lessLabel = list.dataset.lessLabel || "Show fewer items";
  const hiddenCount = items.length - visibleItems;
  let expanded = false;

  button.type = "button";
  button.className = "list-toggle";

  const update = () => {
    items.slice(visibleItems).forEach((item) => {
      item.hidden = !expanded;
    });
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? lessLabel : `${moreLabel} (${hiddenCount})`;
  };

  button.addEventListener("click", () => {
    expanded = !expanded;
    update();
  });

  update();
  list.insertAdjacentElement("afterend", button);
};

document.querySelectorAll("[data-content-list]").forEach((list) => {
  const contentType = list.dataset.contentList;
  if (contentType === "publications") {
    renderPublications(list, siteContent.publications, siteContent.paperNotes);
  }
  if (contentType === "news") renderNews(list, siteContent.news);
  if (contentType === "ja-activity") renderJapaneseActivity(list, siteContent.jaActivity);
  if (contentType === "ja-writing") renderJapaneseWriting(list, siteContent.jaWriting);
  if (contentType === "editorial-roles") {
    renderAcademicRecords(list, siteContent.editorialRoles);
  }
  if (contentType === "awards") renderAcademicRecords(list, siteContent.awards);
  if (contentType === "archive-conferences") {
    renderAcademicRecords(list, siteContent.archiveConferences);
  }
  if (contentType === "students-ja-current") {
    renderJapaneseStudents(list, siteContent.studentsJa.current);
  }
  if (contentType === "students-ja-doctoral") {
    renderJapaneseStudents(list, siteContent.studentsJa.doctoral);
  }
  if (contentType === "students-ja-masters") {
    renderJapaneseStudents(list, siteContent.studentsJa.masters);
  }
  if (contentType === "outreach-ja") {
    renderAcademicRecords(list, siteContent.studentsJa.outreach);
  }
  if (contentType === "committees-ja") {
    renderJapaneseCommitteeRoles(list, siteContent.committeesJa);
  }
  if (contentType === "profile-en-education") {
    renderAcademicRecords(list, siteContent.profileEn.education);
  }
  if (contentType === "profile-en-career") {
    renderAcademicRecords(list, siteContent.profileEn.career);
  }
  if (contentType === "profile-en-memberships") {
    renderMemberships(list, siteContent.profileEn.memberships);
  }
  if (contentType === "profile-en-funding") {
    renderAcademicRecords(list, siteContent.profileEn.funding);
  }
  if (contentType === "profile-ja-education") {
    renderAcademicRecords(list, siteContent.profileJa.education);
  }
  if (contentType === "profile-ja-career") {
    renderAcademicRecords(list, siteContent.profileJa.career);
  }
  if (contentType === "profile-ja-memberships") {
    renderMemberships(list, siteContent.profileJa.memberships);
  }
  makeListCollapsible(list);
});

const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const header = document.querySelector("[data-header]");

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.6] }
  );

  sections.forEach((section) => observer.observe(section));
}

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const parallaxBackgrounds = [...document.querySelectorAll("[data-parallax-bg]")];
const parallaxImages = [...document.querySelectorAll("[data-parallax-image]")];
let parallaxFrame = 0;

const clamp = (value, minimum, maximum) =>
  Math.min(Math.max(value, minimum), maximum);

const updateParallax = () => {
  parallaxFrame = 0;

  if (motionPreference.matches) {
    parallaxBackgrounds.forEach((element) =>
      element.style.setProperty("--hero-shift", "0px")
    );
    parallaxImages.forEach((element) =>
      element.style.setProperty("--profile-shift", "0px")
    );
    return;
  }

  parallaxBackgrounds.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
    const shift = progress * 96;
    element.style.setProperty("--hero-shift", `${shift.toFixed(1)}px`);
  });

  parallaxImages.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const distanceFromCentre = window.innerHeight / 2 - (rect.top + rect.height / 2);
    const maximumShift = Math.min(36, element.offsetHeight * 0.05);
    const shift = clamp(distanceFromCentre * 0.09, -maximumShift, maximumShift);
    element.style.setProperty("--profile-shift", `${shift.toFixed(1)}px`);
  });
};

const requestParallaxUpdate = () => {
  if (parallaxFrame) return;
  parallaxFrame = window.requestAnimationFrame(updateParallax);
};

if (parallaxBackgrounds.length || parallaxImages.length) {
  updateParallax();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate);

  if (typeof motionPreference.addEventListener === "function") {
    motionPreference.addEventListener("change", requestParallaxUpdate);
  }
}
