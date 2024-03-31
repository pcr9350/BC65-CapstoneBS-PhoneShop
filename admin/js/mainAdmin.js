// fetch data lên bảng 
function fetchProductList() {
    productServ.getProduct().then(function (response) {
        console.log('response:', response.data)
        renderProductList(response.data)

    }).catch(function (error) {
        console.log('error:', error)

    })
}
fetchProductList()

// xóa sản phẩm 
function deleteProduct(id) {
    if (window.confirm('Bạn có muốn xóa sản phẩm này')) {
        productServ.deleteProductById(id).then(function (response) {
            console.log('response:', response.data)
            fetchProductList()

        }).catch(function (error) {
            console.log('error:', error)

        })
    } else {
        console.log('Người dùng đã hủy bỏ xóa sản phẩm')
    }
}

// thêm sản phẩm mới
function addProduct() {
    var sp = getInfo()
    console.log('sp:', sp)

    productServ.addNewProduct(sp).then(function (response) {
        console.log('response:', response.data)
        $('#myModal').modal('hide');
        fetchProductList()

    }).catch(function (error) {
        console.log('error:', error)

    })
}

// edit sản phẩm lấy data sản phẩm show lên modal để edit
function editProduct(id) {
    productServ.getProductById(id).then(function (response) {
        console.log('response:', response.data)

        var sp = response.data

        document.querySelector('#MaSP').value = sp.id
        document.querySelector('#tenSP').value = sp.name
        document.querySelector('#giaSP').value = sp.price
        document.querySelector('#screenSP').value = sp.screen
        document.querySelector('#backCameraSP').value = sp.backCamera
        document.querySelector('#frontCameraSP').value = sp.frontCamera
        document.querySelector('#imgSP').value = sp.img
        document.querySelector('#descriptionSP').value = sp.desc
        document.querySelector('#typeSP').value = sp.type

        $('#myModal').modal('show');

        document.querySelector('#btnThemSP').classList.add('d-none')
        document.querySelector('#btnCapNhat').classList.remove('d-none')

    }).catch(function (error) {
        console.log('error:', error)

    })
}

// update sản phẩm lại theo id 
function updateProduct() {
    var sp = getInfo()
    console.log('sp:', sp)

    var id = document.querySelector('#MaSP').value

    productServ.updateProductById(id, sp).then(function (response) {
        console.log('response:', response.data)
        $('#myModal').modal('hide');
        fetchProductList();

    }).catch(function (error) {
        console.log('error:', error)

    })
}