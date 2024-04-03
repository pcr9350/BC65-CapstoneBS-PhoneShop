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

function resetForm() {
    getEle('#formQLSP').reset();
    
};
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
      // Kiểm tra dữ liệu đầu vào
    // 1. Kiểm tra Tên sản phẩm
    var isValid = kiemTraRong(sp.name, "#tbTenSP", "Tên sản phẩm không được để rỗng")
    && kiemTraDoDai(sp.name, "tbTenSP", 6, 30, "Tên sản phẩm khoảng từ 6 đến 30 kí tự")

    // 2. Kiểm tra giá sản phẩm
    isValid &= kiemTraRong(sp.price, "#tbGiaSP", "Giá sản phẩm không được để trống")
    && kiemTraSo(sp.price, "#tbGiaSP", "Giá sản phẩm không được ghi chữ")

    // 3. Kiểm tra màn hình sản phẩm
    isValid &= kiemTraRong(sp.screen, "#tbScreenSP", "Màn hình không được để trống")
    && kiemTraDoDai(sp.screen, "tbScreenSP", 6, 30, "Thông số màn hình khoảng từ 6 đến 30 kí tự")

    // 4. Kiểm tra Camera sau
    isValid &= kiemTraRong(sp.backCamera, "#tbBackCameraSP", "Camera sau không được đê trống")
    && kiemTraDoDai(sp.backCamera, "tbBackCameraSP", 6, 30, "Thông số camera sau khoảng từ 6 đến 30 kí tự")

    // 5. Kiểm tra Camera trước
    isValid &= kiemTraRong(sp.frontCamera, "#tbFrontCameraSP", "Camera trước không được đê trống")
    && kiemTraDoDai(sp.frontCamera, "tbFrontCameraSP", 6, 30, "Thông số camera trước khoảng từ 6 đến 30 kí tự")

    // 6. Kiểm tra Image sản phẩm
    isValid &= kiemTraRong(sp.img, "#tbImgSP", "Hình sản phẩm không được để trống")
    && kiemTraURLImage(sp.img, "tbImgSP", "Hình sản phẩm không đúng định dạng")

    // 7. Kiểm tra mô tả sản phẩm
    isValid &= kiemTraRong(sp.desc, "#tbDescriptionSP", "Mô tả sản phẩm không được để trống")
    && kiemTraDoDai(sp.desc, "tbDescriptionSP", 1, 200, "Mô tả sản phẩm không quá 200 kí tự")

    if(isValid) {
        productServ.addNewProduct(sp).then(function(response){
            console.log('response:', response)
            $('#myModal').modal('hide');
            resetForm();
            fetchProductList()
    
        }).catch(function(error){
            console.log('error:', error)
    
        })
    }
    
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

// // Tạo một hàm để thực hiện việc tìm kiếm sản phẩm theo tên
// function searchProductByName(name) {
//     productServ.searchProductByName(name).then(function (response) {
//         renderProductList(response.data);
//     }).catch(function (error) {
//         console.log('error:', error);
//     });
// }

// // Gắn sự kiện input cho ô tìm kiếm
// document.getElementById('searchName').addEventListener('input', function () {
//     const searchTerm = this.value.trim().toLowerCase();
//     if (searchTerm !== "") {
//         searchProductByName(searchTerm);
//     } else {
//         fetchProductList(); // Nếu ô tìm kiếm trống, hiển thị danh sách sản phẩm đầy đủ
//     }
// });

// search sản phẩm 
function searchProductByName() {
    var name = document.querySelector('#searchName').value.trim().toLowerCase();

    productServ.getProduct().then(function (response) {
        console.log('response:', response.data)

        var productList = response.data

        // tìm kiếm tên sp 
        var result = productList.filter(function (sp) {
            return sp.name.toLowerCase().includes(name)
        })

        renderProductList(result)

    }).catch(function (error) {
        console.log('error:', error)

    })
}

// lắng nghe sự kiện input mà không cần click 
document.getElementById('searchName').addEventListener('input', function () {
    searchProductByName();
});
