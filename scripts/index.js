const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileCloseBtn = editProfileModal.querySelector(".popup__close");
const editProfileTypeName = editProfileModal.querySelector(
  ".popup__input_type_name",
);
const editProfileTypeDescription = editProfileModal.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = editProfileModal.querySelector("#edit-profile-form");
const newCardBtn = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const newCardCloseBtn = newCardModal.querySelector(".popup__close");
const newCardTitle = newCardModal.querySelector(".popup__input_type_card-name");
const newCardLink = newCardModal.querySelector(".popup__input_type_url");
const newCardForm = newCardModal.querySelector("#new-card-form");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardContainer = document.querySelector(".cards__list");
const imgModal = document.querySelector("#image-popup");
const imgModalCloseBtn = imgModal.querySelector(".popup__close");
const imgModalImg = imgModal.querySelector(".popup__image");
const imgModalCaption = imgModal.querySelector(".popup__caption");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function getCardElement(
  name = "Sin título",
  link = "../images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);

  const imageElement = cardElement.querySelector(".card__image");
  imageElement.src = link;
  imageElement.alt = name;

  const nameElement = cardElement.querySelector(".card__title");

  nameElement.textContent = name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", (evt) =>
    evt.target.classList.toggle("card__like-button_is-active"),
  );
  const removeCardBtn = cardElement.querySelector(".card__delete-button");
  removeCardBtn.addEventListener("click", () => cardElement.remove());

  imageElement.addEventListener("click", () => {
    imgModalCaption.textContent = name;
    imgModalImg.src = link;
    imgModalImg.alt = name;
    openModal(imgModal);
  });

  return cardElement;
}

function renderCard(name, link, container) {
  container.prepend(getCardElement(name, link));
}

initialCards.forEach((card) => renderCard(card.name, card.link, cardContainer));

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(newCardTitle.value, newCardLink.value, cardContainer);
  closeModal(newCardModal);
  evt.target.reset();
}

function fillProfileForm() {
  editProfileTypeName.value = profileTitle.textContent;
  editProfileTypeDescription.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = editProfileTypeName.value;
  profileDescription.textContent = editProfileTypeDescription.value;
  closeModal(editProfileModal);
}

newCardBtn.addEventListener("click", () => openModal(newCardModal));

newCardCloseBtn.addEventListener("click", () => closeModal(newCardModal));

newCardForm.addEventListener("submit", handleCardFormSubmit);

imgModalCloseBtn.addEventListener("click", () => closeModal(imgModal));

editProfileBtn.addEventListener("click", handleOpenEditModal);

editProfileCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal),
);

editForm.addEventListener("submit", handleProfileFormSubmit);
