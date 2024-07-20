let flslproducts =
    [
        {
            "name": "Titan 1811SL01 Edge Mechanical Analog Watch for Men",
            "price": "$200",
            URL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpSzqQC9_EqLi9ofRw36pogplnH-F75BjRexQLEW235Ks6plkh2WoQd32rqJFolFZDxd3l8Adw1u-KPgRSGXoKbbvId2zSmLuvL5LDd8IG"
        },
        {
            "name": "HRX by Hrithik Roshan Full Coverage Lifestyle Sports Bra (L)",
            "price": "$2000",
            URL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnBUIYA5MRiFrSx7KzGkmXeNkAAEE8DZkfjCS7AgIxPWdOR6gTwSFeIab3DzkxzxjEOfoEgeM0GRsoa651AZlDuUY7ArplRCIJitrLF_E&usqp=CAE"
        },
        {
            "name": "PERFLY All Sports ACCESSORIES BADMINTON NET No Size",
            "price": "$45",
            URL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSopgYBENnUX2-O_JZRXqeIaDS29cjoI8uMF_D4v6tfQqO8pRMiQkFjy6-9SFyI-rj2xyDhqtUlaq-zxfeRnunDz3TwujXXTVb-sCaK16rxKrmJMU0j7hknig&usqp=CAE"
        },
        {
            "name": "Smartees Printed, Typography Men Round Neck Black T-shirt",
            "price": "$10",
            URL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1-RnrGhAtGL_AtVL39WiQVHUECy1LO2q1tDKBqnq4cqygr9LCewYFZo91drr1BgSK8IhuDF2isTSDU-bpKNphcED7nH-KNQEz9b0X9k8&usqp=CAE"
        },
        {
            "name": "IPhone 15 Pro-Max 256GB ROM 8GB RAM",
            "price": "$1545",
            URL: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
        },
        {
            "name": "Google Pixel 8 8GB RAM, 128GB Storage (Any Color)",
            "price": "$899",
            URL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1RBCentSIvPkFV-ergk8HFd9jNt1ynjPXjC2d3iyHHAvLYoc8WMKDHR2Q3k9Le6XhU3lWzfDMFoJiQWimPPw7q-4CXvNB&usqp=CAE"
        }
    ]
function card(img, name, price) {

    let html = `<div class="card">
                    <img class="cardimg" src="${img}" alt="">
                    <span class="name">${name}</span>
                    <span class="price">${price}</span>
                    <span class="rating">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                    </span>
                </div>`

    document.getElementById("FlashSales").innerHTML = document.getElementById("FlashSales").innerHTML + html;
}
for (let i = 0; i < flslproducts.length; i++) {
    card(flslproducts[i].URL, flslproducts[i].name, flslproducts[i].price)
}

let BSproducts =
    [
        {
            "name": "Buy TACVASEN Men's Jackets-Bomber Jacket",
            "price": "$19",
            URL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26700694/2023/12/28/ae527790-fe5c-4fb4-9293-777dc7f73bb01703749161870INCLUDBoysGreenColourblockedLightweightVarsityJacket1.jpg"
        },
        {
            "name": "Gorgeous Stylishr Handbag, attractive ladies purse",
            "price": "$39",
            URL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18079822/2023/11/3/d317102f-e068-4c3e-babd-3da48efd2fb01698993951854-Lavie-Bottega-Betty-Women-Navy-Blue-Tote-bag-791698993951364-1.jpg"
        },
        {
            "name": "boAt Party Pal 200 | Bluetooth Speaker",
            "price": "$45",
            URL: "https://www.boat-lifestyle.com/cdn/shop/products/Main-_2.png?v=1616837403"
        },
        {
            "name": "K L FURNITURE Wooden Working Table for Living Room ",
            "price": "$10",
            URL: "https://damroimages.blob.core.windows.net/damroimages/9647-1.jpg"
        }
    ]
function card2(img, name, price) {

    let html = `<div class="card">
                    <img class="cardimg" src="${img}" alt="">
                    <span class="name">${name}</span>
                    <span class="price">${price}</span>
                    <span class="rating">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                    </span>
                </div>`

    document.getElementById("BestSellingProducts").innerHTML = document.getElementById("BestSellingProducts").innerHTML + html;
}
for (let i = 0; i < BSproducts.length; i++) {
    card2(BSproducts[i].URL, BSproducts[i].name, BSproducts[i].price)
}

let NAproducts =
    [
        {
            "name": "Pedigree 5KG Pack",
            "price": "$54",
            URL: "https://m.media-amazon.com/images/I/61oHqFE3jAL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "name": "Cannon EOS 80 DSLR Camera ",
            "price": "$786",
            URL: "https://m.media-amazon.com/images/S/aplus-media/sota/285227cd-c10e-40e7-945d-c3af7a670f4e._SR300,300_.jpg"
        },
        {
            "name": "Asus 2019 ASUS ROG 15.6inch FHD Gaming Laptop Computer",
            "price": "$1599",
            URL: "https://images.jdmagicbox.com/quickquotes/images_main/asus-rog-strix-hero-gaming-laptop-gl504-15-6-144hz-ips-type-slim-display-intel-core-i7-8750h-processor-up-to-3-9ghz-113434402-8iqea.jpg"
        },
        {
            "name": "5 Facial Serums to Brighten Dull Skin - L'Oréal Paris",
            "price": "$25",
            URL: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/makeupFest/loreal._CB454947737_.png"
        },
        {
            "name": "RC Monster Truck",
            "price": "$999",
            URL: "https://m.media-amazon.com/images/I/71JV+WfqmqL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "name": "Oavi Branded Sports Shoes",
            "price": "$299",
            URL: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c1fbe62-38f3-4184-994a-f9db02735ca9.__CR0,0,800,800_PT0_SX300_V1___.jpeg"
        },
        {
            "name": "PS5 - Sony Gaming Console",
            "price": "$400",
            URL: "https://m.media-amazon.com/images/I/61rIaBAtTZS.jpg"
        },
        {
            "name": "Buy Roadster Men Black Solid Bomber Jacket - Jackets for Men",
            "price": "$198",
            URL: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5392143/2018/12/4/eceb54e6-30f0-42bb-8192-92518daec09f1543926657485-Roadster-Men-Black-Solid-Bomber-4021543926656702-1.jpg"
        }
    ]
function card3(img, name, price) {

    let html = `<div class="card">
                    <img class="cardimg" src="${img}" alt="">
                    <span class="name">${name}</span>
                    <span class="price">${price}</span>
                    <span class="rating">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                        <img src="images/star.svg" alt="">
                    </span>
                </div>`

    document.getElementById("NewArrivals").innerHTML = document.getElementById("NewArrivals").innerHTML + html;
}
for (let i = 0; i < NAproducts.length; i++) {
    card3(NAproducts[i].URL, NAproducts[i].name, NAproducts[i].price)
}

const slides = document.querySelectorAll(".bannerimg2")

let slideIndex = 0;
  showSlide(slideIndex);

  function moveSlide(n) {
    showSlide(slideIndex += n);
  }

  function showSlide(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }