// Create function to select elements
const selectElement = (element) => document.querySelector(element);
// Call slectElement function then values into variables
const header = selectElement('header');
const mainContent = selectElement('main');
// Click event hamburger menu to trigger the .active state
selectElement('.hamburger').addEventListener('click', () => {
  header.classList.toggle('active');
  mainContent.classList.toggle('active');
});


// Close sidebar when clicking outside of it
window.onclick = (event) => {
  if (event.target.matches('.active')) {
    if (header.classList.contains('active')) {
      header.classList.remove('active');
      mainContent.classList.remove('active');
    }
  }
};