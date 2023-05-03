function ageInDays(){
    var birthYear = prompt("Enter your birth year");
    var ageToDays = (2023 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var text = document.createTextNode('Your age in days is ' + ageToDays);
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(text);
    document.getElementById('result-div').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

function generateCat(){
    var cat = document.createElement('img');
    cat.src = "todoroki.jpeg";
    document.getElementById('img-div').appendChild(cat);
}