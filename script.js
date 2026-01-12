const eyes = document.querySelectorAll('.eye');
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeX;
    const dy = e.clientY - eyeY;
    const angle = Math.atan2(dy, dx);

    // Limit movement to within the eye
    const radius = 5; // max pupil movement (adjust based on eye size)
    pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
  });
});

// Toggle between login and signup
const toggleForm = document.getElementById('toggleForm');
const toggleLogin = document.getElementById('toggleLogin');
const loginContainer = document.querySelector('.form-container:not(.hidden)');
const signupContainer = document.getElementById('signupContainer');

toggleForm.addEventListener('click', () => {
  loginContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
});

toggleLogin.addEventListener('click', () => {
  signupContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
});
