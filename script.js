// Data Navbar
let navbar = [
    {
        nama: "Beranda",
        icon: "fa-solid fa-house"
    },
    {
        nama: "Lapangan",
        icon: "fa-solid fa-futbol"
    },
    {
        nama: "Fasilitas",
        icon: "fa-solid fa-building"
    },
    {
        nama: "Tentang Kami",
        icon: "fa-solid fa-circle-info"
    },
    {
        nama: "Kontak",
        icon: "fa-solid fa-phone"
    },
    {
        nama: "FAQ",    
        icon: "fa-solid fa-circle-question"
    }
]

// Navbar Mobile
const navbarMobile = document.getElementById('navbar-mobile')
const ulNavbarMobile = document.createElement("ul")
ulNavbarMobile.className = "absolute top-0 left-0 ml-2 mt-50 w-full"

navbar.forEach(m => {
    const liNavbarMobile = document.createElement("li")
    liNavbarMobile.className = `navbar-mobile cursor-pointer hover:bg-black hover:text-white`
    liNavbarMobile.innerHTML = `
    <a href="#${m.nama.toLowerCase().replace(/\s/g, "")}"><i class="${m.icon} mr-3"></i>${m.nama}</a>
    <hr class="h-0.5 bg-black mb-5">
    `

    ulNavbarMobile.appendChild(liNavbarMobile)
})

navbarMobile.appendChild(ulNavbarMobile)

// Navbar Dekstop
const navbarDekstop = document.getElementById('navbar-dekstop')
const ulNavbarDekstop = document.createElement("ul")
ulNavbarDekstop.className = "flex gap-8 text-white font-bold text-lg"

navbar.forEach(m => {
    const liNavbarDekstop = document.createElement("li")
    liNavbarDekstop.className = `relative cursor-pointer 
                                after:content-[''] 
                                after:absolute 
                                after:left-1/2 
                                after:-translate-x-1/2 
                                after:-bottom-1 
                                after:w-0 
                                after:h-[2px] 
                                after:bg-white 
                                after:transition-all 
                                after:duration-300 
                                hover:after:w-full`
    liNavbarDekstop.innerHTML = `
    <a href="#${m.nama.toLowerCase().replace(/\s/g, "")}">${m.nama}</a>
    `

    ulNavbarDekstop.appendChild(liNavbarDekstop)
})

navbarDekstop.appendChild(ulNavbarDekstop)

// Responsive Navbar Mobile
const fasNavbar = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu-mobile')

// buka navbar mobile
function openMenu() {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
}
fasNavbar.addEventListener('click', openMenu)

// tutup navbar mobile
const fasClose = document.querySelector('.fa-times')
function closeMenu() {
    menu.classList.remove('translate-x-0');
    menu.classList.add('-translate-x-full');
    menu.classList.add('none');
}
fasClose.addEventListener("click", closeMenu)

// tutup navbar mobile ketika li navbar mengklik sesuatu
const NavbarMobile = document.querySelectorAll('.navbar-mobile')
for(m of NavbarMobile) {
    m.addEventListener("click", closeMenu)
}

const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider img");

let current = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${current * 100}%)`;
}

// Prev
document.querySelector(".img-slider-before").addEventListener("click", () => {
    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    updateSlider();
});

// Next
document.querySelector(".img-slider-after").addEventListener("click", () => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    updateSlider();
});

// Auto slide
setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    updateSlider();
}, 3000);

// Data Lapangan
const containerLapangan = document.getElementById('container-lapangan')

let lapangan = [
    {
        nama: "Lapangan A",
        jenis: "Vinyl",
        harga: 100000,
        foto: "assets/semen1.jpg"
    },
    {
        nama: "Lapangan B",
        jenis: "Rumput Sintetis",
        harga: 100000,
        foto: "assets/rumput1.jpg"
    },
    {
        nama: "Lapangan C",
        jenis: "Interlock",
        harga: 100000,
        foto: "assets/semen2.jpg"
    },
    {
        nama: "Lapangan D",
        jenis: "Rumput Sintetis",
        harga: 100000,
        foto: "assets/rumpu2.jpg"
    },
    {
        nama: "Lapangan E",
        jenis: "Interlock",
        harga: 100000,
        foto: "assets/semen3.jpg"
    },
    {
        nama: "Lapangan F",
        jenis: "Rumput Sintetis",
        harga: 100000,
        foto: "assets/rumput3.jpg"
    },
];

lapangan.forEach(item => {
    const cardsLapangan = document.createElement("div")
    cardsLapangan.className = `h-64 sm:h-96 bg-[#2E7D32] rounded-t-[25px] overflow-hidden`
    cardsLapangan.innerHTML = `
    <img src="${item.foto}" alt="" class="w-full h-[45%] object-cover">
            <p class="lapangan ml-3 mt-1 text-white text-sm sm:text-xl font-bold">${item.nama}</p>
            <p class="jenis ml-3 mt-2 italic text-white text-sm sm:text-xl">${item.jenis}</p>
            <p class="harga ml-3 mt-3 italic text-white font-bold text-sm sm:mt-5 sm:text-xl">${"Rp. " + item.harga.toLocaleString("id-ID")}</p>
            <div class="flex justify-center items-center mt-4 sm:mt-8">
                <div class="flex justify-center items-center bg-white rounded-md lg:rounded-lg xl:rounded-lg 2xl:rounded-lg shadow-lg py-1 px-3 group hover:bg-black hover:scale-110 transition-color transtion-transform duration-700 sm:p-3">
                    <a href="pesansekarang.html" class="text-sm lg:text-lg xl:text-lg 2xl:text-lg font-bold group-hover:text-white">Pesan Sekarang</a>
                </div>
            </div>
    `
    containerLapangan.appendChild(cardsLapangan)
})

// Data Fasilitas
const containerFasilitas = document.getElementById('container-fasilitas')

let fasilitas = [
    {
        icon: "fa-solid fa-square-parking",
        judul: "Parkir Motor dan Mobil",
        deskripsi: "Area parkir yang luas dan aman untuk kendaraan roda dua maupun roda empat. Dilengkapi dengan sistem keamanan untuk menjaga kenyamanan pengunjung"
    },
    {
        icon: "fa-solid fa-mosque",
        judul: "Mushola",
        deskripsi: "Tempat ibadah yang bersih dan nyaman untuk beribadah serta beristirahat sejenak. Tersedia fasilitas pendukung untuk menunjang kenyamanan pengguna"
    },
    {
        icon: "fa-solid fa-toilet",
        judul: "Toilet",
        deskripsi: "Fasilitas toilet yang bersih, nyaman, dan terawat untuk memenuhi kebutuhan pengunjung selama berada di area"
    },


    {
        icon: "fa-solid fa-wifi",
        judul: "WiFi",
        deskripsi: "Akses internet cepat dan stabil yang dapat digunakan untuk belajar, bekerja, maupun kebutuhan hiburan selama berada di lokasi."
    },

    {
        icon: "fa-solid fa-utensils",
        judul: "Kantin",
        deskripsi: "Menyediakan berbagai pilihan makanan dan minuman dengan harga terjangkau untuk memenuhi kebutuhan pengunjung"
    },
    {
        icon: "fa-solid fa-lock",
        judul: "Loker Penyimpanan",
        deskripsi: "Fasilitas penyimpanan barang yang aman dan praktis untuk menjaga barang bawaan tetap terlindungi selama beraktivitas."
    }
]

fasilitas.forEach(item => {
    const cardsFasilitas = document.createElement("div")
    cardsFasilitas.className = "relative sm:h-56 rounded-xl shadow-md lg:shadow-2xl bg-white group transition-all duration-300 hover:bg-[#2E7D32] hover:cursor-pointer"
    cardsFasilitas.innerHTML = `
    <div class="bg-white absolute left-1/2 -translate-x-1/2 group-hover:bg-[#2E7D32] group-hover:text-white -translate-y-1/2 w-12 h-12 top-0 rounded-full -4 border-white flex items-center justify-center shadow-lg">
                <i class="${item.icon} text-2xl"></i>
            </div>
    <div class="w-full flex flex-col justify-center items-center mt-8">
                <h1 class="text-center font-bold text-lg sm:text-xl group-hover:text-white">${item.judul}</h1>
                <p class="text-center text-sm mt-2 sm:mt-4 sm:text-base group-hover:text-white mb-3 sm:mb-0">${item.deskripsi}</p>
            </div>
    `
    containerFasilitas.appendChild(cardsFasilitas)
})


// Tentang Kami Kenapa Memilih Kami?
const kenapaMemilihKami = document.getElementById('kenapamemilihkami')
kenapaMemilihKami.innerHTML = `<div class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold text-center lg:h-1/6 flex justify-center items-center">Kenapa Memilih Kami?</div>`
const divKenapaMemilihKami = document.createElement("div")
divKenapaMemilihKami.className = `mt-8 lg:mt-0 w-full flex justify-center items-center lg:px-6 px-3 h-full`
const ulKenapaMemilihKami = document.createElement("ul")
ulKenapaMemilihKami.className = `h-full w-full grid grid-cols-2 font-semibold text-center gap-3`

let kenapaMilihKami = [
    {
        icon: "fa-solid fa-futbol",
        judul: "Lapangan Berkualitas",
        deskripsi: "Permukaan lapangan terawat dengan standar nyaman untuk bermain futsal."
    },
    {
        icon: "fa-solid fa-lightbulb",
        judul: "Pencahayaan Terang",
        deskripsi: "Lampu lapangan yang terang dan merata untuk permainan siang maupun malam."
    },
    {
        icon: "fa-solid fa-clock",
        judul: "Booking Mudah",
        deskripsi: "Reservasi lapangan cepat dan praktis secara online maupun offline."
    },
    {
        icon: "fa-solid fa-shield-halved",
        judul: "Aman dan Nyaman",
        deskripsi: "Area bermain yang bersih, aman, dan nyaman sehingga pemain dapat berolahraga dengan tenang dan fokus."
    },
    {
        icon: "fa-solid fa-star",
        judul: "Pelayanan Terbaik",
        deskripsi: "Staff ramah dan siap membantu kebutuhan pemain selama bermain."
    },
    {
        icon: "fa-solid fa-id-card",
        judul: "Membership Hemat",
        deskripsi: "Nikmati harga lebih murah dan keuntungan khusus untuk member setia Dinda Futsal."
    },
]

kenapaMilihKami.forEach(m => {
    const liKenapaMemilihKami = document.createElement("li")
    liKenapaMemilihKami.className = 'bg-white group transition-all duration-300 hover:bg-black cursor-pointer rounded-lg flex flex-col justify-center items-center'
    liKenapaMemilihKami.innerHTML = `<div class="flex justify-center items-center gap-2">
                            <i class="${m.icon} text-[#2E7D32] text-lg lg:text-2xl group-hover:text-green-400"></i>
                            <h1 class="font-bold text-lg group-hover:text-white ">${m.judul}</h1>
                        </div>
                        <p class="text-slate-600 group-hover:text-white text-sm lg:text-base lg:mt-0 mt-2">${m.deskripsi}</p>`

    ulKenapaMemilihKami.appendChild(liKenapaMemilihKami)
})

divKenapaMemilihKami.appendChild(ulKenapaMemilihKami)
kenapaMemilihKami.appendChild(divKenapaMemilihKami)


// Tentang Kami Kontak
let kontak = [
    {
        icon: "fa-solid fa-phone",
        nama: "Phone",
        username: "0896-9149-8537",
    },
    {
        icon: "fa-brands fa-whatsapp",
        nama: "WhatsApp",
        username: "0896-9149-8537",
    },
    {
        icon: "fa-brands fa-instagram",
        nama: "Instagram",
        username: "@dindafutsal",
    },
    {
        icon: "fa-brands fa-tiktok",
        nama: "TikTok",
        username: "dindafutsal",
    },
    {
        icon: "fa-solid fa-envelope",
        nama: "Email",
        username: "dindafutsal@gmail.com",
    },
    {
        icon: "fa-solid fa-location-dot",
        nama: "Location",
        username: "Jl. Sersan Muslim No. RT 24, The Hok, Kec. Jambi Selatan, Kota Jambi, Jambi"
    }
]

// Dekstop
const kontakkami = document.getElementById("kontak-left")
const divKontak = document.createElement("div");
divKontak.className = `w-[85%] px-3 py-3`
const ulKontak = document.createElement("ul")
ulKontak.className = `flex flex-wrap gap-5 justify-center`
kontak.forEach(m => {
    const liKontak = document.createElement("li")
    liKontak.className = `p-2 w-[150px] lg:w-[220px] min-h-[150px] lg:min-h-[200px] bg-white flex flex-col justify-center items-center text-center group hover:bg-black cursor-pointer rounded-lg shadow-md
        group hover:bg-black cursor-pointer
        transition-all duration-300`
    liKontak.innerHTML = `
    <i class="${m.icon} text-5xl lg:text-7xl group-hover:text-white"></i>
    <p class="mt-2 font-bold tracking-wide lg:text-2xl group-hover:text-white">${m.nama}</p>
    <p class="break-all tracking-wide lg:text-xl group-hover:text-white group-hover:text-white">${m.username}</p>
    `
    ulKontak.appendChild(liKontak)
    divKontak.appendChild(ulKontak)
})
kontakkami.appendChild(divKontak)

// Mobile
const kontakMobile = document.getElementById("kontak-mobile")

const divKontakMobile = document.createElement("div")
divKontakMobile.className = `w-full px-3 py-5`

const ulKontakMobile = document.createElement("ul")
ulKontakMobile.className = `grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 place-items-center`

kontak.forEach(m => {
    const liKontakMobile = document.createElement("li")
    liKontakMobile.className = `
        w-full max-w-[180px] sm:max-w-[200px]
        min-h-[140px]
        bg-white flex flex-col justify-center items-center text-center
        rounded-lg shadow-md
        group hover:bg-black cursor-pointer
        transition-all duration-300
    `

    liKontakMobile.innerHTML = `
        <i class="${m.icon} text-4xl sm:text-5xl group-hover:text-white"></i>
        <p class="mt-2 font-bold text-sm sm:text-base group-hover:text-white">${m.nama}</p>
        <p class="text-xs sm:text-sm break-all group-hover:text-white">${m.username}</p>
    `

    ulKontakMobile.appendChild(liKontakMobile)
})
divKontakMobile.appendChild(ulKontakMobile)
kontakMobile.appendChild(divKontakMobile)

// Validasi Form

const inputs = document.querySelectorAll("input, textarea");
const errors = document.querySelectorAll(".pesan-eror");
const buttonForm = document.querySelector(".btnform")

inputs.forEach((input, index) => {
    input.addEventListener("blur", function () {
        if (input.value.trim() === "") {
            errors[index].classList.remove("hidden");
        } else {
            errors[index].classList.add("hidden");
        }
    });
});

// Toast Notifications
const loading = document.getElementById("loading")
const berhasil = document.getElementById("berhasil")
const gagal = document.getElementById("gagal")

const toastBackground = document.querySelectorAll(".toast")
const cancelToast = document.querySelectorAll(".cancel-toast")

buttonForm.addEventListener("click", () => {
    loading.classList.remove("hidden")
    setTimeout( () => {

            inputs.forEach(m => {

                m.value.trim() === "" 
                ? (gagal.classList.remove("hidden"), berhasil.classList.add("hidden")) 
                : (berhasil.classList.remove("hidden"), gagal.classList.add("hidden"))

                m.value = "";
            })
        }, 2000)
})

cancelToast.forEach(m => {
    m.addEventListener("click", () => {
        toastBackground.forEach(n => {
            n.classList.add("hidden")
        })
    })
})

// FAQ
const dropdowns = document.querySelectorAll(".dropdown")
const openFaq = document.querySelectorAll(".open-faq")
const closeTag = document.querySelectorAll(".close-tag")
const openTag = document.querySelectorAll(".open-tag")

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("click", () => {
        openFaq[index].classList.toggle("hidden")
        closeTag[index].classList.toggle("hiddenTag")
        openTag[index].classList.toggle("hidden")
    })
})

// Animation
const elements = document.querySelectorAll('.menu')
elements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, {
    // “trigger saat 10% elemen sudah terlihat di layar”
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));
