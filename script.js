let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name Of Student');
    helloBtn.textContent ='Roll No.1' + name;
}