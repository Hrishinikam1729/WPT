console.log('Hey');

const fetchBtn = document.getElementById('backupbtn');

const xhr = new XMLHttpRequest();

console.log(xhr.readyState);

function buttonClickHandler() {
    console.log(xhr.readyState);

    xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1", true);
    console.log(xhr.readyState);

    xhr.onprogress = () => console.log('On progress');
    console.log(xhr.readyState);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    console.log(xhr.readyState);

    xhr.send(); // Moved this line inside the click handler
}

fetchBtn.addEventListener('click', buttonClickHandler);