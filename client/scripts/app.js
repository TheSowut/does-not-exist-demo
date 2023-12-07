window.addEventListener("load", async () => {
    document
        .querySelector("#loadImageAction")
        .addEventListener("click", async () => {
            console.log("Action initiated");
            const localImg = "http://localhost:8080/sample";
            const doesNotExistUrl = "http://localhost:8080/image";

            const imgURL = await generateNewImage(doesNotExistUrl);
            document.querySelector("#image-person").src = imgURL;
            console.log("Image set.");

            setRandomGradientBackground();
        });
});

/**
 * Generate an image of a person who does not exist.
 * @param url to be called
 * @returns URL pointing to new image
 */
const generateNewImage = async (url) => {
    const res = await (await fetch(url)).blob();
    console.log("Image has been loaded.\nSetting image...");

    return URL.createObjectURL(res);
};

/**
 * Set a random gradient as the background of the page.
 */
const setRandomGradientBackground = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const colors = [
        `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
        `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
    ];
    const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

    document.body.style.background = gradient;
};
