const intervalId = setInterval(() => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const ia = params.get("ia");
  const duckai = params.get("duckai");

  if (q !== "DuckDuckGo AI Chat" || ia !== "chat" || duckai !== "1") {
    /* News - Part */
    // Finde das <ol> innerhalb des <section> mit dem angegebenen data-testid
    let olElement = document.querySelector(
      "section[data-testid='no-results-message']"
    );

    if (olElement) {
      /* Remove the show me more results button */
      const showMeMoreNews = olElement.querySelector("button");
      if (showMeMoreNews) {
        showMeMoreNews.remove();
      }
    }

    olElement = document.querySelector(
      "section[data-testid='no-results-message'] ol"
    );

    // Überprüfe, ob das <ol> Element existiert
    if (olElement) {
      // Iteriere durch alle Kinder des <ol> Elements
      Array.from(olElement.children).forEach((child) => {
        // Suche nach einem <h2> Element im aktuellen Kind
        const h2Element = child.querySelector("h2");
        // Suche nach allen <img> Elementen im aktuellen Kind
        const imgElements = child.querySelectorAll("img");
        // Suche nach einem <span> Element im aktuellen Kind
        const spanElement = child.querySelector("span");
        // Suche nach einem <i> Element (Icon) im aktuellen Kind
        const iElement = child.querySelector("i");

        // Wenn <img> Elemente gefunden werden, entferne sie
        imgElements.forEach((img) => {
          img.remove();
          console.log("Ein <img> Element wurde entfernt.");
        });

        // Wenn ein <h2> Element gefunden wird, entferne es
        if (h2Element) {
          h2Element.remove();
          console.log("Ein <h2> Element wurde entfernt.");
        }

        // Wenn ein <span> Element gefunden wird, gehe zwei Ebenen nach oben und entferne es
        if (spanElement) {
          const parent = spanElement.parentNode?.parentNode; // Gehe zwei Ebenen nach oben
          if (parent) {
            parent.remove();
            console.log(
              "Ein Element wurde entfernt, das zwei Ebenen über einem <span> Element liegt."
            );
          }
        }

        // Wenn ein <i> Element (Icon) gefunden wird, gehe drei Ebenen nach oben und entferne es
        if (iElement) {
          const parent = iElement.parentNode?.parentNode?.parentNode; // Gehe drei Ebenen nach oben
          if (parent) {
            parent.remove();
            console.log(
              "Ein Element wurde entfernt, das drei Ebenen über einem <i> Element liegt."
            );
          }
        }
      });
    } else {
      console.log("Das <ol> Element wurde nicht gefunden.");
    }
    const sidebar1 = document.querySelector(".react-news-sidebar");
    const sidebar2 = document.querySelector("[data-layout='related_searches']");

    if (sidebar1) {
      sidebar1.remove();
    }

    if (sidebar2) {
      sidebar2.remove();
    }

    /* Alle - Part */
    const elements = document.querySelectorAll(".react-module");
    const sidebar = document.querySelector(
      "section[data-testid='sidebar'][data-area='sidebar']"
    );

    if (sidebar) {
      sidebar.remove();
    }
    if (elements) {
      elements.forEach((element) => {
        element.remove();
      });
    }
    /* Remove the show me more results button within the alle - part */
    const moreResults = document.getElementById("more-results");
    if (moreResults) {
      moreResults.remove();
    }

    /* Share Feedback Removal */
    const element = document.querySelector(
      "span[data-testid='feedback-prompt']"
    );

    if (element && element.parentElement) {
      const button = element.querySelector("button");
      if (button) {
        element.parentElement.remove();
      }
    }
    /* Footer removal */
    const footer = document.querySelector("div.footer");
    if (footer) {
      footer.remove();
    }
    /* Videos - Part */
    let videoSection = document.querySelector("div[data-testid='zci-videos']");
    if (videoSection) {
      videoSection = videoSection.querySelector("ol");

      // Durchlaufe alle children von videoSection (ol)
      Array.from(videoSection.children).forEach((child) => {
        // Überprüfe, ob das child ein img-Element enthält
        const imgElement = child.querySelector("img");
        if (imgElement) {
          // Gehe zwei Ebenen nach oben zum parentElement und entferne es
          const parentToRemove = imgElement.parentElement;
          parentToRemove.style.display = "none";
        }
        // Überprüfe, ob das child ein article-Element enthält
        const articleElement = child.querySelector("article");
        if (articleElement) {
          // Gehe ins zweite children Element des article
          const secondChild = articleElement.children[2]; // Zweites child des article

          // Überprüfe, ob das zweite child weitere 2 children hat
          if (secondChild && secondChild.children.length >= 2) {
            // Das zweite child des zweiten child-Elements wird ausgeblendet
            const secondGrandChild = secondChild.children[1]; // Das zweite child des secondChild
            if (secondGrandChild) {
              secondGrandChild.style.display = "none"; // Ausblenden des zweiten child
            }
          }
        }
      });
    }
  }
}, 1000);
