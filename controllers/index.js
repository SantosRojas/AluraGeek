// Functions

function loadFile(id,file)  {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}


