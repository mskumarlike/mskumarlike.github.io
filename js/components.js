async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    const response = await fetch(file);
    element.innerHTML = await response.text();
}

async function loadPageComponents() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    // Highlight the current page in the nav
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(a => {
        if (a.getAttribute("href") === page) a.classList.add("active");
    });

    // "Last updated" date: GitHub Pages sends the publish time with each page
    const stamp = document.getElementById("last-updated");
    const updated = new Date(document.lastModified);
    if (stamp && !isNaN(updated)) {
        stamp.dateTime = updated.toISOString().slice(0, 10);
        stamp.textContent = updated.toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric"
        });
        stamp.closest(".last-updated").hidden = false;
    }

    const themeScript = document.createElement("script");
    themeScript.src = "js/theme.js";
    document.body.appendChild(themeScript);
}

loadPageComponents();