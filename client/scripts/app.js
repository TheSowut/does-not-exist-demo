const DEFAULT_BUTTON_TEXT = 'Load image';
const LOADING_BUTTON_TEXT = 'Loading...';
const SERVER_PORT = 8080;
const BACKEND_OFFLINE_MSG = `Perhaps the server isn\'t running on port ${SERVER_PORT}?`;

window.addEventListener("load", async () => {
    const btnLoadImage = document.querySelector('#button-load-image');
    const imagePerson = document.querySelector("#image-person")
    document
        .querySelector("#button-load-image")
        .addEventListener("click", async () => {
            try {
                const doesNotExistUrl = `http://localhost:${SERVER_PORT}/image`;
                const imgURL = await generateNewImage(doesNotExistUrl);
                console.log("Action initiated");
                btnLoadImage.innerHTML = LOADING_BUTTON_TEXT;
                imagePerson.src = imgURL;
                console.log("Image set.");
                btnLoadImage.innerHTML = DEFAULT_BUTTON_TEXT;

                setRandomGradientBackground();
            } catch (e) {
                alert(`${e} \n${BACKEND_OFFLINE_MSG}`);
            }
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
