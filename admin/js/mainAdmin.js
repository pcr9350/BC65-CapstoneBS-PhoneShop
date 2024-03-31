function fetchProductList() {
    productServ.getProduct().then(function (response) {
        console.log('response:', response.data)
        renderProductList(response.data)

    }).catch(function (error) {
        console.log('error:', error)

    })
}
fetchProductList()

function deleteProduct(id){
    if (window.confirm('Bạn có muốn xóa sản phẩm này')) {
        productServ.deleteProductById(id).then(function(response){
            console.log('response:', response.data)
            fetchProductList()
    
        }).catch(function(error){
            console.log('error:', error)
    
        })
    } else {
        console.log('Người dùng đã hủy bỏ xóa sản phẩm')
    }
}

function addProduct(){
    var sp = getInfo()
    console.log('sp:', sp)

    productServ.addNewProduct(sp).then(function(response){
        console.log('response:', response)
        $('#myModal').modal('hide');
        fetchProductList()

    }).catch(function(error){
        console.log('error:', error)

    })
}