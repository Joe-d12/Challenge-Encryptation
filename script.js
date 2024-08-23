
document.addEventListener("DOMContentLoaded", function () {
    const btnEncriptar = document.querySelector(".btn-en");
    const btnDesencriptar = document.querySelector(".btn-des");
    const btnCopiar = document.querySelector(".btn");
    const textoInput = document.getElementById("texto-input");
    const txtMsg = document.querySelector(".txt-msg");
    const box4 = document.querySelector(".box-4 p");

    function encriptar(texto) {
        const codigo = {
            "a": "∆ai",
            "b": "β",
            "c": "©",
            "d": "đ",
            "e": "enter",
            "f": "ƒ",
            "g": "₲",
            "h": "ħ",
            "i": "imes",
            "j": "ĵ",
            "k": "₭",
            "l": "£",
            "m": "₥",
            "n": "ñ",
            "o": "ober",
            "p": "¶",
            "q": "Ω",
            "r": "®",
            "s": "§",
            "t": "†",
            "u": "ufat",
            "v": "√",
            "w": "ω",
            "x": "×",
            "y": "¥",
            "z": "ž"
        };
        return texto.replace(/[abcdefghijklmnopqrstuvwxyz]/g, letra => codigo[letra]);
    }
    
    function desencriptar(texto) {
        const codigo = {
            "∆ai": "a",
            "β": "b",
            "©": "c",
            "đ": "d",
            "enter": "e",
            "ƒ": "f",
            "₲": "g",
            "ħ": "h",
            "imes": "i",
            "ĵ": "j",
            "₭": "k",
            "£": "l",
            "₥": "m",
            "ñ": "n",
            "ober": "o",
            "¶": "p",
            "Ω": "q",
            "®": "r",
            "§": "s",
            "†": "t",
            "ufat": "u",
            "√": "v",
            "ω": "w",
            "×": "x",
            "¥": "y",
            "ž": "z"
        };
        return texto.replace(/∆ai|β|©|đ|enter|ƒ|₲|ħ|imes|ĵ|₭|£|₥|ñ|ober|¶|Ω|®|§|†|ufat|√|ω|×|¥|ž/g, simbolo => codigo[simbolo]);
    }
    btnEncriptar.addEventListener("click", function () {
        const texto = textoInput.value;
        if (texto === "") {
            txtMsg.textContent = "Ningun mensaje fue encontrado";
            box4.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        } else {
            const textoEncriptado = encriptar(texto);
            txtMsg.textContent = textoEncriptado;
            box4.textContent = "";
        }
    });

    btnDesencriptar.addEventListener("click", function () {
        const texto = textoInput.value;
        if (texto === "") {
            txtMsg.textContent = "Ningun mensaje fue encontrado";
            box4.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        } else {
            const textoDesencriptado = desencriptar(texto);
            txtMsg.textContent = textoDesencriptado;
            box4.textContent = "";
        }
    });


    btnCopiar.addEventListener("click", function () {
        const texto = txtMsg.textContent;
        navigator.clipboard.writeText(texto).then(function () {
            alert("Texto copiado exitosamente");
        });
    });
});
