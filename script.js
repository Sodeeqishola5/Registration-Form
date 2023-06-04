window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form');
  const previewDataContainer = document.getElementById('preview-data');
  const editButton = document.getElementById('edit-button');
  const submitButton = document.getElementById('submit-button');

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('date').value;
    const studentID = document.getElementById('studentID').value;
    const streetAddress = document.getElementById('streetAdd').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const zipCode = document.getElementById('ZIP').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const course = document.getElementById('course').value;
    const level = document.getElementById('level').value;
    const language = document.getElementById('language').value;
    const start = document.getElementById('start').value;
    const comments = document.getElementById('comments').value;

    // Generate the preview HTML
    const previewHTML = `
      <p><strong>Student Information:</strong></p>
      <p>Name: ${firstName} ${middleName} ${lastName}</p>
      <p>Date of Birth: ${dateOfBirth}</p>
      <p>Student ID: ${studentID}</p>
      <p><strong>Address:</strong></p>
      <p>Street Address: ${streetAddress}</p>
      <p>City: ${city}</p>
            <p>State / Province: ${state}</p>
      <p>Country: ${country}</p>
      <p>ZIP Code: ${zipCode}</p>
      <p><strong>Contact Information:</strong></p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      <p><strong>Courses:</strong></p>
      <p>Course: ${course}</p>
      <p>Level: ${level}</p>
      <p>Language: ${language}</p>
      <p>Start Date: ${start}</p>
      <p><strong>Comments:</strong></p>
      <p>${comments}</p>
    `;

    // Set the preview HTML to the previewDataContainer
    previewDataContainer.innerHTML = previewHTML;

    // Hide the form and display the preview
    form.style.display = 'none';
    previewDataContainer.style.display = 'block';
    editButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }

  // Function to handle form editing
  function handleEdit() {
    // Show the form and hide the preview
    form.style.display = 'block';
    previewDataContainer.style.display = 'none';
    editButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }

  // Event listeners for form submission and editing
  form.addEventListener('submit', handleSubmit);
  editButton.addEventListener('click', handleEdit);
});

