document.querySelector(".other_poems")
    .addEventListener("click", event => {
        const target = event.target;
        if(target.className.includes("read_more")) {
            const classList = target.parentNode.querySelector(".other_poem_more").classList;
            target.textContent = classList.contains("other_poem_more--open") ? "Читати повнiстю" : "Згорнути";
            classList.toggle("other_poem_more--open");
        }
    });