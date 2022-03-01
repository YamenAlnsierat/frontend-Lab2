'use strict'


const coursesList = document.querySelector('.our-courses');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const createHtml = (course) => {
    coursesList.insertAdjacentHTML(
        'beforeend',
        `<div class="course-window">
        <img src="${course.imageUrl}" width="350" />
        <p>${course.courseName} - ${course.teacher}</p>
        <p>${course.location} - ${course.startDate}</p>
        <p>${course.length} - ${course.averageGrade}</p>
        <buttom summary="${course.summary}" class="btn">Mer info</buttom>
    </div>`
    );
};


const loadButtom = () => {
  const buttoms = document.querySelectorAll('.course-window buttom');
  
  buttoms.forEach((buttom) => {
      let summary = buttom.getAttribute('summary');
      buttom.addEventListener('click', () => {
      openModal(summary);
  });
});
};


const findCourse = () => {
  const searchValue = searchField.value;
  if (searchValue === '') {
    coursesList.innerHTML = '';
    showCourse();
    return;
  }
  
  let found;
  found = courses.filter(
    (course) =>
    course.courseName.toUpperCase().startsWith(searchValue.toUpperCase())
    );
    
    coursesList.innerHTML = '';
    found.forEach((course) => createHtml(course));
};
  
const showCourse = () => {
  courses.forEach((course) => {     
  createHtml(course);
  });
  loadButtom();
};


const openModal = (e) => {
    const summary = modalDialog.querySelector('.modal-container');
    summary.innerHTML = `<p>${e}</p>
    <button class="btn"><a href="#">Ansök redan!</a></button>`
    modalDialog.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', quitModal);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) quitModal();
  }
});

window.onclick = function(e) {
  if (e.target === overlay) quitModal();
};

showCourse();
