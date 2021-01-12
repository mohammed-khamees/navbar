// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//solution1
// navToggle.addEventListener('click', () => {
// 	if (links.classList.contains('show-links')) {
// 		links.classList.remove('show-links');
// 	} else {
// 		links.classList.add('show-links');
//     }
// });

//solution2
navToggle.addEventListener('click', () => {
	links.classList.toggle('show-links');
});
