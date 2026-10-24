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

    const themeScript = document.createElement("script");
    themeScript.src = "js/theme.js";
    document.body.appendChild(themeScript);
}

loadPageComponents();