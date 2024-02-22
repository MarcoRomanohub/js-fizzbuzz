const boxContainer = document.querySelector('.boxContainer');

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.innerHTML = `${i}`;
  box.classList.add('box');
  boxContainer.append(box);

  if(i % 3 === 0 && i % 5 === 0){
    box.innerHTML ='fizzbuzz';
    box.classList.add('fizzbuzz');
  }else if(i % 3 === 0){
    box.innerHTML ='fizz';
    box.classList.add('fizz');
  }else if(i % 5 === 0){
    box.innerHTML ='buzz';
    box.classList.add('buzz');
  }else{
    console.log(i);
  }

}