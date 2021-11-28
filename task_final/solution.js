// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {//тут пока ничего не меняла
    let data = {client: {name, sum}, order: {address, sum}, goods: [{title, count}]};

    data.client = name + phone; // строка, имя клиента + телефон клиента;
    data.order.address = street + ',' + house + ',' + entrance + ',' + floor + ',' + flat;   //строка с адресом доставки, записанным человекопонятным языком (как в примере)
    data.order.sum = sum; //стоимость заказа с учетом скидок и доставки

    //let goods = [{title, count}] //массив объектов с информацией о позициях заказа:
    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title); //title - название позиции
        data.goods.push(goods[i].count); // count - количество в заказе
    }

    let jsonData = JSON.stringify({data});

    return jsonData;
}
