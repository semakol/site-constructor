import {
  headerSettingClick,
  infoSettingClick,
  prospectsSettingClick,
  buttonSettingClick,
  contactSettingClick,
} from "./setting-bar.js";
import {
  headerClick,
  infoClick,
  prospectsClick,
  buttonClick,
  contactClick,
} from "./content-bar.js";

const NEW_BLOCK = document.querySelector(".new-block");
const BLOCK_BAR = document.querySelector(".block-bar");
const SAVE_BAR = document.querySelector(".save-page");
const exit = document.querySelector(".exit");
// Конфигурация для каждого типа блока
const blockConfigs = {
  header: {
    fields: [
      { selector: ".input-setting-header-0", key: "originalHeaderFontSize0" },
      { selector: ".input-setting-header-1", key: "originalHeaderFontSize1" },
      { selector: ".input-setting-header-2", key: "originalHeaderFontSize2" },
      { selector: ".header-color-0", key: "originalHeaderFontColor0" },
      { selector: ".header-color-1", key: "originalHeaderFontColor1" },
      { selector: ".header-color-2", key: "originalHeaderFontColor2" },
      { selector: ".header-border-color", key: "originalHeaderBorderColor" },
      { selector: ".head-color", key: "originalHeaderBackgroundColor" },
    ],
    panels: [".header-bar", ".setting-header-bar"],
    handlers: {
      setting: ".header-setting",
      content: ".header-content",
    },
  },
  info: {
    fields: [
      { selector: ".input-setting-info-0", key: "originalInfoFontSize0" },
      { selector: ".input-setting-info-1", key: "originalInfoFontSize1" },
      { selector: ".info-color-0", key: "originalInfoFontColor0" },
      { selector: ".info-color-1", key: "originalInfoFontColor1" },
      { selector: ".info-border-color", key: "originalInfoBorderColor" },
      { selector: ".info-h2-border-color", key: "originalInfoH2BorderColor" },
      { selector: ".info-color", key: "originalInfoBackgroundColor" },
    ],
    panels: [".info-bar", ".setting-info-bar"],
    handlers: {
      setting: ".info-setting",
      content: ".info-content",
    },
  },
  prospects: {
    fields: [
      {
        selector: ".input-setting-prospects-0",
        key: "originalProspectsFontSize0",
      },
      {
        selector: ".input-setting-prospects-1",
        key: "originalProspectsFontSize1",
      },
      { selector: ".prospects-color-0", key: "originalProspectsFontColor0" },
      { selector: ".prospects-color-1", key: "originalProspectsFontColor1" },
      {
        selector: ".prospects-border-color",
        key: "originalProspectsBorderColor",
      },
      {
        selector: ".prospects-h2-border-color",
        key: "originalProspectsH2BorderColor",
      },
      { selector: ".prospects-color", key: "originalProspectsBackgroundColor" },
    ],
    panels: [".prospects-bar", ".setting-prospects-bar"],
    handlers: {
      setting: ".prospects-setting",
      content: ".prospects-content",
    },
  },
  button: {
    fields: [
      { selector: ".input-setting-button-0", key: "originalButtonFontSize" },
      { selector: ".button-color-0", key: "originalButtonFontColor" },
      { selector: ".button-border-color", key: "originalButtonBorderColor" },
      {
        selector: ".button-background-color",
        key: "originalButtonBackgroundColor",
      },
    ],
    panels: [".button-bar", ".setting-button-bar"],
    handlers: {
      setting: ".button-setting",
      content: ".button-content",
    },
  },
  contact: {
    fields: [
      { selector: ".input-setting-contact-0", key: "originalContactFontSize0" },
      { selector: ".input-setting-contact-1", key: "originalContactFontSize1" },
      { selector: ".input-setting-contact-2", key: "originalContactFontSize2" },
      { selector: ".contact-color-0", key: "originalContactFontColor0" },
      { selector: ".contact-color-1", key: "originalContactFontColor1" },
      { selector: ".contact-color-2", key: "originalContactFontColor2" },
      { selector: ".contact-border-color", key: "originalContactBorderColor" },
      {
        selector: ".contact-h2-border-color",
        key: "originalContactH2BorderColor",
      },
      { selector: ".contact-color", key: "originalContactBackgroundColor" },
    ],
    panels: [".contact-bar", ".setting-contact-bar"],
    handlers: {
      setting: ".contact-setting",
      content: ".contact-content",
    },
  },
};

NEW_BLOCK.addEventListener("click", () => {
  BLOCK_BAR.classList.remove("hidden");
  NEW_BLOCK.classList.add("hidden");
  SAVE_BAR.classList.add("hidden");
});

exit.addEventListener("click", () => {
  NEW_BLOCK.classList.remove("hidden");
  SAVE_BAR.classList.remove("hidden");
  BLOCK_BAR.classList.add("hidden");
});

const page = document.querySelector(".page");
let blockIdCounter = 0;

function createElement(template) {
  if (!template || !template.hasAttribute("data-template")) return;

  const block = template.cloneNode(true);
  block.removeAttribute("data-template");
  block.setAttribute("id", `block-${blockIdCounter++}`);

  // Сохраняем исходные значения
  const originalStyle = window.getComputedStyle(block);
  block.dataset.originalBackground = originalStyle.backgroundImage;

  const type = template.getAttribute("data-template");
  const config = blockConfigs[type];

  // Сохраняем значения полей
  config.fields.forEach(({ selector, key }) => {
    const input = block.querySelector(selector);
    if (input) block.dataset[key] = input.value;
  });

  // Обработчики для кнопок
  block
    .querySelector(".trash")
    ?.addEventListener("click", () => block.remove());
  block
    .querySelector(config.handlers.setting)
    ?.addEventListener("click", () => {
      block.querySelector(`.setting-${type}-bar`)?.classList.remove("hidden");
    });
  block
    .querySelector(config.handlers.content)
    ?.addEventListener("click", () => {
      block.querySelector(`.${type}-bar`)?.classList.remove("hidden");
    });

  const settings = {
    header: headerSettingClick,
    info: infoSettingClick,
    prospects: prospectsSettingClick,
    button: buttonSettingClick,
    contact: contactSettingClick,
  };

  const clicks = {
    header: headerClick,
    info: infoClick,
    prospects: prospectsClick,
    button: buttonClick,
    contact: contactClick,
  };

  const saveHeaderButton = block.querySelector(`.save-${type}`); // ← Класс зависит от типа

  if (saveHeaderButton && !saveHeaderButton.hasAttribute("data-handled")) {
    saveHeaderButton.setAttribute("data-handled", "true");
    saveHeaderButton.addEventListener("click", () => {
      console.log(block);
      settings[type](block); // ← Вызываем обработчик настроек
    });
  }

  const saveButton = block.querySelector(".save");
  if (saveButton && !saveButton.hasAttribute("data-handled")) {
    saveButton.setAttribute("data-handled", "true");
    saveButton.addEventListener("click", () => {
      clicks[type](block);
    });
  }

  // Скрываем панели
  config.panels.forEach((panel) =>
    block.querySelector(panel)?.classList.add("hidden")
  );
  block.classList.remove("hidden");
  page.appendChild(block);
}

// Привязка кнопок к шаблонам
document.querySelectorAll(".template-button").forEach((button) => {
  button.addEventListener("click", () => {
    const templateType = button.dataset.templateType;
    const template = document.querySelector(
      `.${templateType}[data-template="${templateType}"]`
    );
    createElement(template);
  });
});
