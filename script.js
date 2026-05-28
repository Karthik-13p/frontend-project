let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

updateCounts();

function addToCart(name, price, image){

    cart.push({
        name:name,
        price:price,
        image:image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}


function addToWishlist(name, price, image){

    wishlist.push({
        name:name,
        price:price,
        image:image
    });

    localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
    );

    updateCounts();

    alert(name + " added to wishlist");
}



function updateCounts(){

    let cartCount = document.querySelector(".cart span");

    let wishCount = document.querySelector(".wishlist span");

    if(cartCount){
        cartCount.innerText = cart.length;
    }

    if(wishCount){
        wishCount.innerText = wishlist.length;
    }
}


let search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let productName =
        card.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(value)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";
        }
    });
});

