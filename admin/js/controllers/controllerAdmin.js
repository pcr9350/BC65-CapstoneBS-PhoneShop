function renderProductList(productList) {
    var content = ""
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];

        var contentTr = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td><img style="width: 100px;" src="${product.img}"></td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td>
                    <button class= "btn btn-danger" onclick= "deleteProduct('${product.id}')"><i class="fa fa-trash"></i></button>
                    <button class= "btn btn-warning" onclick= "editProduct('${product.id}')"><i class="fa fa-edit"></i></i></button>
                </td>
            </tr>
        `;

        content += contentTr;
    }
    document.querySelector('#tableDanhSach').innerHTML = content
}


function getInfo() {
    var id = document.getElementById('MaSP').value
    var name = document.getElementById('tenSP').value
    var price = document.getElementById('giaSP').value
    var screen = document.getElementById('screenSP').value
    var backCamera = document.getElementById('backCameraSP').value
    var frontCamera = document.getElementById('frontCameraSP').value
    var img = document.getElementById('imgSP').value
    var desc = document.getElementById('descriptionSP').value
    var type = document.getElementById('typeSP').value

    return new products(id, name, price, screen, backCamera, frontCamera, img, desc, type)
}

function resetForm() {
    document.querySelector('#MaSP').value = ""
    document.querySelector('#tenSP').value = ""
    document.querySelector('#giaSP').value = ""
    document.querySelector('#screenSP').value = ""
    document.querySelector('#backCameraSP').value = ""
    document.querySelector('#frontCameraSP').value = ""
    document.querySelector('#imgSP').value = ""
    document.querySelector('#descriptionSP').value = ""
    document.querySelector('#typeSP').value = ""
}

$('#myModal').on('show.bs.modal', function (e) {
    document.querySelector('#btnCapNhat').classList.add('d-none')
})

$('#myModal').on('hidden.bs.modal', function (e) {
    document.querySelector('#btnThemSP').classList.remove('d-none')
    resetForm()
})