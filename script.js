const telefonMosue = document.querySelector(".telefon-1");
const telefon = document.querySelector("#telefon");
const bilgisayarMosue = document.querySelector(".bilgisayar-1");
const telefon1 = document.querySelector("#telefon-1");


telefonMosue.addEventListener("mouseenter", function(){
    telefon.classList.toggle("active");
})

bilgisayarMosue.addEventListener("click", function(){
    telefon1.classList.toggle("active");
    // telefonMosue.removeEventListener("mouseenter", telefonMosue)
})


// const resim = document.querySelector(".resim-1");
// const btn = document.querySelector(".btn");

// const dizi = [
//     "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113144-1-1_large.jpg",
//     "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135218-1-1_large.jpg",
//     "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/tecno/thumb/135955-1_large.jpg",
//     "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg"
// ]

// let index1  = 0;

// btn.addEventListener("click", function(){
//     index1++;
//     if(index1 == dizi.length){
//         index1 = 0;
//     }
//     resim.src = dizi[index1];
// })

const genel = document.querySelectorAll(".content-container");

// for(let i = 0; i<genel.length;i++){
//     genel[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//     })
// };

genel.forEach((bir)=>{
    bir.addEventListener("click", function(){
        this.classList.toggle("active");
    })
})

const bars = document.querySelector(".fa-bars");
const barx = document.querySelector(".fa-xmark");
const bilgiler = document.querySelector(".kart");

bars.addEventListener("click", function(){
    bilgiler.classList.add("active1");
    barx.style.display = "block";
    bars.style.display = "none";
})

barx.addEventListener("click", function(){
    bilgiler.classList.toggle("active1");
    bars.style.display = "block";
    barx.style.display = "none";
})

const gitA = document.querySelector(".git-a");
const footer1 = document.querySelector(".footer");

gitA.addEventListener("click", function(){
    footer1.scrollIntoView({behavior: "smooth"});
})

const fiyatlar = document.querySelectorAll(".ilk .deger-fiyat");
const alSepet = document.querySelectorAll(".ilk .al");
const ilk = document.querySelectorAll(".icerik-3 .ilk");
const sepetGosterBtn = document.querySelector(".hesap-goster-btn");
const hesapSepet = document.querySelector(".hesap-tutar");
const hesapSepetSpan = document.querySelector(".hesap-tutar span");
const urunAdi = document.querySelectorAll(".ilk p");

let fiyatDegeri = 0;
const fiyadeger = function(){ 
    alSepet.forEach((item, index)=>{
        item.addEventListener("click", function(){
            let deger = Number(fiyatlar[index].textContent);
            let degeri = urunAdi[index].textContent;
            let div = document.createElement("div");
            div.classList.add("sil-btn")
            hesapSepet.appendChild(div);
            let yeniEleman = document.createElement("p");
            let yeniElemanBtn = document.createElement("button");
            yeniElemanBtn.innerHTML = "-";
            yeniEleman.innerHTML = `${degeri} =  ${deger} TL`;
            div.appendChild(yeniEleman);
            div.appendChild(yeniElemanBtn);
            yeniElemanBtn.addEventListener("click", function(){
            div.remove()
            fiyatDegeri -= deger;
            hesapSepetSpan.innerHTML = `Sepet Tutarı:  ${fiyatDegeri} TL`;
            })
            fiyatDegeri += deger;
            hesapSepetSpan.innerHTML = `Sepet Tutarı:  ${ fiyatDegeri} TL`;
        })
    })
}

fiyadeger()

const gosterBtn = document.querySelector(".sepet-goster");
const gosterBtni = document.querySelector(".material-symbols-outlined");

gosterBtn.addEventListener("click", function(){
    hesapSepet.classList.toggle("active");
})

gosterBtni.addEventListener("click", function(){
    hesapSepet.classList.toggle("active");
})

const resim = document.querySelector(".resim-1");
const solBtn = document.querySelector(".onceki-img-btn");
const sagBtn = document.querySelector(".sonraki-img-btn");

const resimDizi = [
    "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/03-mart-23/secili-urunlerde-indirim-10-03-23-web.jpg",   
    "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-nisan/samsung-galaxy-a54-telefon-27-04-23-web.jpg",
    "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/011-kasim-2022/haftanin-teknolojik-urunleri-6-2-23-web.jpg",
    "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/04-nisan/lo-opet-oled-7-4-23-web.jpg",
]

let resimDeger = 0;

sagBtn.addEventListener("click", function(){
    resimDeger++;
    if(resimDeger >= resimDizi.length){
        resimDeger = 0;
    }
    resim.src = resimDizi[resimDeger]
    e.preventDefault();
})

solBtn.addEventListener("click", function(){
    resimDeger--;
    if(resimDeger < 0){
        resimDeger = resimDizi.length -1;
    }
    resim.src = resimDizi[resimDeger];
    e.preventDefault();
})
