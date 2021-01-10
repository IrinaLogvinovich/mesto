import '../pages/index.css';

import {profileTitle, profileDescription, openEditFormButton, 
  openCardFormButton, titleInputValue, descriptionInputValue, 
  initialCards, defaultFormConfig, editFormModalWindow, cardFormModalWindow} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';


function createCard (item) {
  const card = new Card(item, '.card-template', ()=> imagePopup.open(item));
  cardsList.addItem(card.getView());
}

//лайтбокс
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

//профайл
const user = new UserInfo({
  'profileName': profileTitle, 
  'profileDescription': profileDescription
});

const profilePopup = new PopupWithForm({
  'popupSelector': '.popup_type_edit', 
  'handleSubmitForm': (data) => {
    console.log(data);
      user.setUserInfo(data);
    }
});
profilePopup.setEventListeners();

openEditFormButton.addEventListener('click', () => {
  const currentValues = user.getUserInfo();
  titleInputValue.value = currentValues.name;
  descriptionInputValue.value = currentValues.description;
  profilePopup.open();
});

//добавление карточек
const cardPopup = new PopupWithForm({ 
  'popupSelector': '.popup_type_new-card', 
  'handleSubmitForm': (item) => { 
      createCard(item);
    } 
}); 
cardPopup.setEventListeners(); 

openCardFormButton.addEventListener('click', () => {
  cardPopup.open();
});

//рендер карточек
const cardsList = new Section({ 
  'items': initialCards,
  'renderer': (item) => {
    createCard(item);
}}, '.places__list');
cardsList.rendererItems();

//валидация
const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

