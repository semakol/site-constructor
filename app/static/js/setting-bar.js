function headerSettingClick(block) {
  // Исходные значения
  const original = {
    background: block.dataset.originalBackground,
    fontSize: [
      block.dataset.originalFontSize0,
      block.dataset.originalFontSize1,
      block.dataset.originalFontSize2,
    ],
    fontColor: [
      block.dataset.originalFontColor0,
      block.dataset.originalFontColor1,
      block.dataset.originalFontColor2,
    ],
    borderColor: block.dataset.originalBorderColor,
    headColor: block.dataset.originalHeadColor,
  };

  // Новые значения
  const inputs = {
    fontSize: [
      ".input-setting-header-0",
      ".input-setting-header-1",
      ".input-setting-header-2",
    ],
    fontColor: [".header-color-0", ".header-color-1", ".header-color-2"],
    borderColor: ".header-border-color",
    headColor: ".head-color",
    fileInput: ".input-img",
  };

  // Находим заголовки
  const titles = [".title-0", ".title-1", ".tile-2"].map((selector) =>
    block.querySelector(selector)
  );

  // Логика фона
  const fileInput = block.querySelector(inputs.fileInput);
  const headColorInput = block.querySelector(inputs.headColor);

  if (fileInput?.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      block.style.backgroundImage = `url(${e.target.result})`;
      block.style.backgroundColor = "transparent";
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else if (headColorInput?.value !== original.headColor) {
    block.style.backgroundColor = headColorInput.value;
    block.style.backgroundImage = "none";
  } else {
    block.style.backgroundImage = original.background;
    block.style.backgroundColor = "transparent";
  }

  // Логика размера шрифта и цвета
  inputs.fontSize.forEach((selector, index) => {
    const input = block.querySelector(selector);
    const title = titles[index];
    if (input && title) {
      title.style.fontSize =
        input.value !== original.fontSize[index]
          ? `${input.value}px`
          : `${original.fontSize[index]}px`;
    }
  });

  inputs.fontColor.forEach((selector, index) => {
    const input = block.querySelector(selector);
    const title = titles[index];
    if (input && title) {
      title.style.color =
        input.value !== original.fontColor[index]
          ? input.value
          : original.fontColor[index];
    }
  });

  // Логика цвета границы
  const borderColorInput = block.querySelector(inputs.borderColor);
  const title1 = titles[1];
  if (borderColorInput && title1) {
    title1.style.borderColor =
      borderColorInput.value !== original.borderColor
        ? borderColorInput.value
        : original.borderColor;
  }

  // Скрываем панель настроек
  block.querySelector(".setting-header-bar")?.classList.add("hidden");
}

function infoSettingClick(block) {
  // Получаем значения из полей ввода
  const headingSizeInput = block.querySelector(".input-setting-info-0");
  const titleSizeInput = block.querySelector(".input-setting-info-1");
  const headingColorInput = block.querySelector(".info-color-0");
  const titleColorInput = block.querySelector(".info-color-1");
  const borderColorInput = block.querySelector(".info-border-color");
  const borderH2ColorInput = block.querySelector(".info-h2-border-color");
  const fileInput = block.querySelector(".input-img-info");
  const colorInput = block.querySelector(".info-color");

  // Проверяем, что элементы существуют
  if (
    !headingSizeInput ||
    !titleSizeInput ||
    !headingColorInput ||
    !titleColorInput
  ) {
    console.error("Input elements not found in info block.");
    return;
  }

  // Применяем настройки
  const titlesSection = block.querySelector(".info-div");
  if (titlesSection) {
    const h2 = titlesSection.querySelector("h2");
    const p = titlesSection.querySelector("p");

    if (h2) {
      h2.style.fontSize = headingSizeInput.value + "px";
      h2.style.color = headingColorInput.value;
      titlesSection.style.borderColor = borderColorInput.value;
      h2.style.setProperty("--c", borderH2ColorInput.value);
    }

    if (p) {
      p.style.fontSize = titleSizeInput.value + "px";
      p.style.color = titleColorInput.value;
    }
  }

  // Логика фона
  if (colorInput && fileInput) {
    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        block.style.backgroundImage = `url(${e.target.result})`;
        block.style.backgroundColor = "transparent";
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (colorInput.value) {
      block.style.backgroundColor = colorInput.value;
      block.style.backgroundImage = "none";
    }
  }

  // Скрываем панель настроек
  block.querySelector(".setting-info-bar")?.classList.add("hidden");
}

function prospectsSettingClick(block) {
  // Получаем значения из полей ввода
  const headingSizeInput = block.querySelector(".input-setting-prospects-0");
  const titleSizeInput = block.querySelector(".input-setting-prospects-1");
  const headingColorInput = block.querySelector(".prospects-color-0");
  const titleColorInput = block.querySelector(".prospects-color-1");
  const borderColorInput = block.querySelector(".prospects-border-color");
  const borderH2ColorInput = block.querySelector(".prospects-h2-border-color");
  const fileInput = block.querySelector(".input-img-prospects");
  const colorInput = block.querySelector(".prospects-color");

  // Проверяем, что элементы существуют
  if (
    !headingSizeInput ||
    !titleSizeInput ||
    !headingColorInput ||
    !titleColorInput
  ) {
    console.error("Input elements not found in prospects block.");
    return;
  }

  // Применяем настройки
  const titlesSection = block.querySelector(".prospects-div");
  if (titlesSection) {
    const h2 = titlesSection.querySelector("h2");
    const p = titlesSection.querySelector("p");

    if (h2) {
      h2.style.fontSize = headingSizeInput.value + "px";
      h2.style.color = headingColorInput.value;
      titlesSection.style.borderColor = borderColorInput.value;
      h2.style.setProperty("--c", borderH2ColorInput.value);
    }

    if (p) {
      p.style.fontSize = titleSizeInput.value + "px";
      p.style.color = titleColorInput.value;
    }
  }

  // Логика фона
  if (colorInput && fileInput) {
    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        block.style.backgroundImage = `url(${e.target.result})`;
        block.style.backgroundColor = "transparent";
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (colorInput.value) {
      block.style.backgroundColor = colorInput.value;
      block.style.backgroundImage = "none";
    }
  }

  // Скрываем панель настроек
  block.querySelector(".setting-prospects-bar")?.classList.add("hidden");
}

function buttonSettingClick(block) {
  // Получаем значения из полей ввода
  const fontSizeInput = block.querySelector(".input-setting-button-0");
  const fontColorInput = block.querySelector(".button-color-0");
  const bgColorInput = block.querySelector(".button-background-color");
  const borderColorInput = block.querySelector(".button-border-color");
  const fileInput = block.querySelector(".input-img-button");
  const colorInput = block.querySelector(".button-color");

  // Проверяем, что элементы существуют
  if (!fontSizeInput || !fontColorInput || !bgColorInput || !borderColorInput) {
    console.error("Input elements not found in button block.");
    return;
  }

  // Применяем настройки
  const buttonElement = block.querySelector(".button-a .really-button");
  if (buttonElement) {
    buttonElement.style.fontSize = fontSizeInput.value + "px";
    buttonElement.style.color = fontColorInput.value;
    buttonElement.style.backgroundColor = bgColorInput.value;
    buttonElement.style.borderColor = borderColorInput.value;
  }

  // Логика фона блока
  if (colorInput && fileInput) {
    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        block.style.backgroundImage = `url(${e.target.result})`;
        block.style.backgroundColor = "transparent";
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (colorInput.value) {
      block.style.backgroundColor = colorInput.value;
      block.style.backgroundImage = "none";
    }
  }

  // Скрываем панель настроек
  block.querySelector(".setting-button-bar")?.classList.add("hidden");
}

function contactSettingClick(block) {
  // Получаем значения из полей ввода
  const headingSizeInput = block.querySelector(".input-setting-contact-0");
  const subtitleSizeInput = block.querySelector(".input-setting-contact-1");
  const headingColorInput = block.querySelector(".contact-color-0");
  const subtitleColorInput = block.querySelector(".contact-color-1");
  const contactsColorInput = block.querySelector(".contact-color-2");
  const borderColorInput = block.querySelector(".contact-border-color");
  const borderH2ColorInput = block.querySelector(".contact-h2-border-color");
  const fileInput = block.querySelector(".input-img-contact");
  const colorInput = block.querySelector(".contact-color");
  const contactDiv = block.querySelector(".contact-data");

  // Проверяем, что элементы существуют
  if (
    !headingSizeInput ||
    !subtitleSizeInput ||
    !headingColorInput ||
    !subtitleColorInput ||
    !contactsColorInput
  ) {
    console.error("Input elements not found in contact block.");
    return;
  }

  // Применяем настройки
  const contactData = block.querySelector(".contact-data");
  if (contactData) {
    const h2 = contactData.querySelector("h2");
    const pList = contactData.querySelectorAll("p");
    const pOnInfo = contactData.querySelectorAll("p.on-info");

    if (h2) {
      h2.style.fontSize = headingSizeInput.value + "px";
      h2.style.color = headingColorInput.value;
      contactDiv.style.borderColor = borderColorInput.value;
      h2.style.setProperty("--c", borderH2ColorInput.value);
    }

    pList.forEach((p) => {
      p.style.fontSize = subtitleSizeInput.value + "px";
      p.style.color = contactsColorInput.value;
    });

    pOnInfo.forEach((p) => {
      p.style.color = subtitleColorInput.value;
    });
  }

  // Логика фона
  if (colorInput && fileInput) {
    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        block.style.backgroundImage = `url(${e.target.result})`;
        block.style.backgroundColor = "transparent";
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (colorInput.value) {
      block.style.backgroundColor = colorInput.value;
      block.style.backgroundImage = "none";
    }
  }

  // Скрываем панель настроек
  block.querySelector(".setting-contact-bar")?.classList.add("hidden");
}

export {
  headerSettingClick,
  infoSettingClick,
  prospectsSettingClick,
  buttonSettingClick,
  contactSettingClick,
};
