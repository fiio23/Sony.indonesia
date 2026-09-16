// Array Data Produk (Tambah atau hapus produk di sini tanpa merubah HTML/CSS)
const productsData = [
    {
        id: "wh1000xm5",
        name: "WH-1000XM5",
        description: "Headphone Peredam Bising Nirkabel",
        image: "img/WH-1000XM6.webp",
        link: "product.html?id=wh1000xm5",
        category: "Headphone",
        price: "Rp 5.999.000",
        longDescription: "Headphone nirkabel dengan peredam bising terbaik di kelasnya. Dilengkapi prosesor V1 terbaru untuk ANC yang luar biasa, kualitas suara Hi-Res, dan baterai hingga 30 jam.",
        highlights: [
            "Peredam Bising Adaptif dengan AI",
            "Kualitas Suara Hi-Res Audio",
            "Baterai 30 Jam (ANC ON)",
            "Panggilan Jernih dengan Precise Voice Pickup",
            "Desain Ringan & Nyaman"
        ],
        specs: {
            "Tipe": "Over-ear, Nirkabel",
            "Driver": "30mm",
            "Frekuensi": "4 Hz - 40.000 Hz",
            "Bluetooth": "v5.2",
            "Codec": "LDAC, AAC, SBC",
            "Baterai": "30 jam (ANC ON), 40 jam (ANC OFF)",
            "Pengisian": "USB-C, Quick Charge 3 menit = 3 jam",
            "Berat": "250g"
        },
        features: [
            {
                title: "Peredam Bising Terbaik",
                desc: "Dual processor V1 + HD Noise Cancelling Processor QN1 menghilangkan bising hingga 99%."
            },
            {
                title: "Suara Premium",
                desc: "Driver 30mm baru dengan edge-AI menghasilkan detail suara yang luar biasa."
            },
            {
                title: "Multipoint Connection",
                desc: "Sambungkan ke 2 perangkat sekaligus (HP + Laptop) dan beralih otomatis."
            }
        ],
        related: ["a7v", "bravia8"]
    },
    {
        id: "a7v",
        name: "α7 V",
        description: "Kamera Mirrorless Full-Frame",
        image: "img/α7 V.avif",
        link: "product.html?id=a7v",
        category: "Kamera",
        price: "Rp 42.999.000",
        longDescription: "Kamera mirrorless Full-Frame generasi terbaru dengan sensor 61MP, AF real-time tracking, dan video 8K. Dirancang untuk fotografer profesional dan kreator konten.",
        highlights: [
            "Sensor Exmor R 61MP Full-Frame",
            "Real-time Tracking AF",
            "Video 8K 30p / 4K 120p",
            "IBIS 8-stop",
            "Dual Card Slot CFexpress Type A / SD"
        ],
        specs: {
            "Sensor": "35mm Full-Frame 61.0MP Exmor R CMOS",
            "Prosesor": "BIONZ XR",
            "ISO": "100-32.000 (Expandable 50-102.400)",
            "AF Points": "693 Phase-detection + 425 Contrast",
            "Video": "8K 30p, 4K 120p, 10-bit 4:2:2",
            "Shutter": "Mechanical 1/8000, Electronic 1/32000",
            "Layar": "3.2\" 2.1M-dot Vari-angle Touchscreen",
            "Baterai": "NP-FZ100 (~530 shot)"
        },
        features: [
            {
                title: "Real-time Eye AF",
                desc: "Deteksi mata Manusia, Hewan, Burung, Kendaraan, Insecta secara real-time."
            },
            {
                title: "8K Video",
                desc: "Rekam 8K 30p oversampled dari 8.6K, plus 4K 120p untuk slow motion cinematic."
            },
            {
                title: "Stabilisasi IBIS 8-stop",
                desc: "In-body stabilization 5-axis memberikan 8 stop kompensasi untuk foto & video."
            }
        ],
        related: ["wh1000xm5", "bravia8"]
    },
    {
        id: "bravia8",
        name: "BRAVIA 8",
        description: "Ultra HD TV Desain Tipis",
        image: "img/Bravia 9.webp",
        link: "product.html?id=bravia8",
        category: "TV",
        price: "Rp 28.999.000",
        longDescription: "TV OLED 4K dengan desain ultra-tipis, prosesor XR, dan suara Acoustic Surface Audio+. Pengalaman bioskop di rumah dengan kontras tak terbatas dan warna akurat.",
        highlights: [
            "Panel OLED 4K HDR",
            "Cognitive Processor XR",
            "Acoustic Surface Audio+",
            "Desain One Slate Ultra-tipis",
            "Google TV & Bravia Core"
        ],
        specs: {
            "Panel": "OLED 4K (3840 x 2160)",
            "Ukuran": "55\", 65\", 77\"",
            "Prosesor": "Cognitive Processor XR",
            "HDR": "HDR10, HLG, Dolby Vision",
            "Audio": "Acoustic Surface Audio+ 60W",
            "OS": "Google TV",
            "HDMI": "4x HDMI 2.1 (4K 120Hz, VRR, ALLM)",
            "Koneksi": "Wi-Fi 6, Bluetooth 5.2, Ethernet"
        },
        features: [
            {
                title: "Cognitive Processor XR",
                desc: "AI memproses gambar seperti mata manusia - fokus pada area yang dilihat penonton."
            },
            {
                title: "Acoustic Surface Audio+",
                desc: "Layar bergetar menjadi speaker - suara datang langsung dari aksi di layar."
            },
            {
                title: "Perfect for PlayStation 5",
                desc: "Auto HDR Tone Mapping, Auto Genre Picture Mode, 4K 120Hz VRR."
            }
        ],
        related: ["wh1000xm5", "a7v"]
    }
];

// Fungsi merender produk otomatis ke HTML (Homepage)
function renderProducts() {
    const container = document.getElementById('latest-products');
    if (!container) return;
    
    container.innerHTML = ''; 

    productsData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" class="link-action">Pelajari lebih lanjut &rarr;</a>
        `;
        container.appendChild(card);
    });
}

// Fungsi render halaman detail produk
function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    document.title = `${product.name} | Sony Indonesia`;
    
    document.getElementById('product-main-img').src = product.image;
    document.getElementById('product-main-img').alt = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-description').textContent = product.longDescription;
    document.getElementById('product-price').textContent = product.price;
    
    // Highlights
    const highlightsContainer = document.getElementById('product-highlights');
    highlightsContainer.innerHTML = '<h3>Keunggulan Utama</h3><ul>' + 
        product.highlights.map(h => `<li>${h}</li>`).join('') + '</ul>';
    
    // Specs
    const specsContainer = document.getElementById('product-specs');
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, value]) => 
        `<div class="spec-item"><span class="spec-label">${key}</span><span class="spec-value">${value}</span></div>`
    ).join('');
    
    // Features
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = product.features.map(f => `
        <div class="feature-card">
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
        </div>
    `).join('');
    
    // Related products
    renderRelatedProducts(product.related);
}

function renderRelatedProducts(relatedIds) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    container.innerHTML = '';
    
    relatedIds.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if (!product) return;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" class="link-action">Pelajari lebih lanjut &rarr;</a>
        `;
        container.appendChild(card);
    });
}

// Update featured product link on homepage
function updateFeaturedLink() {
    const featuredLink = document.querySelector('.featured-content .link-action');
    if (featuredLink) {
        featuredLink.href = 'product.html?id=a7v';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateFeaturedLink();
    
    // Hanya jalankan renderProductDetail di halaman product.html
    if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    }
});