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

// Get Langganan
const langganan = document.querySelectorAll(".langganan")
const overlay = document.getElementById("overlay")
const popup = document.querySelector(".popup")
const batal = document.querySelector(".batal")

langganan.forEach(m => {
    m.addEventListener("click", (e) => {
        e.preventDefault()
        overlay.classList.remove("hidden")
        popup.classList.remove("hidden");
    })
})

batal.addEventListener("click", () => {
    overlay.classList.add("hidden")
    popup.classList.add("hidden")
})