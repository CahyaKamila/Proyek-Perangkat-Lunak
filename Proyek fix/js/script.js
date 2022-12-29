const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName('sidebar')[0];

// Agar ketika menu di klik mengecil, ketika diklik lagi kembali lebar
menu.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
    console.log('ok');
})

function iterasi(){
    window.alert("Iterasi: iterasi dimulai dari 1 sampai dengan ditemukannya akar selang < toleransi.");
    window.alert("Rumus Excel = masukkan saja angkanya dari 1");
};

function a(){
    window.alert("Nilai a ini diambil dari selang yang sebelumnya sudah kita tentukan, selang akar yang kita ambilkan (2,3) jadi nilai a = 2.");
    window.alert("Rumus Excel = masukkan saja angkanya");
};

function b(){
    window.alert("Nilai b ini diambil dari selang yang sebelumnya sudah kita tentukan, selang akar yang kita ambilkan (2,3) jadi nilai b = 3.");
    window.alert("Rumus Excel = masukkan saja angkanya");
};

function fa(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai a, nilai a = 2. f(a) = 3 (sin(2) – 2 + 1 = 0) = 172.789.228");
    window.alert("Rumus Excel = 3*SIN(a)-(a)+1");
};

function fb(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai b, nilai b = 3. f(b) = 3 (sin(3) – 3 + 1 = 0) = -1.576.6399.76");
    window.alert("Rumus Excel = 3*SIN(b)-(b)+1");
};

function t(){
    window.alert("T = (b+a)/2 maka masukkan nilainya T = (3 + 2)/2 = 5/2 = 2.5 ");
    window.alert("Rumus Excel = (b+a)/2");
};

function ft(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai t, nilai t = 2.5. f(T) = 3 (sin(2.5) – 2.5 + 1 = 0) = 2.954.164");
    window.alert("Rumus Excel = 3*SIN(t)-(t)+1");
};

function faft(){
    window.alert("f(a)*f(T) = 172.789.228 * 2.954.164 = 51.044.777");
    window.alert("Rumus Excel = fa*ft");
};

function selangbaru(){
    window.alert("Untuk menghitung selang baru yakni mencari nilai mutlak dari T - B. Maka Selang Baru = |T-B| = |2.5-3| = 0.5");
    window.alert("Rumus Excel = ABS(T-b)");
};

function ket(){
    window.alert("Keterangan ini dibuat untuk memudahkan kapan iterasi akan berhenti setelah nilai selang baru < toleransi (0,001). ");
    alert("Cara membuat keterangan kita bisa menggunakan rumus IF, yaitu IF(fa*ft <= $toleransi$; 'Selang Akar','Bukan Selang Akar')");
};

function a2(){
    window.alert("Nilai a pada iterasi ke-2 dan berikutnya ditentukan dengan ketentuan: Jika fa*ft>0 maka nilai a yang diambil adalah nilai T pada iterasi 1, jika fa*ft<0 maka nilai a pada iterasi 2 mengambil nilai a pada iterasi 1");
    window.alert("Rumus Excel = IF(fa*ft>0,T,a)")
};

function b2(){
    window.alert("Nilai b pada iterasi ke-2 dan berikutnya ditentukan dengan ketentuan: Jika fa*ft<0 maka nilai b yang diambil adalah nilai T pada iterasi 1, jika fa*ft<0 maka nilai a pada iterasi 2 mengambil nilai a pada iterasi 1");
    window.alert("Rumus Excel = IF(fa*ft<0,T,b)")
};

function fa2(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai a, nilai a = 2. f(2.5) = 3 (sin(2.5) – 2.5 + 1 = 0) = 295.416.432");
    window.alert("Rumus Excel = 3*SIN(a)-(a)+1");
};

function fb2(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai b, nilai b = 3. f(b) = 3 (sin(3) – 3 + 1 = 0) = -1.576.6399.76");
    window.alert("Rumus Excel = 3*SIN(b)-(b)+1");
};

function t2(){
    window.alert("T = (b+a)/2 maka masukkan nilainya T = (3 + 2.5)/2 = 5.5/2 = 2.75 ");
    window.alert("Rumus Excel = (b+a)/2");
};

function ft2(){
    window.alert("f(x) = 3 (sin(x) – x + 1 = 0) maka ubah nilai x dengan nilai t, nilai t = 2.75. f(T) = 3 (sin(2.75) – 2.75 + 1 = 0) = -605.017");
    window.alert("Rumus Excel = 3*SIN(t)-(t)+1");
};

function faft2(){
    window.alert("f(a)*f(T) = 295.416.432 * -605.017 = -178.732");
    window.alert("Rumus Excel = fa*ft");
};

function selangbaru2(){
    window.alert("Untuk menghitung selang baru yakni mencari nilai mutlak dari T - B. Maka Selang Baru = |T-B| = |2.75-3| = 0.25");
    window.alert("Rumus Excel = ABS(T-b)");
};

