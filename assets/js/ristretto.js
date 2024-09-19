function toggleCard(card) {
  const cardBody = card.nextElementSibling;
  const icon = card.querySelector(".rotate-icon");
  const mainCardClass = "active";

  // Close all other cards
  const allCards = document.querySelectorAll(".card-body");
  allCards.forEach((otherCard) => {
    if (otherCard !== cardBody) {
      otherCard.style.maxHeight = null;
      otherCard.previousElementSibling
        .querySelector(".rotate-icon")
        .classList.remove("rotate");
      otherCard.previousElementSibling.classList.remove(mainCardClass);
    }
  });

  // Toggle the clicked card
  if (cardBody.style.maxHeight === "0px" || cardBody.style.maxHeight === "") {
    cardBody.style.maxHeight = `${cardBody.scrollHeight}px`;
    icon.classList.add("rotate");
    card.classList.add(mainCardClass);
  } else {
    cardBody.style.maxHeight = null;
    icon.classList.remove("rotate");
    card.classList.remove(mainCardClass);
  }
}
