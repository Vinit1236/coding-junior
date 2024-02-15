const translations = {
    'en': {
        'courseName': 'Course Name',
        'nomCours': 'Nom du Cours',
        'contentForSubsection': 'Content for Subsection',
        'videoPlayerFallback': 'Your browser does not support the video tag.',
        'audioPlayerFallback': 'Your browser does not support the audio tag.'
    },
    'fr': {
        'courseName': 'Nom du Cours',
        'nomCours': 'Nom du Cours',
        'contentForSubsection': 'Contenu de la sous-section',
        'videoPlayerFallback': 'Votre navigateur ne prend pas en charge la balise vidéo.',
        'audioPlayerFallback': 'Votre navigateur ne prend pas en charge la balise audio.'
    }
};

function loadSubsectionContent(subsection, content) {
    document.getElementById('subsection-content').innerHTML = `<h3>${translations[language]['contentForSubsection']} ${subsection}</h3><p>${content}</p>`;
}

function initializePlayer(mediaUrl, mediaType) {
    if (mediaType === 'video') {
        document.getElementById('player-container').innerHTML = `<video controls><source src="${mediaUrl}" type="video/mp4">${translations[language]['videoPlayerFallback']}</video>`;
    } else if (mediaType === 'audio') {
        document.getElementById('player-container').innerHTML = `<audio controls><source src="${mediaUrl}" type="audio/mpeg">${translations[language]['audioPlayerFallback']}</audio>`;
    }
}

let language = 'en'; // Default language

const sections = ['Section 1', 'Section 2', 'Section 3'];
const subsections = {
    'Section 1': [
        { name: 'Subsection 1.1', mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 1.1' },
        { name: 'Subsection 1.2', mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 1.2' },
        { name: 'Subsection 1.3', mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp3-file.mp3', mediaType: 'audio', content: 'Contenu pour la sous-section 1.3' }
    ],
    'Section 2': [
        { name: 'Subsection 2.1', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 2.1' },
        { name: 'Subsection 2.2', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 2.2' },
        { name: 'Subsection 2.3', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'audio', content: 'Contenu pour la sous-section 2.3' }
    ],
    'Section 3': [
        { name: 'Subsection 3.1', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 3.1' },
        { name: 'Subsection 3.2', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'video', content: 'Contenu pour la sous-section 3.2' },
        { name: 'Subsection 3.3', mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', mediaType: 'audio', content: 'Contenu pour la sous-section 3.3' }
    ]
};

function updateLanguage(selectedLanguage) {
    language = selectedLanguage;
    document.getElementById('course-name').textContent = translations[language]['courseName'];
    const sectionsList = document.getElementById('sections');
    sectionsList.innerHTML = '';
    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('list-group-item', 'list-group-item-action');
        sectionDiv.textContent = section;
        sectionDiv.addEventListener('click', () => {
            loadSubsectionContent(subsections[section][0].name, subsections[section][0].content);
            initializePlayer(subsections[section][0].mediaUrl, subsections[section][0].mediaType);
        });
        sectionsList.appendChild(sectionDiv);
    });
}

document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});

updateLanguage(language);
