document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const key = '1778a5ae17-8647c7588f-sgrfvt'
    const covert = 'from=usd&to=vnd'
    const fullApi = `https://api.fastforex.io/fetch-one?api_key=${key}&${covert}`
    const output = document.getElementById('output');
    const moneyUsd = document.getElementById('money').value;
    const convertBtn = document.getElementById('convert-btn');
    var options = {
        style: 'currency',
        currency: 'VND'
    };
    convertBtn.disabled = true;
    convertBtn.innerText = 'Converting.....'
    fetch(fullApi)
        .then(response => response.json())
        .then(data => {

            let vnd = data.result.VND * Number(moneyUsd)
            vnd = new Intl.NumberFormat('vi-VN', options).format(vnd)
            output.innerHTML = `
            <strong>${moneyUsd}</strong> USD -> <strong>${vnd}</strong>
            `;
        }).catch(() => {
            alert('Covert fail')
        }).finally(() => {
            convertBtn.disabled = false;
            convertBtn.innerText = 'Covert to Vnd'
        })

});