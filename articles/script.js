document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const articleList = document.getElementById("articleList");
    const articles = articleList.getElementsByTagName("li");

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        Array.from(articles).forEach((article) => {
            const title = (article.getAttribute("data-title") || "").toLowerCase();
            const date = (article.getAttribute("data-date") || "").toLowerCase();
            const tags = (article.getAttribute("data-tags") || "").toLowerCase();

            if (title.includes(filter) || date.includes(filter) || tags.includes(filter)) {
                article.style.display = "";
            } else {
                article.style.display = "none";
            }
        });
    });
});
