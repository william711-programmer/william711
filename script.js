window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.slide-up'); // Pilih semua elemen dengan kelas "slide-up"
    
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top; // Dapatkan posisi elemen di halaman

        // Jika elemen sudah mendekati viewport (tampilan layar)
        if (position < window.innerHeight && position > 0) {
            element.classList.add('visible'); // Tambahkan kelas "visible" untuk mulai animasi
        } else {
            element.classList.remove('visible'); // Hapus kelas jika elemen keluar dari tampilan
        }
    });
});