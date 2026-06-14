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
        harga: 80000,
        foto: "assets/rumput3.jpg"
    },
];

function render(data) {
    containerLapangan.innerHTML = "";

    data.forEach(item => {
        const cardsLapangan = document.createElement("div");

        cardsLapangan.className =
            "h-64 sm:h-96 bg-[#2E7D32] rounded-t-[25px] overflow-hidden";

        cardsLapangan.innerHTML = `
            <img src="${item.foto}" alt="" class="w-full h-[45%] object-cover">
            <p class="lapangan ml-3 mt-1 text-white text-sm sm:text-xl font-bold">${item.nama}</p>
            <p class="jenis ml-3 mt-2 italic text-white text-sm sm:text-xl">${item.jenis}</p>
            <p class="harga ml-3 mt-3 italic text-white font-bold text-sm sm:mt-5 sm:text-xl">
                Rp. ${item.harga.toLocaleString("id-ID")}
            </p>
            <div class="flex justify-center items-center mt-4 sm:mt-8">
                <div class="flex justify-center items-center bg-white rounded-md shadow-lg py-1 px-3">
                    <a href="pesansekarang.html">Pesan Sekarang</a>
                </div>
            </div>
        `;

        containerLapangan.appendChild(cardsLapangan);
    });
}

render(lapangan)

// Live Searching Lapangan
const search = document.querySelector('.search-lapangan');

search.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();

    const tampil = lapangan.filter(m =>
        m.nama.toLowerCase().includes(keyword) ||
        m.jenis.toLowerCase().includes(keyword) ||
        String(m.harga).includes(keyword)
    );

    if(tampil.length === 0) {
        containerLapangan.innerHTML = `<h1 class=" col-span-full text-center text-xl font-bold">Data Lapangan Tidak Tersedia!</h1>`
        return
    }

    render(tampil);
});

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

// Tabs Components
const tabs = document.querySelectorAll(".tabs")
tabs.forEach(m => {
    m.addEventListener("click", () => {
        tabs.forEach( m => m.classList.remove("activeTabs"))
        m.classList.add("activeTabs")
    })
})