// Select all the eye elements (left-eye and right-eye)
const eyes = document.querySelectorAll('.eye');

// Select the main container (not used in this code, but could be useful)
const container = document.querySelector('.container');

// Add an event listener for mouse movement
// This will make the pupils follow the cursor
document.addEventListener('mousemove', (e) => {
  
  // Loop through each eye individually
  eyes.forEach(eye => {

    // Select the pupil inside the current eye
    const pupil = eye.querySelector('.pupil');

    // Get the position and size of the eye relative to the viewport
    // rect contains: top, left, bottom, right, width, height
    const rect = eye.getBoundingClientRect();

    // Calculate the center coordinates of the eye
    const eyeX = rect.left + rect.width / 2; // horizontal center
    const eyeY = rect.top + rect.height / 2; // vertical center

    // Calculate the distance from the eye center to the mouse cursor
    const dx = e.clientX - eyeX; // horizontal distance
    const dy = e.clientY - eyeY; // vertical distance

    // Calculate the angle from the eye center to the cursor
    // atan2 returns the angle in radians between -π and π
    const angle = Math.atan2(dy, dx);

    // Limit the pupil movement to stay inside the eye
    const radius = 5; // max pixels the pupil can move from the center

    // Move the pupil along the angle toward the cursor
    // Math.cos(angle) → horizontal movement
    // Math.sin(angle) → vertical movement
    pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
  });
});


// =========================
// Toggle between Login and Signup forms
// =========================

// Select the clickable elements that switch forms
const toggleForm = document.getElementById('toggleForm'); // "Signup" link
const toggleLogin = document.getElementById('toggleLogin'); // "Login" link

// Select the form containers
const loginContainer = document.querySelector('.form-container:not(.hidden)'); // currently visible login form
const signupContainer = document.getElementById('signupContainer'); // hidden signup form

// When the "Signup" text is clicked
toggleForm.addEventListener('click', () => {
  loginContainer.classList.add('hidden'); // hide login form
  signupContainer.classList.remove('hidden'); // show signup form
});

// When the "Login" text is clicked
toggleLogin.addEventListener('click', () => {
  signupContainer.classList.add('hidden'); // hide signup form
  loginContainer.classList.remove('hidden'); // show login form
});
