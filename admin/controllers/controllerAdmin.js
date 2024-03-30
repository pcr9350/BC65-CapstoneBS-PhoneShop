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
                    
                </td>
            </tr>
        `;

        content += contentTr;
    }
    document.querySelector('#tableDanhSach').innerHTML = content
}