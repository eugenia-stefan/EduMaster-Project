
const courses = [
  {
    id: 1,
    title: "Introducere în managementul proiectelor",
    category: "management",
    level: "incepator",
    duration: "4 săptămâni",
    effort: "3-4 ore / săptămână",
    badge: "Recomandat pentru master",
    shortDescription: "Bazele managementului proiectelor: faze, roluri, instrumente și concepte esențiale.",
    outline: [
      "Definirea proiectului și a obiectivelor",
      "Stakeholderi și roluri în proiect",
      "Structurarea pe faze și livrabile",
      "Instrumente de planificare (Gantt, WBS)"
    ]
  },
  {
    id: 2,
    title: "Planificare și estimare în proiecte",
    category: "management",
    level: "mediu",
    duration: "3 săptămâni",
    effort: "4 ore / săptămână",
    badge: "Conținut aplicat",
    shortDescription: "Tehnici de estimare a timpului, costurilor și resurselor în proiecte.",
    outline: [
      "Metode de estimare (bottom-up, analogii)",
      "Definirea resurselor și alocarea lor",
      "Construirea unui calendar de proiect",
      "Riscuri legate de planificare"
    ]
  },
  {
    id: 3,
    title: "Managementul riscurilor în proiecte",
    category: "management",
    level: "avansat",
    duration: "3 săptămâni",
    effort: "3 ore / săptămână",
    badge: "Nivel avansat",
    shortDescription: "Identificarea, analizarea și răspunsul la riscurile unui proiect.",
    outline: [
      "Tipuri de riscuri și sursele lor",
      "Analiză calitativă și cantitativă",
      "Strategii de răspuns la risc",
      "Monitorizare și revizuire"
    ]
  },
  {
    id: 4,
    title: "Bazele programării cu HTML, CSS și JavaScript",
    category: "it",
    level: "incepator",
    duration: "5 săptămâni",
    effort: "3 ore / săptămână",
    badge: "Popular",
    shortDescription: "Noțiuni fundamentale pentru realizarea unui site web modern.",
    outline: [
      "Structura unei pagini HTML",
      "Stilizare cu CSS (culori, layout)",
      "Introducere în JavaScript",
      "Publicarea unui site static"
    ]
  },
  {
    id: 5,
    title: "Gestionarea proiectelor IT Agile & Scrum",
    category: "it",
    level: "mediu",
    duration: "4 săptămâni",
    effort: "3-4 ore / săptămână",
    badge: "Agile",
    shortDescription: "Aplicarea principiilor Agile și Scrum în proiecte software.",
    outline: [
      "Manifestul Agile și valori de bază",
      "Roluri în Scrum (PO, SM, echipă)",
      "Sprint planning, review și retrospective",
      "Backlog, user stories și estimări"
    ]
  },
  {
    id: 6,
    title: "Analiză de date pentru decizii de business",
    category: "finante",
    level: "mediu",
    duration: "4 săptămâni",
    effort: "4 ore / săptămână",
    badge: "Orientat spre business",
    shortDescription: "Folosirea datelor pentru luarea deciziilor în proiecte și organizații.",
    outline: [
      "Tipuri de date și indicatori",
      "Introducere în dashboard-uri",
      "Interpretarea rapoartelor",
      "Studiu de caz pe proiect"
    ]
  },
  {
    id: 7,
    title: "Comunicare eficientă în echipe de proiect",
    category: "soft-skills",
    level: "incepator",
    duration: "2 săptămâni",
    effort: "2 ore / săptămână",
    badge: "Soft skills",
    shortDescription: "Tehnici de comunicare și feedback în echipe multidisciplinare.",
    outline: [
      "Tipuri de comunicare și stiluri personale",
      "Ascultare activă și întrebări deschise",
      "Feedback constructiv",
      "Gestionarea conflictelor"
    ]
  },
  {
    id: 8,
    title: "Leadership și motivare în proiecte",
    category: "soft-skills",
    level: "avansat",
    duration: "3 săptămâni",
    effort: "3 ore / săptămână",
    badge: "Leadership",
    shortDescription: "Abordări de leadership și tehnici de motivare a echipelor.",
    outline: [
      "Stiluri de leadership",
      "Motivație intrinsecă vs. extrinsecă",
      "Delegare și încredere",
      "Cultura proiectului"
    ]
  },
  {
    id: 9,
    title: "Bugetare și control financiar în proiecte",
    category: "finante",
    level: "mediu",
    duration: "4 săptămâni",
    effort: "3 ore / săptămână",
    badge: "Finanțe",
    shortDescription: "Planificarea și monitorizarea bugetului unui proiect.",
    outline: [
      "Structura unui buget de proiect",
      "Costuri fixe și variabile",
      "Raportare financiară periodică",
      "Deviatii și acțiuni corective"
    ]
  },
  {
    id: 10,
    title: "Prezentarea proiectelor și storytelling",
    category: "soft-skills",
    level: "incepator",
    duration: "2 săptămâni",
    effort: "2 ore / săptămână",
    badge: "Util pentru prezentări",
    shortDescription: "Cum să structurezi și să livrezi o prezentare convingătoare.",
    outline: [
      "Structura unei prezentări eficiente",
      "Elemente vizuale și slide design",
      "Storytelling în context de proiect",
      "Pregătirea pentru întrebări"
    ]
  },
  {
    id: 11,
    title: "Digitalizare și transformare în organizații",
    category: "it",
    level: "avansat",
    duration: "4 săptămâni",
    effort: "3-4 ore / săptămână",
    badge: "Tendințe actuale",
    shortDescription: "Impactul tehnologiei în proiecte de transformare digitală.",
    outline: [
      "Ce înseamnă transformarea digitală",
      "Procese și tehnologii cheie",
      "Rolul proiectelor pilot",
      "Schimbare organizațională"
    ]
  },
  {
    id: 12,
    title: "Etică și responsabilitate în proiecte",
    category: "management",
    level: "mediu",
    duration: "3 săptămâni",
    effort: "2-3 ore / săptămână",
    badge: "Componentă etică",
    shortDescription: "Abordarea etică a deciziilor și impactului proiectelor.",
    outline: [
      "Principii de etică profesională",
      "Dileme etice în proiecte",
      "Stakeholderi și responsabilitate socială",
      "Exemple și studii de caz"
    ]
  }
];

const coursesContainer = document.getElementById("coursesContainer");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("courseModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalOutline = document.getElementById("modalOutline");

function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  const categoryMap = {
    management: "Management",
    it: "IT & Programare",
    "soft-skills": "Soft Skills",
    finante: "Finanțe & Business"
  };

  const levelMap = {
    incepator: "Începător",
    mediu: "Mediu",
    avansat: "Avansat"
  };

  card.innerHTML = `
    <div>
      <div class="course-tag-row">
        <span class="course-category">${categoryMap[course.category] || "Curs"}</span>
        <span class="course-level">${levelMap[course.level] || ""}</span>
      </div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.shortDescription}</p>
      <div class="course-meta">
        <span>${course.duration}</span>
        <span>${course.effort}</span>
      </div>
    </div>
    <div class="course-footer">
      <button class="btn-secondary" data-id="${course.id}">Detalii curs</button>
      <span class="course-badge">${course.badge}</span>
    </div>
  `;

  const button = card.querySelector("button");
  button.addEventListener("click", () => openCourseModal(course.id));

  return card;
}

function renderCourses() {
  const categoryValue = categoryFilter.value;
  const levelValue = levelFilter.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  coursesContainer.innerHTML = "";

  const filtered = courses.filter((course) => {
    const matchesCategory =
      categoryValue === "toate" || course.category === categoryValue;
    const matchesLevel =
      levelValue === "toate" || course.level === levelValue;
    const matchesSearch =
      course.title.toLowerCase().includes(searchValue) ||
      course.shortDescription.toLowerCase().includes(searchValue);

    return matchesCategory && matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent =
      "Nu s-au găsit cursuri care să corespundă filtrului selectat.";
    noResults.style.color = "#6b7280";
    noResults.style.fontSize = "0.95rem";
    coursesContainer.appendChild(noResults);
  } else {
    filtered.forEach((course) => {
      const card = createCourseCard(course);
      coursesContainer.appendChild(card);
    });
  }
}

function openCourseModal(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  const categoryMap = {
    management: "Management",
    it: "IT & Programare",
    "soft-skills": "Soft Skills",
    finante: "Finanțe & Business"
  };

  const levelMap = {
    incepator: "Începător",
    mediu: "Mediu",
    avansat: "Avansat"
  };

  modalTitle.textContent = course.title;
  modalMeta.textContent = `${categoryMap[course.category] || ""} • ${
    levelMap[course.level] || ""
  } • ${course.duration} • ${course.effort}`;
  modalDescription.textContent = course.shortDescription;

  modalOutline.innerHTML = "";
  course.outline.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    modalOutline.appendChild(li);
  });

  modal.classList.remove("hidden");
  modalBackdrop.classList.remove("hidden");
}

function closeCourseModal() {
  modal.classList.add("hidden");
  modalBackdrop.classList.add("hidden");
}

categoryFilter.addEventListener("change", renderCourses);
levelFilter.addEventListener("change", renderCourses);
searchInput.addEventListener("input", renderCourses);

modalCloseBtn.addEventListener("click", closeCourseModal);
modalBackdrop.addEventListener("click", closeCourseModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCourseModal();
  }
});

renderCourses();
