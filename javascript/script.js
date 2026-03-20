const title = document.querySelector(".title");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
};

const observer = new IntersectionObserver(
    function(entries, observer ) {
        entries.forEach(entry => {
            console.log(entry);
        });
    }, options
);

observer.observe(title);

