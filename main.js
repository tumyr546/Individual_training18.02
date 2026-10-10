const items = document.querySelectorAll('.item');
console.log(`У списку ${items.length} категорії.`);

items.forEach(el => {
    console.log(`Категорія: ${el.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${el.querySelectorAll('li').length}`);
});



const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(name => {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
});

list.append(...elements);


const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Коти',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Риби',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Лошаді',
    },
];

const gallery = document.querySelector('#gallery');


gallery.style.display = 'flex';
gallery.style.gap = '20px';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';

const markup = images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300" style="height: 200px; border-radius: 8px;"></li>`)
    .join('');

gallery.insertAdjacentHTML('beforeend', markup);