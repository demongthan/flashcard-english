const cardContainer = document.querySelector('.card__container');

console.log(wordData)

wordData.sort((a, b) => b.id - a.id).forEach(word => {
    const article = document.createElement('article');
    article.className = 'card__article';

    article.innerHTML = `
        <img src="${word.img}" alt="image" class="card__img">
        <div class="card__data">
            <span class="card__description">${word.translate}</span>
            <h2 class="card__title">${word.vocabulary}</h2>
            <div class="card__info">
                <p class="card__info__description">${word.transcription}</p>
                <div class="card__info__audio" id="${"AudioDiv"+word.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <audio id="${"Audio"+word.id}" src="${word.audio}"></audio>
                </div>
            </div>
            <a href="${word.url}" class="card__button" target="_blank">Read More</a>
        </div>
    `;

    cardContainer.appendChild(article);

    const audioDiv = document.getElementById('AudioDiv'+word.id);
    const audio = document.getElementById('Audio'+word.id);

    audioDiv.addEventListener('click', () => {
        audio.play();
    });
});