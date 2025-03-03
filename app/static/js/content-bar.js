function headerClick(block) {
  // Используем block напрямую
  const title0 = block.querySelector(".title-0");
  const title1 = block.querySelector(".title-1");
  const title2 = block.querySelector(".tile-2");

  // Пример логики сохранения
  title0.textContent = block.querySelector(".input-title-0").value;
  title1.textContent = block.querySelector(".input-title-1").value;
  title2.textContent = block.querySelector(".input-title-2").value;

  // Скрываем панель
  block.querySelector(".header-bar").classList.add("hidden");
}

function infoClick(block) {
  block.querySelector(".info-h2").textContent =
    block.querySelector(".input-info-0").value;
  block.querySelector(".info-p").textContent =
    block.querySelector(".input-info-1").value;

  block.querySelector(".info-bar").classList.add("hidden");
}

function prospectsClick(block) {
  // Обновление текстовых блоков
  block.querySelector(".prospects-h2").textContent =
    block.querySelector(".input-prospects-0").value;
  block.querySelector(".prospects-p").textContent =
    block.querySelector(".input-prospects-1").value;

  block.querySelector(".prospects-bar").classList.add("hidden");
}

function buttonClick(block) {
  // Обновление текстовых блоков
  block.querySelector(".really-button").textContent =
    block.querySelector(".input-button-0").value;
  block.querySelector(".button-a").href =
    block.querySelector(".input-button-1").value;

  block.querySelector(".button-bar").classList.add("hidden");
}

function contactClick(block) {
  // Обновление текстовых блоков
  block.querySelector(".tel").textContent =
    block.querySelector(".input-contact-0").value;
  block.querySelector(".email").textContent =
    block.querySelector(".input-contact-1").value;
  block.querySelector(".addres").textContent =
    block.querySelector(".input-contact-2").value;
  block.querySelector(".vk").textContent =
    block.querySelector(".input-contact-3").value;
  block.querySelector(".vk").href =
    block.querySelector(".input-contact-3").value;
  block.querySelector(".telegram").textContent =
    block.querySelector(".input-contact-4").value;
  block.querySelector(".telegram").href =
    block.querySelector(".input-contact-4").value;
  block.querySelector(".whatsap").textContent =
    block.querySelector(".input-contact-5").value;
  block.querySelector(".whatsap").href =
    block.querySelector(".input-contact-5").value;

  block.querySelector(".contact-bar").classList.add("hidden");
}

export { headerClick, infoClick, prospectsClick, buttonClick, contactClick };
