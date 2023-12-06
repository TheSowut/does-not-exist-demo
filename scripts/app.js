window.addEventListener('load', async () => {
  document.querySelector('#test').addEventListener('click', async () => {
    const localImg = 'http://localhost:3000/sample';
    const doesNotExistUrl = 'http://localhost:3000/image';
    await setImage(doesNotExistUrl);
  });
});

const setImage = async (url) => {
  const res = await (await fetch(url)).blob();

  const imgURL = URL.createObjectURL(res);
  document.querySelector('#image').src = imgURL;
};
