/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction(id) {
    let idString = "myDropdown" + id;
    document.getElementById( idString ).classList.toggle("hide");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterFunction() {
    let input = document.getElementById('filterInput');
    let filter = input.value.toUpperCase();
    let items = document.getElementsByClassName('popup');

    for(i = 0 ; i < items.length ; i++) {
        let a = items[i];
        let txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
let btcValues = "";
let ethValues = "";
let xrpValues = "";
let url = "https://rest.coinapi.io/v1/exchangerate/BTC?invert=false";
let urlEth = "https://rest.coinapi.io/v1/exchangerate/ETH?invert=false";
let urlXrp = "https://rest.coinapi.io/v1/exchangerate/XRP?invert=false";
var xhr = new XMLHttpRequest();
var xhrEth = new XMLHttpRequest();
var xhrXrp = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("X-CoinAPI-Key", "F6009C1C-17FD-4290-B4DB-539FF98290B4");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let parsedData = JSON.parse(xhr.responseText);

        for(let i = 0 ; i < parsedData.rates.length ; i++) {
            if(parsedData.rates[i].asset_id_quote === 'USD'){
                btcValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'EUR'){
                btcValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'RON'){
                btcValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
        }
        document.getElementById('myDropdown1').innerHTML = btcValues;
        // console.log(btcValues);
    }};

xhr.send();


xhrEth.open("GET", urlEth);

xhrEth.setRequestHeader("X-CoinAPI-Key", "F6009C1C-17FD-4290-B4DB-539FF98290B4");

xhrEth.onreadystatechange = function () {
    if (xhrEth.readyState === 4) {
        let parsedData = JSON.parse(xhrEth.responseText);

        for(let i = 0 ; i < parsedData.rates.length ; i++) {
            if(parsedData.rates[i].asset_id_quote === 'USD'){
                ethValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'EUR'){
                ethValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'RON'){
                ethValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
        }
        document.getElementById('myDropdown2').innerHTML = ethValues;
        // console.log(ethValues);
    }};

xhrEth.send();

xhrXrp.open("GET", urlXrp);

xhrXrp.setRequestHeader("X-CoinAPI-Key", "F6009C1C-17FD-4290-B4DB-539FF98290B4");

xhrXrp.onreadystatechange = function () {
    if (xhrXrp.readyState === 4) {
        let parsedData = JSON.parse(xhrXrp.responseText);

        for(let i = 0 ; i < parsedData.rates.length ; i++) {
            if(parsedData.rates[i].asset_id_quote === 'USD'){
                xrpValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'EUR'){
                xrpValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
            if(parsedData.rates[i].asset_id_quote === 'RON'){
                xrpValues += parsedData.rates[i].asset_id_quote + ': ' + parsedData.rates[i].rate + '\n';
            }
        }
        document.getElementById('myDropdown3').innerHTML = xrpValues;
        // console.log(xrpValues);
    }};

xhrXrp.send();
