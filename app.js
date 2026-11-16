const articles = [
  {
    id: "kyiv",
    category: "Місто",
    topic: "Культура і міста",
    title: "Київ — місто на берегах Дніпра",
    description: "Місто пагорбів, каштанів і давніх історій, яке щоразу відкривається по-новому.",
    lead: "Київ виріс уздовж Дніпра: річка з'єднує різні частини міста, а пагорби зберігають сліди його довгої історії.",
    image: "assets/kyiv.jpg",
    imageAlt: "Міський краєвид Києва з Дніпром",
    imageCredit: 'Фото <a href="https://commons.wikimedia.org/wiki/File:Kyiv_city_view_24_October_2016.jpg" target="_blank" rel="noreferrer">Øyvind Nondal</a>, ліцензія <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>.',
    minutes: 6,
    fact: "Дніпро",
    factDescription: "Одна з найбільших річок Європи проходить крізь Київ і формує його краєвид.",
    source: "Дізнатися більше про місто можна в <a href=\"https://www.britannica.com/place/Kyiv-Ukraine\" target=\"_blank\" rel=\"noreferrer\">Encyclopaedia Britannica</a>.",
    sections: [
      {
        heading: "Місто між пагорбами й водою",
        paragraphs: [
          "Дніпро ділить Київ на правобережну та лівобережну частини. Мости з'єднують їх не лише для щоденних поїздок: з них добре видно, як місто переходить від зелених схилів до широких рівнин.",
          "Рельєф відчувається навіть у центрі. Вулиці підіймаються й спускаються, між ними ховаються парки, старі дворики та оглядові майданчики."
        ]
      },
      {
        heading: "Сліди різних епох",
        paragraphs: [
          "Софійський собор і Києво-Печерська лавра нагадують про середньовічну історію міста. Їхні ансамблі входять до Списку всесвітньої спадщини ЮНЕСКО.",
          "Поруч із давніми пам'ятками живе сучасний Київ: музеї, книгарні, кав'ярні, театри та нові громадські простори. Саме це сусідство різних часів робить прогулянку містом схожою на читання багатошарової книжки."
        ]
      }
    ]
  },
  {
    id: "carpathians",
    category: "Природа",
    topic: "Гори і ландшафти",
    title: "Карпати — гори, що змінюють настрій",
    description: "Полонини, смерекові ліси й тиша високих вершин — український гірський світ.",
    lead: "Українські Карпати — це не лише вершини. Тут чергуються ліси, полонини, гірські потоки й поселення з давніми традиціями.",
    image: "assets/hoverla.jpg",
    imageAlt: "Говерла здіймається над хмарами на заході сонця",
    imageCredit: 'Фото <a href="https://commons.wikimedia.org/wiki/File:Гора_Говерла_після_заходу_сонця.jpg" target="_blank" rel="noreferrer">Khoroshkov</a>, ліцензія <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.',
    minutes: 5,
    fact: "2 061 м",
    factDescription: "Висота Говерли — найвищої вершини України.",
    source: "Про Карпати та їхню географію читай у <a href=\"https://www.britannica.com/place/Carpathian-Mountains\" target=\"_blank\" rel=\"noreferrer\">Encyclopaedia Britannica</a>.",
    sections: [
      {
        heading: "Мозаїка висот",
        paragraphs: [
          "Гірські схили вкриті буковими та смерековими лісами, а вище лінії лісу відкриваються полонини. На цих високогірних луках улітку випасають худобу й заготовляють сіно.",
          "Говерла — найвища точка України. Та Карпати цікаві не тільки висотою: кожна долина має власні стежки, потоки й краєвиди, які змінюються разом із погодою."
        ]
      },
      {
        heading: "Природа і людські історії",
        paragraphs: [
          "У горах беруть початок річки, а старі ліси дають прихисток багатьом видам рослин і тварин. Частина територій охороняється національними парками та заповідниками.",
          "Гуцульська культура, дерев'яна архітектура, музика й ремесла — важлива частина історії регіону. Подорожуючи, варто залишатися на позначених маршрутах і не залишати сміття: так гірські місця збережуть свою красу."
        ]
      }
    ]
  },
  {
    id: "orion",
    category: "Космос",
    topic: "Астрономія",
    title: "Туманність Оріона — зоряна майстерня",
    description: "Величезна хмара газу й пилу, де народжуються нові зорі.",
    lead: "На зимовому небі можна знайти сузір'я Оріона, а в ньому — туманність, де газ і пил поступово збираються в нові зоряні системи.",
    image: "assets/orion-nebula.jpg",
    imageAlt: "Кольорові газові хмари Туманності Оріона на знімку телескопа Габбл",
    imageCredit: 'Знімок NASA, ESA та команди Hubble Orion Treasury Project; суспільне надбання. <a href="https://commons.wikimedia.org/wiki/File:Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg" target="_blank" rel="noreferrer">Джерело зображення</a>.',
    minutes: 4,
    fact: "≈ 1 350 св. років",
    factDescription: "Приблизна відстань від Землі до Туманності Оріона.",
    source: "Про спостереження за туманністю розповідає <a href=\"https://science.nasa.gov/mission/hubble/\" target=\"_blank\" rel=\"noreferrer\">місія телескопа Габбл</a>.",
    sections: [
      {
        heading: "Що таке туманність?",
        paragraphs: [
          "Туманність — це велика хмара міжзоряного газу й пилу. Під дією гравітації частина речовини ущільнюється, нагрівається і зрештою може утворити зорі.",
          "Туманність Оріона розташована в сузір'ї Оріона. За дуже темного неба її можна помітити неозброєним оком як тьмяну плямку біля «меча» мисливця."
        ]
      },
      {
        heading: "Погляд крізь телескоп",
        paragraphs: [
          "Знімки космічного телескопа Габбл показують у туманності завихрення газу, темні пилові пасма та яскраві молоді зорі. Науковці досліджують цю область, щоб краще зрозуміти ранні етапи зоряного життя.",
          "Світло, яке ми бачимо сьогодні, вирушило в подорож до Землі задовго до появи сучасних телескопів. Дивитися на космос — означає також зазирати в його минуле."
        ]
      }
    ]
  },
  {
    id: "black-sea",
    category: "Географія",
    topic: "Вода і узбережжя",
    title: "Чорне море — перехрестя води й життя",
    description: "Море, що поєднує береги кількох країн і має власний особливий характер.",
    lead: "Чорне море омиває південь України. Його узбережжя, лимани й річкові гирла утворюють мінливий простір між суходолом і водою.",
    image: "assets/black-sea.jpg",
    imageAlt: "Хвилі Чорного моря біля узбережжя Одеси",
    imageCredit: 'Фото Юлії Рядченко, ліцензія <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>. <a href="https://commons.wikimedia.org/wiki/File:Odesa_Black_Sea_coast.jpg" target="_blank" rel="noreferrer">Джерело зображення</a>.',
    minutes: 5,
    fact: "Через протоки",
    factDescription: "Босфор і Дарданелли з'єднують Чорне море із Середземним.",
    source: "Географічний огляд моря доступний в <a href=\"https://www.britannica.com/place/Black-Sea\" target=\"_blank\" rel=\"noreferrer\">Encyclopaedia Britannica</a>.",
    sections: [
      {
        heading: "Море на перетині шляхів",
        paragraphs: [
          "Чорне море оточують береги України, Болгарії, Грузії, Румунії, Туреччини та інших країн регіону. Через Босфор, Мармурове море й Дарданелли воно має водний шлях до Середземного моря.",
          "У море впадають великі річки, зокрема Дунай, Дніпро та Дністер. Вони приносять прісну воду й поживні речовини, які впливають на життя прибережних екосистем."
        ]
      },
      {
        heading: "Берег — це цілий світ",
        paragraphs: [
          "Піщані пляжі, скелі, лимани та плавні створюють різні середовища для птахів, риб і рослин. Дельти річок і мілководдя важливі як місця відпочинку та живлення для багатьох видів.",
          "Море чутливе до забруднення й змін клімату. Чисті узбережжя та відповідальне ставлення до природи допомагають зберегти цю спільну для багатьох народів водойму."
        ]
      }
    ]
  }
];

const articleGrid = document.querySelector("#article-grid");
const searchInput = document.querySelector("#search-input");
const articleCount = document.querySelector("#article-count");
const emptyState = document.querySelector("#empty-state");
const articleView = document.querySelector("#article-view");
const library = document.querySelector("#articles");
const about = document.querySelector("#about");
const hero = document.querySelector(".hero");
const filters = document.querySelector(".filters");
let selectedCategory = "Усі";

function renderCards() {
  const query = searchInput.value.trim().toLocaleLowerCase("uk-UA");
  const matchingArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Усі" || article.category === selectedCategory;
    const searchableText = `${article.title} ${article.description} ${article.topic} ${article.category}`
      .toLocaleLowerCase("uk-UA");
    return matchesCategory && searchableText.includes(query);
  });

  articleGrid.innerHTML = matchingArticles.map((article) => `
    <article class="article-card">
      <a class="card-link" href="#article/${article.id}" aria-label="Читати: ${article.title}">
        <div class="card-image-wrap">
          <img class="card-image" src="${article.image}" alt="${article.imageAlt}" loading="lazy" />
          <span class="card-category">${article.category}</span>
        </div>
        <div class="card-body">
          <p class="card-meta">${article.topic} · ${article.minutes} хв</p>
          <h3 class="card-title">${article.title}</h3>
          <p class="card-description">${article.description}</p>
        </div>
      </a>
    </article>
  `).join("");

  articleCount.textContent = `${matchingArticles.length} ${matchingArticles.length === 1 ? "стаття" : "статті"}`;
  emptyState.hidden = matchingArticles.length > 0;
}

function renderArticle(article) {
  articleView.innerHTML = `
    <a class="article-back" href="#articles"><span aria-hidden="true">←</span> До всіх статей</a>
    <header class="article-header">
      <p class="eyebrow">${article.category} <span class="heading-rule"></span> ${article.minutes} хв читання</p>
      <h1 class="article-title">${article.title}</h1>
      <p class="article-lead">${article.lead}</p>
    </header>
    <figure class="article-hero">
      <img src="${article.image}" alt="${article.imageAlt}" />
    </figure>
    <p class="image-credit">${article.imageCredit}</p>
    <div class="article-layout">
      <div class="article-content">
        ${article.sections.map((section) => `
          <section>
            <h2>${section.heading}</h2>
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </section>
        `).join("")}
        <p class="article-source">${article.source}</p>
      </div>
      <aside class="fact-card" aria-label="Цікавий факт">
        <p class="fact-label">Короткий факт</p>
        <strong>${article.fact}</strong>
        <p>${article.factDescription}</p>
      </aside>
    </div>
  `;
}

function renderRoute() {
  const match = window.location.hash.match(/^#article\/([a-z-]+)$/);
  const article = match && articles.find((item) => item.id === match[1]);
  const isArticle = Boolean(article);

  hero.hidden = isArticle;
  library.hidden = isArticle;
  about.hidden = isArticle;
  articleView.hidden = !isArticle;
  document.title = isArticle ? `${article.title} — Виднокрай` : "Виднокрай — мала енциклопедія";

  if (isArticle) {
    renderArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

searchInput.addEventListener("input", renderCards);

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  selectedCategory = button.dataset.category;
  filters.querySelectorAll("button").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
  renderCards();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

window.addEventListener("hashchange", renderRoute);
renderCards();
renderRoute();
