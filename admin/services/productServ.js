const BASE_URL = "https://66058c5b2ca9478ea1809fcb.mockapi.io/Products"

var productServ = {
    getProduct: function () {
        return axios({
            url: BASE_URL,
            method: 'GET',
        })
    },

    deleteProductById: function (id) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'DELETE',
        })
    },

    addNewProduct: function (sp) {
        return axios({
            url: BASE_URL,
            method: 'POST',
            data: sp,
        })
    },

    getProductById: function (id) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'GET',
        })
    },

    updateProductById: function (id, sp) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'PUT',
            data: sp,
        })
    },

    // searchProductByName: function (name) {
    //     return axios({
    //         url: `${BASE_URL}?search=${name}`,
    //         method: 'GET',
    //     });
    // }    
}