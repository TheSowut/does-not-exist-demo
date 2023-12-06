window.addEventListener('load', async () => {
  document.querySelector('#loadImageAction').addEventListener('click', async () => {
    console.log('Action initiated');
    const localImg = 'http://localhost:8080/sample';
    const doesNotExistUrl = 'http://localhost:8080/image';
    await setImage(doesNotExistUrl);
  });
});

const setImage = async (url) => {
  const res = await (await fetch(url)).blob();
  console.log('Image has been loaded.\nSetting image...');
  const imgURL = URL.createObjectURL(res);
  document.querySelector('#image-person').src = imgURL;
  console.log('Image set.');
};
