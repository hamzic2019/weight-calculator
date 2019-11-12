document.getElementById('reklama').style.visibility = 'hidden';


document.addEventListener('input', (e) => {
    document.getElementById('reklama').style.visibility = 'visible';


    document.getElementById('kilogramDisplay').innerHTML = (e.target.value / 2.2046).toFixed(2);
    document.getElementById('gramsDisplay').innerHTML = ((e.target.value / 2.2046 )* 1000).toFixed(2);


});

