const fs = require("fs");
const path = require("path");

const DEFAULT_SETTINGS = Object.freeze({
  sensitivity: 3.2,
  theme: "blue",
  edgeMode: "bottom"
});

const VALID_THEMES = new Set(["blue", "purple", "warm"]);
const VALID_EDGE_MODES = new Set(["top", "bottom", "both"]);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function sanitizeSettings(input = {}) {
  const sensitivity = Number.isFinite(input.sensitivity)
    ? clamp(input.sensitivity, 0.5, 8)
    : DEFAULT_SETTINGS.sensitivity;

  const theme = VALID_THEMES.has(input.theme)
    ? input.theme
    : DEFAULT_SETTINGS.theme;

  const edgeMode = VALID_EDGE_MODES.has(input.edgeMode)
    ? input.edgeMode
    : DEFAULT_SETTINGS.edgeMode;

  return {
    sensitivity,
    theme,
    edgeMode
  };
}

function createSettingsStore(userDataPath) {
  const settingsPath = path.join(userDataPath, "settings.json");

  function load() {
    try {
      if (!fs.existsSync(settingsPath)) {
        return { ...DEFAULT_SETTINGS };
      }

      const fileContent = fs.readFileSync(settingsPath, "utf8");
      const parsed = JSON.parse(fileContent);
      return sanitizeSettings(parsed);
    } catch (_error) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function save(settings) {
    const cleanSettings = sanitizeSettings(settings);
    fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
    fs.writeFileSync(settingsPath, JSON.stringify(cleanSettings, null, 2));
    return cleanSettings;
  }

  return {
    load,
    save,
    path: settingsPath
  };
}

module.exports = {
  DEFAULT_SETTINGS,
  createSettingsStore
};
