window.onload = () => {
    const content = document.querySelector(".content");
    const flare = document.querySelector(".flare")
    const logo = document.querySelector(".logo");
    const screen = document.querySelector(".screen");

    window.addEventListener("message", e => {
        const item = e.data;

        if(item.event === "end") {
            content.classList.add("end");
            flare.classList.add("end");
            logo.classList.add("end");

            setTimeout(() => {
                screen.classList.add("hidden");
            }, 2000)
        }
    })
}
