(function () {
  const BUTTON_ID = "gl-toggle-viewed-btn";

  function createToggleButton() {
    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.type = "button";
    btn.textContent = "Toggle Viewed";
    btn.className = "btn btn-default btn-md gl-button";

    btn.addEventListener("click", (e) => {
      const checkboxes = Array.from(
        document.getElementsByTagName("input")
      ).filter((x) => x.name.startsWith("code-review-"));

      if (e.shiftKey) {
        // Shift+click: mark all as viewed (only click unchecked ones)
        checkboxes.forEach((x) => {
          if (!x.checked) x.click();
        });
      } else {
        // Normal click: toggle all
        checkboxes.forEach((x) => x.click());
      }
    });

    // Update button text on shift key state
    document.addEventListener("keydown", (e) => {
      if (e.key === "Shift") {
        const b = document.getElementById(BUTTON_ID);
        if (b) b.textContent = "Mark All Viewed";
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Shift") {
        const b = document.getElementById(BUTTON_ID);
        if (b) b.textContent = "Toggle Viewed";
      }
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
