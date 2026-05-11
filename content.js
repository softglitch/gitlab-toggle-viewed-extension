(function () {
  const BUTTON_ID = "gl-toggle-viewed-btn";

  function createToggleButton() {
    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.type = "button";
    btn.textContent = "Toggle Viewed";
    btn.className = "btn btn-default btn-md gl-button";
    btn.addEventListener("click", () => {
      Array.from(document.getElementsByTagName("input")).forEach((x) => {
        if (x.name.startsWith("code-review-")) {
          x.click();
        }
      });
    });
    return btn;
  }

  function injectButton() {
    const existing = document.getElementById(BUTTON_ID);

    if (!window.location.pathname.endsWith("/diffs")) {
      if (existing) existing.remove();
      return;
    }

    if (existing) return;

    const container = document.querySelector(".merge-request-tabs-actions");
    if (!container) return;

    container.prepend(createToggleButton());
  }

  // Initial injection attempt
  injectButton();

  // Re-inject or remove after SPA navigations
  const observer = new MutationObserver(() => {
    injectButton();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
