const BASE_URL = "https://66058c5b2ca9478ea1809fcb.mockapi.io/Products"

var productServ = {
    getProduct: function(){
        return axios({
            url: BASE_URL,
            method: 'GET',
        })
    },
}