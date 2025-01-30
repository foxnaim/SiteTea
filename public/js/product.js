const products = [
    {
      id: 1,
      name: "Чёрный чай Ассам",
      price: 450,
      image: "https://a-kofe.ru/upload/iblock/281/2504.970.jpg",
      description: "Ароматный индийский чай с насыщенным вкусом и крепким настоем.",
    },
    {
      id: 2,
      name: "Чёрный чай Дарджилинг",
      price: 650,
      image: "https://coffeemag.kz/image/cache/data/fine_darjeeling-57634578-500x500-500x500.jpg",
      description: "Элитный чай с тонким мускатным ароматом из региона Дарджилинг.",
    },
    {
      id: 3,
      name: "Чёрный чай Эрл Грей",
      price: 500,
      image: "https://static.insales-cdn.com/r/ZZpNVGKYtqs/rs:fit:1000:1000:1/plain/images/products/1/1010/804979698/%D1%8D%D0%B3.webp@webp",
      description: "Классический чёрный чай с ароматом бергамота.",
    },
    {
      id: 4,
      name: "Чёрный чай Лапсанг Сушонг",
      price: 700,
      image: "https://ru.fullchea-tea.com/u_file/2204/products/21/6331056bb9.jpg",
      description: "Копченый китайский чай с ярким древесным ароматом.",
    },
    {
      id: 5,
      name: "Чёрный чай Кимун",
      price: 550,
      image: "https://chaigorod.ru/wp-content/uploads/2018/09/Kimun_zavarka.jpg",
      description: "Китайский чай с шоколадными и цветочными нотками во вкусе.",
    }, {
        id: 6,
        name: "Чёрный чай Ассам",
        price: 450,
        image: "https://a-kofe.ru/upload/iblock/281/2504.970.jpg",
        description: "Ароматный индийский чай с насыщенным вкусом и крепким настоем.",
      },
      {
        id: 7,
        name: "Чёрный чай Дарджилинг",
        price: 650,
        image: "https://coffeemag.kz/image/cache/data/fine_darjeeling-57634578-500x500-500x500.jpg",
        description: "Элитный чай с тонким мускатным ароматом из региона Дарджилинг.",
      },
      {
        id: 8,
        name: "Чёрный чай Эрл Грей",
        price: 500,
        image: "https://static.insales-cdn.com/r/ZZpNVGKYtqs/rs:fit:1000:1000:1/plain/images/products/1/1010/804979698/%D1%8D%D0%B3.webp@webp",
        description: "Классический чёрный чай с ароматом бергамота.",
      },
      {
        id: 9,
        name: "Чёрный чай Лапсанг Сушонг",
        price: 700,
        image: "https://ru.fullchea-tea.com/u_file/2204/products/21/6331056bb9.jpg",
        description: "Копченый китайский чай с ярким древесным ароматом.",
      },
   
  ];
  
  function renderProducts() {
    const container = document.getElementById("products-container");
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
  
  // Вызываем функцию для отображения товаров
  renderProducts();
  