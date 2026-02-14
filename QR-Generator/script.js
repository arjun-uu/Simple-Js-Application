
let imgBox = document.getElementById("imgBox")
let qrImg = document.getElementById("qr-img")
let qrText = document.getElementById("qr-text")

function GenerateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
}