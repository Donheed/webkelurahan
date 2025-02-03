import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

// Slider images from Unsplash
const sliderImages = [
  'https://github.com/Donheed/webkelurahan/blob/main/image/foto1.jpg?raw=true',
  'https://github.com/Donheed/webkelurahan/blob/main/image/foto2.jpg?raw=true',
  'https://github.com/Donheed/webkelurahan/blob/main/image/foto3.jpg?raw=true'
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const services = [
    { title: 'Layanan Surat Keterangan Miskin', desc: 'Dokumen resmi untuk membuktikan status ekonomi seseorang' },
    { title: 'Layanan Surat Keterangan Belum Menikah', desc: 'Surat pernyataan resmi bahwa seseorang belum pernah menikah' },
    { title: 'Layanan Rekomendasi Izin Keramaian', desc: 'Surat izin untuk mengadakan acara yang berpotensi menimbulkan keramaian' },
    { title: 'Layanan Surat Bepergian', desc: 'Dokumen izin untuk perjalanan ke luar daerah' },
    { title: 'Layanan Surat Keterangan Domisili', desc: 'Bukti resmi tempat tinggal seseorang di suatu wilayah' },
    { title: 'Layanan Rekomendasi Perkawinan', desc: 'Surat rekomendasi untuk melangsungkan pernikahan' },
    { title: 'Layanan Surat Keterangan Kematian & Kutipan Kematian', desc: 'Dokumen resmi sebagai bukti seseorang telah meninggal' },
    { title: 'Layanan Surat Keterangan Penghasilan', desc: 'Surat resmi yang menyatakan jumlah pendapatan seseorang' },
    { title: 'Layanan Legalisasi Pernyataan Waris', desc: 'Pengesahan dokumen yang menetapkan ahli waris resmi' },
    { title: 'Layanan Surat Keterangan Usaha', desc: 'Dokumen yang menyatakan keberadaan suatu usaha' },
    { title: 'Layanan Pembuatan Surat Kuasa', desc: 'Pembuatan surat yang memberi wewenang kepada pihak lain' },
    { title: 'Layanan Legalisasi Pendaftaran TNI/Polri', desc: 'Pengesahan dokumen untuk pendaftaran anggota TNI atau Polri' },
    { title: 'Layanan Legalisasi Persyaratan Pensiun', desc: 'Pengesahan dokumen yang dibutuhkan untuk pengajuan pensiun' },
    { title: 'Layanan Legalisasi Pengajuan Cerai PNS', desc: 'Pengesahan dokumen perceraian bagi Pegawai Negeri Sipil' },
    { title: 'Layanan Surat Keterangan Umum', desc: 'Legalisasi berbagai dokumen yang memerlukan pengesahan resmi' },
];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-purple-700 text-white fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-semibold text-base sm:text-lg">Kelurahan Banaran</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className={`hover:text-purple-200 ${activeSection === 'home' ? 'text-purple-200' : ''}`}>Beranda</button>
              <button onClick={() => scrollToSection('services')} className={`hover:text-purple-200 ${activeSection === 'services' ? 'text-purple-200' : ''}`}>Layanan Publik</button>
              <button onClick={() => scrollToSection('facilities')} className={`hover:text-purple-200 ${activeSection === 'facilities' ? 'text-purple-200' : ''}`}>Fasilitas</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-600">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-2 py-4">
                <button onClick={() => scrollToSection('home')} className="py-2 px-4 hover:bg-purple-500 rounded">Beranda</button>
                <button onClick={() => scrollToSection('services')} className="py-2 px-4 hover:bg-purple-500 rounded">Layanan Publik</button>
                <button onClick={() => scrollToSection('facilities')} className="py-2 px-4 hover:bg-purple-500 rounded">Fasilitas</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="pt-16">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-1.5 sm:p-2 rounded-full text-white"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-1.5 sm:p-2 rounded-full text-white"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Kepala Desa Profile */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <img
                src="https://github.com/Donheed/webkelurahan/blob/main/image/lurah1.jpg?raw=true"
                alt="Kepala Desa"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-2">Bapak Dumadi</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4">Kepala Kelurahan Banaran</p>
                <p className="text-sm sm:text-base text-gray-600">
                  "Selamat datang di website resmi Kelurahan Banaran. Kami berkomitmen untuk memberikan
                  pelayanan terbaik bagi seluruh warga kelurahan."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Publik Section */}
      <section id="services" className="py-8 sm:py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6 sm:mb-8">Layanan Publik</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section id="facilities" className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6 sm:mb-8">Fasilitas Kelurahan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <img
                  src="https://github.com/Donheed/webkelurahan/blob/main/image/pelayanan.jpg?raw=true"
                  alt="Ruang Pelayanan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6" >
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Ruang Pelayanan</h3>
                <p className="text-sm sm:text-base text-gray-600">Dilengkapi dengan sistem antrian digital dan ruang tunggu yang nyaman</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <img
                  src="https://github.com/Donheed/webkelurahan/blob/main/image/aula.jpg?raw=true"
                  alt="Aula Serbaguna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Aula Serbaguna</h3>
                <p className="text-sm sm:text-base text-gray-600">Tersedia untuk berbagai kegiatan masyarakat dan pertemuan warga</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">  
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Kontak Kami</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">(0354) 673135</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">banarankelurahankedirikota@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Banaran No.65a Kode Pos 64133</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Jam Operasional</h3>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="text-sm sm:text-base">
                  <p>Senin - Kamis : 08:00 - 12:00 & 13.00 - 15.00</p>
                  <p>Jumat : 08:00 - 11:00 & 13.00 - 14.00</p>
                  <p>Sabtu - Minggu : Tutup</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Tautan Penting</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="https://www.instagram.com/kelurahan_banaran/" className="hover:text-purple-200">Instagram</a></li>
                <li><a href="https://www.youtube.com/@kelurahanbanarankotakediri3992" className="hover:text-purple-200">Youtube</a></li>
                <li><a href="http://surga.kedirikota.go.id/aduan/buat" className="hover:text-purple-200">Pengaduan Masyarakat</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-700 text-center">
            <p className="text-sm sm:text-base">&copy; 2025 Kelurahan Banaran. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
