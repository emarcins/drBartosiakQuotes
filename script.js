const doctor = document.querySelector('.doctor-foto');
const mind = document.querySelector('.mind');

const mindArr = ['Uwertura inercji perymetru kosmosu w USA.'];

const shakePhoto = () => {
    doctor.classList.add('shake-animation');
    setTimeout(generate, 1000);
};

const generate = () => {
   generateMind();
   doctor.classList.remove('shake-animation');
};

const generateMind = () => {
    randomMind = mindArr[Math.floor(Math.random() * mindArr.length)];
    mind.innerHTML = `"${randomMind}"`
};

doctor.addEventListener('click', shakePhoto);

