function toggleCard(card) {
    var cardBody = card.nextElementSibling;
    var icon = card.querySelector(".rotate-icon");

    var mainCardClass = "active";

    // Close all other cards
    var allCards = document.querySelectorAll(".card-body");
    allCards.forEach(function (otherCard) {
      if (otherCard !== cardBody) {
        otherCard.style.maxHeight = null;
        otherCard.previousElementSibling
          .querySelector(".rotate-icon")
          .classList.remove("rotate");

          otherCard.previousElementSibling.classList.remove(mainCardClass);
      }
    });
    if (
      cardBody.style.maxHeight === "0px" ||
      cardBody.style.maxHeight === ""
    ) {
      cardBody.style.maxHeight = cardBody.scrollHeight + "px";
      icon.classList.add("rotate");
      card.classList.add(mainCardClass);
    } else {
      cardBody.style.maxHeight = null;
      icon.classList.remove("rotate");
      card.classList.remove(mainCardClass);
    }
  }