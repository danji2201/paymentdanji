// --- JAM DIGITAL ANIMASI ---
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const day = document.getElementById('day');
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    clock.textContent = now.toLocaleTimeString('id-ID');
    day.textContent = days[now.getDay()];
    // Animasi warna jam
    const colors = ['#00bcd4', '#ff9800', '#e91e63', '#8bc34a', '#f44336'];
    clock.style.color = colors[now.getSeconds() % colors.length];
}
setInterval(updateClock, 1000);
updateClock();

// --- MAGIC NAVBAR MENU HIGHLIGHT ---
const navigation = document.querySelector('.navigation');
const highLight = document.querySelector('.highlight');
const items = document.querySelectorAll('.navigation li');

function setHighlightToActive() {
    const activeItem = navigation.querySelector('.active');
    highLight.style.width = activeItem.offsetWidth + 'px';
    highLight.style.left = activeItem.offsetLeft + 'px';
}
setHighlightToActive();

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        setHighlightToActive();
    });

    item.addEventListener('mouseenter', () => {
        highLight.style.width = item.offsetWidth * 0.9 + 'px';
        highLight.style.left = item.offsetLeft + item.offsetWidth * 0.05 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        setHighlightToActive();
    });
});

// --- POPUP LOGIC ---
function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Jam Digital
document.getElementById('showClockBtn').onclick = function() {
    showPopup('popupClock');
    updateClock();
};
document.getElementById('closeClockBtn').onclick = function() {
    closePopup('popupClock');
};

// Pembayaran
document.getElementById('showPaymentBtn').onclick = function() {
    showPopup('popupPayment');
};
document.getElementById('closePaymentBtn').onclick = function() {
    closePopup('popupPayment');
};

// Menu Lengkap
document.getElementById('showMenuBtn').onclick = function() {
    showPopup('popupMenu');
};
document.getElementById('closeMenuBtn').onclick = function() {
    closePopup('popupMenu');
};

// Tentang Saya
document.getElementById('showAboutBtn').onclick = function() {
    showPopup('popupAbout');
};
document.getElementById('closeAboutBtn').onclick = function() {
    closePopup('popupAbout');
};

// Menu Owner (titik tiga)
document.getElementById('fabDots').onclick = function() {
    showPopup('popupFabMenu');
};
document.getElementById('closeFabMenu').onclick = function() {
    closePopup('popupFabMenu');
};

// Buy Api Bug
document.getElementById('showSourceBtn').onclick = function() {
    showPopup('popupSource');
};
document.getElementById('closeSourceBtn').onclick = function() {
    closePopup('popupSource');
};

// Api Bug Gratisan
document.getElementById('showFreeBtn').onclick = function() {
    showPopup('popupFree');
};
document.getElementById('closeFreeBtn').onclick = function() {
    closePopup('popupFree');
};

function openPopup() {
    document.getElementById('openpopup').style.display = 'block';
}

// Buka popup pilihan paket
function openPopup() {
  document.getElementById("popupWebsite").style.display = "block";
}

// Tutup popup pilihan paket
function closePopup() {
  document.getElementById("popupWebsite").style.display = "none";
}

// Lanjut ke metode pembayaran
function goPayment(role, price) {
  document.getElementById("popupWebsite").style.display = "none";
  document.getElementById("payment").style.display = "block";
  document.getElementById("selectedRole").innerText = `${role} - Rp ${price}`;
}

// Tutup popup pembayaran
function closePayment() {
  document.getElementById("payment").style.display = "none";
}

// Konfirmasi pembayaran dan tampilkan info akun
function confirmOrder() {
  const proof = document.getElementById("proof").files[0];

  if (!proof) {
    alert("Silakan upload bukti pembayaran terlebih dahulu.");
    return;
  }

  // Simulasi proses verifikasi
  document.getElementById("payment").style.display = "none";
  document.getElementById("confirm").style.display = "block";

  // Bisa diganti dengan data dinamis dari backend
  document.querySelector("#confirm p:nth-of-type(2)").innerHTML = "<strong>Username:</strong> user123";
  document.querySelector("#confirm p:nth-of-type(3)").innerHTML = "<strong>Password:</strong> pass123";
}

// Tutup popup konfirmasi
function closeConfirm() {
  document.getElementById("confirm").style.display = "none";
}

function confirmOrder() {
  const proof = document.getElementById("proof").files[0];
  if (!proof) {
    alert("Silakan upload bukti pembayaran terlebih dahulu.");
    return;
  }

  // Lanjut ke popup buat akun
  document.getElementById("payment").style.display = "none";
  document.getElementById("createAccount").style.display = "block";
}

function closeCreateAccount() {
  document.getElementById("createAccount").style.display = "none";
}

// Simulasi kirim data akun dan tampilkan hasil
function submitAccount() {
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (!username || !password) {
    alert("Username dan password wajib diisi.");
    return;
  }

  // Simulasi kirim data ke backend
  console.log("Mengirim data akun:", { username, password });

  // Tampilkan hasil
  document.getElementById("createAccount").style.display = "none";
  document.getElementById("confirm").style.display = "block";
  document.querySelector("#confirm p:nth-of-type(2)").innerHTML = `<strong>Username:</strong> ${username}`;
  document.querySelector("#confirm p:nth-of-type(3)").innerHTML = `<strong>Password:</strong> ${password}`;
  document.querySelector("#confirm a").href = `https://example.com/${username}`;
    }
