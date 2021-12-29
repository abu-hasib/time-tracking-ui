const daily = document.querySelector('ul > *:nth-child(1)');
const weekly = document.querySelector('ul > *:nth-child(2)');
const monthly = document.querySelector('ul > *:nth-child(3)');
const period = document.querySelectorAll('.card-content > *:nth-child(2) p > *:first-child');

const work = document.querySelector('#work');
const play = document.querySelector('#play');
const study = document.querySelector('#study');
const exercise = document.querySelector('#exercise');
const social = document.querySelector('#social');
const selfCare = document.querySelector('#self-care');

console.log('$$: ', period);

async function main() {
	const data = await fetch('./data.json')
		.then((response) => response.json())
		.catch((err) => console.log(err));

	daily.addEventListener('click', () => {
		// period.innerHTML = 'Yesterday';
		data.forEach((element) => replaceValues(element, 'daily'));
		document.querySelector('.active').classList.add('text-faint');
		document.querySelector('.active').classList.remove('active');
		daily.classList.add('active');
		// period.innerHTML = 'Yesterday';
		period.forEach((element) => (element.innerHTML = 'Yesterday'));
		// weekly.classList.add('text-faint');
	});
	weekly.addEventListener('click', () => {
		data.forEach((element) => replaceValues(element, 'weekly'));
		document.querySelector('.active').classList.add('text-faint');
		document.querySelector('.active').classList.remove('active');
		weekly.classList.add('active');
		period.forEach((element) => (element.innerHTML = 'Last Week'));
	});
	monthly.addEventListener('click', () => {
		data.forEach((element) => replaceValues(element, 'monthly'));
		document.querySelector('.active').classList.add('text-faint');
		document.querySelector('.active').classList.remove('active');
		monthly.classList.add('active');
		period.forEach((element) => (element.innerHTML = 'Last Month'));
	});
}

function getCurrent(element) {
	return element.children[0].children[1].children[0].children[0];
}

function getPrevious(element) {
	return element.children[0].children[1].children[1].children[1];
}

function fadeElement(element) {
	getCurrent(element).classList.add('fade-in');
	getPrevious(element).classList.add('fade-in');
	setTimeout(() => {
		getCurrent(element).classList.remove('fade-in');
		getPrevious(element).classList.remove('fade-in');
	}, 500);
}

function replaceValues(element, frequency) {
	if (element.title.toLowerCase() === 'work') {
		getCurrent(work).innerHTML = element.timeframes[frequency].current;
		getPrevious(work).innerHTML = element.timeframes[frequency].previous;
		fadeElement(work);
	}
	if (element.title.toLowerCase() === 'play') {
		getCurrent(play).innerHTML = element.timeframes[frequency].current;
		getPrevious(play).innerHTML = element.timeframes[frequency].previous;
		fadeElement(play);
	}
	if (element.title.toLowerCase() === 'study') {
		getCurrent(study).innerHTML = element.timeframes[frequency].current;
		getPrevious(study).innerHTML = element.timeframes[frequency].previous;
		fadeElement(study);
	}
	if (element.title.toLowerCase() === 'exercise') {
		getCurrent(exercise).innerHTML = element.timeframes[frequency].current;
		getPrevious(exercise).innerHTML = element.timeframes[frequency].previous;
		fadeElement(exercise);
	}
	if (element.title.toLowerCase() === 'social') {
		getCurrent(social).innerHTML = element.timeframes[frequency].current;
		getPrevious(social).innerHTML = element.timeframes[frequency].previous;
		fadeElement(social);
	}
	if (element.title.toLowerCase() === 'self care') {
		getCurrent(selfCare).innerHTML = element.timeframes[frequency].current;
		getPrevious(selfCare).innerHTML = element.timeframes[frequency].previous;
		fadeElement(selfCare);
	}
}

main();
