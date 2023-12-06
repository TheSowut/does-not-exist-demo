window.addEventListener('load', async () => {
  document.querySelector('#test').addEventListener('click', async () => {
    console.log('Action initiated');
    const localImg = 'http://localhost:8080/sample';
    const doesNotExistUrl = 'http://localhost:8080/image';
    await setImage(doesNotExistUrl);
  });
});

const setImage = async (url) => {
  const res = await (await fetch(url)).blob();
  console.log('Image has been loaded.\n Setting image.');
  const imgURL = URL.createObjectURL(res);
  document.querySelector('#image').src = imgURL;
  console.log('Image set.');
};
