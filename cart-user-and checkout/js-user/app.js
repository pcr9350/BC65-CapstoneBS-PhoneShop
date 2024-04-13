let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', function () {
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function () {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})


let products = null;
// get data from file json
// fetch('product.json')
//     .then(response => response.json())
//     .then(data => {
//         products = data;
//         addDataToHTML();
// })

function fetchDataFromAPI() {
    productServ.getProduct().then(function (response) {
        console.log('response:', response.data)
        products = response.data
        addDataToHTML()

    }).catch(function (error) {
        console.log('error:', error)

    })
}
fetchDataFromAPI()

//show datas product in list 
function addDataToHTML() {
    // remove datas default from HTML
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    // add new datas
    if (products != null) // if has data
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.classList.add('col-xl-3');
            newProduct.classList.add('col-lg-4');
            newProduct.classList.add('col-md-6');
            newProduct.classList.add('col-12');
            newProduct.innerHTML =
                `<img src="${product.img}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="list__button" onclick="addCart(${product.id})">Add To Cart</button>`;

            listProductHTML.appendChild(newProduct);

        });
    }
}
//use cookie so the cart doesn't get lost on refresh page


let listCart = [];
function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    } else {
        listCart = [];
    }
}
checkCart();

function addCart($idProduct) {
    let productsCopy = JSON.parse(JSON.stringify(products));
    //// If this product is not in the cart
    if (!listCart[$idProduct]) {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
    } else {
        //If this product is already in the cart.
        //I just increased the quantity
        listCart[$idProduct].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // if has product in Cart
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.img}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button class="btn btn--red" onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value mx-2">${product.quantity}</span>
                        <button class="btn btn--red" onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
    updateTotalPrice()
    // saveCartToLocalStorage();
}
function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // if quantity <= 0 then remove product in cart
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct];
            }
            break;

        default:
            break;
    }
    // save new data in cookie
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // reload html view cart
    addCartToHTML();
}
function clearCart() {
    // Hiển thị hộp thoại xác nhận
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa giỏ hàng không?");

    // Nếu người dùng xác nhận xóa giỏ hàng
    if (confirmDelete) {
        // Xóa tất cả các sản phẩm trong giỏ hàng
        listCart = [];

        // Cập nhật cookie để lưu trữ giỏ hàng sau khi đã xóa
        document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

        // Cập nhật hiển thị giỏ hàng trên trang web
        addCartToHTML();
        // localStorage.removeItem('listCart');
    }
}

// Function to calculate total price of items in cart
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let key in listCart) {
        if (listCart.hasOwnProperty(key) && listCart[key]) { // Check if listCart[key] exists and is not null
            totalPrice += listCart[key].price * listCart[key].quantity;
        }
    }
    return totalPrice;
}


// Function to update total price in HTML
function updateTotalPrice() {
    let totalPriceElement = document.querySelector('#price');
    let totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = totalPrice + "$";
}
