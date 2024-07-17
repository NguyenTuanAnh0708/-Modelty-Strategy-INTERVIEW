document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;

    console.log(color)
    if (color == 'empty') {
        alert('please select color')
        return
    }
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Submitted Values:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

    document.body.style.backgroundColor = color;
});