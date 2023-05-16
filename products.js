
//Minute B

var btn = document.getElementById("no");
btn.disabled = true;
function Add(){
    var count = document.getElementById('item');
    var inc = count.innerHTML;
    var btn = document.getElementById("no");
    var price = 42;

    ++inc;
    console.log(inc);
    document.getElementById('item').innerHTML = inc;

    if(inc > 0){
        btn.disabled = false;
    }
    price = price*inc;
    document.getElementById("price").innerHTML = "Price: " + price + " PHP";

}
function Minus(){
    var count = document.getElementById('item');
    var inc = count.innerHTML;
    var btn = document.getElementById('no');
    var price = 42;

    --inc;
    console.log(inc);
    document.getElementById('item').innerHTML = inc;

    price = price*inc;
    document.getElementById("price").innerHTML = "Price: " + price + " PHP";

    if(inc == 1){
        btn.disabled = true;
    }
}

//Cheese B

var btnC = document.getElementById("noC");
btnC.disabled = true;

function AddC(){
    var count = document.getElementById('itemC');
    var inc = count.innerHTML;
    var btnC = document.getElementById("noC");
    var priceC = 52;

    ++inc;
    console.log(inc);
    document.getElementById('itemC').innerHTML = inc;

    if(inc > 0){
        btnC.disabled = false;
    }
    priceC = priceC*inc;
    document.getElementById("priceC").innerHTML = "Price: " + priceC + " PHP";

}
function MinusC(){
    var count = document.getElementById('itemC');
    var inc = count.innerHTML;
    var btnC = document.getElementById('noC');
    var priceC = 52;

    --inc;
    console.log(inc);
    document.getElementById('itemC').innerHTML = inc;

    priceC = priceC*inc;
    document.getElementById("priceC").innerHTML = "Price: " + priceC + " PHP";

    if(inc == 1){
        btnC.disabled = true;
    }
}

//Double Minute B

var btnDM = document.getElementById("noDM");
btnDM.disabled = true;

function AddDM(){
    var count = document.getElementById('itemDM');
    var inc = count.innerHTML;
    var btnDM = document.getElementById("noDM");
    var priceDM = 63;

    ++inc;
    console.log(inc);
    document.getElementById('itemDM').innerHTML = inc;

    if(inc > 0){
        btnDM.disabled = false;
    }
    priceDM = priceDM*inc;
    document.getElementById("priceDM").innerHTML = "Price: " + priceDM + " PHP";

}
function MinusDM(){
    var count = document.getElementById('itemDM');
    var inc = count.innerHTML;
    var btnDM = document.getElementById('noDM');
    var priceDM = 63;

    --inc;
    console.log(inc);
    document.getElementById('itemDM').innerHTML = inc;

    priceDM = priceDM*inc;
    document.getElementById("priceDM").innerHTML = "Price: " + priceDM + " PHP";

    if(inc == 1){
        btnDM.disabled = true;
    }
}

// Double Cheesy B

var btnDC = document.getElementById("noDC");
btnDC.disabled = true;

function AddDC(){
    var count = document.getElementById('itemDC');
    var inc = count.innerHTML;
    var btnDC = document.getElementById("noDC");
    var priceDC = 79;

    ++inc;
    console.log(inc);
    document.getElementById('itemDC').innerHTML = inc;

    if(inc > 0){
        btnDC.disabled = false;
    }
    priceDC = priceDC*inc;
    document.getElementById("priceDC").innerHTML = "Price: " + priceDC + " PHP";

}
function MinusDC(){
    var count = document.getElementById('itemDC');
    var inc = count.innerHTML;
    var btnDC = document.getElementById('noDC');
    var priceDC = 79;

    --inc;
    console.log(inc);
    document.getElementById('itemDC').innerHTML = inc;

    priceDC = priceDC*inc;
    document.getElementById("priceDC").innerHTML = "Price: " + priceDC + " PHP";

    if(inc == 1){
        btnDC.disabled = true;
    }
}

//Chicken Time

var btnCT = document.getElementById("noCT");
btnCT.disabled = true;

function AddCT(){
    var count = document.getElementById('itemCT');
    var inc = count.innerHTML;
    var btnCT = document.getElementById("noCT");
    var priceCT = 50;

    ++inc;
    console.log(inc);
    document.getElementById('itemCT').innerHTML = inc;

    if(inc > 0){
        btnCT.disabled = false;
    }
    priceCT = priceCT*inc;
    document.getElementById("priceCT").innerHTML = "Price: " + priceCT + " PHP";

}
function MinusCT(){
    var count = document.getElementById('itemCT');
    var inc = count.innerHTML;
    var btnCT = document.getElementById('noCT');
    var priceCT = 50;

    --inc;
    console.log(inc);
    document.getElementById('itemCT').innerHTML = inc;

    priceCT = priceCT*inc;
    document.getElementById("priceCT").innerHTML = "Price: " + priceCT + " PHP";

    if(inc == 1){
        btnCT.disabled = true;
    }
}

// Double Chicken Time

var btnDCT = document.getElementById("noDCT");
btnDCT.disabled = true;

function AddDCT(){
    var count = document.getElementById('itemDCT');
    var inc = count.innerHTML;
    var btnDCT = document.getElementById("noDCT");
    var priceDCT = 69;

    ++inc;
    console.log(inc);
    document.getElementById('itemDCT').innerHTML = inc;

    if(inc > 0){
        btnDCT.disabled = false;
    }
    priceDCT = priceDCT*inc;
    document.getElementById("priceDCT").innerHTML = "Price: " + priceDCT + " PHP";

}
function MinusDCT(){
    var count = document.getElementById('itemDCT');
    var inc = count.innerHTML;
    var btnDCT = document.getElementById('noDCT');
    var priceDCT = 69;

    --inc;
    console.log(inc);
    document.getElementById('itemDCT').innerHTML = inc;

    priceDCT = priceDCT*inc;
    document.getElementById("priceDCT").innerHTML = "Price: " + priceDCT + " PHP";

    if(inc == 1){
        btnDCT.disabled = true;
    }
}

//Cheesy Dog

var btnCD = document.getElementById("noCD");
btnCD.disabled = true;

function AddCD(){
    var count = document.getElementById('itemCD');
    var inc = count.innerHTML;
    var btnCD = document.getElementById("noCD");
    var priceCD = 50;

    ++inc;
    console.log(inc);
    document.getElementById('itemCD').innerHTML = inc;

    if(inc > 0){
        btnCD.disabled = false;
    }
    priceCD = priceCD*inc;
    document.getElementById("priceCD").innerHTML = "Price: " + priceCD + " PHP";

}
function MinusCD(){
    var count = document.getElementById('itemCD');
    var inc = count.innerHTML;
    var btnCD = document.getElementById('noCD');
    var priceCD = 50;

    --inc;
    console.log(inc);
    document.getElementById('itemCD').innerHTML = inc;

    priceCD = priceCD*inc;
    document.getElementById("priceCD").innerHTML = "Price: " + priceCD + " PHP";

    if(inc == 1){
        btnCD.disabled = true;
    }
}

//Chili Con Carne Cheese Franks

var btnCCC = document.getElementById("noCCC");
btnCCC.disabled = true;

function AddCCC(){
    var count = document.getElementById('itemCCC');
    var inc = count.innerHTML;
    var btnCCC = document.getElementById("noCCC");
    var priceCCC = 94;

    ++inc;
    console.log(inc);
    document.getElementById('itemCCC').innerHTML = inc;

    if(inc > 0){
        btnCCC.disabled = false;
    }
    priceCCC = priceCCC*inc;
    document.getElementById("priceCCC").innerHTML = "Price: " + priceCCC + " PHP";

}
function MinusCCC(){
    var count = document.getElementById('itemCCC');
    var inc = count.innerHTML;
    var btnCCC = document.getElementById('noCCC');
    var priceCCC = 94;

    --inc;
    console.log(inc);
    document.getElementById('itemCCC').innerHTML = inc;

    priceCCC = priceCCC*inc;
    document.getElementById("priceCCC").innerHTML = "Price: " + priceCCC + " PHP";

    if(inc == 1){
        btnCCC.disabled = true;
    }
}

//French Onion Franks

var btnFF = document.getElementById("noFF");
btnFF.disabled = true;

function AddFF(){
    var count = document.getElementById('itemFF');
    var inc = count.innerHTML;
    var btnFF = document.getElementById("noFF");
    var priceFF = 92;

    ++inc;
    console.log(inc);
    document.getElementById('itemFF').innerHTML = inc;

    if(inc > 0){
        btnFF.disabled = false;
    }
    priceFF = priceFF*inc;
    document.getElementById("priceFF").innerHTML = "Price: " + priceFF + " PHP";

}
function MinusFF(){
    var count = document.getElementById('itemFF');
    var inc = count.innerHTML;
    var btnFF = document.getElementById('noFF');
    var priceFF = 92;

    --inc;
    console.log(inc);
    document.getElementById('itemFF').innerHTML = inc;

    priceFF = priceFF*inc;
    document.getElementById("priceFF").innerHTML = "Price: " + priceFF + " PHP";

    if(inc == 1){
        btnFF.disabled = true;
    }
}

//Krazy MT

var btnMT = document.getElementById("noMT");
btnMT.disabled = true;

function AddMT(){
    var count = document.getElementById('itemMT');
    var inc = count.innerHTML;
    var btnMT = document.getElementById("noMT");
    var priceMT = 28;

    ++inc;
    console.log(inc);
    document.getElementById('itemMT').innerHTML = inc;

    if(inc > 0){
        btnMT.disabled = false;
    }
    priceMT = priceMT*inc;
    document.getElementById("priceMT").innerHTML = "Price: " + priceMT + " PHP";

}
function MinusMT(){
    var count = document.getElementById('itemMT');
    var inc = count.innerHTML;
    var btnMT = document.getElementById('noMT');
    var priceMT = 28;

    --inc;
    console.log(inc);
    document.getElementById('itemMT').innerHTML = inc;

    priceMT = priceMT*inc;
    document.getElementById("priceMT").innerHTML = "Price: " + priceMT + " PHP";

    if(inc == 1){
        btnMT.disabled = true;
    }
}

//Calamantea

var btnCTea = document.getElementById("noCTea");
btnCTea.disabled = true;

function AddCTea(){
    var count = document.getElementById('itemCTea');
    var inc = count.innerHTML;
    var btnCTea = document.getElementById("noCTea");
    var priceCTea = 24;

    ++inc;
    console.log(inc);
    document.getElementById('itemCTea').innerHTML = inc;

    if(inc > 0){
        btnCTea.disabled = false;
    }
    priceCTea = priceCTea*inc;
    document.getElementById("priceCTea").innerHTML = "Price: " + priceCTea + " PHP";

}
function MinusCTea(){
    var count = document.getElementById('itemCTea');
    var inc = count.innerHTML;
    var btnCTea = document.getElementById('noCTea');
    var priceCTea = 24;

    --inc;
    console.log(inc);
    document.getElementById('itemCTea').innerHTML = inc;

    priceCTea = priceCTea*inc;
    document.getElementById("priceCTea").innerHTML = "Price: " + priceCTea + " PHP";

    if(inc == 1){
        btnCTea.disabled = true;
    }
}

//Hot Choco

var btnHC = document.getElementById("noHC");
btnHC.disabled = true;

function AddHC(){
    var count = document.getElementById('itemHC');
    var inc = count.innerHTML;
    var btnHC = document.getElementById("noHC");
    var priceHC = 13;

    ++inc;
    console.log(inc);
    document.getElementById('itemHC').innerHTML = inc;

    if(inc > 0){
        btnHC.disabled = false;
    }
    priceHC = priceHC*inc;
    document.getElementById("priceHC").innerHTML = "Price: " + priceHC + " PHP";

}
function MinusHC(){
    var count = document.getElementById('itemHC');
    var inc = count.innerHTML;
    var btnHC = document.getElementById('noHC');
    var priceHC = 13;

    --inc;
    console.log(inc);
    document.getElementById('itemHC').innerHTML = inc;

    priceHC = priceHC*inc;
    document.getElementById("priceHC").innerHTML = "Price: " + priceHC + " PHP";

    if(inc == 1){
        btnHC.disabled = true;
    }
}

// Hot Coffee

var btnHCF = document.getElementById("noHCF");
btnHCF.disabled = true;

function AddHCF(){
    var count = document.getElementById('itemHCF');
    var inc = count.innerHTML;
    var btnHCF = document.getElementById("noHCF");
    var priceHCF = 13;

    ++inc;
    console.log(inc);
    document.getElementById('itemHCF').innerHTML = inc;

    if(inc > 0){
        btnHCF.disabled = false;
    }
    priceHCF = priceHCF*inc;
    document.getElementById("priceHCF").innerHTML = "Price: " + priceHCF + " PHP";

}
function MinusHCF(){
    var count = document.getElementById('itemHCF');
    var inc = count.innerHTML;
    var btnHCF = document.getElementById('noHCF');
    var priceHCF = 13;

    --inc;
    console.log(inc);
    document.getElementById('itemHCF').innerHTML = inc;

    priceHCF = priceHCF*inc;
    document.getElementById("priceHCF").innerHTML = "Price: " + priceHCF + " PHP";

    if(inc == 1){
        btnHCF.disabled = true;
    }
}

// Bacon Cheese Burger

var btnBCB = document.getElementById("noBCB");
btnBCB.disabled = true;

function AddBCB(){
    var count = document.getElementById('itemBCB');
    var inc = count.innerHTML;
    var btnBCB = document.getElementById("noBCB");
    var priceBCB = 96;

    ++inc;
    console.log(inc);
    document.getElementById('itemBCB').innerHTML = inc;

    if(inc > 0){
        btnBCB.disabled = false;
    }
    priceBCB = priceBCB*inc;
    document.getElementById("priceBCB").innerHTML = "Price: " + priceBCB + " PHP";

}
function MinusBCB(){
    var count = document.getElementById('itemBCB');
    var inc = count.innerHTML;
    var btnBCB = document.getElementById('noBCB');
    var priceBCB = 96;

    --inc;
    console.log(inc);
    document.getElementById('itemBCB').innerHTML = inc;

    priceBCB = priceBCB*inc;
    document.getElementById("priceBCB").innerHTML = "Price: " + priceBCB + " PHP";

    if(inc == 1){
        btnBCB.disabled = true;
    }
}

//Black Pepper Burger

var btnBPB = document.getElementById("noBPB");
btnBPB.disabled = true;

function AddBPB(){
    var count = document.getElementById('itemBPB');
    var inc = count.innerHTML;
    var btnBPB = document.getElementById("noBPB");
    var priceBPB = 89;

    ++inc;
    console.log(inc);
    document.getElementById('itemBPB').innerHTML = inc;

    if(inc > 0){
        btnBPB.disabled = false;
    }
    priceBPB = priceBPB*inc;
    document.getElementById("priceBPB").innerHTML = "Price: " + priceBPB + " PHP";

}
function MinusBPB(){
    var count = document.getElementById('itemBPB');
    var inc = count.innerHTML;
    var btnBPB = document.getElementById('noBPB');
    var priceBPB = 89;

    --inc;
    console.log(inc);
    document.getElementById('itemBPB').innerHTML = inc;

    priceBPB = priceBPB*inc;
    document.getElementById("priceBPB").innerHTML = "Price: " + priceBPB + " PHP";

    if(inc == 1){
        btnBPB.disabled = true;
    }
}

//Veggie Chicken Burger

var btnVC = document.getElementById("noVC");
btnVC.disabled = true;

function AddVC(){
    var count = document.getElementById('itemVC');
    var inc = count.innerHTML;
    var btnVC = document.getElementById("noVC");
    var priceVC = 86;

    ++inc;
    console.log(inc);
    document.getElementById('itemVC').innerHTML = inc;

    if(inc > 0){
        btnVC.disabled = false;
    }
    priceVC = priceVC*inc;
    document.getElementById("priceVC").innerHTML = "Price: " + priceVC + " PHP";

}
function MinusVC(){
    var count = document.getElementById('itemVC');
    var inc = count.innerHTML;
    var btnVC = document.getElementById('noVC');
    var priceVC = 86;

    --inc;
    console.log(inc);
    document.getElementById('itemVC').innerHTML = inc;

    priceVC = priceVC*inc;
    document.getElementById("priceVC").innerHTML = "Price: " + priceVC + " PHP";

    if(inc == 1){
        btnVC.disabled = true;
    }
}