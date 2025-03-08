// settings.js



const settings = {

    profile: {

        name: "RNS OFFICIAL",

        bio: "Imagine, Create, Achieve.",

        picture: "https://files.catbox.moe/g9p0jv.jpg",

        tags: ["Ngoding", "Copas", "Game", "Music"],

        socialLinks: [

            { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@rnsid_bot" },

            { icon: "fab fa-instagram", url: "https://www.instagram.com/rilian_96" },

            { icon: "fab fa-whatsapp", url: "https://wa.me/6287809731800" }

        ]

    },

    links: [

        {

            emoji: "🌐",

            title: "Personal Website",

            subtitle: "My Website",

            url: "https://rnsync.my.id"

        },

        {

            emoji: "👾",

            title: "Rns Bot",

            subtitle: "Bukan sekedar bot WhatsApp, Rns bot punya segalanya buat kamu!",

            url: "https://wa.me/6285157548722?text=.menu"

        },

        {

            emoji: "👾",

            title: "Rns Bot",

            subtitle: "Kamu butuh bot all-in-one? Rns bot Telegram jawabannya!",

            url: "https://t.me/RnsID_bot"

        },

        {

            emoji: "💬",

            title: "Saluran Rns Bot",

            subtitle: "Dapatkan informasi disini",

            url: "https://whatsapp.com/channel/0029VaoaXMK4o7qVaN2sm91w"

        }

    ],

    sewa: [

        {

            image: "https://files.catbox.moe/e6qhkx.jpg",

            title: "Sewa Bot",

            duration: "1 Bulan",

            price: "Rp 10.000",

            url: "https://wa.me/6287809731800?text=kak_Sewabot_1bulan_10.000"

        },

        {

            image: "https://files.catbox.moe/e6qhkx.jpg",

            title: "Sewa Bot",

            duration: "Permanent",

            price: "Rp 30.000",

            url: "https://wa.me/6287809731800?text=kak_Sewabot_Permanent_30.000"

        },

        {

            image: "https://files.catbox.moe/e6qhkx.jpg",

            title: "Premium",

            duration: "1 Bulan",

            price: "Rp 10.000",

            url: "https://wa.me/6287809731800?text=kak_Premium_1bulan_10.000"

        },

        {

            image: "https://files.catbox.moe/e6qhkx.jpg",

            title: "Premium",

            duration: "Permanent",

            price: "Rp 15.000",

            url: "https://wa.me/6287809731800?text=kak_Premium_Permanent_15.000"

        }

    ],

    jasa: [

        {

            title: "Menyediakan TopUp game & Pulsa",

            description: "Ingin topup game atau pulsa dan kebutuhan lainnya kami solusinya."

        },

        {

            title: "Suntik Followers Sosial Media",

            description: "Kami Bisa menambah followers,Like,Views secara singkat."

        },

        {

            title: "Topup Crypto",

            description: "Butuh crypto eceran, kami menyediakan crypto seperti, TRX, DOGE.dll."

        }

    ],

    info: [

        "Pembayaran bisa melalui",

        "Bank & Qris",

        "Ewallet ( Dana,Gopay,Ovo,Shopepay",

        "Indomaret, Alfamart,"

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
