// htmlStyling
let outputBox = document.getElementById('output').style.visibility = 'hidden';

// Declaring Variables 
let input = document.getElementById('input');
input.disable = true;

let gramBox = document.getElementById("gramOutput");
let kilogramBox = document.getElementById("kgoutput");
let QuintalBox = document.getElementById("Quintalsoutput");
let tonsBox = document.getElementById("tonsoutput");

document.getElementById('select').addEventListener('input', (e) => {
    input.value = "";
    gramBox.innerHTML = "";
    kilogramBox.innerHTML = "";
    QuintalBox.innerHTML = "";
    tonsBox.innerHTML = "";

    // for gram unit 
    if (e.target.value === "Gram") {
        input.disable = false;
        input.setAttribute("placeholder", "Enter Gram Unit");

        // conversions if unit will be Gram 
        input.addEventListener('input', (e) => {
            let gramResult = e.target.value;

            // visibility 
            document.getElementById("output").style.visibility = 'visible'
            gramBox.style.color = "#000";
            gramBox.style.fontSize = "25px";

            // calculation
            gramBox.innerHTML = "Impossible Conversion ";
            kilogramBox.innerHTML = gramResult / 1000 + " kg";
            QuintalBox.innerHTML = gramResult / 100000 + " Quintal";
            tonsBox.innerHTML = gramResult / 1000000 + " Tons";
        });

        // for kilogram unit 
    } else if (e.target.value === "Kilogram") {
        input.disable = false;
        input.setAttribute("placeholder", "Enter Kilogram Unit");

        // conversions if unit will be Gram 
        input.addEventListener("input", (e) => {
            let kiloGramResult = e.target.value;

            // visibility 
            document.getElementById("output").style.visibility = 'visible'
            kilogramBox.style.color = "#000";
            kilogramBox.style.fontSize = "25px";

            // calculation
            gramBox.innerHTML = kiloGramResult * 1000 + " gram";
            kilogramBox.innerHTML = "Impossible Conversion ";
            QuintalBox.innerHTML = kiloGramResult / 100 + " Quintal";
            tonsBox.innerHTML = kiloGramResult / 1000 + " Tons";
        });

        // for Quintal unit 
    } else if (e.target.value === "Quintal") {
        input.disable = false;
        input.setAttribute("placeholder", "Enter Quintal Unit");

        // conversions if unit will be Gram 
        input.addEventListener('input', (e) => {
            let quintalResult = e.target.value;

            // visibility 
            document.getElementById("output").style.visibility = 'visible'
            QuintalBox.style.color = "#000";
            QuintalBox.style.fontSize = "25px";

            // calculation
            gramBox.innerHTML = quintalResult * 100000 + " gram";
            QuintalBox.innerHTML = "Impossible Conversion ";
            kilogramBox.innerHTML = quintalResult * 100 + " kg";
            tonsBox.innerHTML = quintalResult / 10 + " Tons";
        });
        // for Tons unit 
    } else if (e.target.value === "Tons") {
        input.disable = false;
        input.setAttribute("placeholder", "Enter Tons unit");

        // conversions if unit will be Gram 
        input.addEventListener('input', (e) => {
            let tonsResult = e.target.value;

            // visibility 
            document.getElementById("output").style.visibility = 'visible'
            tonsBox.style.color = "#000";
            tonsBox.style.fontSize = "25px";

            // calculation
            gramBox.innerHTML = tonsResult * 1000000 + " gram";
            kilogramBox.innerHTML = tonsResult * 1000 + " kg";
            QuintalBox.innerHTML = tonsResult * 10 + " Quintal";
            tonsBox.innerHTML = "Impossible Conversion ";
        });

        //if nothing selected
    } else {
        input.setAttribute("placeholder", "");
        input.disable = true;
        document.getElementById("output").style.visibility = 'hidden'
    }
});