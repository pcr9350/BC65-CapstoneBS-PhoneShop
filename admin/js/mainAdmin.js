function fetchProductList() {
    productServ.getProduct().then(function (response) {
        console.log('response:', response.data)
        renderProductList(response.data)

    }).catch(function (error) {
        console.log('error:', error)

    })
}
fetchProductList()