
function load() {
    a = document.getElementsByClassName("loadmore")
    a[0].style.display = "block"
    console.log(a)
    b = document.getElementById("loadbtn")
    b.style.display = "none"
}


 function  showitems(){
    var img = document.getElementById('img').src
    var price = document.getElementById('price').innerHTML
    var model = document.getElementById('pname').innerHTML
    console.log(img,price,model)
    var img2 = document.getElementById('image2').src
    var price2 = document.getElementById('price2').innerHTML
    var detail = document.getElementById('detail').innerHTML

    
    console.log(price2)
    img2=img;
    price2=price;
    detail=model;
    // img2.style.width = "400px";
    // var r = document.getElementById('contain')

    
    var win1 = window.open();

    // win1.document.write(img2);
    // win1.document.write(price2);
    // win1.document.write(detail);
    win1.document.write(
        `<div><div id="contain""><img id="image2" src="${img2}" alt=""><h3 id="price2">The Price of this product is: ${price}</h3><h3 id="detail">The Name of this product is:${model}</h3></div></div>`
    );






    //  cart_img.src = img
    //  cart_price.innerHTML = price
    //  cart_model.innerHTML = model
    // var node = img2.appendChild(price2)


 }

// var win2 = document.createElement("div");
    // var win3 = win2.appendChild(win)
    // var win4= win3.appendChild(img)
    // var win = window.open('app.html', '_blank');
    // win4= document.createElement('div')
    // win4.innerHTML=img2
    // win.appendChild(win4)
    // function cll(){
//     p=document.getElementsByClassName("cards")
//     q= p[this]
//     console.log(q)
//     
// }


//  var add = (a) => {
//     var win1 = window.open();
//     var source = document.getElementById(a);
//     win1.document.write(source.innerHTML);
//   }