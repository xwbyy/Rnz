// settings.js

const settings = {
    profile: {
        name: "RNZ",
        bio: "Imagine, Create, Achieve.",
        picture: "https://files.catbox.moe/msracd.jpg",
        tags: ["Ngoding", "Copas", "Game", "Music"],
        socialLinks: [
            { icon: "fab fa-youtube", url: "https://youtube.com/@VynaaChan" },
            { icon: "fab fa-whatsapp", url: "https://wa.me/message/2MOJNXNC45Y5E1" },
            { icon: "fab fa-instagram", url: "https://instagram.com/vynaa_valerie" }
        ]
    },
    links: [
        {
            emoji: "🌐",
            title: "Personal Website",
            subtitle: "About me.",
            url: "https://vynaavalerie.github.io/pinaa"
        },
        {
            emoji: "👾",
            title: "Vynaa AI",
            subtitle: "Bukan sekadar bot WhatsApp, Vynaa punya segalanya buat lu!",
            url: "https://wa.me/6283896757956?text=.menu"
        },
        {
            emoji: "👾",
            title: "Vynaa AI",
            subtitle: "Lu butuh bot all-in-one? Vynaa bot Telegram jawabannya!",
            url: "https://t.me/pinottbot"
        },
        {
            emoji: "💬",
            title: "Saluran Vynaa Valerie",
            subtitle: "Dapatkan informasi disini",
            url: "https://whatsapp.com/channel/0029VaHPYh6LNSa81M9Xcq1K"
        }
    ],
    sewa: [
        {
            image: "https://files.catbox.moe/pft8gb.jpg",
            title: "Sewa Bot",
            duration: "1 Bulan",
            price: "Rp 20.000",
            url: "https://wa.me/6282389924037?text=kak_Sewabot_1bulan_20.000"
        },
        {
            image: "https://files.catbox.moe/pft8gb.jpg",
            title: "Sewa Bot",
            duration: "2 Bulan",
            price: "Rp 35.000",
            url: "https://wa.me/6282389924037?text=kak_Sewabot_2bulan_35.000"
        },
        {
            image: "https://files.catbox.moe/pft8gb.jpg",
            title: "Produk 3",
            duration: "3 Bulan",
            price: "Rp 45.000",
            url: "https://wa.me/6282389924037?text=kak_Sewabot_3bulan_45.000"
        },
        {
            image: "https://files.catbox.moe/15iur1.jpg",
            title: "Script Bot",
            duration: "Bot WhatsApp",
            price: "Rp 40.000",
            url: "https://wa.me/p/28159551530325907/6282389924037"
        }
    ],
    jasa: [
        {
            title: "Menerima pembuatan script bot",
            description: "Buat bot sesuai kebutuhan Anda."
        },
        {
            title: "Menerima perbaikan script atau fitur bot",
            description: "Perbaiki bug atau tambahkan fitur baru."
        },
        {
            title: "Menerima pembuatan fitur bot",
            description: "Tambahkan fitur khusus ke bot Anda."
        },
        {
            title: "Menerima semua kebutuhan bot",
            description: "Solusi lengkap untuk kebutuhan bot Anda."
        },
        {
            title: "Menerima jasa install panel (Ptero)",
            description: "Instalasi dan konfigurasi panel Pterodactyl."
        },
        {
            title: "Menerima Jadi Bot",
            description: "Jadikan bot Anda siap pakai."
        }
    ],
    info: [
        "Pembayaran bisa dicicil",
        "Bisa bayar di awal atau akhir",
        "Pembayaran melalui QRIS Only",
        "Testimoni Banyak"
    ]
};

// Fungsi untuk memuat data ke dalam HTML
function loadSettings() {
    // Load Profile
    document.querySelector('.profile-pic').src = settings.profile.picture;
    document.querySelector('.profile-name').textContent = settings.profile.name;
    document.querySelector('.profile-bio').textContent = settings.profile.bio;

    const tagsContainer = document.querySelector('.profile-tags');
    tagsContainer.innerHTML = settings.profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const socialLinksContainer = document.querySelector('.profile-links');
    socialLinksContainer.innerHTML = settings.profile.socialLinks.map(link => 
        `<a href="${link.url}" class="social-icon"><i class="${link.icon}"></i></a>`
    ).join('');

    // Load Links
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = settings.links.map(link => `
        <a href="${link.url}" class="link">
            <div class="link-icon">
                <span>${link.emoji}</span>
                <div class="link-text">
                    <div class="link-title">${link.title}</div>
                    <div class="link-subtitle">${link.subtitle}</div>
                </div>
            </div>
            <div class="arrow">→</div>
        </a>
    `).join('');

    // Load Sewa
    const sewaContainer = document.querySelector('.katalog');
    sewaContainer.innerHTML = settings.sewa.map(item => `
        <div class="katalog-item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.duration}</p>
            <div class="price">${item.price}</div>
            <button onclick="window.location.href='${item.url}'">Buy</button>
        </div>
    `).join('');

    // Load Jasa
    const jasaContainer = document.querySelector('.jasa-page ul');
    jasaContainer.innerHTML = settings.jasa.map(item => `
        <li>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </li>
    `).join('');

    // Load Info
    const infoContainer = document.querySelector('.jasa-page .info');
    infoContainer.innerHTML = `
        <h3>ℹ️ Information</h3>
        ${settings.info.map(info => `<p>• ${info}</p>`).join('')}
    `;
}

// Panggil fungsi loadSettings saat halaman dimuat
window.onload = loadSettings;
