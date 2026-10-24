// Academics page: show one section at a time.
// The section fades in when its tab is clicked; the URL hash (#talks etc.)
// is kept so links like academics.html#talks open the right tab.
(function () {
    const tabs = Array.from(document.querySelectorAll(".tabs .tab"));
    const panels = Array.from(document.querySelectorAll(".tab-panel"));
    if (!tabs.length) return;

    document.body.classList.add("tabs-ready");

    function show(id, updateHash) {
        const tab = tabs.find(t => t.getAttribute("aria-controls") === id) || tabs[0];
        const target = tab.getAttribute("aria-controls");

        tabs.forEach(t => {
            const on = t === tab;
            t.setAttribute("aria-selected", on);
            t.tabIndex = on ? 0 : -1;
        });
        panels.forEach(p => { p.hidden = p.id !== target; });

        if (updateHash) history.replaceState(null, "", "#" + target);
    }

    tabs.forEach((t, i) => {
        t.addEventListener("click", () => show(t.getAttribute("aria-controls"), true));
        // Left/right arrow keys move between tabs
        t.addEventListener("keydown", e => {
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
            next.focus();
            show(next.getAttribute("aria-controls"), true);
        });
    });

    show(location.hash.slice(1), false);
    window.addEventListener("hashchange", () => show(location.hash.slice(1), false));
})();
