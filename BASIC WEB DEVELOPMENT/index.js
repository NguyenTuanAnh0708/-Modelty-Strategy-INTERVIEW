document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var color = document.getElementById('color').value;

    console.log(color)
    if (color == 'empty') {
        alert('please select color')
        return
    }
    var output = document.getElementById('output');
    output.innerHTML = `
        <h3>Submitted Values:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

    document.body.style.backgroundColor = color;
});