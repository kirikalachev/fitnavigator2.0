const filter = document.querySelector('.filter-window');
const closeBtn = document.querySelector('.filter-close-btn .bx-x'); 
const keywords = document.querySelectorAll('.keyword');
const background = document.querySelector('.filter-background');

function openFilter() {
    filter.classList.add('opened');
    background.classList.add('opened');
}

closeBtn.addEventListener('click', () => {
    filter.classList.remove('opened');
    background.classList.remove('opened');
});

background.addEventListener('click', () => {
    filter.classList.remove('opened');
    background.classList.remove('opened');
});

keywords.forEach(keyword => keyword.addEventListener('click', () => {
    keyword.classList.toggle('selected');
    filterExercises();
}));

const exercises = document.querySelectorAll('.excercise');


function filterExercises() {
    const selectedKeywordsWithData = Array.from(keywords)
        .filter(keyword => keyword.classList.contains('selected'))
        .map(keyword => keyword.getAttribute('data-exercise'));

    exercises.forEach(exercise => {
        const exerciseKeyword = exercise.getAttribute('data-exercise');
        if (selectedKeywordsWithData.includes(exerciseKeyword)) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    const anyVisible = Array.from(exercises).some(exercise => exercise.style.display === 'block');
    noResults.style.display = anyVisible ? 'none' : 'block';

    // Показване на всички упражнения, ако няма избрани филтри
    if (selectedKeywordsWithData.length === 0) {
        exercises.forEach(exercise => {
            exercise.style.display = 'block';
        });
        noResults.style.display = 'none';
    }
}
