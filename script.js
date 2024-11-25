document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Заказ получен!\nИмя: ${name}\nАдрес: ${address}\nТелефон: ${phone}\nПродукт: ${product}\nКоличество: ${quantity}`);
});
