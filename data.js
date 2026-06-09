/* =========================================================
   DATA - PRAKTIKUM ANTENA (Multi Modul)
   Struktur: MODULES[] -> { id, title, subtitle, icon, status,
                            materi[], quiz[] }
   Modul 1 (Pemancar) sudah lengkap.
   Modul 2 (Penerima), 3 (Bab 3), 4 (Percobaan 2) = placeholder,
   tinggal diisi materi[] dan quiz[] nanti.
   ========================================================= */

/* ---------- MATERI MODUL 1: ANTENA PEMANCAR ---------- */
const MATERI_P1_PEMANCAR = [
  {
    id: "pembuka",
    title: "Kalimat Pembuka",
    html: `
      <p class="quote">"Pada praktikum Antena Pemancar, kami menguji pemancar UHF 434 MHz dengan dua antena, yaitu folded dipole dan double dipole. Yang diamati adalah matching antena, polarisasi, serta distribusi tegangan dan arus di sepanjang antena."</p>
    `
  },
  {
    id: "tujuan",
    title: "Tujuan Praktikum",
    html: `
      <p>Tujuan praktikum ini adalah memahami cara kerja antena pemancar UHF, mengukur <strong>matching</strong> antena, melihat pengaruh <strong>polarisasi</strong>, serta mengetahui <strong>distribusi tegangan dan arus</strong> pada antena folded dipole dan double dipole.</p>
    `
  },
  {
    id: "langkah",
    title: "Langkah Praktikum (Ngapain Aja)",
    html: `
      <ol>
        <li>Menyiapkan pemancar UHF, antena folded dipole, antena double dipole, kabel koaksial 50 ohm, hand probe tegangan, dan hand probe arus.</li>
        <li>Menghubungkan antena ke output pemancar memakai kabel koaksial.</li>
        <li>Menyalakan pemancar UHF pada frekuensi 434 MHz.</li>
        <li>Mengatur daya output, terutama saat matching dipakai <code>Pout = 2 W</code>.</li>
        <li>Mengukur tegangan maju <code>UF</code> dan tegangan balik <code>UR</code>.</li>
        <li>Menghitung faktor refleksi <code>r</code>, daya pantul <code>PR</code>, daya terpancar <code>Pt</code>, dan <code>SWR</code>.</li>
        <li>Mengukur polarisasi dengan hand probe tegangan pada posisi <code>0°</code>, <code>90°</code>, dan untuk double dipole juga <code>180°</code>.</li>
        <li>Mengukur distribusi tegangan sepanjang antena.</li>
        <li>Mengukur distribusi arus sepanjang antena.</li>
        <li>Membandingkan hasil folded dipole dan double dipole.</li>
      </ol>
    `
  },
  {
    id: "data-matching",
    title: "Data Hasil Matching",
    html: `
      <table class="tbl">
        <thead>
          <tr><th>Besaran</th><th>Folded Dipole</th><th>Double Dipole</th></tr>
        </thead>
        <tbody>
          <tr><td>UR (tegangan balik)</td><td>24%</td><td>18%</td></tr>
          <tr><td>UF (tegangan maju)</td><td>100%</td><td>100%</td></tr>
          <tr><td>r (faktor refleksi)</td><td>0,24</td><td>0,18</td></tr>
          <tr><td>PR (daya pantul)</td><td>0,1152 W</td><td>0,0648 W</td></tr>
          <tr><td>Pt (daya terpancar)</td><td>1,8848 W</td><td>1,9352 W</td></tr>
          <tr><td>SWR</td><td>1,6315</td><td><span class="badge">1,4390 ✓</span></td></tr>
        </tbody>
      </table>
      <p><strong>Kesimpulan matching:</strong> Double dipole lebih matching karena <code>UR</code>, <code>PR</code>, dan <code>SWR</code> lebih kecil, serta daya terpancarnya lebih besar.</p>
    `
  },
  {
    id: "data-polarisasi",
    title: "Data Polarisasi",
    html: `
      <table class="tbl">
        <thead><tr><th>Posisi</th><th>Folded Dipole</th><th>Double Dipole</th></tr></thead>
        <tbody>
          <tr><td>0°</td><td>5</td><td>5</td></tr>
          <tr><td>90°</td><td>3,5</td><td>2,5</td></tr>
          <tr><td>0° → 180° (double)</td><td>—</td><td>5,5 → 2</td></tr>
        </tbody>
      </table>
      <p><strong>Catatan posisi:</strong></p>
      <ul>
        <li><strong>0° dan 90°</strong>: yang diputar adalah <em>probe</em>, antena tetap horizontal. <code>0°</code> = probe sejajar horizontal dengan antena; <code>90°</code> = probe diputar tegak lurus terhadap antena.</li>
        <li><strong>0° dan 180°</strong>: bukan probe yang diputar, tapi <em>antena</em>. <code>0°</code> probe di depan antena; <code>180°</code> antena diputar sehingga probe seperti di belakang arah antena.</li>
      </ul>
      <p><strong>Kesimpulan polarisasi:</strong> Posisi polarisasi mempengaruhi level sinyal. Saat probe/antena berubah orientasi, nilai yang terbaca juga berubah.</p>
    `
  },
  {
    id: "distribusi",
    title: "Distribusi Tegangan & Arus",
    html: `
      <h3>Distribusi Tegangan</h3>
      <p>Tegangan cenderung <strong>besar di ujung</strong> antena dan <strong>kecil di bagian tengah</strong>.</p>
      <h3>Distribusi Arus</h3>
      <p>Arus cenderung <strong>kecil di ujung</strong> antena dan <strong>maksimum di bagian tengah</strong>.</p>
      <p class="quote">Tegangan dan arus memiliki pola berlawanan. Ini sesuai karakteristik antena setengah gelombang (dipole): tegangan maksimum di ujung & minimum di tengah, sedangkan arus maksimum di tengah & minimum di ujung.</p>
    `
  },
  {
    id: "definisi",
    title: "Definisi Wajib",
    html: `
      <div class="qa"><div class="q">Apa itu dipole?</div><div class="a">Antena yang terdiri dari dua konduktor/batang yang arahnya berlawanan dan diberi sinyal dari tengah. Dipakai sebagai dasar antena pemancar.</div></div>
      <div class="qa"><div class="q">Apa itu folded dipole?</div><div class="a">Antena dipole yang bentuknya dilipat seperti loop memanjang. Bukan dua batang lurus biasa, tetapi konduktornya membentuk lipatan.</div></div>
      <div class="qa"><div class="q">Apa itu double dipole / antena 2 elemen?</div><div class="a">Antena yang terdiri dari dua elemen dipole, seperti dua batang dipole disusun sejajar/berpasangan. Dari data, matching-nya lebih baik karena SWR lebih kecil.</div></div>
      <div class="qa"><div class="q">Apa itu polarisasi?</div><div class="a">Arah getaran medan listrik dari gelombang yang dipancarkan antena. Antena horizontal → polarisasi horizontal; vertikal → polarisasi vertikal.</div></div>
      <div class="qa"><div class="q">Apa itu co-polarisasi?</div><div class="a">Saat arah probe/penerima sejajar dengan polarisasi antena pemancar. Posisi 0° dianggap co-polarisasi.</div></div>
      <div class="qa"><div class="q">Apa itu cross-polarisasi?</div><div class="a">Saat arah probe/penerima tegak lurus terhadap polarisasi antena pemancar. Posisi 90° adalah cross-polarisasi.</div></div>
      <div class="qa"><div class="q">Apa itu distribusi tegangan?</div><div class="a">Sebaran besar kecilnya tegangan di sepanjang antena. Paling besar di ujung, paling kecil di tengah.</div></div>
      <div class="qa"><div class="q">Apa itu distribusi arus?</div><div class="a">Sebaran besar kecilnya arus di sepanjang antena. Paling besar di tengah, lebih kecil di ujung.</div></div>
      <div class="qa"><div class="q">Apa itu SWR?</div><div class="a">Standing Wave Ratio — ukuran kecocokan antara pemancar, kabel, dan antena. Makin dekat ke 1, matching makin baik. SWR besar = banyak daya terpantul.</div></div>
      <div class="qa"><div class="q">Apa itu faktor refleksi?</div><div class="a">Perbandingan tegangan balik terhadap tegangan maju: <code>r = UR / UF</code>. Folded: 24/100 = 0,24; Double: 18/100 = 0,18. Double lebih kecil → pantulan lebih kecil.</div></div>
    `
  },
  {
    id: "qa-sederhana",
    title: "Pertanyaan Sederhana",
    html: `
      <div class="qa"><div class="q">Praktikum ini tentang apa?</div><div class="a">Tentang antena pemancar, khususnya mengukur matching, polarisasi, serta distribusi tegangan dan arus pada folded dipole dan double dipole.</div></div>
      <div class="qa"><div class="q">Frekuensi pemancar berapa?</div><div class="a">434 MHz.</div></div>
      <div class="qa"><div class="q">Antena apa saja yang dipakai?</div><div class="a">Folded dipole dan double dipole (antena 2 elemen).</div></div>
      <div class="qa"><div class="q">Kabel yang digunakan berapa impedansinya?</div><div class="a">Kabel koaksial 50 ohm.</div></div>
      <div class="qa"><div class="q">Tujuan pengukuran matching apa?</div><div class="a">Melihat seberapa cocok antena dengan pemancar, dilihat dari tegangan balik dan nilai SWR.</div></div>
      <div class="qa"><div class="q">Data matching folded dipole?</div><div class="a">UR = 24%, UF = 100%, r = 0,24, PR = 0,1152 W, Pt = 1,8848 W, SWR = 1,6315.</div></div>
      <div class="qa"><div class="q">Data matching double dipole?</div><div class="a">UR = 18%, UF = 100%, r = 0,18, PR = 0,0648 W, Pt = 1,9352 W, SWR = 1,4390.</div></div>
      <div class="qa"><div class="q">Mana yang lebih matching?</div><div class="a">Double dipole, karena UR, PR, dan SWR lebih kecil, serta daya terpancarnya lebih besar.</div></div>
    `
  },
  {
    id: "qa-sedang",
    title: "Pertanyaan Sedang",
    html: `
      <div class="qa"><div class="q">Kenapa tegangan balik perlu kecil?</div><div class="a">Karena menunjukkan daya yang tidak berhasil dipancarkan dan kembali ke pemancar. Makin kecil, makin baik matching-nya.</div></div>
      <div class="qa"><div class="q">Apa arti SWR pada percobaan ini?</div><div class="a">Menunjukkan tingkat kecocokan antara pemancar, kabel, dan antena. Makin dekat ke 1, makin baik.</div></div>
      <div class="qa"><div class="q">Kenapa double dipole dianggap lebih baik?</div><div class="a">SWR double dipole 1,4390 lebih rendah dari folded 1,6315. Daya terpancarnya juga lebih besar (1,9352 W).</div></div>
      <div class="qa"><div class="q">Apa yang diamati saat pengukuran polarisasi?</div><div class="a">Perubahan level tegangan pada hand probe saat posisi probe/antena diubah, misal dari 0° ke 90°.</div></div>
      <div class="qa"><div class="q">Hasil polarisasi 0° dan 90°?</div><div class="a">Folded: 0°=5, 90°=3,5. Double: 0°=5, 90°=2,5. Level berubah saat posisi polarisasi berubah.</div></div>
      <div class="qa"><div class="q">Arti data double dipole 0° dan 180°?</div><div class="a">Saat antena diputar, level berubah dari 5,5 ke 2 — arah/posisi antena mempengaruhi radiasi yang diterima probe.</div></div>
      <div class="qa"><div class="q">Bagaimana pola distribusi tegangan?</div><div class="a">Tegangan besar di ujung antena, kecil di tengah.</div></div>
      <div class="qa"><div class="q">Bagaimana pola distribusi arus?</div><div class="a">Arus kecil di ujung, maksimum di tengah antena.</div></div>
    `
  },
  {
    id: "qa-penguasaan",
    title: "Pertanyaan Penguasaan",
    html: `
      <div class="qa"><div class="q">Hubungan teori dan hasil distribusi?</div><div class="a">Sesuai karakteristik antena setengah gelombang: tegangan maksimum di ujung & minimum di tengah, arus maksimum di tengah & minimum di ujung.</div></div>
      <div class="qa"><div class="q">Kenapa benda logam dekat antena harus dihindari?</div><div class="a">Benda logam mempengaruhi medan di sekitar antena, sehingga pembacaan daya, tegangan balik, dan matching bisa berubah.</div></div>
      <div class="qa"><div class="q">Kesimpulan utama matching?</div><div class="a">Double dipole memiliki matching lebih baik karena SWR lebih rendah dan daya terpancar lebih besar.</div></div>
      <div class="qa"><div class="q">Kesimpulan utama polarisasi?</div><div class="a">Posisi polarisasi mempengaruhi level sinyal. Saat orientasi berubah, nilai terbaca berubah.</div></div>
      <div class="qa"><div class="q">Kesimpulan utama distribusi arus dan tegangan?</div><div class="a">Tegangan & arus berpola berlawanan: tegangan besar di ujung, arus besar di tengah.</div></div>
      <div class="qa"><div class="q">"Apa yang paling kamu pahami dari praktikum ini?"</div><div class="a">Antena tidak hanya dipasang lalu memancar, tapi harus diperhatikan matching-nya. Kalau matching buruk, ada daya terpantul. Dari data, double dipole lebih baik matching-nya.</div></div>
    `
  },
  {
    id: "qa-tambahan",
    title: "Pertanyaan Tambahan",
    html: `
      <div class="qa"><div class="q">Kenapa matching antena penting?</div><div class="a">Kalau tidak matching, sebagian daya terpantul balik ke pemancar, sehingga daya yang benar-benar terpancar lebih kecil.</div></div>
      <div class="qa"><div class="q">Dari data, antena mana lebih baik matching-nya?</div><div class="a">Double dipole: UR lebih kecil (18%), faktor refleksi 0,18, SWR 1,4390. Folded SWR lebih besar (1,6315).</div></div>
      <div class="qa"><div class="q">Pada 0° dan 90°, apa yang berubah?</div><div class="a">Posisi probe. Antena tetap horizontal. 0° = probe sejajar antena; 90° = probe tegak lurus antena.</div></div>
      <div class="qa"><div class="q">Pada 0° dan 180°, apa yang berubah?</div><div class="a">Antenanya yang diputar. 0° = depan antena; 180° = belakang antena.</div></div>
      <div class="qa"><div class="q">Kenapa nilai 90° lebih kecil dari 0°?</div><div class="a">Pada 90°, probe tidak sejajar dengan polarisasi antena, sehingga sinyal terbaca lebih kecil.</div></div>
      <div class="qa"><div class="q">Kenapa tegangan besar di ujung antena?</div><div class="a">Pada antena dipole, pola tegangannya maksimum di ujung dan minimum di tengah.</div></div>
      <div class="qa"><div class="q">Kenapa arus besar di tengah antena?</div><div class="a">Titik tengah antena adalah daerah arus maksimum, sedangkan di ujung arusnya kecil.</div></div>
    `
  },
  {
    id: "jawaban-aman",
    title: "Jawaban Aman (Kalau Gugup)",
    html: `
      <p class="quote">"Yang saya pahami, praktikum ini membandingkan folded dipole dan double dipole sebagai antena pemancar. Kami mengukur matching dari UF dan UR, lalu menghitung SWR. Hasilnya double dipole lebih matching karena SWR-nya lebih kecil. Kami juga mengukur polarisasi serta distribusi tegangan dan arus, di mana tegangan besar di ujung antena dan arus besar di tengah antena."</p>
      <h3>Jawaban Singkat Paling Aman</h3>
      <p class="quote">"Praktikum ini mengukur antena pemancar UHF 434 MHz. Kami membandingkan folded dipole dan double dipole dari matching, polarisasi, dan distribusi arus-tegangan. Matching dilihat dari UF, UR, faktor refleksi, dan SWR. Dari data, double dipole lebih matching karena SWR dan pantulannya lebih kecil. Pada polarisasi 0° dan 90°, yang diputar adalah probe; pada 0° dan 180°, antenanya yang diputar untuk melihat depan dan belakang antena."</p>
    `
  }
];

/* ---------- MATERI MODUL 1B: ANTENA PENERIMA ---------- */
const MATERI_P1_PENERIMA = [
  {
    id: "pembuka-rx",
    title: "Kalimat Pembuka",
    html: `
      <p class="quote">"Pada praktikum Antena Penerima, kami mengamati pengaruh polarisasi, jarak, probe, dan elemen Yagi terhadap sinyal yang diterima. Pemancar menggunakan folded dipole, penerima menggunakan double dipole, dan frekuensi tetap 434 MHz."</p>
    `
  },
  {
    id: "tujuan-rx",
    title: "Tujuan Praktikum",
    html: `
      <p>Tujuan praktikum antena penerima adalah:</p>
      <ul>
        <li>Memahami pengaruh <strong>matching polarisasi</strong> antara antena pemancar dan penerima.</li>
        <li>Mengetahui <strong>pelemahan sinyal</strong> akibat cross-polarisasi dan pertambahan jarak.</li>
        <li>Menghitung <strong>pelemahan ruang bebas</strong>.</li>
        <li>Melihat pengaruh <strong>probe</strong> dan <strong>elemen Yagi</strong> terhadap sinyal yang diterima.</li>
      </ul>
      <p class="quote">Versi pendek: "Tujuannya untuk melihat bagaimana polarisasi, jarak, probe, dan elemen Yagi mempengaruhi kuat sinyal pada antena penerima."</p>
    `
  },
  {
    id: "langkah-rx",
    title: "Langkah Praktikum (Ngapain Aja)",
    html: `
      <ol>
        <li>Menyiapkan pemancar UHF dan penerima UHF.</li>
        <li>Memasang <strong>folded dipole</strong> pada pemancar.</li>
        <li>Memasang <strong>double dipole / antena 2 elemen</strong> pada penerima.</li>
        <li>Mengatur jarak awal pemancar dan penerima sekitar <code>0,5 m</code>.</li>
        <li>Mengatur daya pemancar sekitar <code>0,2 W</code>.</li>
        <li>Mengatur sensitivity penerima sampai pembacaan maksimum atau target tertentu.</li>
        <li>Mengukur penerimaan saat <strong>co-polarisasi</strong> (kedua antena horizontal).</li>
        <li>Mengukur penerimaan saat <strong>cross-polarisasi</strong> (penerima vertikal).</li>
        <li>Mengubah jarak antena untuk melihat pelemahan sinyal.</li>
        <li>Meletakkan probe di beberapa posisi untuk melihat pengaruhnya.</li>
        <li>Meletakkan elemen Yagi/director di dekat Tx, dekat Rx, dan tengah untuk melihat pengaruhnya.</li>
      </ol>
    `
  },
  {
    id: "data-copol-crosspol",
    title: "Data Co-polarisasi & Cross-polarisasi",
    html: `
      <h3>Co-polarisasi (kedua antena horizontal)</h3>
      <table class="tbl">
        <thead><tr><th>Parameter</th><th>Nilai</th></tr></thead>
        <tbody>
          <tr><td>Daya Tx</td><td>0,2 W</td></tr>
          <tr><td>RF in Rx</td><td><span class="badge">100% ✓</span></td></tr>
        </tbody>
      </table>
      <h3>Cross-polarisasi (penerima vertikal)</h3>
      <table class="tbl">
        <thead><tr><th>Daya Tx</th><th>RF in Rx</th></tr></thead>
        <tbody>
          <tr><td>0,2 W</td><td>9%</td></tr>
          <tr><td>0,6 W</td><td>50%</td></tr>
          <tr><td>1,2 W</td><td>100%</td></tr>
        </tbody>
      </table>
      <p><strong>Kesimpulan:</strong> Cross-polarisasi membuat sinyal jauh lebih lemah. Pelemahannya sekitar <code>91%</code> dari pembacaan awal. Untuk mengembalikan Rx ke 100%, daya Tx harus dinaikkan 6× lipat (dari 0,2 W ke 1,2 W).</p>
      <p class="quote"><strong>Penting:</strong> Co/cross di sini adalah antara pemancar dan penerima. Co = keduanya horizontal (sejajar). Cross = penerima dibuat vertikal (tegak lurus). Jangan tertukar dengan percobaan pemancar yang probe-nya diputar.</p>
    `
  },
  {
    id: "data-jarak",
    title: "Data Pengaruh Jarak",
    html: `
      <p>Untuk mempertahankan Rx tetap <code>50%</code>:</p>
      <table class="tbl">
        <thead><tr><th>Jarak</th><th>Daya Tx</th><th>RF in Rx</th></tr></thead>
        <tbody>
          <tr><td>50 cm</td><td>0,2 W</td><td>50%</td></tr>
          <tr><td>100 cm</td><td>0,6 W</td><td>50%</td></tr>
          <tr><td>150 cm</td><td>0,8 W</td><td>50%</td></tr>
          <tr><td>200 cm</td><td>1,7 W</td><td>50%</td></tr>
        </tbody>
      </table>
      <p><strong>Kesimpulan:</strong> Makin jauh jarak antena, daya pemancar harus dinaikkan supaya penerimaan tetap sama. Ini karena sinyal mengalami <strong>pelemahan ruang bebas</strong> — energi gelombang menyebar ke ruang sehingga makin jauh, makin kecil kuat sinyal yang sampai.</p>
    `
  },
  {
    id: "data-probe",
    title: "Data Pengaruh Probe",
    html: `
      <h3>Co-polarisasi (Tx 1,7 W)</h3>
      <table class="tbl">
        <thead><tr><th>Posisi Probe</th><th>RF in Rx</th></tr></thead>
        <tbody>
          <tr><td>Tanpa probe</td><td>50%</td></tr>
          <tr><td>Probe dekat Tx</td><td>24%</td></tr>
          <tr><td>Probe dekat Rx</td><td>23%</td></tr>
          <tr><td>Tengah</td><td>39%</td></tr>
        </tbody>
      </table>
      <h3>Cross-polarisasi</h3>
      <p>Semua pembacaan <code>0%</code> (baik tanpa probe, dekat Tx, dekat Rx, maupun tengah).</p>
      <p><strong>Kesimpulan:</strong> Probe mengganggu medan/sinyal di antara pemancar dan penerima, sehingga pembacaan turun. Probe bertindak seperti benda yang berada di daerah medan, dapat mengganggu atau menyerap sebagian energi sinyal.</p>
    `
  },
  {
    id: "data-yagi",
    title: "Data Pengaruh Elemen Yagi",
    html: `
      <h3>Co-polarisasi (Tx 1,7 W)</h3>
      <table class="tbl">
        <thead><tr><th>Posisi Yagi</th><th>RF in Rx</th></tr></thead>
        <tbody>
          <tr><td>Tanpa Yagi</td><td>50%</td></tr>
          <tr><td>Yagi dekat Tx</td><td>90%</td></tr>
          <tr><td>Yagi dekat Rx</td><td><span class="badge">92% ✓</span></td></tr>
          <tr><td>Tengah</td><td>56%</td></tr>
        </tbody>
      </table>
      <h3>Cross-polarisasi</h3>
      <table class="tbl">
        <thead><tr><th>Posisi Yagi</th><th>RF in Rx</th></tr></thead>
        <tbody>
          <tr><td>Tanpa Yagi</td><td>0%</td></tr>
          <tr><td>Yagi dekat Tx</td><td>32%</td></tr>
          <tr><td>Yagi dekat Rx</td><td>34%</td></tr>
          <tr><td>Tengah</td><td>22%</td></tr>
        </tbody>
      </table>
      <p><strong>Kesimpulan:</strong> Elemen Yagi/director membantu mengarahkan atau memperkuat penerimaan, terutama saat posisinya dekat penerima (92% pada co-pol). Bahkan pada cross-polarisasi yang awalnya 0%, Yagi bisa membuat sinyal terbaca lagi karena mempengaruhi medan dan arah rambat sinyal.</p>
    `
  },
  {
    id: "teori-db",
    title: "Teori: dB, dBm, dBV",
    html: `
      <div class="qa"><div class="q">Apa itu dB?</div><div class="a">dB (desibel) adalah <strong>satuan perbandingan</strong>, bukan nilai daya mutlak. Contoh: sinyal naik 3 dB artinya daya naik ~2 kali; turun 10 dB artinya daya turun 10 kali.</div></div>
      <div class="qa"><div class="q">Apa itu dBm?</div><div class="a">dBm adalah <strong>nilai daya mutlak</strong> dengan acuan 1 mW. Contoh: 0 dBm = 1 mW, 10 dBm = 10 mW, 20 dBm = 100 mW, <strong>30 dBm = 1 W</strong>.</div></div>
      <div class="qa"><div class="q">Beda dB dan dBm?</div><div class="a"><strong>dB = perbandingan</strong> (gain, redaman). <strong>dBm = daya absolut</strong> (acuan 1 mW). Gain antena pakai dB, daya pemancar bisa pakai dBm atau Watt.</div></div>
      <div class="qa"><div class="q">Apa itu dBV?</div><div class="a">dBV adalah tegangan absolut dengan acuan 1 Volt. 0 dBV = 1 V, 20 dBV = 10 V, -20 dBV = 0,1 V.</div></div>
      <h3>Rumus Dasar</h3>
      <p>Untuk daya: <code>dB = 10 log₁₀(P₂/P₁)</code></p>
      <p>Untuk tegangan: <code>dB = 20 log₁₀(V₂/V₁)</code> (karena daya ∝ tegangan²)</p>
      <p>dBm dari Watt: <code>P(dBm) = 10 log₁₀(P(mW))</code></p>
      <h3>Contoh Konversi Praktikum</h3>
      <table class="tbl">
        <thead><tr><th>Watt</th><th>mW</th><th>dBm</th></tr></thead>
        <tbody>
          <tr><td>0,2 W</td><td>200</td><td>23 dBm</td></tr>
          <tr><td>0,6 W</td><td>600</td><td>27,8 dBm</td></tr>
          <tr><td>1,2 W</td><td>1200</td><td>30,8 dBm</td></tr>
          <tr><td>1,7 W</td><td>1700</td><td>32,3 dBm</td></tr>
          <tr><td>2 W</td><td>2000</td><td>33 dBm</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "pelemahan-rb",
    title: "Pelemahan Ruang Bebas",
    html: `
      <p><strong>Pelemahan ruang bebas</strong> adalah berkurangnya kuat sinyal karena gelombang menyebar saat merambat dari pemancar ke penerima.</p>
      <p>Rumus: <code>N = 20 log₁₀(4πR/λ)</code></p>
      <p>Dengan: <code>R</code> = jarak, <code>λ</code> = panjang gelombang. Pada 434 MHz, <code>λ ≈ 0,69 m</code>.</p>
      <p class="quote">Semakin jauh jaraknya, pelemahan makin besar. Karena itu saat jarak diperbesar, daya Tx harus dinaikkan agar Rx tetap sama.</p>
      <div class="qa"><div class="q">Apa itu nomograph?</div><div class="a">Nomograph adalah grafik bantu untuk memperkirakan pelemahan ruang bebas berdasarkan frekuensi dan jarak. Di jobsheet dipakai untuk membandingkan hasil perhitungan.</div></div>
      <div class="qa"><div class="q">Hubungan lambda dengan frekuensi?</div><div class="a"><code>λ = c/f</code>. Pada 434 MHz, λ = 3×10⁸ / 434×10⁶ ≈ 0,69 m.</div></div>
    `
  },
  {
    id: "definisi-rx",
    title: "Definisi & Catatan Penting",
    html: `
      <div class="qa"><div class="q">Jangan salah sebut antena!</div><div class="a">Di percobaan penerima: Pemancar = <strong>folded dipole</strong>, Penerima = <strong>double dipole</strong>. Berbeda dengan percobaan pemancar yang keduanya diuji sebagai antena pemancar.</div></div>
      <div class="qa"><div class="q">Co/Cross di sini antara Tx dan Rx</div><div class="a">Co = pemancar dan penerima searah polarisasi. Cross = beda 90°. Bukan probe yang diputar seperti di percobaan pemancar.</div></div>
      <div class="qa"><div class="q">RF in Rx itu apa?</div><div class="a">Pembacaan level sinyal yang masuk/terbaca di penerima, bukan daya pemancar.</div></div>
      <div class="qa"><div class="q">Sensitivity penerima untuk apa?</div><div class="a">Mengatur kepekaan pembacaan meter penerima agar terbaca jelas, misalnya dibuat maksimum 100% sebelum dibandingkan.</div></div>
      <div class="qa"><div class="q">Kenapa hasil bisa tidak ideal?</div><div class="a">Jarak praktikum relatif dekat, ada pantulan dari benda logam, posisi antena/probe tidak presisi, pembacaan meter analog kurang akurat, dan lingkungan ruangan menimbulkan gelombang pantul.</div></div>
      <div class="qa"><div class="q">Apa yang harus dihindari saat pengukuran?</div><div class="a">Benda logam dekat area pengukuran, posisi antena yang tidak sejajar, perubahan daya Tx yang tidak disengaja, dan posisi probe yang terlalu mengganggu medan.</div></div>
    `
  },
  {
    id: "qa-sederhana-rx",
    title: "Pertanyaan Sederhana",
    html: `
      <div class="qa"><div class="q">Praktikum antena penerima ini membahas apa?</div><div class="a">Membahas penerimaan sinyal dari pemancar UHF ke penerima UHF, terutama pengaruh polarisasi, jarak, probe, dan elemen Yagi terhadap sinyal yang diterima.</div></div>
      <div class="qa"><div class="q">Antena apa yang dipakai pada pemancar dan penerima?</div><div class="a">Pemancar memakai folded dipole, penerima memakai double dipole / antena 2 elemen.</div></div>
      <div class="qa"><div class="q">Jarak awal pemancar dan penerima?</div><div class="a">Sekitar 0,5 meter.</div></div>
      <div class="qa"><div class="q">Daya awal pemancar?</div><div class="a">Sekitar 0,2 W.</div></div>
      <div class="qa"><div class="q">Hasil co-polarisasi?</div><div class="a">Saat Tx 0,2 W, penerima terbaca 100%.</div></div>
      <div class="qa"><div class="q">Hasil cross-polarisasi?</div><div class="a">Saat Tx 0,2 W, penerima terbaca 9%.</div></div>
    `
  },
  {
    id: "qa-sedang-rx",
    title: "Pertanyaan Sedang",
    html: `
      <div class="qa"><div class="q">Kenapa co-polarisasi sinyalnya lebih besar?</div><div class="a">Karena arah medan listrik antena pemancar dan penerima sejajar, sehingga penerima bisa menangkap sinyal lebih maksimal.</div></div>
      <div class="qa"><div class="q">Kenapa cross-polarisasi sinyalnya kecil?</div><div class="a">Karena arah medan listrik pemancar dan penerima saling tegak lurus, sehingga sinyal yang diterima jauh lebih kecil.</div></div>
      <div class="qa"><div class="q">Bukti data bahwa cross-polarisasi melemahkan sinyal?</div><div class="a">Pada co-polarisasi, Tx 0,2 W menghasilkan Rx 100%. Pada cross-polarisasi dengan Tx yang sama, Rx hanya 9%. Pelemahan sekitar 91%.</div></div>
      <div class="qa"><div class="q">Saat cross-polarisasi, kenapa daya Tx dinaikkan?</div><div class="a">Untuk melihat berapa daya tambahan yang dibutuhkan agar Rx naik lagi. Tx 0,6 W → Rx 50%, Tx 1,2 W → Rx 100%.</div></div>
      <div class="qa"><div class="q">Apa pengaruh jarak terhadap sinyal penerima?</div><div class="a">Semakin jauh jarak, sinyal makin lemah. Supaya Rx tetap 50%, daya Tx harus dinaikkan.</div></div>
      <div class="qa"><div class="q">Kenapa makin jauh butuh daya lebih besar?</div><div class="a">Karena sinyal mengalami pelemahan ruang bebas — energi gelombang menyebar ke ruang.</div></div>
      <div class="qa"><div class="q">Beda pengaruh probe dan Yagi?</div><div class="a">Probe cenderung mengganggu/menurunkan sinyal, sedangkan Yagi/director dapat membantu mengarahkan atau meningkatkan sinyal.</div></div>
    `
  },
  {
    id: "qa-penguasaan-rx",
    title: "Pertanyaan Penguasaan",
    html: `
      <div class="qa"><div class="q">Kesimpulan utama percobaan ini?</div><div class="a">Penerimaan sinyal sangat dipengaruhi polarisasi, jarak, benda/probe di sekitar antena, dan elemen pengarah Yagi. Co-pol menghasilkan sinyal paling besar, cross-pol melemahkan, jarak lebih jauh butuh Tx lebih besar, probe mengganggu, dan Yagi meningkatkan penerimaan.</div></div>
      <div class="qa"><div class="q">Hubungan dengan percobaan pemancar?</div><div class="a">Percobaan pemancar fokus pada kondisi antena pemancar (matching, SWR, polarisasi, distribusi). Percobaan penerima melihat bagaimana sinyal dari pemancar diterima, terutama akibat polarisasi, jarak, dan elemen di sekitar antena.</div></div>
      <div class="qa"><div class="q">Kenapa hasil praktikum bisa tidak ideal?</div><div class="a">Jarak praktikum dekat, ada pantulan benda logam, posisi antena/probe tidak presisi, pembacaan meter analog kurang akurat, dan lingkungan ruangan menimbulkan gelombang pantul.</div></div>
      <div class="qa"><div class="q">Kenapa cross-pol masih terbaca 9% dan tidak 0%?</div><div class="a">Kondisi tidak ideal — ada pantulan, posisi antena tidak benar-benar tegak lurus sempurna, dan lingkungan ruangan mempengaruhi medan.</div></div>
    `
  },
  {
    id: "jawaban-aman-rx",
    title: "Jawaban Aman (Kalau Gugup)",
    html: `
      <p class="quote">"Pada praktikum antena penerima, kami mengamati pengaruh polarisasi, jarak, probe, dan elemen Yagi terhadap sinyal yang diterima. Hasilnya, co-polarisasi menghasilkan penerimaan paling besar, sedangkan cross-polarisasi melemahkan sinyal. Semakin jauh jarak pemancar dan penerima, daya pemancar harus dinaikkan agar pembacaan penerima tetap sama. Probe dapat mengganggu sinyal, sedangkan elemen Yagi dapat meningkatkan penerimaan terutama saat posisinya dekat penerima."</p>
      <h3>Jawaban Pembuka Saat Dosen Minta Jelaskan</h3>
      <p class="quote">"Pada percobaan antena penerima, kami menyusun pemancar dan penerima UHF dengan jarak awal 0,5 meter. Folded dipole digunakan pada pemancar dan double dipole pada penerima. Daya pemancar diatur sekitar 0,2 W, lalu sensitivity penerima diatur. Setelah itu kami membandingkan co-polarisasi dan cross-polarisasi, mengubah jarak antena, serta melihat pengaruh probe dan elemen Yagi terhadap pembacaan RF input pada penerima."</p>
      <h3>Jawaban Paling Aman</h3>
      <p class="quote">"Yang paling saya pahami dari praktikum penerima adalah sinyal yang diterima tidak hanya bergantung pada daya pemancar, tetapi juga sangat dipengaruhi oleh polarisasi, jarak, benda di sekitar lintasan sinyal, dan elemen pengarah seperti Yagi. Data kami menunjukkan co-polarisasi paling baik, cross-polarisasi melemahkan sinyal, probe mengganggu, dan Yagi dapat meningkatkan penerimaan."</p>
    `
  }
];

/* ---------- QUIZ MODUL 1: ANTENA PEMANCAR ----------
   Setiap soal punya penjelasan detail (explain) yang lengkap. */
const QUIZ_P1_PEMANCAR = [
  // DASAR
  { cat: "dasar", q: "Praktikum Antena Pemancar ini menguji pemancar pada frekuensi berapa?",
    options: ["434 MHz", "434 kHz", "144 MHz", "2,4 GHz"], answer: 0,
    explain: "Pemancar yang digunakan adalah pemancar UHF yang bekerja pada frekuensi 434 MHz. Frekuensi ini masuk pita UHF (300 MHz–3 GHz). Ingat satuannya MHz, bukan kHz, karena ini gelombang radio frekuensi tinggi untuk komunikasi jarak dekat." },
  { cat: "dasar", q: "Dua antena yang diuji dalam praktikum ini adalah...",
    options: ["Yagi dan parabola", "Folded dipole dan double dipole", "Monopole dan loop", "Horn dan patch"], answer: 1,
    explain: "Antena yang diuji adalah folded dipole (dipole yang dilipat seperti loop) dan double dipole atau antena 2 elemen (dua dipole disusun berpasangan). Keduanya dibandingkan dari sisi matching, polarisasi, dan distribusi tegangan-arus." },
  { cat: "dasar", q: "Berapa impedansi kabel koaksial yang digunakan untuk menghubungkan antena ke pemancar?",
    options: ["75 ohm", "300 ohm", "50 ohm", "100 ohm"], answer: 2,
    explain: "Digunakan kabel koaksial 50 ohm. Nilai 50 ohm adalah impedansi standar pada sistem pemancar RF. Idealnya impedansi pemancar, kabel, dan antena sama-sama 50 ohm agar matching baik dan daya tidak terpantul." },
  { cat: "dasar", q: "Apa saja yang diamati dalam praktikum ini?",
    options: ["Hanya matching antena", "Matching, polarisasi, serta distribusi tegangan dan arus", "Hanya polarisasi", "Frekuensi resonansi saja"], answer: 1,
    explain: "Ada tiga hal utama yang diamati: (1) matching antena lewat UF, UR, faktor refleksi, dan SWR; (2) polarisasi dengan memutar probe/antena; serta (3) distribusi tegangan dan arus di sepanjang antena." },
  { cat: "dasar", q: "Saat pengukuran matching, daya output (Pout) diatur sebesar...",
    options: ["1 W", "2 W", "5 W", "10 W"], answer: 1,
    explain: "Daya output diatur Pout = 2 W. Nilai ini penting karena dipakai sebagai acuan menghitung daya pantul (PR) dan daya terpancar (Pt). Contoh: PR folded = r² × Pout dan Pt = Pout − PR." },
  { cat: "dasar", q: "Alat yang digunakan untuk mengukur polarisasi dan distribusi pada antena adalah...",
    options: ["Osiloskop", "Hand probe tegangan dan hand probe arus", "Multimeter digital", "Spektrum analyzer"], answer: 1,
    explain: "Digunakan hand probe tegangan (untuk membaca level tegangan saat uji polarisasi & distribusi tegangan) dan hand probe arus (untuk distribusi arus). Probe didekatkan ke titik-titik antena untuk membaca medan." },

  // MATCHING
  { cat: "matching", q: "Nilai SWR folded dipole pada percobaan adalah...",
    options: ["1,4390", "1,6315", "1,0000", "2,0000"], answer: 1,
    explain: "SWR folded dipole = 1,6315. Nilai ini didapat dari rumus SWR = (1 + r) / (1 − r) dengan r = 0,24, sehingga (1,24)/(0,76) ≈ 1,6315. Makin jauh dari 1, matching makin kurang baik." },
  { cat: "matching", q: "Nilai SWR double dipole pada percobaan adalah...",
    options: ["1,6315", "1,8848", "1,4390", "0,1800"], answer: 2,
    explain: "SWR double dipole = 1,4390, dihitung dari (1 + 0,18)/(1 − 0,18) = 1,18/0,82 ≈ 1,4390. Karena lebih dekat ke 1 dibanding folded dipole (1,6315), double dipole lebih matching." },
  { cat: "matching", q: "Antena mana yang lebih matching berdasarkan data?",
    options: ["Folded dipole", "Double dipole", "Keduanya sama", "Tidak bisa ditentukan"], answer: 1,
    explain: "Double dipole lebih matching. Buktinya tegangan balik (UR 18% < 24%), faktor refleksi (0,18 < 0,24), daya pantul (0,0648 W < 0,1152 W), dan SWR (1,4390 < 1,6315) semuanya lebih kecil, sedangkan daya terpancarnya lebih besar." },
  { cat: "matching", q: "Faktor refleksi (r) folded dipole adalah...",
    options: ["0,18", "0,24", "0,50", "1,00"], answer: 1,
    explain: "r folded = UR/UF = 24/100 = 0,24. Faktor refleksi adalah perbandingan tegangan balik terhadap tegangan maju. Nilai 0,24 berarti sekitar 24% tegangan dipantulkan kembali." },
  { cat: "matching", q: "Faktor refleksi (r) double dipole adalah...",
    options: ["0,24", "0,18", "0,36", "0,10"], answer: 1,
    explain: "r double = UR/UF = 18/100 = 0,18. Karena lebih kecil dari folded (0,24), pantulan double dipole lebih sedikit sehingga matching-nya lebih baik." },
  { cat: "matching", q: "Rumus faktor refleksi yang digunakan adalah...",
    options: ["r = UF / UR", "r = UR / UF", "r = UR × UF", "r = UF − UR"], answer: 1,
    explain: "Faktor refleksi r = UR / UF, yaitu tegangan balik (reflected) dibagi tegangan maju (forward). Kalau UR kecil dibanding UF, berarti r kecil dan matching baik." },
  { cat: "matching", q: "Daya terpancar (Pt) double dipole adalah...",
    options: ["1,8848 W", "1,9352 W", "0,0648 W", "0,1152 W"], answer: 1,
    explain: "Pt double dipole = 1,9352 W. Didapat dari Pt = Pout − PR = 2 − 0,0648 = 1,9352 W. Nilai ini lebih besar dari folded (1,8848 W) karena daya pantulnya lebih kecil." },
  { cat: "matching", q: "Daya pantul (PR) folded dipole adalah...",
    options: ["0,0648 W", "0,1152 W", "1,8848 W", "0,2400 W"], answer: 1,
    explain: "PR folded dipole = 0,1152 W, didapat dari PR = r² × Pout = (0,24)² × 2 = 0,0576 × 2 = 0,1152 W. Inilah daya yang terpantul balik dan tidak ikut terpancar." },
  { cat: "matching", q: "Kenapa tegangan balik (UR) sebaiknya kecil?",
    options: ["Agar antena lebih panjang", "Karena menunjukkan daya yang tidak terpancar dan kembali ke pemancar", "Agar frekuensi naik", "Supaya kabel lebih murah"], answer: 1,
    explain: "UR (tegangan balik) menunjukkan bagian daya yang gagal dipancarkan dan kembali ke pemancar. Kalau UR besar, banyak daya terbuang sebagai pantulan dan bisa membebani pemancar. Maka UR yang kecil menandakan matching yang baik." },
  { cat: "matching", q: "Nilai SWR yang ideal (matching sempurna) mendekati...",
    options: ["0", "1", "10", "100"], answer: 1,
    explain: "SWR ideal = 1. Pada SWR = 1 tidak ada gelombang pantul sama sekali, artinya seluruh daya diteruskan ke antena. Makin jauh dari 1 (misal 1,6315), makin banyak daya yang terpantul." },
  { cat: "matching", q: "Kenapa matching antena penting?",
    options: ["Agar antena lebih ringan", "Agar daya tidak terpantul balik dan lebih banyak terpancar", "Agar warna antena bagus", "Tidak penting"], answer: 1,
    explain: "Matching memastikan impedansi pemancar, kabel, dan antena cocok sehingga daya mengalir maksimal ke antena. Kalau tidak matching, sebagian daya terpantul balik, daya terpancar berkurang, dan pemancar bisa cepat panas/rusak." },

  // POLARISASI
  { cat: "polarisasi", q: "Apa itu polarisasi antena?",
    options: ["Warna antena", "Arah getaran medan listrik dari gelombang yang dipancarkan", "Panjang kabel", "Jumlah elemen antena"], answer: 1,
    explain: "Polarisasi adalah arah getaran (orientasi) medan listrik dari gelombang yang dipancarkan antena. Antena horizontal menghasilkan polarisasi horizontal, antena vertikal menghasilkan polarisasi vertikal. Penerima harus mengikuti arah ini agar sinyal maksimal." },
  { cat: "polarisasi", q: "Pada pengukuran 0° dan 90°, yang diputar adalah...",
    options: ["Antena", "Probe (antena tetap horizontal)", "Kabel", "Pemancar"], answer: 1,
    explain: "Pada 0° dan 90° yang diputar adalah PROBE, sedangkan antena tetap horizontal. 0° berarti probe sejajar antena (co-polarisasi), 90° berarti probe tegak lurus antena (cross-polarisasi)." },
  { cat: "polarisasi", q: "Pada pengukuran 0° dan 180°, yang diputar adalah...",
    options: ["Probe", "Antena (melihat depan vs belakang)", "Kabel koaksial", "Frekuensi"], answer: 1,
    explain: "Pada 0° dan 180° yang diputar adalah ANTENA-nya. 0° = probe berada di depan antena, 180° = antena diputar sehingga probe seolah di belakang arah antena. Ini untuk melihat pengaruh arah radiasi depan vs belakang." },
  { cat: "polarisasi", q: "Posisi 0° (probe sejajar antena) disebut...",
    options: ["Cross-polarisasi", "Co-polarisasi", "Tidak terpolarisasi", "Sirkular"], answer: 1,
    explain: "Posisi 0° = co-polarisasi, karena arah probe sejajar dengan polarisasi antena pemancar. Pada kondisi ini sinyal yang terbaca paling besar karena orientasi keduanya cocok." },
  { cat: "polarisasi", q: "Posisi 90° (probe tegak lurus antena) disebut...",
    options: ["Co-polarisasi", "Cross-polarisasi", "Polarisasi vertikal sempurna", "Matching"], answer: 1,
    explain: "Posisi 90° = cross-polarisasi, karena probe tegak lurus terhadap polarisasi antena. Pada kondisi ini sinyal terbaca lebih kecil karena orientasi probe tidak sesuai dengan arah medan antena." },
  { cat: "polarisasi", q: "Kenapa nilai pada 90° lebih kecil daripada 0°?",
    options: ["Karena frekuensi turun", "Karena probe tidak sejajar polarisasi antena, sinyal terbaca lebih kecil", "Karena kabel putus", "Karena daya dimatikan"], answer: 1,
    explain: "Pada 90° (cross-polarisasi) probe tegak lurus terhadap medan listrik antena, sehingga hanya sebagian kecil komponen medan yang tertangkap. Akibatnya level yang terbaca lebih kecil dibanding 0° (co-polarisasi)." },
  { cat: "polarisasi", q: "Hasil polarisasi folded dipole pada 0° dan 90° adalah...",
    options: ["5 dan 3,5", "5 dan 2,5", "5,5 dan 2", "3,5 dan 5"], answer: 0,
    explain: "Folded dipole: pada 0° terbaca 5 dan pada 90° terbaca 3,5. Penurunan dari 5 ke 3,5 membuktikan pengaruh polarisasi — saat probe diputar tegak lurus, level sinyal turun." },
  { cat: "polarisasi", q: "Hasil polarisasi double dipole pada 0° dan 90° adalah...",
    options: ["5 dan 3,5", "5 dan 2,5", "5,5 dan 2", "2,5 dan 5"], answer: 1,
    explain: "Double dipole: pada 0° terbaca 5 dan pada 90° terbaca 2,5. Penurunannya lebih tajam dibanding folded dipole, menandakan perbedaan co-pol dan cross-pol pada double dipole lebih besar." },
  { cat: "polarisasi", q: "Data double dipole 0° → 180° menunjukkan perubahan level...",
    options: ["2 → 5,5", "5,5 → 2", "5 → 3,5", "Tidak berubah"], answer: 1,
    explain: "Saat antena double dipole diputar dari 0° ke 180°, level berubah dari 5,5 ke 2. Artinya arah/posisi antena (depan vs belakang) sangat mempengaruhi radiasi yang diterima probe." },

  // DISTRIBUSI
  { cat: "distribusi", q: "Bagaimana pola distribusi tegangan sepanjang antena?",
    options: ["Besar di tengah, kecil di ujung", "Besar di ujung, kecil di tengah", "Rata di semua bagian", "Nol di mana-mana"], answer: 1,
    explain: "Tegangan besar di ujung antena dan kecil di bagian tengah. Ini ciri khas antena dipole setengah gelombang: ujung antena adalah titik tegangan maksimum (antinode tegangan)." },
  { cat: "distribusi", q: "Bagaimana pola distribusi arus sepanjang antena?",
    options: ["Besar di ujung, kecil di tengah", "Maksimum di tengah, kecil di ujung", "Rata di semua bagian", "Selalu nol"], answer: 1,
    explain: "Arus maksimum di tengah antena dan kecil di ujung. Di ujung antena arus hampir nol karena tidak ada lagi konduktor untuk mengalirkan arus, sedangkan di tengah (titik catu) arus paling besar." },
  { cat: "distribusi", q: "Hubungan pola tegangan dan arus pada antena dipole adalah...",
    options: ["Sama persis", "Berlawanan (tegangan di ujung, arus di tengah)", "Acak", "Selalu sefasa"], answer: 1,
    explain: "Polanya berlawanan/saling melengkapi: di tempat tegangan maksimum (ujung), arus minimum; di tempat arus maksimum (tengah), tegangan minimum. Ini karena hubungan fasa tegangan dan arus berbeda 90° di sepanjang antena." },
  { cat: "distribusi", q: "Hasil distribusi sesuai dengan karakteristik antena...",
    options: ["Seperempat gelombang", "Setengah gelombang (dipole)", "Satu gelombang penuh acak", "Tanpa pola"], answer: 1,
    explain: "Hasilnya sesuai karakteristik antena setengah gelombang (λ/2). Pada dipole λ/2, tegangan maksimum di kedua ujung dan minimum di tengah, sedangkan arus maksimum di tengah dan minimum di ujung." },
  { cat: "distribusi", q: "Kenapa tegangan besar di ujung antena?",
    options: ["Karena ujung paling tebal", "Karena pola tegangan dipole maksimum di ujung & minimum di tengah", "Karena kabel di ujung", "Karena daya besar"], answer: 1,
    explain: "Di ujung antena arus tidak bisa mengalir lagi (terbuka), sehingga muatan menumpuk dan tegangan menjadi maksimum. Inilah sebabnya pola tegangan dipole selalu maksimum di ujung dan minimum di tengah." },
  { cat: "distribusi", q: "Kenapa arus besar di tengah antena?",
    options: ["Karena tengah paling tipis", "Karena titik tengah adalah daerah arus maksimum", "Karena pemancar di tengah", "Karena probe rusak"], answer: 1,
    explain: "Titik tengah adalah titik catu (feed point) tempat arus mengalir paling deras, sehingga arus maksimum di sana. Menuju ujung, arus makin kecil hingga nol karena konduktornya berakhir." },

  // DEFINISI
  { cat: "definisi", q: "Apa itu SWR (Standing Wave Ratio)?",
    options: ["Ukuran panjang antena", "Ukuran kecocokan antara pemancar, kabel, dan antena", "Jenis kabel", "Satuan frekuensi"], answer: 1,
    explain: "SWR (Standing Wave Ratio / rasio gelombang berdiri) adalah ukuran seberapa cocok impedansi pemancar, kabel, dan antena. SWR = 1 berarti matching sempurna; makin besar SWR, makin banyak gelombang yang berdiri akibat pantulan." },
  { cat: "definisi", q: "Apa itu dipole?",
    options: ["Antena satu batang", "Antena dua konduktor berlawanan arah, diberi sinyal dari tengah", "Antena parabola", "Penguat sinyal"], answer: 1,
    explain: "Dipole adalah antena dasar yang terdiri dari dua konduktor/batang yang arahnya berlawanan dan diberi sinyal (dicatu) dari bagian tengah. Dipole menjadi dasar pembentukan folded dipole maupun double dipole." },
  { cat: "definisi", q: "Apa itu folded dipole?",
    options: ["Dipole yang dilipat seperti loop memanjang", "Dipole yang sangat pendek", "Antena tanpa konduktor", "Dipole vertikal"], answer: 0,
    explain: "Folded dipole adalah dipole yang konduktornya dilipat membentuk loop memanjang (seperti dua batang yang disatukan di ujung). Bentuk lipatan ini mengubah impedansi dan lebar pita antena dibanding dipole lurus biasa." },
  { cat: "definisi", q: "Apa itu double dipole / antena 2 elemen?",
    options: ["Satu dipole panjang", "Antena dengan dua elemen dipole disusun sejajar/berpasangan", "Antena loop tunggal", "Antena parabola ganda"], answer: 1,
    explain: "Double dipole (antena 2 elemen) adalah antena yang punya dua elemen dipole disusun sejajar/berpasangan. Pada percobaan ini, double dipole menunjukkan matching lebih baik (SWR lebih kecil) dibanding folded dipole." },
  { cat: "definisi", q: "Apa itu faktor refleksi?",
    options: ["Perbandingan tegangan balik terhadap tegangan maju (UR/UF)", "Jumlah pantulan cahaya", "Panjang gelombang", "Daya total"], answer: 0,
    explain: "Faktor refleksi (r) adalah perbandingan tegangan balik terhadap tegangan maju, r = UR/UF. Nilainya antara 0 dan 1; makin kecil makin baik karena pantulannya makin sedikit. Folded = 0,24, double = 0,18." },
  { cat: "definisi", q: "Apa itu co-polarisasi?",
    options: ["Probe tegak lurus antena", "Probe sejajar dengan polarisasi antena pemancar", "Tanpa polarisasi", "Polarisasi melingkar"], answer: 1,
    explain: "Co-polarisasi adalah kondisi saat arah probe/penerima sejajar dengan polarisasi antena pemancar (posisi 0°). Pada kondisi ini sinyal yang diterima paling besar karena orientasinya cocok." },
  { cat: "definisi", q: "Apa itu cross-polarisasi?",
    options: ["Probe sejajar antena", "Probe tegak lurus terhadap polarisasi antena", "Polarisasi sama", "Tidak ada sinyal"], answer: 1,
    explain: "Cross-polarisasi adalah kondisi saat arah probe/penerima tegak lurus terhadap polarisasi antena pemancar (posisi 90°). Sinyal yang diterima kecil karena orientasi probe tidak sesuai arah medan antena." },
  { cat: "definisi", q: "Kenapa benda logam dekat antena harus dihindari?",
    options: ["Agar antena tidak berkarat", "Karena logam mempengaruhi medan, sehingga daya/tegangan balik/matching berubah", "Karena logam berat", "Tidak ada pengaruh"], answer: 1,
    explain: "Benda logam di dekat antena memantulkan dan mengubah medan elektromagnetik di sekitarnya. Akibatnya pembacaan daya, tegangan balik, dan matching menjadi tidak akurat. Karena itu area sekitar antena harus bebas logam saat pengukuran." }
];

/* ---------- QUIZ MODUL 1B: ANTENA PENERIMA ----------
   Setiap soal punya penjelasan detail (explain) yang lengkap. */
const QUIZ_P1_PENERIMA = [
  // DASAR
  { cat: "dasar", q: "Praktikum Antena Penerima membahas tentang...",
    options: ["Hanya matching antena", "Penerimaan sinyal dari pemancar UHF, pengaruh polarisasi, jarak, probe, dan Yagi", "Distribusi tegangan saja", "Frekuensi resonansi antena"], answer: 1,
    explain: "Praktikum penerima membahas bagaimana sinyal dari pemancar diterima oleh antena penerima. Yang diamati adalah pengaruh polarisasi (co/cross), jarak pemancar-penerima, probe, dan elemen Yagi terhadap level sinyal yang diterima." },
  { cat: "dasar", q: "Antena yang dipakai pada PEMANCAR di percobaan penerima adalah...",
    options: ["Double dipole", "Folded dipole", "Yagi", "Parabola"], answer: 1,
    explain: "Di percobaan penerima, pemancar memakai folded dipole, sedangkan penerima memakai double dipole / antena 2 elemen. Jangan tertukar — ini berbeda dengan percobaan pemancar yang keduanya diuji sebagai antena pemancar." },
  { cat: "dasar", q: "Antena yang dipakai pada PENERIMA di percobaan ini adalah...",
    options: ["Folded dipole", "Horn", "Double dipole / antena 2 elemen", "Monopole"], answer: 2,
    explain: "Penerima menggunakan double dipole (antena 2 elemen). Pemancar menggunakan folded dipole. Perannya dibagi — tidak seperti percobaan pemancar yang keduanya diuji sebagai antena Tx." },
  { cat: "dasar", q: "Jarak awal pemancar dan penerima pada percobaan ini adalah...",
    options: ["1 meter", "0,5 meter", "2 meter", "5 meter"], answer: 1,
    explain: "Jarak awal antara pemancar dan penerima diatur sekitar 0,5 meter (50 cm). Ini jarak awal sebelum divariasikan untuk melihat pengaruh jarak terhadap sinyal." },
  { cat: "dasar", q: "Daya awal pemancar pada percobaan penerima adalah...",
    options: ["1 W", "2 W", "0,2 W", "5 W"], answer: 2,
    explain: "Daya awal pemancar diatur sekitar 0,2 W. Nilai ini dipakai sebagai referensi awal sebelum daya dinaikkan untuk berbagai pengukuran." },
  { cat: "dasar", q: "Sensitivity penerima diatur untuk...",
    options: ["Mengubah frekuensi", "Mengatur kepekaan pembacaan meter agar terbaca jelas", "Menaikkan daya pemancar", "Mengubah polarisasi"], answer: 1,
    explain: "Sensitivity dipakai untuk mengatur kepekaan pembacaan meter penerima. Misalnya dibuat maksimum 100% atau target 50% sebelum dibandingkan dengan kondisi lain." },
  { cat: "dasar", q: "RF in Rx pada data percobaan menunjukkan...",
    options: ["Daya pemancar", "Level sinyal yang terbaca di penerima", "Frekuensi pemancar", "Panjang kabel"], answer: 1,
    explain: "RF in Rx adalah pembacaan level sinyal yang masuk/terbaca di penerima, bukan daya pemancar. Ini menunjukkan seberapa besar sinyal yang diterima oleh antena penerima." },
  { cat: "dasar", q: "Frekuensi yang digunakan pada percobaan antena penerima adalah...",
    options: ["144 MHz", "434 MHz", "2,4 GHz", "434 kHz"], answer: 1,
    explain: "Sama seperti percobaan pemancar, frekuensi yang digunakan adalah 434 MHz (pita UHF). Pemancar dan penerima bekerja pada frekuensi yang sama." },

  // POLARISASI
  { cat: "polarisasi", q: "Co-polarisasi pada percobaan penerima berarti...",
    options: ["Pemancar vertikal, penerima horizontal", "Pemancar dan penerima sama-sama horizontal", "Probe diputar 90°", "Antena diputar 180°"], answer: 1,
    explain: "Co-polarisasi berarti antena pemancar dan penerima memiliki arah polarisasi yang sama — pada percobaan ini keduanya horizontal. Sinyal diterima paling besar pada kondisi ini." },
  { cat: "polarisasi", q: "Cross-polarisasi pada percobaan penerima berarti...",
    options: ["Keduanya horizontal", "Keduanya vertikal", "Pemancar horizontal, penerima vertikal (tegak lurus)", "Probe di belakang antena"], answer: 2,
    explain: "Cross-polarisasi berarti polarisasi pemancar dan penerima berbeda/tegak lurus. Pada percobaan ini pemancar horizontal dan penerima dibuat vertikal, sehingga sinyal yang diterima jauh lebih kecil." },
  { cat: "polarisasi", q: "Hasil co-polarisasi saat Tx 0,2 W adalah Rx...",
    options: ["9%", "50%", "100%", "0%"], answer: 2,
    explain: "Saat co-polarisasi dengan Tx 0,2 W, penerima terbaca 100%. Ini karena kedua antena sejajar sehingga sinyal ditangkap secara maksimal." },
  { cat: "polarisasi", q: "Hasil cross-polarisasi saat Tx 0,2 W adalah Rx...",
    options: ["100%", "50%", "9%", "0%"], answer: 2,
    explain: "Saat cross-polarisasi dengan Tx 0,2 W, Rx hanya 9%. Ada pelemahan sekitar 91% karena arah medan listrik pemancar dan penerima saling tegak lurus." },
  { cat: "polarisasi", q: "Kenapa co-polarisasi menghasilkan sinyal lebih besar?",
    options: ["Karena daya lebih besar", "Karena medan listrik pemancar dan penerima sejajar, sinyal ditangkap maksimal", "Karena jarak lebih dekat", "Karena kabel lebih panjang"], answer: 1,
    explain: "Pada co-polarisasi, arah medan listrik antena pemancar dan penerima sejajar sehingga penerima bisa menangkap sinyal lebih maksimal. Orientasi yang cocok = sinyal optimal." },
  { cat: "polarisasi", q: "Saat cross-polarisasi, Tx dinaikkan ke 0,6 W. Rx menjadi...",
    options: ["9%", "100%", "50%", "0%"], answer: 2,
    explain: "Saat Tx dinaikkan dari 0,2 W ke 0,6 W pada kondisi cross-polarisasi, Rx naik dari 9% ke 50%. Ini menunjukkan daya tambahan bisa mengkompensasi sebagian pelemahan akibat cross-pol." },
  { cat: "polarisasi", q: "Saat cross-polarisasi, Tx dinaikkan ke 1,2 W. Rx menjadi...",
    options: ["50%", "9%", "100%", "0%"], answer: 2,
    explain: "Saat Tx dinaikkan ke 1,2 W pada cross-pol, Rx kembali 100%. Artinya untuk mengkompensasi pelemahan cross-pol, daya harus dinaikkan 6× lipat (dari 0,2 W ke 1,2 W)." },
  { cat: "polarisasi", q: "Kenapa cross-pol masih terbaca 9% dan tidak 0%?",
    options: ["Karena pemancar terlalu kuat", "Karena kondisi tidak ideal — ada pantulan dan posisi antena tidak sempurna tegak lurus", "Karena kabel bagus", "Karena frekuensi tepat"], answer: 1,
    explain: "Pada praktik, kondisi tidak ideal. Bisa ada pantulan dari benda di sekitar, posisi antena tidak benar-benar tegak lurus sempurna, dan lingkungan ruangan mempengaruhi medan sehingga masih ada sinyal kecil yang terbaca." },

  // JARAK
  { cat: "jarak", q: "Apa pengaruh jarak terhadap sinyal penerima?",
    options: ["Makin jauh sinyal makin kuat", "Makin jauh jarak, sinyal makin lemah", "Jarak tidak berpengaruh", "Sinyal tetap sama"], answer: 1,
    explain: "Semakin jauh jarak pemancar dan penerima, sinyal yang diterima semakin lemah karena pelemahan ruang bebas. Supaya Rx tetap 50%, daya Tx harus dinaikkan." },
  { cat: "jarak", q: "Pada jarak 50 cm, berapa Tx untuk Rx 50%?",
    options: ["0,6 W", "0,8 W", "0,2 W", "1,7 W"], answer: 2,
    explain: "Pada jarak 50 cm, Tx cukup 0,2 W untuk mendapatkan Rx 50%. Ini jarak paling dekat sehingga daya yang dibutuhkan paling kecil." },
  { cat: "jarak", q: "Pada jarak 200 cm, berapa Tx untuk Rx 50%?",
    options: ["0,2 W", "0,6 W", "0,8 W", "1,7 W"], answer: 3,
    explain: "Pada jarak 200 cm (2 m), dibutuhkan Tx 1,7 W untuk Rx 50%. Dibanding jarak 50 cm yang hanya butuh 0,2 W, daya harus dinaikkan 8,5× karena pelemahan ruang bebas." },
  { cat: "jarak", q: "Kenapa makin jauh butuh daya Tx lebih besar?",
    options: ["Karena kabel makin panjang", "Karena sinyal mengalami pelemahan ruang bebas, energi menyebar", "Karena antena makin berat", "Tidak ada alasan"], answer: 1,
    explain: "Sinyal mengalami pelemahan ruang bebas — energi gelombang menyebar ke segala arah saat merambat di udara. Makin jauh jarak, makin kecil kuat sinyal yang sampai ke penerima." },
  { cat: "jarak", q: "Apa itu pelemahan ruang bebas?",
    options: ["Gangguan dari benda logam", "Penurunan kuat sinyal karena gelombang menyebar saat merambat di udara", "Kerusakan kabel", "Perubahan frekuensi"], answer: 1,
    explain: "Pelemahan ruang bebas (free-space path loss) adalah penurunan kuat sinyal karena gelombang merambat dan menyebar di udara/ruang tanpa penghalang. Makin jauh jarak, makin besar pelemahannya." },
  { cat: "jarak", q: "Rumus pelemahan ruang bebas adalah...",
    options: ["N = R × λ", "N = 20 log₁₀(4πR/λ)", "N = P × R", "N = f / R"], answer: 1,
    explain: "Rumus pelemahan ruang bebas: N = 20 log₁₀(4πR/λ), dengan R = jarak dan λ = panjang gelombang. Pada 434 MHz, λ ≈ 0,69 m." },

  // PROBE & YAGI
  { cat: "probe_yagi", q: "Pada co-pol tanpa probe, Rx terbaca...",
    options: ["24%", "100%", "0%", "50%"], answer: 3,
    explain: "Pada co-polarisasi tanpa probe, dengan Tx 1,7 W, Rx terbaca 50%. Nilai ini menjadi acuan untuk membandingkan pengaruh probe." },
  { cat: "probe_yagi", q: "Probe dekat Tx pada co-pol, Rx menjadi...",
    options: ["50%", "39%", "24%", "92%"], answer: 2,
    explain: "Probe dekat Tx menurunkan Rx dari 50% menjadi 24%. Probe mengganggu medan di dekat pemancar sehingga sinyal yang dipancarkan berkurang." },
  { cat: "probe_yagi", q: "Kenapa probe menurunkan pembacaan Rx?",
    options: ["Probe menambah daya", "Probe mengganggu medan/sinyal antara pemancar dan penerima", "Probe mengubah frekuensi", "Tidak ada pengaruh"], answer: 1,
    explain: "Probe berada di daerah medan antara pemancar dan penerima. Ia bisa mengganggu distribusi medan atau menyerap sebagian energi sinyal, sehingga pembacaan Rx turun." },
  { cat: "probe_yagi", q: "Pada cross-pol, pengaruh probe bagaimana?",
    options: ["Rx naik jadi 50%", "Semua pembacaan tetap 0%", "Rx naik jadi 100%", "Rx turun jadi -10%"], answer: 1,
    explain: "Pada cross-polarisasi, semua pembacaan tetap 0% baik tanpa probe, probe dekat Tx, dekat Rx, maupun tengah. Cross-pol sudah terlalu lemah, probe tidak mengubah apapun." },
  { cat: "probe_yagi", q: "Yagi dekat Rx pada co-pol, Rx menjadi...",
    options: ["50%", "90%", "56%", "92%"], answer: 3,
    explain: "Yagi dekat Rx menghasilkan Rx 92% — nilai tertinggi. Elemen Yagi membantu mengarahkan sinyal ke penerima, sehingga penerimaan meningkat dari 50% ke 92%." },
  { cat: "probe_yagi", q: "Posisi Yagi paling efektif pada co-pol berdasarkan data adalah...",
    options: ["Tengah", "Dekat Tx", "Dekat Rx (92%)", "Tidak ada perbedaan"], answer: 2,
    explain: "Posisi Yagi dekat Rx menghasilkan pembacaan paling besar: 92%. Dekat Tx menghasilkan 90%, dan tengah hanya 56%. Yagi paling efektif saat dekat penerima." },
  { cat: "probe_yagi", q: "Pada cross-pol tanpa Yagi Rx 0%. Dengan Yagi dekat Rx, Rx menjadi...",
    options: ["0%", "22%", "32%", "34%"], answer: 3,
    explain: "Walaupun cross-pol awalnya 0%, Yagi dekat Rx membuat sinyal terbaca 34%. Elemen Yagi mempengaruhi medan dan arah rambat sinyal sehingga sebagian energi bisa terbaca oleh penerima." },
  { cat: "probe_yagi", q: "Kenapa Yagi bisa membuat sinyal terbaca lagi pada cross-pol?",
    options: ["Karena Yagi mengubah frekuensi", "Karena Yagi mempengaruhi medan dan arah rambat sinyal", "Karena Yagi menambah daya", "Tidak bisa"], answer: 1,
    explain: "Elemen Yagi/director mempengaruhi medan dan arah rambat sinyal di sekitarnya. Pada cross-pol, sebagian energi yang tadinya tidak sampai ke penerima bisa lebih terarah atau terbaca berkat pengaruh elemen Yagi." },

  // TEORI
  { cat: "teori", q: "dB (desibel) adalah...",
    options: ["Satuan daya absolut", "Satuan perbandingan level/gain/redaman (logaritmik)", "Satuan tegangan", "Satuan frekuensi"], answer: 1,
    explain: "dB adalah satuan logaritmik untuk menyatakan perbandingan level, gain, atau redaman. Bukan nilai daya mutlak. Contoh: sinyal naik 3 dB artinya daya naik ~2 kali." },
  { cat: "teori", q: "dBm adalah...",
    options: ["Satuan perbandingan", "Satuan daya absolut dengan acuan 1 mW", "Satuan tegangan", "Satuan jarak"], answer: 1,
    explain: "dBm adalah satuan daya absolut dengan acuan 1 miliwatt. 0 dBm = 1 mW, 10 dBm = 10 mW, 20 dBm = 100 mW, 30 dBm = 1 W." },
  { cat: "teori", q: "1 Watt sama dengan berapa dBm?",
    options: ["20 dBm", "30 dBm", "40 dBm", "10 dBm"], answer: 1,
    explain: "1 W = 1000 mW. P(dBm) = 10 log₁₀(1000) = 10 × 3 = 30 dBm. Jadi 1 Watt = 30 dBm." },
  { cat: "teori", q: "Gain antena menggunakan satuan...",
    options: ["dBm", "dB (karena gain adalah perbandingan)", "Watt", "Volt"], answer: 1,
    explain: "Gain pakai dB karena gain adalah perbandingan (seberapa besar antena memperkuat sinyal dibanding referensi). dBm untuk daya absolut, bukan untuk gain." },
  { cat: "teori", q: "Pelemahan ruang bebas 34,75 dB itu satuannya...",
    options: ["dBm (daya absolut)", "dB (karena menyatakan redaman/perbandingan)", "dBV", "Watt"], answer: 1,
    explain: "Pelemahan (redaman) menggunakan dB karena menyatakan perbandingan, bukan daya absolut. 34,75 dB berarti sinyal mengalami redaman sebesar itu dari kondisi awal." },
  { cat: "teori", q: "Panjang gelombang (lambda) pada 434 MHz adalah sekitar...",
    options: ["1 m", "0,69 m", "0,5 m", "2 m"], answer: 1,
    explain: "λ = c/f = (3×10⁸ m/s) / (434×10⁶ Hz) ≈ 0,69 m. Ini penting untuk menghitung pelemahan ruang bebas." },
  { cat: "teori", q: "Rumus dB untuk daya adalah...",
    options: ["dB = 20 log₁₀(P₂/P₁)", "dB = 10 log₁₀(P₂/P₁)", "dB = P₂/P₁", "dB = P₂ − P₁"], answer: 1,
    explain: "Untuk daya, rumusnya dB = 10 log₁₀(P₂/P₁). Untuk tegangan pakai 20 karena daya sebanding dengan tegangan kuadrat (P ∝ V²)." }
];

/* ---------- MATERI BAB 3: DIAGRAM POLAR & PENGUKURAN PENGUATAN ---------- */
const MATERI_BAB3 = [
  {
    id: "pembuka-b3",
    title: "Kalimat Pembuka",
    html: `
      <p class="quote">"Pada percobaan Diagram Polar, kami mengukur pola radiasi antena dengan memutar antena penerima dari 0° sampai 180° tiap 10°. Nilai RF input dicatat di setiap sudut lalu diplot ke diagram polar. Dari data terlihat karakteristik pengarahan masing-masing antena."</p>
    `
  },
  {
    id: "tujuan-b3",
    title: "Tujuan Praktikum",
    html: `
      <p>Tujuan percobaan ini:</p>
      <ul>
        <li>Mengetahui <strong>karakteristik pengarahan antena</strong> dari pola radiasi.</li>
        <li>Melihat bentuk <strong>pola radiasi</strong> berdasarkan perubahan sudut.</li>
        <li>Membandingkan pola folded dipole dan double dipole sebagai antena penerima.</li>
        <li>Memahami konsep <strong>directional, bidirectional</strong>, main lobe, side lobe, HPBW, dan front-to-back ratio.</li>
      </ul>
    `
  },
  {
    id: "langkah-b3",
    title: "Langkah Praktikum (Ngapain Aja)",
    html: `
      <ol>
        <li>Menyiapkan pemancar dan penerima UHF pada frekuensi 434 MHz.</li>
        <li>Memasang antena pada pemancar dan penerima.</li>
        <li>Mengatur posisi awal <code>0°</code> dengan pembacaan penerima maksimum (<code>100%</code>).</li>
        <li>Memutar <strong>antena penerima</strong> dari <code>0°</code> sampai <code>180°</code>.</li>
        <li>Mencatat nilai RF input tiap <code>10°</code>.</li>
        <li>Mengulangi untuk susunan antena yang berbeda (folded dipole dan double dipole sebagai penerima).</li>
        <li>Memplot data ke <strong>diagram polar</strong>.</li>
        <li>Mengamati bentuk pola radiasi dan menentukan jenis pengarahannya.</li>
      </ol>
      <p class="quote"><strong>Penting:</strong> Yang diputar adalah <strong>antena penerima</strong>, bukan pemancar. Jadi pola yang diamati adalah karakteristik antena penerima.</p>
    `
  },
  {
    id: "susunan-antena",
    title: "Susunan Antena & Data",
    html: `
      <table class="tbl">
        <thead><tr><th>Susunan</th><th>Antena Penerima (diputar)</th><th>Ciri Data 180°</th><th>Jenis Pola</th></tr></thead>
        <tbody>
          <tr><td>Folded dipole Tx + 2 elemen Rx</td><td>Double dipole / 2 elemen</td><td>Hampir 0%</td><td><span class="badge">Directional</span></td></tr>
          <tr><td>2 elemen Tx + Folded dipole Rx</td><td>Folded dipole</td><td>Masih ada sinyal</td><td>Bidirectional</td></tr>
        </tbody>
      </table>
      <p class="quote"><strong>Cara hafal:</strong> Kalau 180° = 0 atau hampir 0 → milik double dipole sebagai penerima (directional). Kalau 180° masih ada sinyal → milik folded dipole sebagai penerima (bidirectional).</p>
    `
  },
  {
    id: "jenis-pola",
    title: "Jenis Pola Radiasi",
    html: `
      <div class="qa"><div class="q">Directional / Unidirectional</div><div class="a">Sinyal besar di satu arah utama (biasanya 0°). Saat diputar ke samping/belakang, sinyal turun jauh. Di 180° kecil atau hampir 0. Contoh: double dipole sebagai penerima.</div></div>
      <div class="qa"><div class="q">Bidirectional</div><div class="a">Ada dua arah penerimaan kuat, biasanya depan dan belakang. 0° besar, 180° masih menerima. Sekitar 90° sinyal kecil/null. Contoh: folded dipole sebagai penerima.</div></div>
      <div class="qa"><div class="q">Omnidirectional</div><div class="a">Nilai RF hampir merata di banyak sudut. Bentuk diagram polarnya mendekati lingkaran. <strong>Tidak terlihat dari data praktikum ini.</strong></div></div>
      <p class="quote">"Jenis pola radiasi ditentukan dari bentuk diagram polar. Directional = kuat satu arah. Bidirectional = kuat dua arah. Omnidirectional = merata ke semua arah. Pada data kami, double dipole cenderung directional, folded dipole cenderung bidirectional, dan omnidirectional tidak terlihat."</p>
    `
  },
  {
    id: "definisi-polar",
    title: "Definisi Penting",
    html: `
      <div class="qa"><div class="q">Apa itu diagram polar?</div><div class="a">Grafik melingkar yang menunjukkan besar sinyal berdasarkan sudut arah antena.</div></div>
      <div class="qa"><div class="q">Apa itu pola radiasi?</div><div class="a">Gambaran arah pancaran atau penerimaan antena.</div></div>
      <div class="qa"><div class="q">Apa itu main lobe?</div><div class="a">Arah pancaran atau penerimaan utama yang paling kuat. Dari data, main lobe ada di 0° = 100%.</div></div>
      <div class="qa"><div class="q">Apa itu side lobe?</div><div class="a">Pancaran atau penerimaan samping yang lebih kecil dari main lobe.</div></div>
      <div class="qa"><div class="q">Apa itu zero point / null?</div><div class="a">Arah saat sinyal sangat kecil atau mendekati nol.</div></div>
      <div class="qa"><div class="q">Apa itu front-to-back ratio?</div><div class="a">Perbandingan sinyal arah depan (0°) dengan arah belakang (180°) antena.</div></div>
      <div class="qa"><div class="q">Apa itu HPBW?</div><div class="a">Half-Power Beamwidth — lebar sudut pancaran utama pada titik setengah daya atau sekitar -3 dB.</div></div>
    `
  },
  {
    id: "catatan-b3",
    title: "Catatan Penting",
    html: `
      <div class="qa"><div class="q">Jangan salah pakai kata gain!</div><div class="a">Judulnya ada "pengukuran penguatan", tapi data yang paling jelas adalah diagram polar/pola radiasi. Jawab: "Yang paling kami amati adalah perubahan RF input terhadap sudut. Pengarahan ini berkaitan dengan gain."</div></div>
      <div class="qa"><div class="q">RF input itu relatif!</div><div class="a">Nilai 100%, 80%, 0% bukan daya absolut, tapi pembacaan relatif meter penerima. 100% = nilai maksimum dijadikan acuan.</div></div>
      <div class="qa"><div class="q">Main lobe ada di 0°</div><div class="a">Dari data, nilai terbesar ada di 0° = 100%, jadi main lobe mengarah ke depan.</div></div>
      <div class="qa"><div class="q">180° untuk melihat arah belakang</div><div class="a">Kalau 180° masih besar = penerimaan belakang kuat. Kalau 180° kecil/nol = antena lebih terarah ke depan.</div></div>
      <div class="qa"><div class="q">Jangan klaim mutlak!</div><div class="a">Bilang "berdasarkan data praktikum kami". Contoh: "Berdasarkan data, double dipole sebagai penerima cenderung directional."</div></div>
      <div class="qa"><div class="q">Hubungan pola radiasi dengan gain</div><div class="a">Antena yang lebih terarah biasanya memiliki gain lebih besar ke arah utama, karena energi lebih terkonsentrasi.</div></div>
    `
  },
  {
    id: "kaitan-percobaan",
    title: "Kaitan Dengan Percobaan Sebelumnya",
    html: `
      <table class="tbl">
        <thead><tr><th>Percobaan</th><th>Fokus</th></tr></thead>
        <tbody>
          <tr><td>Pemancar</td><td>Matching, SWR, polarisasi, distribusi arus-tegangan</td></tr>
          <tr><td>Penerima</td><td>Sinyal diterima akibat polarisasi, jarak, probe, Yagi</td></tr>
          <tr><td>Diagram Polar</td><td><strong>Arah</strong> penerimaan antena terhadap sudut</td></tr>
        </tbody>
      </table>
      <p class="quote">"Bagian terakhir ini melengkapi percobaan sebelumnya karena bukan hanya besar sinyalnya yang diamati, tetapi juga arah penerimaan antenanya."</p>
    `
  },
  {
    id: "qa-sederhana-b3",
    title: "Pertanyaan Sederhana",
    html: `
      <div class="qa"><div class="q">Percobaan ini membahas apa?</div><div class="a">Membahas pola radiasi antena dengan menggambarkan hasil pengukuran RF input ke diagram polar.</div></div>
      <div class="qa"><div class="q">Apa yang diputar saat pengukuran?</div><div class="a">Antena penerima yang diputar.</div></div>
      <div class="qa"><div class="q">Antena diputar dari berapa sampai berapa?</div><div class="a">Dari 0° sampai 180°.</div></div>
      <div class="qa"><div class="q">Tiap berapa derajat dicatat?</div><div class="a">Tiap 10°.</div></div>
      <div class="qa"><div class="q">Kenapa 0° biasanya 100%?</div><div class="a">Karena pada posisi awal antena diatur agar pembacaan penerima maksimum, lalu dijadikan acuan 100%.</div></div>
    `
  },
  {
    id: "qa-data-b3",
    title: "Pertanyaan Pemahaman Data",
    html: `
      <div class="qa"><div class="q">Kalau double dipole menjadi penerima, hasil di 180°?</div><div class="a">Pada 180° sinyal hampir tidak diterima atau mendekati 0%.</div></div>
      <div class="qa"><div class="q">Kalau folded dipole menjadi penerima, hasil di 180°?</div><div class="a">Pada 180° masih ada sinyal yang diterima.</div></div>
      <div class="qa"><div class="q">Pola mana yang lebih directional?</div><div class="a">Double dipole sebagai penerima, karena pada arah belakang 180° sinyal hampir tidak ada.</div></div>
      <div class="qa"><div class="q">Pola mana yang lebih bidirectional?</div><div class="a">Folded dipole sebagai penerima, karena pada arah depan dan belakang masih ada penerimaan.</div></div>
      <div class="qa"><div class="q">Kenapa yang dilihat sebagai pola antena adalah antena penerima?</div><div class="a">Karena yang diputar saat pengukuran adalah antena penerima, sehingga perubahan RF input menunjukkan karakteristik arah penerimaan antena tersebut.</div></div>
    `
  },
  {
    id: "qa-sedang-b3",
    title: "Pertanyaan Sedang",
    html: `
      <div class="qa"><div class="q">Kenapa pada sudut tertentu RF input menurun?</div><div class="a">Karena antena tidak lagi menghadap arah penerimaan maksimum, sehingga sinyal yang diterima lebih kecil.</div></div>
      <div class="qa"><div class="q">Kenapa di sekitar 90° biasanya sinyal kecil?</div><div class="a">Karena posisi antena berada di luar arah utama penerimaan.</div></div>
      <div class="qa"><div class="q">Kenapa double dipole lebih directional?</div><div class="a">Karena dari data, saat diputar ke arah belakang 180°, sinyalnya hampir nol — penerimaannya lebih terarah ke depan.</div></div>
      <div class="qa"><div class="q">Kenapa folded dipole disebut bidirectional?</div><div class="a">Karena saat di 180° masih ada sinyal yang diterima, jadi tidak hanya menerima dari depan tapi juga belakang.</div></div>
      <div class="qa"><div class="q">Apa hubungan pola radiasi dengan gain?</div><div class="a">Antena yang lebih terarah biasanya memiliki gain lebih besar ke arah utama, karena energi lebih terkonsentrasi.</div></div>
      <div class="qa"><div class="q">Kenapa pengukuran hanya sampai 180°?</div><div class="a">Cukup diamati perubahan arah depan sampai belakang. Pola 360° bisa diperkirakan dari karakteristik tersebut.</div></div>
    `
  },
  {
    id: "qa-penguasaan-b3",
    title: "Pertanyaan Penguasaan",
    html: `
      <div class="qa"><div class="q">Mana yang lebih baik, folded atau double dipole?</div><div class="a">Tergantung kebutuhan. Kalau ingin penerimaan lebih terarah, double dipole lebih cocok. Kalau ingin menerima dari dua arah, folded dipole lebih cocok.</div></div>
      <div class="qa"><div class="q">Kesimpulan utama dari diagram polar?</div><div class="a">Kuat sinyal yang diterima antena berubah terhadap sudut. Double dipole cenderung directional karena 180° hampir nol. Folded dipole cenderung bidirectional karena 180° masih menerima sinyal.</div></div>
      <div class="qa"><div class="q">Sumber error praktikum ini?</div><div class="a">Posisi sudut kurang presisi, pantulan benda logam di sekitar, jarak antena dekat, pembacaan meter analog, dan posisi antena tidak benar-benar horizontal/vertikal.</div></div>
      <div class="qa"><div class="q">Kenapa pola praktik tidak selalu ideal?</div><div class="a">Lingkungan pengukuran tidak bebas pantulan, ada pengaruh benda sekitar, dan alat ukur serta sudut putar memiliki keterbatasan.</div></div>
      <div class="qa"><div class="q">Aplikasi antena directional?</div><div class="a">Link titik-ke-titik, antena diarahkan ke satu pemancar.</div></div>
      <div class="qa"><div class="q">Aplikasi antena bidirectional?</div><div class="a">Komunikasi dari dua arah depan-belakang.</div></div>
    `
  },
  {
    id: "jawaban-aman-b3",
    title: "Jawaban Aman (Kalau Gugup)",
    html: `
      <p class="quote">"Pada percobaan ini, kami mengukur diagram polar dengan memutar antena penerima dari 0° sampai 180° tiap 10°. Nilai RF input dicatat di setiap sudut lalu diplot ke diagram polar. Karena antena penerima yang diputar, pola yang diamati adalah karakteristik antena penerima. Dari data, saat double dipole menjadi penerima, sinyal pada 180° hampir tidak ada sehingga polanya directional. Saat folded dipole menjadi penerima, sinyal pada 180° masih ada sehingga polanya bidirectional."</p>
      <h3>Jawaban Final Super Aman</h3>
      <p class="quote">"Yang paling penting dari percobaan ini adalah memahami bahwa kuat sinyal antena berubah sesuai sudut. Data 0° menunjukkan arah utama, 90° biasanya melemah, dan 180° menunjukkan arah belakang. Dari situ terlihat apakah antena lebih directional atau bidirectional."</p>
    `
  }
];

/* ---------- QUIZ BAB 3: DIAGRAM POLAR & PENGUKURAN PENGUATAN ----------
   Setiap soal punya penjelasan detail (explain) yang lengkap. */
const QUIZ_BAB3 = [
  // DASAR DIAGRAM POLAR
  { cat: "polar_dasar", q: "Percobaan diagram polar ini membahas tentang...",
    options: ["Matching antena", "Pola radiasi antena berdasarkan perubahan sudut", "Distribusi arus saja", "Frekuensi resonansi"], answer: 1,
    explain: "Percobaan ini membahas pola radiasi antena dengan memutar antena penerima dari 0° sampai 180°, mencatat RF input tiap 10°, lalu memplot ke diagram polar untuk melihat karakteristik pengarahan." },
  { cat: "polar_dasar", q: "Yang diputar saat pengukuran diagram polar adalah...",
    options: ["Antena pemancar", "Antena penerima", "Probe", "Kabel koaksial"], answer: 1,
    explain: "Yang diputar adalah antena penerima. Karena itu, pola yang diamati adalah karakteristik arah penerimaan antena tersebut, bukan pemancar." },
  { cat: "polar_dasar", q: "Antena diputar dari sudut berapa sampai berapa?",
    options: ["0° sampai 90°", "0° sampai 180°", "0° sampai 360°", "90° sampai 270°"], answer: 1,
    explain: "Antena penerima diputar dari 0° sampai 180°. Cukup untuk melihat perubahan arah depan sampai belakang. Pola 360° bisa diperkirakan dari data ini." },
  { cat: "polar_dasar", q: "Tiap berapa derajat data RF input dicatat?",
    options: ["5°", "10°", "15°", "30°"], answer: 1,
    explain: "Data dicatat tiap 10° — dari 0°, 10°, 20°, ... sampai 180°. Ini memberikan cukup titik data untuk menggambar pola radiasi." },
  { cat: "polar_dasar", q: "Kenapa nilai pada 0° biasanya 100%?",
    options: ["Karena daya pemancar 100 W", "Karena posisi awal diatur agar pembacaan maksimum dan dijadikan acuan 100%", "Karena kabel sempurna", "Karena antena baru"], answer: 1,
    explain: "Pada posisi awal 0°, antena diatur agar pembacaan penerima maksimum, lalu dijadikan acuan 100%. Semua sudut lain dibandingkan terhadap nilai ini." },
  { cat: "polar_dasar", q: "Apa itu diagram polar?",
    options: ["Grafik batang biasa", "Grafik melingkar yang menunjukkan besar sinyal berdasarkan sudut arah antena", "Tabel angka", "Foto antena"], answer: 1,
    explain: "Diagram polar adalah grafik melingkar di mana setiap sudut menunjukkan arah antena dan jari-jari menunjukkan besar sinyal. Bentuknya memperlihatkan ke arah mana antena lebih kuat menerima/memancar." },
  { cat: "polar_dasar", q: "Nilai RF input pada data diagram polar ini bersifat...",
    options: ["Daya absolut dalam Watt", "Relatif terhadap pembacaan meter penerima (100% = maksimum)", "Tegangan dalam Volt", "Frekuensi dalam MHz"], answer: 1,
    explain: "RF input di sini adalah level relatif pada meter penerima, dengan nilai maksimum dijadikan 100%. Bukan daya absolut." },
  { cat: "polar_dasar", q: "Kenapa yang dilihat sebagai pola antena adalah antena penerima?",
    options: ["Karena penerima lebih mahal", "Karena yang diputar saat pengukuran adalah antena penerima", "Karena pemancar sudah rusak", "Tidak ada alasan"], answer: 1,
    explain: "Yang diputar saat pengukuran adalah antena penerima, sehingga perubahan RF input terhadap sudut menunjukkan karakteristik arah penerimaan antena tersebut." },

  // POLA RADIASI
  { cat: "pola_radiasi", q: "Saat double dipole menjadi penerima, hasil pada 180° adalah...",
    options: ["100%", "50%", "Hampir 0% atau tidak menerima", "Tetap sama dengan 0°"], answer: 2,
    explain: "Saat double dipole / antena 2 elemen menjadi penerima, pada 180° sinyal hampir tidak diterima (mendekati 0%). Ini menunjukkan pola yang lebih directional — hanya kuat dari arah depan." },
  { cat: "pola_radiasi", q: "Saat folded dipole menjadi penerima, hasil pada 180° adalah...",
    options: ["0%", "Masih ada sinyal yang diterima", "Naik jadi 200%", "Sama dengan double dipole"], answer: 1,
    explain: "Saat folded dipole menjadi penerima, pada 180° masih ada sinyal yang diterima. Ini menunjukkan pola bidirectional — antena menerima dari depan dan belakang." },
  { cat: "pola_radiasi", q: "Antena yang polanya lebih directional berdasarkan data adalah...",
    options: ["Folded dipole sebagai penerima", "Double dipole / antena 2 elemen sebagai penerima", "Keduanya sama", "Tidak bisa ditentukan"], answer: 1,
    explain: "Double dipole sebagai penerima lebih directional karena pada arah belakang 180° sinyal hampir tidak ada. Energi penerimaan terkonsentrasi ke arah depan." },
  { cat: "pola_radiasi", q: "Antena yang polanya lebih bidirectional berdasarkan data adalah...",
    options: ["Double dipole", "Folded dipole sebagai penerima", "Keduanya", "Tidak ada"], answer: 1,
    explain: "Folded dipole sebagai penerima lebih bidirectional karena pada arah depan dan belakang masih ada penerimaan. Tidak hanya kuat dari satu arah." },
  { cat: "pola_radiasi", q: "Kalau data menunjukkan 180° masih besar, itu data antena apa?",
    options: ["Double dipole sebagai penerima", "Folded dipole sebagai penerima", "Antena Yagi", "Antena parabola"], answer: 1,
    explain: "Kalau 180° masih ada sinyal/besar, itu milik folded dipole sebagai penerima (bidirectional). Kalau 180° nol atau hampir nol, itu milik double dipole sebagai penerima (directional)." },
  { cat: "pola_radiasi", q: "Kalau data menunjukkan 180° nol atau hampir nol, itu data antena apa?",
    options: ["Folded dipole", "Double dipole / antena 2 elemen sebagai penerima", "Antena loop", "Monopole"], answer: 1,
    explain: "180° nol atau hampir nol = double dipole sebagai penerima (directional). Ini cara paling mudah membedakan data kedua antena pada diagram polar." },
  { cat: "pola_radiasi", q: "Apa ciri pola omnidirectional?",
    options: ["Sinyal kuat hanya ke satu arah", "Nilai RF hampir merata di semua sudut, bentuknya mendekati lingkaran", "Sinyal hanya dari belakang", "Sinyal nol di semua arah"], answer: 1,
    explain: "Pola omnidirectional berarti sinyal hampir merata ke semua arah, bentuk diagram polarnya mendekati lingkaran. Pada data praktikum ini, tidak ada yang benar-benar omnidirectional." },
  { cat: "pola_radiasi", q: "Apakah pada data praktikum ini ada pola omnidirectional?",
    options: ["Ya, folded dipole", "Ya, double dipole", "Tidak ada — tidak terlihat dari data", "Ya, keduanya"], answer: 2,
    explain: "Tidak ada pola omnidirectional dari data praktikum ini. Double dipole cenderung directional dan folded dipole cenderung bidirectional. Jangan bilang ada omni kalau dari data tidak terlihat merata." },

  // DEFINISI DIAGRAM POLAR
  { cat: "definisi_polar", q: "Apa itu pola radiasi?",
    options: ["Warna antena", "Gambaran arah pancaran atau penerimaan antena", "Panjang antena", "Jenis kabel"], answer: 1,
    explain: "Pola radiasi adalah gambaran arah pancaran atau penerimaan antena. Dari pola radiasi bisa diketahui ke arah mana antena paling kuat menerima/memancar." },
  { cat: "definisi_polar", q: "Apa itu main lobe?",
    options: ["Pancaran samping terkecil", "Arah pancaran/penerimaan utama yang paling kuat", "Arah sinyal nol", "Kabel utama"], answer: 1,
    explain: "Main lobe adalah arah pancaran atau penerimaan utama yang paling kuat. Dari data, main lobe ada di 0° = 100% — arah depan antena." },
  { cat: "definisi_polar", q: "Apa itu side lobe?",
    options: ["Pancaran utama", "Pancaran/penerimaan samping yang lebih kecil dari main lobe", "Kabel samping", "Antena cadangan"], answer: 1,
    explain: "Side lobe adalah pancaran atau penerimaan samping yang lebih kecil dari main lobe. Bisa terlihat sebagai tonjolan kecil di diagram polar selain arah utama." },
  { cat: "definisi_polar", q: "Apa itu zero point / null?",
    options: ["Sinyal maksimum", "Arah saat sinyal sangat kecil atau mendekati nol", "Titik tengah antena", "Frekuensi nol"], answer: 1,
    explain: "Zero point atau null adalah arah di mana sinyal sangat kecil atau mendekati nol. Pada beberapa antena, null terlihat jelas di sudut-sudut tertentu pada diagram polar." },
  { cat: "definisi_polar", q: "Apa itu front-to-back ratio?",
    options: ["Panjang depan dibagi belakang antena", "Perbandingan sinyal arah depan (0°) dengan arah belakang (180°)", "Jumlah elemen antena", "Rasio kabel"], answer: 1,
    explain: "Front-to-back ratio adalah perbandingan sinyal arah depan dengan arah belakang antena. Makin besar rasionya, antena makin directional." },
  { cat: "definisi_polar", q: "Apa itu HPBW?",
    options: ["Half-Power Beamwidth — lebar sudut pada titik setengah daya (-3 dB)", "High-Power Bandwidth", "Horizontal Polarization Bandwidth", "Half-Phase Beam Width"], answer: 0,
    explain: "HPBW (Half-Power Beamwidth) adalah lebar sudut pancaran utama pada titik setengah daya atau sekitar -3 dB. Ini menunjukkan seberapa lebar/sempit pancaran utama antena." },
  { cat: "definisi_polar", q: "Apa itu directional?",
    options: ["Antena merata ke semua arah", "Antena lebih kuat menerima/memancarkan ke satu arah tertentu", "Antena rusak", "Antena tanpa kabel"], answer: 1,
    explain: "Directional berarti antena lebih kuat menerima atau memancarkan ke satu arah tertentu. Pada data, double dipole sebagai penerima menunjukkan pola directional." },
  { cat: "definisi_polar", q: "Apa itu bidirectional?",
    options: ["Menerima dari satu arah saja", "Menerima/memancarkan kuat ke dua arah, biasanya depan dan belakang", "Menerima dari samping", "Tanpa arah"], answer: 1,
    explain: "Bidirectional berarti antena menerima atau memancarkan kuat ke dua arah, biasanya depan dan belakang. Folded dipole sebagai penerima menunjukkan pola bidirectional pada data." },

  // PENGUASAAN
  { cat: "penguasaan_polar", q: "Kenapa pada sudut tertentu RF input menurun?",
    options: ["Karena daya pemancar turun", "Karena antena tidak lagi menghadap arah penerimaan maksimum", "Karena kabel putus", "Karena frekuensi berubah"], answer: 1,
    explain: "Saat antena penerima diputar, ia tidak lagi menghadap arah penerimaan maksimum sehingga sinyal yang diterima lebih kecil. Inilah yang membentuk pola radiasi." },
  { cat: "penguasaan_polar", q: "Kenapa di sekitar 90° biasanya sinyal kecil?",
    options: ["Karena 90° adalah angka sial", "Karena posisi antena berada di luar arah utama penerimaan", "Karena kabel terlalu panjang", "Karena pemancar mati"], answer: 1,
    explain: "Di sekitar 90° antena penerima berada tegak lurus terhadap arah datangnya sinyal (di luar arah utama), sehingga RF input turun signifikan." },
  { cat: "penguasaan_polar", q: "Mana yang lebih baik, folded dipole atau double dipole?",
    options: ["Folded dipole selalu lebih baik", "Double dipole selalu lebih baik", "Tergantung kebutuhan — directional vs bidirectional", "Keduanya sama saja"], answer: 2,
    explain: "Tergantung kebutuhan. Kalau ingin penerimaan lebih terarah (satu arah), double dipole lebih cocok. Kalau ingin menerima dari dua arah (depan-belakang), folded dipole lebih cocok." },
  { cat: "penguasaan_polar", q: "Kesimpulan utama dari diagram polar adalah...",
    options: ["Semua antena sama", "Kuat sinyal berubah terhadap sudut — double dipole directional, folded dipole bidirectional", "Diagram polar tidak penting", "Sinyal tidak berubah"], answer: 1,
    explain: "Kuat sinyal yang diterima antena berubah terhadap sudut. Double dipole sebagai penerima cenderung directional (180° hampir nol), folded dipole cenderung bidirectional (180° masih menerima)." },
  { cat: "penguasaan_polar", q: "Sumber error pada percobaan diagram polar antara lain...",
    options: ["Tidak ada error", "Posisi sudut kurang presisi, pantulan benda logam, pembacaan meter analog", "Antena terlalu bagus", "Frekuensi terlalu rendah"], answer: 1,
    explain: "Error bisa dari posisi sudut kurang presisi, pantulan benda logam di sekitar, jarak antena dekat, pembacaan meter analog, dan posisi antena tidak benar-benar horizontal/vertikal." },
  { cat: "penguasaan_polar", q: "Diagram polar penting karena...",
    options: ["Untuk dekorasi", "Untuk menentukan apakah antena cocok untuk komunikasi satu arah atau beberapa arah", "Untuk menghitung harga antena", "Tidak penting"], answer: 1,
    explain: "Diagram polar penting untuk menentukan apakah antena cocok untuk komunikasi satu arah tertentu (directional) atau untuk menerima dari beberapa arah. Ini menentukan aplikasi antena." },
  { cat: "penguasaan_polar", q: "Bagian diagram polar ini melengkapi percobaan sebelumnya karena...",
    options: ["Tidak melengkapi", "Bukan hanya besar sinyal yang diamati, tetapi juga arah penerimaan antena", "Mengganti percobaan sebelumnya", "Mengulangi data yang sama"], answer: 1,
    explain: "Percobaan pemancar melihat matching/SWR, percobaan penerima melihat pengaruh polarisasi/jarak/probe/Yagi, dan diagram polar melihat ARAH penerimaan antena terhadap sudut. Ketiganya saling melengkapi." }
];



/* ---------- MATERI PERCOBAAN 2: GAIN, POLA RADIASI & ISOLASI SILANG ---------- */
const MATERI_PERCOBAAN2 = [
  {
    id: "pembuka-p2",
    title: "Percobaan 2: Gain, Pola Radiasi & Isolasi Silang",
    html: `
      <p class="quote">"Pada Percobaan 2, kami membandingkan antena referensi dipole dengan antena Yagi untuk menghitung gain. Setelah itu kami mengukur pola radiasi dengan memutar antena penerima tiap 10 derajat. Dari data, Yagi menunjukkan pola directional. Elemen-elemen Yagi juga terbukti berpengaruh karena saat dilepas, level penerimaan menurun."</p>
      <h3>Tujuan Praktikum</h3>
      <ul>
        <li>Mengukur <strong>gain antena</strong>.</li>
        <li>Melihat pengaruh elemen-elemen Yagi terhadap gain/penerimaan.</li>
        <li>Mengukur <strong>pola radiasi</strong> horizontal dan vertikal.</li>
        <li>Menentukan HPBW, sidelobe attenuation, front-to-back ratio (FBR).</li>
        <li>Memahami <strong>isolasi silang</strong> (cross isolation).</li>
      </ul>
    `
  },
  {
    id: "setup-p2",
    title: "Setup Alat & Parameter Utama",
    html: `
      <ul>
        <li><strong>Pemancar:</strong> Signal Generator</li>
        <li><strong>Penerima:</strong> Measuring Receiver</li>
        <li><strong>Frekuensi kerja utama:</strong> <code>202 MHz</code> (VHF, untuk pola radiasi)</li>
        <li><strong>RF output Signal Generator:</strong> <code>80 dBµV</code></li>
        <li><strong>Antena Referensi:</strong> Antena dipole (1/2 λ)</li>
        <li><strong>Antena Under Test (yang diuji):</strong> Antena Yagi-Uda 9 elemen</li>
      </ul>
      <p>Untuk pola radiasi, antena penerima dipasang pada rotator dan diputar dari <code>0° sampai 360°</code> tiap <code>10°</code>.</p>
    `
  },
  {
    id: "tabel1-gain",
    title: "Tabel 1: Pengukuran Gain Antena",
    html: `
      <p>Gain dihitung dengan membandingkan level antena yang diuji dengan antena referensi.</p>
      <ul>
        <li><strong>E1:</strong> level sinyal saat penerima menggunakan antena dipole referensi.</li>
        <li><strong>E2:</strong> level sinyal saat penerima menggunakan antena Yagi yang diuji.</li>
      </ul>
      <p>Rumus Gain:</p>
      <pre><code>G(dB) = E2 - E1 + 2,15 dB</code></pre>
      <div class="qa"><div class="q">Kenapa ditambah 2,15 dB?</div><div class="a">Karena antena referensi (dipole 1/2 λ) memiliki gain <code>2,15 dB</code> terhadap antena isotropis. Penambahan ini membuat hasil akhirnya menjadi gain absolut terhadap isotropis (dBi).</div></div>
      <p class="quote"><strong>Hasil:</strong> E2 lebih besar dari E1. Gain Yagi lebih besar dari dipole karena Yagi memusatkan energi ke depan (lebih terarah).</p>
    `
  },
  {
    id: "tabel23-radiasi",
    title: "Tabel 2 & 3: Pola Radiasi Yagi",
    html: `
      <p>Tabel 2 berisi pola radiasi Yagi polarisasi <strong>Horizontal</strong>. Tabel 3 untuk <strong>Vertikal</strong>.</p>
      <p><strong>Normalisasi Data:</strong> Data diubah agar level maksimum menjadi acuan <code>0 dB</code>. Sudut lain nilainya dikurangi level maksimum (menjadi negatif).</p>
      <pre><code>Normalisasi = Level sudut - Level maksimum</code></pre>
      <div class="qa"><div class="q">Apa jenis pola Yagi?</div><div class="a"><strong>Directional</strong>. Pada 0° sinyal maksimum (0 dB), sedangkan di arah belakang (180°) nilainya turun sangat besar (misal -17,8 dB). Penerimaan ke depan jauh lebih kuat dibanding ke belakang.</div></div>
    `
  },
  {
    id: "tabel4-elemen",
    title: "Tabel 4: Pengaruh Elemen Yagi",
    html: `
      <p>Pada tahap ini, elemen-elemen pasif (director) pada Yagi dilepas satu per satu.</p>
      <div class="qa"><div class="q">Hasil & Kesimpulan:</div><div class="a">Level sinyal penerimaan <strong>menurun</strong>. Ini membuktikan bahwa susunan elemen Yagi (reflector & director) sangat berpengaruh terhadap penguatan dan pembentukan arah antena. Semakin lengkap elemennya, gain semakin besar.</div></div>
    `
  },
  {
    id: "tabel56-folded",
    title: "Tabel 5 & 6: Pola Radiasi Folded Dipole",
    html: `
      <p>Percobaan ini melihat efek penambahan reflektor pada antena Folded Dipole:</p>
      <ul>
        <li><strong>Tabel 5 (Tanpa Reflektor):</strong> Pola radiasinya lebih <strong>menyebar</strong> (bidirectional/cenderung omnidirectional relatif terhadap Yagi).</li>
        <li><strong>Tabel 6 (Dengan Reflektor):</strong> Polanya menjadi lebih <strong>terarah (directional)</strong>.</li>
      </ul>
      <p class="quote"><strong>Kesimpulan:</strong> Reflektor berfungsi menekan radiasi ke arah belakang dan mengarahkannya ke depan, sehingga antena menjadi directional.</p>
    `
  },
  {
    id: "parameter-antena",
    title: "Parameter Penting (Tabel 7)",
    html: `
      <div class="qa"><div class="q">HPBW (Half Power Beam Width)</div><div class="a">Lebar sudut main lobe pada titik setengah daya (turun <code>-3 dB</code> dari maksimum). Semakin kecil HPBW, beam makin sempit, antena makin terarah.</div></div>
      <div class="qa"><div class="q">Front-to-Back Ratio (FBR)</div><div class="a">Perbandingan sinyal arah depan (0°) dengan arah belakang (180°).<br><code>FBR = Level 0° - Level 180°</code> (dalam dB). Semakin besar FBR, semakin baik antena menolak sinyal bocoran dari belakang.</div></div>
      <div class="qa"><div class="q">Sidelobe Attenuation</div><div class="a">Peredaman side lobe (pancaran samping) terhadap main lobe.<br><code>Atten = Level Main Lobe - Level Side Lobe</code>. Semakin besar nilainya, pola antena makin bersih.</div></div>
    `
  },
  {
    id: "isolasi-silang",
    title: "Isolasi Silang (Cross Isolation)",
    html: `
      <p>Isolasi silang adalah perbedaan level antara penerimaan pada polarisasi utama dan polarisasi silang. Menunjukkan kemampuan antena menolak sinyal yang polarisasinya "salah".</p>
      <pre><code>Cross isolation (EcI) = E1 - E2</code></pre>
      <p>Contoh: <code>E1</code> = level polarisasi horizontal (52,6 dBµV), <code>E2</code> = level polarisasi vertikal (50,2 dBµV). Selisihnya 2,4 dB adalah nilai cross isolation.</p>
      <p class="quote">Semakin besar selisihnya, semakin baik antena memisahkan polarisasi horizontal dan vertikal.</p>
    `
  },
  {
    id: "teori-kunci",
    title: "Teori Kunci (Buat Jaga-jaga)",
    html: `
      <div class="qa"><div class="q">dBµV vs dBµV/m</div><div class="a"><code>dBµV</code> = level tegangan listrik yang masuk ke receiver. <code>dBµV/m</code> = kuat medan listrik (field strength) aktual di udara.</div></div>
      <div class="qa"><div class="q">Antena Isotropis</div><div class="a">Antena ideal (hanya ada di teori) yang memancarkan energi persis sama rata ke segala arah membentuk bola. Dipakai sebagai referensi penguatan <code>0 dBi</code>.</div></div>
      <div class="qa"><div class="q">Panjang Dipole 202 MHz</div><div class="a">Panjang gelombang (λ) = c/f = 300 / 202 ≈ 1,485 m. Dipole (1/2 λ) panjangnya sekitar 74,25 cm. Karena ada dua lengan batang, tiap sisi ≈ 37 cm.</div></div>
      <div class="qa"><div class="q">Mengapa pola praktik tidak ideal?</div><div class="a">Gelombang memantul di ruangan (tembok/meja), ada benda logam, ketidakpresisian sudut pemutar (rotator), dan toleransi alat ukur analog/digital.</div></div>
    `
  },
  {
    id: "jawaban-aman-p2",
    title: "Jawaban Panjang Aman",
    html: `
      <p class="quote">"Percobaan 2 mengukur gain, pola radiasi, dan isolasi silang. Gain dihitung dengan membandingkan antena Yagi terhadap dipole referensi menggunakan rumus G = E2 - E1 + 2,15 dB. Pola radiasi diukur dengan memutar antena penerima dari 0° sampai 360° tiap 10°. Dari hasilnya, Yagi cenderung directional karena sinyal kuat di arah depan dan lemah di belakang. Saat elemen Yagi dilepas, level sinyal menurun. Folded dipole tanpa reflektor lebih menyebar, sedangkan dengan reflektor menjadi lebih terarah."</p>
      <h3>Jawaban Inti Paling Penting</h3>
      <p class="quote">"Saya paham bahwa gain dan pola radiasi antena dipengaruhi oleh bentuk dan elemen antena. Yagi lebih directional karena memiliki reflector dan director, sedangkan folded dipole tanpa reflektor lebih menyebar. Saat elemen Yagi dilepas, level sinyal turun, membuktikan bahwa elemen-elemen tersebut sangat berperan dalam penguatan antena."</p>
    `
  }
];

/* ---------- QUIZ PERCOBAAN 2: GAIN, POLA RADIASI & ISOLASI SILANG ---------- */
const QUIZ_PERCOBAAN2 = [
  // DASAR PERCOBAAN 2
  { cat: "dasar2", q: "Judul Percobaan 2 adalah...", options: ["Matching Antena Pemancar", "Pengukuran Gain, Pola Radiasi, dan Isolasi Silang", "Distribusi Tegangan Antena", "Pengaruh Probe dan Yagi"], answer: 1, explain: "Judul Percobaan 2 adalah Pengukuran Gain, Pola Radiasi, dan Isolasi Silang. Fokusnya sangat luas mencakup karakteristik pengarahan (pola) dan penguatan (gain)." },
  { cat: "dasar2", q: "Alat yang berfungsi sebagai pemancar pada Percobaan 2 adalah...", options: ["Measuring Receiver", "Antena Rotator", "Signal Generator", "Dipole"], answer: 2, explain: "Signal Generator digunakan sebagai sumber sinyal (pemancar) dengan level output yang diatur (misal 80 dBµV)." },
  { cat: "dasar2", q: "Alat yang berfungsi membaca level sinyal yang diterima adalah...", options: ["SWR Meter", "Signal Generator", "Measuring Receiver", "Multimeter"], answer: 2, explain: "Measuring Receiver digunakan sebagai alat penerima untuk membaca level tegangan sinyal (dalam satuan dBµV) yang ditangkap oleh antena." },
  { cat: "dasar2", q: "Berapa frekuensi kerja utama yang digunakan pada pengukuran pola radiasi Percobaan 2?", options: ["434 MHz", "202 MHz", "144 MHz", "2.4 GHz"], answer: 1, explain: "Frekuensi yang digunakan adalah 202 MHz (masuk pita VHF). Ini berbeda dengan modul 1 yang menggunakan 434 MHz (UHF)." },
  { cat: "dasar2", q: "Antena yang digunakan sebagai referensi (pembanding) untuk mengukur gain adalah...", options: ["Yagi-Uda 9 elemen", "Antena Isotropis", "Antena Parabola", "Antena Dipole (1/2 λ)"], answer: 3, explain: "Antena dipole setengah gelombang digunakan sebagai antena referensi karena karakteristik gain-nya sudah diketahui dengan pasti (sekitar 2,15 dBi)." },
  { cat: "dasar2", q: "Antena under test (antena yang performanya sedang diuji) utamanya adalah...", options: ["Antena Yagi-Uda 9 elemen", "Antena Dipole", "Antena Loop", "Antena Monopole"], answer: 0, explain: "Antena Yagi-Uda 9 elemen adalah antena yang sedang diuji pola dan gain-nya dengan cara membandingkannya terhadap antena referensi." },
  
  // GAIN & ELEMEN
  { cat: "gain_elemen", q: "Apa itu gain antena?", options: ["Panjang fisik total antena", "Kemampuan antena memusatkan/memperkuat sinyal ke arah tertentu", "Kemampuan antena menahan daya pemancar besar", "Frekuensi resonansi antena"], answer: 1, explain: "Gain adalah penguatan antena, yaitu kemampuan antena untuk memusatkan energi radiasi sinyal ke satu arah tertentu dibandingkan antena referensi." },
  { cat: "gain_elemen", q: "Pada Tabel 1 pengukuran gain, level E1 adalah...", options: ["Level saat menggunakan antena Yagi", "Level saat pemancar dimatikan", "Level sinyal saat penerima menggunakan antena dipole referensi", "Gain akhir antena"], answer: 2, explain: "E1 adalah level sinyal acuan yang diterima saat penerima menggunakan antena referensi (dipole setengah gelombang)." },
  { cat: "gain_elemen", q: "Rumus perhitungan gain pada Percobaan 2 adalah...", options: ["G = E1 - E2", "G = E2 + E1", "G = E2 - E1 + 2,15 dB", "G = E2 / E1"], answer: 2, explain: "G = E2 - E1 adalah gain relatif terhadap dipole. Ditambah 2,15 dB agar nilainya menjadi gain absolut terhadap antena isotropis (dBi)." },
  { cat: "gain_elemen", q: "Mengapa rumus perhitungan gain ditambah 2,15 dB?", options: ["Karena panjang kabel sekitar 2 meter", "Karena gain antena dipole referensi adalah 2,15 dB terhadap isotropis", "Itu adalah nilai error konstan alat ukur", "Karena menggunakan frekuensi 202 MHz"], answer: 1, explain: "Dipole setengah gelombang secara teori ideal memiliki gain 2,15 dBi (terhadap isotropis). Menambahkan 2,15 akan mengubah hasil E2-E1 menjadi dBi." },
  { cat: "gain_elemen", q: "Jika E2 (Yagi) lebih besar dari E1 (Dipole), kesimpulannya adalah...", options: ["Antena Yagi rusak / tidak presisi", "Antena Yagi memiliki gain lebih kecil dari dipole", "Antena Yagi menerima sinyal lebih kuat ke arah tersebut, gain-nya lebih besar", "Kabel penghubung Yagi lebih pendek"], answer: 2, explain: "Level E2 yang lebih besar membuktikan bahwa Yagi memiliki penguatan (gain) yang lebih baik karena kemampuannya memusatkan arah pancaran/penerimaan." },
  { cat: "gain_elemen", q: "Apa yang terjadi pada level sinyal ketika elemen-elemen Yagi dilepas satu per satu?", options: ["Level sinyal meningkat pesat", "Level sinyal menurun", "Level sinyal tetap stabil", "Sinyal menjadi nol absolut seketika"], answer: 1, explain: "Level sinyal menurun. Ini membuktikan eksperimental bahwa elemen-elemen pasif (reflector & director) pada Yagi sangat berperan penting meningkatkan penerimaan sinyal." },
  { cat: "gain_elemen", q: "Fungsi reflector pada antena Yagi adalah...", options: ["Menghubungkan kabel koaksial", "Mengurangi radiasi ke belakang dan memantulkan energi ke depan", "Menerima sinyal dari semua arah (omni)", "Menyesuaikan impedansi input"], answer: 1, explain: "Reflector berada di posisi paling belakang. Fungsinya seperti cermin, menahan sinyal agar tidak bocor ke arah belakang dan memantulkannya ke arah depan." },
  
  // POLA RADIASI
  { cat: "radiasi2", q: "Antena penerima dipasang pada rotator dan diputar dari 0° sampai 360° dengan step tiap...", options: ["5°", "10°", "15°", "45°"], answer: 1, explain: "Diputar tiap 10 derajat agar resolusi titik data cukup rapat untuk menggambarkan bentuk kurva pola radiasi yang detail di diagram polar." },
  { cat: "radiasi2", q: "Bagaimana cara melakukan normalisasi data pola radiasi di tabel?", options: ["Semua nilai daya dibagi dua", "Nilai sudut dikurangi nilai minimum", "Setiap level sudut dikurangi dengan level maksimum (sehingga maks = 0 dB)", "Level sudut ditambah 10 dB"], answer: 2, explain: "Normalisasi mengubah nilai referensi. Puncak maksimum diubah jadi 0 dB, dan sudut lain dikurangi puncak tersebut sehingga nilainya menjadi negatif (misal -3 dB, -17 dB)." },
  { cat: "radiasi2", q: "Berdasarkan Tabel 2, antena Yagi memiliki bentuk pola radiasi yang bersifat...", options: ["Omnidirectional", "Bidirectional", "Directional", "Isotropis"], answer: 2, explain: "Yagi sangat directional karena level maksimum ada tegak lurus di 0° (depan), sedangkan di 180° (belakang) levelnya ditekan turun sangat drastis (misal -17 dB)." },
  { cat: "radiasi2", q: "Pada pengujian folded dipole, apa pengaruh penambahan reflektor?", options: ["Reflektor membuat pola lebih menyebar ke segala arah", "Reflektor membuat pola menjadi lebih terarah (directional)", "Reflektor menurunkan gain secara drastis", "Reflektor mengubah frekuensi kerja antena"], answer: 1, explain: "Tanpa reflektor, folded dipole menyebar ke segala arah secara relatif. Dengan reflektor, radiasi ke belakang ditahan sehingga pola memusat ke depan (directional)." },
  { cat: "radiasi2", q: "Antena Isotropis adalah...", options: ["Antena Yagi yang sangat panjang", "Antena ideal teori yang memancar energi sama rata ke semua arah (bentuk bola)", "Antena dipole biasa", "Antena parabola tanpa kabel"], answer: 1, explain: "Isotropis hanya ada dalam konsep fisika teori. Antena ini memancar merata ke segala arah 3D. Digunakan sebagai acuan dasar (0 dBi) untuk standarisasi gain antena." },
  { cat: "radiasi2", q: "Perbedaan mendasar antara satuan dBµV dan dBµV/m adalah...", options: ["Sama saja, hanya beda penulisan", "dBµV mengukur arus, dBµV/m mengukur tegangan", "dBµV adalah tegangan di alat penerima, dBµV/m adalah kuat medan listrik (field) di ruang", "dBµV/m dipakai untuk mengukur jarak"], answer: 2, explain: "dBµV murni mengukur level tegangan listrik yang masuk ke receiver via kabel. dBµV/m adalah field strength (kuat medan listrik gelombang) aktual di udara bebas." },

  // PARAMETER & CROSS ISOLATION
  { cat: "parameter2", q: "Apa yang dimaksud dengan parameter HPBW (Half Power Beam Width)?", options: ["Jarak maksimum pancaran gelombang", "Lebar sudut main lobe pada titik saat daya turun setengahnya (-3 dB)", "Perbandingan daya depan dan daya belakang", "Lebar bandwidth frekuensi kerja"], answer: 1, explain: "HPBW mengukur seberapa sempit 'sorotan' beam antena. Diukur dari selisih sudut kiri dan kanan main lobe saat level sinyalnya turun 3 dB dari puncak maksimum." },
  { cat: "parameter2", q: "Jika nilai HPBW sebuah antena semakin kecil, hal ini berarti...", options: ["Antena semakin omnidirectional (menyebar)", "Antena semakin terarah / sorotan beam makin sempit", "Gain antena pasti memburuk", "Elemen antena rusak"], answer: 1, explain: "HPBW kecil berarti energi sangat terpusat di sudut (beam) yang sangat sempit, layaknya lampu sorot tajam. Ini menandakan antena sangat directional." },
  { cat: "parameter2", q: "Front-to-Back Ratio (FBR) merupakan perbandingan antara...", options: ["Lebar fisik dan panjang fisik antena", "Level sinyal arah depan (0°) dengan arah belakang (180°)", "Level pancaran maksimum dengan minimum di seluruh sudut", "Daya input dari generator dan daya output"], answer: 1, explain: "FBR mengukur kemampuan antena memfokuskan pancaran ke depan sekaligus menolak bocoran sinyal ke belakang. FBR = Level 0° - Level 180° (dalam data normalisasi)." },
  { cat: "parameter2", q: "Apa itu Sidelobe Attenuation?", options: ["Peredaman sinyal oleh kabel rusak", "Selisih level antara puncak main lobe dan puncak side lobe (pancaran samping)", "Peredaman gelombang oleh ruang bebas di udara", "Lebar sudut beam keseluruhan"], answer: 1, explain: "Sidelobe attenuation menunjukkan seberapa baik antena menekan pancaran liar ke arah samping. Semakin besar nilai peredamannya, makin bersih fokus pola antenanya." },
  { cat: "parameter2", q: "Dalam konteks Percobaan 2, Isolasi Silang (Cross Isolation) adalah...", options: ["Kondisi kabel yang bersilangan pendek", "Perbedaan level penerimaan antara polarisasi utama dengan polarisasi silangnya (H vs V)", "Jarak fisik antara pemancar dan penerima", "Gangguan interferensi dari stasiun radio lain"], answer: 1, explain: "Isolasi silang mengukur seberapa bagus antena menolak sinyal yang polarisasinya berbeda. Jika antena Horizontal menerima sinyal Vertikal, level yang diterima harusnya sangat kecil." },
  { cat: "parameter2", q: "Rumus matematis perhitungan Cross Isolation di jobsheet adalah...", options: ["EcI = E1 + E2", "EcI = E1 / E2", "EcI = E1 - E2", "EcI = E1 x E2"], answer: 2, explain: "EcI (Cross Isolation) = E1 - E2. Di mana E1 adalah level saat polarisasi selaras (utama) dan E2 adalah level saat polarisasi tidak selaras (silang). Satuannya dalam dB." },
  { cat: "parameter2", q: "Mengapa pola radiasi hasil praktikum tidak pernah 100% ideal sempurna seperti di buku teori?", options: ["Karena rumus teori fisika belum dikalibrasi", "Ada pantulan dinding ruangan, gangguan logam, rotator kurang presisi, dan toleransi alat", "Karena frekuensi 202 MHz sudah usang", "Disengaja oleh asisten lab"], answer: 1, explain: "Dunia nyata penuh kondisi non-ideal (noise). Gelombang RF bisa memantul di tembok/meja lab (multipath), rotator mungkin meleset 1-2 derajat, dan alat ukur analog punya batas toleransi akurasi." }
];

/* ---------- PLACEHOLDER untuk modul yang belum diisi ---------- */
function placeholderMateri(namaModul) {
  return [{
    id: "segera",
    title: "Konten Segera Hadir",
    html: `
      <p>Materi untuk <strong>${namaModul}</strong> belum diisi.</p>
      <p class="quote">Bagian ini sudah disiapkan strukturnya. Tinggal masukkan materi dan soal quiz-nya nanti, dan halaman ini akan langsung aktif.</p>
      <p>Cara mengisi: buka file <code>data.js</code>, lalu lengkapi array <code>materi</code> dan <code>quiz</code> pada modul ini mengikuti format Modul 1 (Antena Pemancar).</p>
    `
  }];
}

/* =========================================================
   DAFTAR MODUL
   ========================================================= */
const MODULES = [
  {
    id: "p1-pemancar",
    title: "Percobaan 1 — Antena Pemancar",
    subtitle: "Folded Dipole & Double Dipole • UHF 434 MHz",
    icon: "📡",
    theme: "blue",
    ready: true,
    materi: MATERI_P1_PEMANCAR,
    quiz: QUIZ_P1_PEMANCAR
  },
  {
    id: "p1-penerima",
    title: "Percobaan 1 — Antena Penerima",
    subtitle: "Co-pol, Cross-pol, Jarak, Probe & Yagi • UHF 434 MHz",
    icon: "📶",
    theme: "green",
    ready: true,
    materi: MATERI_P1_PENERIMA,
    quiz: QUIZ_P1_PENERIMA
  },
  {
    id: "bab3",
    title: "Diagram Polar & Pengukuran Penguatan",
    subtitle: "Pola Radiasi, Directional vs Bidirectional • UHF 434 MHz",
    icon: "📐",
    theme: "orange",
    ready: true,
    materi: MATERI_BAB3,
    quiz: QUIZ_BAB3
  },
  {
    id: "percobaan2",
    title: "Percobaan 2: Gain & Pola",
    subtitle: "Yagi, Folded Dipole, HPBW, Isolasi Silang • VHF 202 MHz",
    icon: "🧪",
    theme: "blue",
    ready: true,
    materi: MATERI_PERCOBAAN2,
    quiz: QUIZ_PERCOBAAN2
  }
];

/* Kategori quiz (label) */
const CATEGORIES = {
  all: "Semua Soal (acak)",
  dasar: "Dasar Praktikum",
  matching: "Matching & SWR",
  polarisasi: "Polarisasi",
  distribusi: "Distribusi Tegangan & Arus",
  definisi: "Definisi & Konsep",
  jarak: "Pengaruh Jarak",
  probe_yagi: "Probe & Elemen Yagi",
  teori: "Teori dB & Satuan",
  polar_dasar: "Dasar Diagram Polar",
  pola_radiasi: "Pola Radiasi & Data",
  definisi_polar: "Definisi Diagram Polar",
  penguasaan_polar: "Penguasaan & Analisis",
  dasar2: "Dasar Percobaan 2",
  gain_elemen: "Gain & Elemen Yagi",
  radiasi2: "Pola Radiasi (P2)",
  parameter2: "Parameter & Isolasi Silang"
};
