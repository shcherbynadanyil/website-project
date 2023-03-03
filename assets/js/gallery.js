for(const element of document.querySelectorAll(".other_author")) {
    element.addEventListener("click", event => {
        if(event.target.classList.contains("other_author")) {
            for(const query of document.querySelectorAll(".other_author")) {
                query.classList.remove("active");
            }
            event.target.classList.add("active");
        }
    });
}