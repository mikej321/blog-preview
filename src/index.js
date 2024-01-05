import './styles/style.sass';
import Hero from './assets/assets/images/illustration-article.svg';
import Avatar from './assets/assets/images/image-avatar.webp';

window.onload = createCard();

function createHeroImg() {
    const header = document.querySelector('header');

    const heroImg = new Image();
    heroImg.src = Hero;
    heroImg.alt = 'The hero image for the card';
    heroImg.classList.add('heroImg');
    header.append(heroImg);
}

function createMainInfo() {
    const main = document.querySelector('main');

    const sectionTag = document.createElement('section');
    sectionTag.classList.add('sectionTag');
    sectionTag.textContent = 'Learning';
    main.append(sectionTag);

    const publishDate = document.createElement('section');
    publishDate.classList.add('publish_date');
    publishDate.textContent = 'Published 21 Dec 2023';
    main.append(publishDate);

    const title = document.createElement('section');
    title.classList.add('title');
    title.textContent = 'HTML & CSS foundations';
    main.append(title);

    const description = document.createElement('section');
    description.classList.add('description');
    description.textContent = 'These languages are the backbone of every website, defining structure, content, and presentation.'

    main.append(description);
    
    const avatarInfo = document.createElement('section');
    avatarInfo.classList.add('avatarInfo');

    const avatarPic = new Image();
    avatarPic.src = Avatar;
    avatarPic.alt = 'The user\'s avatar pic';
    avatarPic.classList.add('avatarPic');
    avatarInfo.append(avatarPic);

    const avatarName = document.createElement('p');
    avatarName.classList.add('avatarName');
    avatarName.textContent = 'Greg Hooper';
    avatarInfo.append(avatarName);

    main.append(avatarInfo);
}

function createCard() {
    createHeroImg();
    createMainInfo();
}
