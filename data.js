export function setData(main, button, input, remove) {
  let data = [];

  const addItem = (item) => {
    data.push(item);
  };

  const createItem = (value) => {
    const newElement = document.createElement('article');
    const elValue = document.createTextNode(value);

    newElement.appendChild(elValue);
    newElement.classList.add('item');

    main.appendChild(newElement);
  };

  const renderData = async () => {
    document.querySelectorAll('article').forEach((el) => el.remove());

    data.map((el) => {
      createItem(el);
    });
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    input.value !== '' && addItem(input.value);
    input.value = '';
    renderData();
  });

  remove.addEventListener('click', () => {
    data = [];
    renderData();
  });

  renderData();
}
