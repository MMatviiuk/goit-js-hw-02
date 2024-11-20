// Оголошуємо функцію getShippingCost, яка приймає параметр country (країна)
function getShippingCost(country) {
  // Оголошуємо змінну price, яка буде містити ціну доставки
  let price;

  // Використовуємо конструкцію switch для перевірки країни
  switch (country) {
    // Якщо країна - Китай, то ціна доставки 100 кредитів
    case 'China':
      price = 100;
      break;
    // Якщо країна - Чилі, то ціна доставки 250 кредитів
    case 'Chile':
      price = 250;
      break;
    // Якщо країна - Австралія, то ціна доставки 170 кредитів
    case 'Australia':
      price = 170;
      break;
    // Якщо країна - Ямайка, то ціна доставки 120 кредитів
    case 'Jamaica':
      price = 120;
      break;
    // Якщо країна не входить до списку, повертаємо повідомлення про відсутність доставки
    default:
      return 'Sorry, there is no delivery to your country';
  }

  // Повертаємо повідомлення з ціною доставки для вказаної країни
  return `Shipping to ${country} will cost ${price} credits`;
}

// Тестові виклики функції для перевірки її роботи

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
