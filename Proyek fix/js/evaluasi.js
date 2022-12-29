//inisiasi soal dalam quiz
const questions = [
    {
        question: "Berapakah nilai T pada iterasi ke-1 dari persamaan x^3 + 4x^2 - 10 = 0 pada selang akar [1 , 2] ...  ",
        pilihA: "0.5",
        pilihB: "1.5",
        pilihC: "1",
        pilihD: "2",
        correctOption: "pilihB"
    },

    {
        question: "Berapakah nilai f(T) pada iterasi ke-1 dari persamaan x^3 + 4x^2 - 10 = 0 pada selang akar [1 , 2] ...  ",
        pilihA: "1.5",
        pilihB: "2.375",
        pilihC: "-5",
        pilihD: "14",
        correctOption: "pilihB"
    },

    {
        question: "Berapakah nilai f(a) pada iterasi ke-1 dari persamaan x^3 + 4x^2 - 10 = 0 pada selang akar [-1 , 1] ...  ",
        pilihA: "-8.875",
        pilihB: "-5",
        pilihC: "-7",
        pilihD: "12",
        correctOption: "pilihC"
    },

    {
        question: "Berapakah nilai f(b) pada iterasi ke-1 dari persamaan x^3 + 4x^2 - 10 = 0 pada selang akar [-1 , 0] ...  ",
        pilihA: "-10",
        pilihB: "-5",
        pilihC: "-9.125",
        pilihD: "-0.5",
        correctOption: "pilihA"
    },

    {
        question: "Pernyataan di bawah ini yang salah terkait algoritma dari metode bagi dua adalah ... ",
        pilihA: "Jika (f(a).f(T) < 0, maka a = T",
        pilihB: "Jika f(a).f(T) > 0, maka a = T",
        pilihC: "Jika f(a).f(T) = 0, maka akar = T",
        pilihD: "Jika (f(a).f(T) < 0, maka b = T",
        correctOption: "pilihA"
    }

]


let shuffledQuestions = [] //array kosong untuk menampung pertanyaan yang dipilih secara acak

function handleQuestions() { 
    //berfungsi untuk mengacak dan mendorong 5 pertanyaan ke array shuffledQuestions
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function untuk soal selanjutnya
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.pilihA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.pilihB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.pilihC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.pilihD;

}

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //mendapat Pertanyaan saat ini
    const currentQuestionAnswer = currentQuestion.correctOption //mendapat jawaban Pertanyaan saat ini
    const options = document.getElementsByName("option"); //dapatkan semua elemen di dom dengan nama 'opsi' (dalam hal ini input radio)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //dapatkan input radio yang benar dengan jawaban yang benar
            correctOption = option.labels[0].id
        }
    })
   
    //memeriksa untuk memastikan input radio telah diperiksa atau opsi yang dipilih
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //memeriksa apakah tombol radio yang dicentang sama dengan jawaban
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //atur untuk menunda nomor pertanyaan sampai saat pertanyaan berikutnya dimuat
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //atur untuk menunda nomor pertanyaan sampai saat pertanyaan berikutnya dimuat
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//dipanggil ketika button selanjutnya dipanggil
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //menunda pertanyaan berikutnya yang ditampilkan sebentar
    setTimeout(() => {
        if (indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//setel latar belakang opsi kembali ke nol setelah menampilkan warna yang benar/salah
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// hapus centang semua tombol radio untuk pertanyaan berikutnya (dapat dilakukan dengan peta atau foreach loop juga)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// berfungsi ketika semua pertanyaan dijawab
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // cek kondisi untuk komentar pemain dan warna komentar
    if (playerScore <= 2) {
        remark = "Jangan Menyerah, Teruslah Berlatih."
        remarkColor = "red"
    }
    else if (playerScore >= 3 && playerScore < 4) {
        remark = "Sudah Bagus, Tingkatkan Lagi"
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Luar Biasa Bagus"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    //data untuk ditampilkan ke papan skor
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}