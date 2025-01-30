const products = [
    {
        id: 1,
        name: "Зелёный чай Сенча",
        price: 500,
        image: "https://ingershop.ru/wa-data/public/shop/products/74/03/374/images/499/499.970.JPG",
        description: "Японский зелёный чай с лёгким травянистым вкусом и свежим ароматом.",
    },
    {
        id: 2,
        name: "Зелёный чай Ганпаудер",
        price: 450,
        image: "https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/resize_cache/iblock/51a/280_280_1/mmjx343wfl3sruhedf25ukxhdh8ckusg.webp",
        description: "Китайский чай с насыщенным вкусом и лёгкими дымными нотками.",
    },
    {
        id: 3,
        name: "Зелёный чай Лунцзин",
        price: 800,
        image: "https://ir.ozone.ru/s3/multimedia-p/c1000/6811283581.jpg",
        description: "Элитный китайский чай с ореховым вкусом и ароматом свежей зелени.",
    },
    {
        id: 4,
        name: "Зелёный чай Жасминовый",
        price: 600,
        image: "https://chaicoff.ru/static/catalog/chay-zelenyy-zelenyy-chay-s-zhasminom-listovoy-3.png",
        description: "Китайский зелёный чай, ароматизированный лепестками жасмина.",
    },
    {
        id: 5,
        name: "Зелёный чай Матча",
        price: 1200,
        image: "https://kivahan.ru/wp-content/uploads/2017/02/kofe542.jpg",
        description: "Молотый японский чай с интенсивным вкусом и высоким содержанием антиоксидантов.",
    },
    {
        id: 6,
        name: "Зелёный чай Гёкуро",
        price: 1500,
        image: "https://kivahan.ru/wp-content/uploads/2017/02/kofe542.jpg",
        description: "Один из самых дорогих японских чаёв с насыщенным вкусом и сладким послевкусием.",
    },
    {
        id: 7,
        name: "Зелёный чай Тегуаньинь",
        price: 1000,
        image: "https://chaicoff.ru/static/catalog/chay-zelenyy-zelenyy-chay-s-zhasminom-listovoy-3.png",
        description: "Полуферментированный чай с насыщенным цветочным ароматом.",
    },
    {
        id: 8,
        name: "Зелёный чай Молочный улун",
        price: 1100,
        image: "https://ir.ozone.ru/s3/multimedia-p/c1000/6811283581.jpg",
        description: "Китайский чай с нежным сливочным ароматом.",
    },
    {
        id: 9,
        name: "Зелёный чай Пуэр",
        price: 1300,
        image: "https://ingershop.ru/wa-data/public/shop/products/74/03/374/images/499/499.970.JPG",
        description: "Ферментированный чай с насыщенным вкусом и глубоким ароматом.",
    }
];

function renderProducts() {
    const container = document.getElementById("boxConteiner");
    if (!container) {
        console.error("Контейнер с ID 'boxConteiner' не найден!");
        return;
    }

    container.innerHTML = ""; // Очищаем контейнер перед добавлением товаров

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>${product.price} ₽</strong>
            <button class="buy-btn">Купить</button>
        `;

        container.appendChild(card);
    });
}

// Убедись, что функция вызывается после загрузки DOM
document.addEventListener("DOMContentLoaded", renderProducts);
