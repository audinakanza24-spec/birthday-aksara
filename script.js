document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
});

const text = `Selamat ulang tahun, Aksara.

Terima kasih sudah menjadi bagian dari cerita yang begitu berharga bagiku.

Website ini bukan untuk mengubah apa pun, melainkan hanya sebagai tempat kecil yang menyimpan kenangan kita.`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

window.onload = typeWriter;