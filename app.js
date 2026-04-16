const googleFonts = [
  { id: "inter", family: "Inter", category: "sans", mood: ["neutral", "ui"], weights: [400, 600, 700] },
  { id: "roboto", family: "Roboto", category: "sans", mood: ["neutral", "ui"], weights: [400, 500, 700] },
  { id: "openSans", family: "Open Sans", category: "sans", mood: ["humanist", "ui"], weights: [400, 600, 700] },
  { id: "lato", family: "Lato", category: "sans", mood: ["humanist", "friendly"], weights: [400, 700, 900] },
  { id: "sourceSans3", family: "Source Sans 3", category: "sans", mood: ["humanist", "editorial"], weights: [400, 600, 700] },
  { id: "notoSans", family: "Noto Sans", category: "sans", mood: ["neutral", "global"], weights: [400, 600, 700] },
  { id: "manrope", family: "Manrope", category: "sans", mood: ["geometric", "ui"], weights: [400, 600, 700] },
  { id: "dmSans", family: "DM Sans", category: "sans", mood: ["geometric", "friendly"], weights: [400, 600, 700] },
  { id: "plusJakartaSans", family: "Plus Jakarta Sans", category: "sans", mood: ["geometric", "modern"], weights: [400, 600, 700] },
  { id: "ibmPlexSans", family: "IBM Plex Sans", category: "sans", mood: ["technical", "humanist"], weights: [400, 600, 700] },
  { id: "workSans", family: "Work Sans", category: "sans", mood: ["neutral", "product"], weights: [400, 600, 700] },
  { id: "rubik", family: "Rubik", category: "sans", mood: ["rounded", "friendly"], weights: [400, 600, 700] },
  { id: "nunitoSans", family: "Nunito Sans", category: "sans", mood: ["rounded", "friendly"], weights: [400, 600, 700] },
  { id: "montserrat", family: "Montserrat", category: "sans", mood: ["geometric", "display"], weights: [400, 600, 700] },
  { id: "poppins", family: "Poppins", category: "sans", mood: ["geometric", "friendly"], weights: [400, 600, 700] },
  { id: "raleway", family: "Raleway", category: "sans", mood: ["elegant", "display"], weights: [400, 600, 700] },
  { id: "oswald", family: "Oswald", category: "display", mood: ["condensed", "editorial"], weights: [400, 600, 700] },
  { id: "spaceGrotesk", family: "Space Grotesk", category: "display", mood: ["technical", "geometric"], weights: [400, 600, 700] },
  { id: "archivo", family: "Archivo", category: "display", mood: ["technical", "product"], weights: [400, 600, 700] },
  { id: "merriweather", family: "Merriweather", category: "serif", mood: ["editorial", "readable"], weights: [400, 700, 900] },
  { id: "lora", family: "Lora", category: "serif", mood: ["editorial", "elegant"], weights: [400, 600, 700] },
  { id: "sourceSerif4", family: "Source Serif 4", category: "serif", mood: ["editorial", "readable"], weights: [400, 600, 700] },
  { id: "libreBaskerville", family: "Libre Baskerville", category: "serif", mood: ["classic", "editorial"], weights: [400, 700] },
  { id: "bitter", family: "Bitter", category: "serif", mood: ["slab", "editorial"], weights: [400, 600, 700] },
  { id: "robotoSlab", family: "Roboto Slab", category: "serif", mood: ["slab", "technical"], weights: [400, 600, 700] },
  { id: "playfairDisplay", family: "Playfair Display", category: "display", mood: ["elegant", "editorial"], weights: [400, 600, 700] },
  { id: "cormorantGaramond", family: "Cormorant Garamond", category: "display", mood: ["classic", "elegant"], weights: [400, 600, 700] },
  { id: "josefinSans", family: "Josefin Sans", category: "display", mood: ["geometric", "elegant"], weights: [400, 600, 700] },
  { id: "firaCode", family: "Fira Code", category: "mono", mood: ["technical", "code"], weights: [400, 600, 700] },
  { id: "jetbrainsMono", family: "JetBrains Mono", category: "mono", mood: ["technical", "code"], weights: [400, 600, 700] }
];

const recommendedFontPairs = [
  ["merriweather", "inter"],
  ["lora", "manrope"],
  ["playfairDisplay", "sourceSans3"],
  ["spaceGrotesk", "ibmPlexSans"],
  ["montserrat", "openSans"],
  ["oswald", "notoSans"],
  ["cormorantGaramond", "lato"],
  ["sourceSerif4", "workSans"],
  ["robotoSlab", "roboto"],
  ["plusJakartaSans", "sourceSerif4"],
  ["josefinSans", "nunitoSans"],
  ["archivo", "dmSans"],
  ["bitter", "inter"],
  ["jetbrainsMono", "ibmPlexSans"]
];

const contrastLabels = ["Mjuk", "Normal", "Stark"];
const randomThemes = [
  ["#2563eb", "#f97316", "analogous"],
  ["#0f766e", "#db2777", "complementary"],
  ["#7c3aed", "#22c55e", "triadic"],
  ["#be123c", "#0891b2", "complementary"],
  ["#166534", "#ca8a04", "analogous"],
  ["#4338ca", "#ea580c", "triadic"],
  ["#0f172a", "#14b8a6", "analogous"],
  ["#9f1239", "#6366f1", "triadic"]
];

const elements = {
  form: document.querySelector("#themeForm"),
  themeName: document.querySelector("#themeName"),
  baseColor: document.querySelector("#baseColor"),
  baseColorText: document.querySelector("#baseColorText"),
  accentColor: document.querySelector("#accentColor"),
  accentColorText: document.querySelector("#accentColorText"),
  colorFormat: document.querySelector("#colorFormat"),
  headingFont: document.querySelector("#headingFont"),
  bodyFont: document.querySelector("#bodyFont"),
  fontMatch: document.querySelector("#fontMatch"),
  googleFontsLink: document.querySelector("#googleFontsLink"),
  harmonySpread: document.querySelector("#harmonySpread"),
  harmonySpreadValue: document.querySelector("#harmonySpreadValue"),
  harmonyMarkers: {
    primary: document.querySelector("#harmonyMarkerPrimary"),
    secondary: document.querySelector("#harmonyMarkerSecondary"),
    tertiary: document.querySelector("#harmonyMarkerTertiary"),
    accent: document.querySelector("#harmonyMarkerAccent")
  },
  radius: document.querySelector("#radius"),
  radiusValue: document.querySelector("#radiusValue"),
  contrast: document.querySelector("#contrast"),
  contrastValue: document.querySelector("#contrastValue"),
  includeComponents: document.querySelector("#includeComponents"),
  previewSurface: document.querySelector("#previewSurface"),
  previewInspector: document.querySelector("#previewInspector"),
  previewThemeName: document.querySelector("#previewThemeName"),
  contrastScore: document.querySelector("#contrastScore"),
  primaryHex: document.querySelector("#primaryHex"),
  swatches: document.querySelector("#swatches"),
  cssOutput: document.querySelector("#cssOutput"),
  cssSize: document.querySelector("#cssSize"),
  copyCss: document.querySelector("#copyCss"),
  copyCssFromPanel: document.querySelector("#copyCssFromPanel"),
  copyStatus: document.querySelector("#copyStatus"),
  componentsDialog: document.querySelector("#componentsDialog"),
  openComponentsInfo: document.querySelector("#openComponentsInfo"),
  closeComponentsInfo: document.querySelector("#closeComponentsInfo"),
  downloadCss: document.querySelector("#downloadCss"),
  randomizeTheme: document.querySelector("#randomizeTheme"),
  appThemeButtons: document.querySelectorAll("[data-app-theme-mode]"),
  modeButtons: document.querySelectorAll("[data-preview-mode]")
};

let previewMode = "light";
let latestCss = "";
let latestFontUrl = "";
let appThemeMode = localStorage.getItem("themebuilder-app-theme") || "auto";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setAppThemeMode(mode) {
  appThemeMode = ["auto", "light", "dark"].includes(mode) ? mode : "auto";
  if (appThemeMode === "auto") {
    document.documentElement.removeAttribute("data-app-theme");
    localStorage.removeItem("themebuilder-app-theme");
  } else {
    document.documentElement.dataset.appTheme = appThemeMode;
    localStorage.setItem("themebuilder-app-theme", appThemeMode);
  }

  elements.appThemeButtons.forEach((button) => {
    const isActive = button.dataset.appThemeMode === appThemeMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function wrapHue(hue) {
  return ((hue % 360) + 360) % 360;
}

function normalizeHex(value) {
  const trimmed = value.trim();
  const hex = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
    return hex.toLowerCase();
  }
  if (/^#[0-9a-fA-F]{3}$/.test(hex)) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toLowerCase();
  }
  return null;
}

function hexToRgb(hex) {
  const normalized = normalizeHex(hex) || "#000000";
  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16)
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((channel) => {
    return clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0");
  }).join("")}`;
}

function srgbChannelToLinear(value) {
  const channel = value / 255;
  return channel <= 0.04045
    ? channel / 12.92
    : Math.pow((channel + 0.055) / 1.055, 2.4);
}

function linearChannelToSrgb(value) {
  const channel = clamp(value, 0, 1);
  return channel <= 0.0031308
    ? channel * 12.92
    : 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
    if (max === red) {
      hue = 60 * (((green - blue) / delta) % 6);
    } else if (max === green) {
      hue = 60 * ((blue - red) / delta + 2);
    } else {
      hue = 60 * ((red - green) / delta + 4);
    }
  }

  return {
    h: wrapHue(hue),
    s: saturation * 100,
    l: lightness * 100
  };
}

function hslToRgb({ h, s, l }) {
  const hue = wrapHue(h);
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
  const match = lightness - chroma / 2;
  let rgb;

  if (hue < 60) {
    rgb = [chroma, x, 0];
  } else if (hue < 120) {
    rgb = [x, chroma, 0];
  } else if (hue < 180) {
    rgb = [0, chroma, x];
  } else if (hue < 240) {
    rgb = [0, x, chroma];
  } else if (hue < 300) {
    rgb = [x, 0, chroma];
  } else {
    rgb = [chroma, 0, x];
  }

  return {
    r: (rgb[0] + match) * 255,
    g: (rgb[1] + match) * 255,
    b: (rgb[2] + match) * 255
  };
}

function hslToHex(hsl) {
  return rgbToHex(hslToRgb(hsl));
}

function rgbToOklch({ r, g, b }) {
  const red = srgbChannelToLinear(r);
  const green = srgbChannelToLinear(g);
  const blue = srgbChannelToLinear(b);
  const l = Math.cbrt(0.4122214708 * red + 0.5363325363 * green + 0.0514459929 * blue);
  const m = Math.cbrt(0.2119034982 * red + 0.6806995451 * green + 0.1073969566 * blue);
  const s = Math.cbrt(0.0883024619 * red + 0.2817188376 * green + 0.6299787005 * blue);
  const okL = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const okA = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const okB = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  return {
    l: okL,
    c: Math.sqrt(okA * okA + okB * okB),
    h: wrapHue(Math.atan2(okB, okA) * 180 / Math.PI)
  };
}

function rgbToDisplayP3({ r, g, b }) {
  const red = srgbChannelToLinear(r);
  const green = srgbChannelToLinear(g);
  const blue = srgbChannelToLinear(b);
  const x = 0.4124564 * red + 0.3575761 * green + 0.1804375 * blue;
  const y = 0.2126729 * red + 0.7151522 * green + 0.072175 * blue;
  const z = 0.0193339 * red + 0.119192 * green + 0.9503041 * blue;

  return {
    r: linearChannelToSrgb(2.4934969119 * x - 0.9313836179 * y - 0.4027107845 * z),
    g: linearChannelToSrgb(-0.8294889696 * x + 1.7626640603 * y + 0.0236246858 * z),
    b: linearChannelToSrgb(0.0358458302 * x - 0.0761723893 * y + 0.956884524 * z)
  };
}

function round(value, precision = 3) {
  return Number(value.toFixed(precision));
}

function isHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function formatColor(hex, format) {
  const rgb = hexToRgb(hex);
  if (format === "rgb") {
    return `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
  }
  if (format === "hsl") {
    const hsl = rgbToHsl(rgb);
    return `hsl(${round(hsl.h, 1)} ${round(hsl.s, 1)}% ${round(hsl.l, 1)}%)`;
  }
  if (format === "oklch") {
    const oklch = rgbToOklch(rgb);
    return `oklch(${round(oklch.l * 100, 2)}% ${round(oklch.c, 4)} ${round(oklch.h, 2)})`;
  }
  if (format === "display-p3") {
    const p3 = rgbToDisplayP3(rgb);
    return `color(display-p3 ${round(p3.r, 4)} ${round(p3.g, 4)} ${round(p3.b, 4)})`;
  }
  return hex;
}

function formatColorLabel(hex, format) {
  return format === "all" ? `${hex} + fler` : formatColor(hex, format);
}

function allColorFormats(hex) {
  return {
    hex: formatColor(hex, "hex"),
    rgb: formatColor(hex, "rgb"),
    hsl: formatColor(hex, "hsl"),
    oklch: formatColor(hex, "oklch"),
    "display-p3": formatColor(hex, "display-p3")
  };
}

function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const values = [r, g, b].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  return (0.2126 * values[0]) + (0.7152 * values[1]) + (0.0722 * values[2]);
}

function contrastRatio(first, second) {
  const lighter = Math.max(relativeLuminance(first), relativeLuminance(second));
  const darker = Math.min(relativeLuminance(first), relativeLuminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

function readableTextColor(background) {
  return contrastRatio(background, "#ffffff") >= contrastRatio(background, "#101827")
    ? "#ffffff"
    : "#101827";
}

function isNeutralTone(hsl) {
  return hsl.s < 8;
}

function paletteSaturation(hsl) {
  if (isNeutralTone(hsl)) {
    return 0;
  }
  return clamp(hsl.s, 12, 92);
}

function surfaceSaturation(hsl, multiplier, minimum, maximum) {
  if (isNeutralTone(hsl)) {
    return 0;
  }
  return clamp(hsl.s * multiplier, minimum, maximum);
}

function accessibleTone(hsl, background, mode, contrastLevel) {
  const target = contrastLevel === 2 ? 5.2 : contrastLevel === 1 ? 4.6 : 3.9;
  const candidate = {
    ...hsl,
    s: paletteSaturation(hsl),
    l: mode === "light" ? clamp(hsl.l, 0, 58) : clamp(hsl.l, 42, 92)
  };
  const step = mode === "light" ? -2 : 2;
  const minLightness = mode === "light" ? 0 : 42;
  const maxLightness = mode === "light" ? 58 : 92;

  for (let index = 0; index < 32; index += 1) {
    const hex = hslToHex(candidate);
    if (contrastRatio(hex, background) >= target) {
      return hex;
    }
    const nextLightness = clamp(candidate.l + step, minLightness, maxLightness);
    if (nextLightness === candidate.l) {
      break;
    }
    candidate.l = nextLightness;
  }

  return hslToHex(candidate);
}

function tone(hsl, saturation, lightness, hueShift = 0) {
  return hslToHex({
    h: wrapHue(hsl.h + hueShift),
    s: clamp(saturation, 0, 100),
    l: clamp(lightness, 0, 100)
  });
}

function harmonyShifts(harmony, spread = 100) {
  const scale = spread / 100;
  if (harmony === "complementary") {
    return [0, 180 * scale, 180 + 30 * scale, 180 - 30 * scale];
  }
  if (harmony === "triadic") {
    return [0, 120 * scale, 240 * scale, 60 * scale];
  }
  return [0, -28 * scale, 28 * scale, 56 * scale];
}

function harmonyMarkerPosition(hsl, maxRadius = 34) {
  const angle = (wrapHue(hsl.h) - 90) * Math.PI / 180;
  const radius = clamp(hsl.s, 0, 100) / 100 * maxRadius;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius
  };
}

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    || "custom-theme";
}

function getFont(id) {
  return googleFonts.find((font) => font.id === id) || googleFonts[0];
}

function fontFallback(font) {
  if (font.category === "serif" || font.mood.includes("classic") || font.mood.includes("editorial")) {
    return "Georgia, \"Times New Roman\", serif";
  }
  if (font.category === "mono") {
    return "\"SFMono-Regular\", Consolas, \"Liberation Mono\", monospace";
  }
  return "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif";
}

function fontStack(font) {
  return `"${font.family}", ${fontFallback(font)}`;
}

function fontFamilyParam(font) {
  return `family=${font.family.replaceAll(" ", "+")}:wght@${font.weights.join(";")}`;
}

function googleFontsUrl(fonts) {
  const uniqueFonts = Array.from(new Map(fonts.map((font) => [font.id, font])).values());
  return `https://fonts.googleapis.com/css2?${uniqueFonts.map(fontFamilyParam).join("&")}&display=swap`;
}

function fontImport(fonts) {
  return `@import url('${googleFontsUrl(fonts)}');`;
}

function populateFontSelects() {
  const sortedFonts = [...googleFonts].sort((first, second) => first.family.localeCompare(second.family));
  const categoryLabel = {
    sans: "Sans",
    serif: "Serif",
    display: "Display",
    mono: "Mono"
  };

  sortedFonts.forEach((font) => {
    [elements.headingFont, elements.bodyFont].forEach((select) => {
      const option = document.createElement("option");
      option.value = font.id;
      option.textContent = `${font.family} (${categoryLabel[font.category]})`;
      select.append(option);
    });
  });

  elements.headingFont.value = "merriweather";
  elements.bodyFont.value = "inter";
}

function hasMood(font, mood) {
  return font.mood.includes(mood);
}

function sharedMoodScore(heading, body) {
  return heading.mood.filter((mood) => body.mood.includes(mood)).length * 6;
}

function evaluateFontPair(heading, body) {
  let score = 58;
  const notes = [];

  if (heading.id === body.id) {
    score += heading.category === "display" ? 0 : 20;
    notes.push("Samma familj ger ett konsekvent tema.");
  }

  if (body.category === "display") {
    score -= 34;
    notes.push("Brödtexten blir lätt svagare med displaytypsnitt.");
  }

  if (body.category === "mono") {
    score -= 16;
    notes.push("Monospace som brödtext passar bäst i tekniska gränssnitt.");
  }

  if (heading.category === "serif" && body.category === "sans") {
    score += 22;
    notes.push("Serifrubrik mot sans brödtext ger tydlig hierarki.");
  }

  if (heading.category === "display" && body.category === "sans") {
    score += 24;
    notes.push("Karaktär i rubrikerna balanseras av läsbar brödtext.");
  }

  if (heading.category === "sans" && body.category === "serif") {
    score += 8;
    notes.push("Sansrubrik och seriftext fungerar, men känns mer redaktionellt.");
  }

  if (heading.category === body.category && heading.id !== body.id) {
    score += heading.category === "sans" ? 6 : -8;
  }

  if (hasMood(heading, "elegant") && hasMood(body, "geometric")) {
    score -= 8;
  }

  if (hasMood(heading, "technical") && (hasMood(body, "ui") || hasMood(body, "technical"))) {
    score += 10;
  }

  if (hasMood(heading, "editorial") && (hasMood(body, "humanist") || hasMood(body, "neutral"))) {
    score += 10;
  }

  score += sharedMoodScore(heading, body);
  score = clamp(score, 0, 100);

  if (score >= 76) {
    return {
      level: "good",
      title: "Passar bra",
      detail: notes[0] || "Typsnitten har bra kontrast och liknande ton."
    };
  }

  if (score >= 56) {
    return {
      level: "ok",
      title: "Fungerar",
      detail: notes[0] || "Kombinationen fungerar, men kontrollera längre texter."
    };
  }

  return {
    level: "bad",
    title: "Svag matchning",
    detail: notes[0] || "Välj ett lugnare brödtexttypsnitt eller tydligare rubriktypsnitt."
  };
}

function updateFontMatch(match) {
  elements.fontMatch.classList.remove("good", "ok", "bad");
  elements.fontMatch.classList.add(match.level);
  elements.fontMatch.querySelector("strong").textContent = match.title;
  elements.fontMatch.querySelector("small").textContent = match.detail;
}

function updateGoogleFontLink(fonts) {
  const url = googleFontsUrl(fonts);
  if (latestFontUrl !== url) {
    elements.googleFontsLink.href = url;
    latestFontUrl = url;
  }
}

function getState() {
  const selectedHarmony = document.querySelector("input[name='harmony']:checked");
  const headingFont = getFont(elements.headingFont.value);
  const bodyFont = getFont(elements.bodyFont.value);

  return {
    name: slugify(elements.themeName.value),
    baseColor: normalizeHex(elements.baseColor.value) || "#2563eb",
    accentColor: normalizeHex(elements.accentColor.value) || "#f97316",
    harmony: selectedHarmony ? selectedHarmony.value : "analogous",
    harmonySpread: Number(elements.harmonySpread.value),
    colorFormat: elements.colorFormat.value,
    headingFont,
    bodyFont,
    fonts: {
      heading: fontStack(headingFont),
      body: fontStack(bodyFont)
    },
    radius: Number(elements.radius.value),
    contrastLevel: Number(elements.contrast.value),
    includeComponents: elements.includeComponents.checked
  };
}

function generateTheme(state) {
  const baseHsl = rgbToHsl(hexToRgb(state.baseColor));
  const accentHsl = rgbToHsl(hexToRgb(state.accentColor));
  const shifts = harmonyShifts(state.harmony, state.harmonySpread);
  const lightBg = tone(baseHsl, surfaceSaturation(baseHsl, 0.2, 4, 22), state.contrastLevel === 2 ? 99 : 97);
  const darkBg = tone(baseHsl, surfaceSaturation(baseHsl, 0.22, 4, 24), state.contrastLevel === 0 ? 13 : 9);
  const lightPrimary = accessibleTone(baseHsl, lightBg, "light", state.contrastLevel);
  const darkPrimary = accessibleTone(baseHsl, darkBg, "dark", state.contrastLevel);
  const lightAccent = accessibleTone(accentHsl, lightBg, "light", state.contrastLevel);
  const darkAccent = accessibleTone(accentHsl, darkBg, "dark", state.contrastLevel);
  const lightPrimaryHsl = rgbToHsl(hexToRgb(lightPrimary));
  const darkPrimaryHsl = rgbToHsl(hexToRgb(darkPrimary));

  const light = {
    "color-scheme": "light",
    bg: lightBg,
    surface: tone(baseHsl, surfaceSaturation(baseHsl, 0.12, 3, 16), 100),
    "surface-muted": tone(baseHsl, surfaceSaturation(baseHsl, 0.16, 4, 18), state.contrastLevel === 2 ? 94 : 96),
    text: tone(baseHsl, surfaceSaturation(baseHsl, 0.34, 6, 32), state.contrastLevel === 0 ? 18 : 12),
    muted: tone(baseHsl, surfaceSaturation(baseHsl, 0.24, 5, 24), state.contrastLevel === 2 ? 32 : 42),
    border: tone(baseHsl, surfaceSaturation(baseHsl, 0.18, 4, 20), state.contrastLevel === 2 ? 82 : 88),
    primary: lightPrimary,
    "primary-hover": tone(lightPrimaryHsl, lightPrimaryHsl.s, Math.max(lightPrimaryHsl.l - 7, 0)),
    "primary-contrast": readableTextColor(lightPrimary),
    accent: lightAccent,
    "accent-contrast": readableTextColor(lightAccent),
    secondary: accessibleTone({ ...baseHsl, h: wrapHue(baseHsl.h + shifts[1]) }, lightBg, "light", state.contrastLevel),
    tertiary: accessibleTone({ ...baseHsl, h: wrapHue(baseHsl.h + shifts[2]) }, lightBg, "light", state.contrastLevel),
    success: "#15803d",
    warning: "#a16207",
    danger: "#be123c",
    shadow: "0 18px 48px rgba(15, 23, 42, 0.14)"
  };

  const dark = {
    "color-scheme": "dark",
    bg: darkBg,
    surface: tone(baseHsl, surfaceSaturation(baseHsl, 0.28, 4, 26), state.contrastLevel === 0 ? 18 : 14),
    "surface-muted": tone(baseHsl, surfaceSaturation(baseHsl, 0.25, 4, 24), state.contrastLevel === 0 ? 23 : 18),
    text: tone(baseHsl, surfaceSaturation(baseHsl, 0.12, 2, 14), state.contrastLevel === 0 ? 88 : 94),
    muted: tone(baseHsl, surfaceSaturation(baseHsl, 0.16, 3, 18), state.contrastLevel === 2 ? 76 : 70),
    border: tone(baseHsl, surfaceSaturation(baseHsl, 0.25, 4, 26), state.contrastLevel === 2 ? 32 : 25),
    primary: darkPrimary,
    "primary-hover": tone(darkPrimaryHsl, darkPrimaryHsl.s, Math.min(darkPrimaryHsl.l + 7, 100)),
    "primary-contrast": readableTextColor(darkPrimary),
    accent: darkAccent,
    "accent-contrast": readableTextColor(darkAccent),
    secondary: accessibleTone({ ...baseHsl, h: wrapHue(baseHsl.h + shifts[1]) }, darkBg, "dark", state.contrastLevel),
    tertiary: accessibleTone({ ...baseHsl, h: wrapHue(baseHsl.h + shifts[2]) }, darkBg, "dark", state.contrastLevel),
    success: "#4ade80",
    warning: "#facc15",
    danger: "#fb7185",
    shadow: "0 18px 52px rgba(0, 0, 0, 0.36)"
  };

  const palette = [
    { label: "Primär", value: light.primary },
    { label: "Accent", value: light.accent },
    { label: "Sekundär", value: light.secondary },
    { label: "Tertiär", value: light.tertiary },
    { label: "Mörk yta", value: dark.surface },
    { label: "Ljus yta", value: light["surface-muted"] }
  ];

  return { light, dark, palette };
}

function tokenLines(key, value, state) {
  if (!isHexColor(value)) {
    return [`  --${key}: ${value};`];
  }

  if (state.colorFormat === "all") {
    const formats = allColorFormats(value);
    return [
      `  --${key}: ${formats.hex};`,
      `  --${key}-hex: ${formats.hex};`,
      `  --${key}-rgb: ${formats.rgb};`,
      `  --${key}-hsl: ${formats.hsl};`,
      `  --${key}-oklch: ${formats.oklch};`,
      `  --${key}-display-p3: ${formats["display-p3"]};`
    ];
  }

  return [`  --${key}: ${formatColor(value, state.colorFormat)};`];
}

function variableBlock(tokens, state) {
  const core = Object.entries(tokens)
    .flatMap(([key, value]) => tokenLines(key, value, state))
    .join("\n");

  return `${core}
  --radius-sm: ${Math.max(state.radius - 4, 0)}px;
  --radius-md: ${state.radius}px;
  --radius-lg: ${state.radius + 8}px;
  --font-body: ${state.fonts.body};
  --font-heading: ${state.fonts.heading};`;
}

function buildCss(state, theme) {
  const importLine = `${fontImport([state.headingFont, state.bodyFont])}\n\n`;
  const colorFormatNote = state.colorFormat === "all"
    ? "Exporterar huvudvariabler som hex plus suffix för rgb, hsl, oklch och display-p3."
    : `Färgvärden exporteras som ${state.colorFormat}.`;
  const components = state.includeComponents ? `

.theme-button,
button.theme-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid var(--primary);
  border-radius: var(--radius-md);
  padding: 0 1rem;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: var(--shadow);
  font: 700 1rem/1 var(--font-body);
}

.theme-button:hover {
  background: var(--primary-hover);
}

.theme-button.secondary {
  color: var(--text);
  background: var(--surface);
  border-color: var(--border);
  box-shadow: none;
}

.theme-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  color: var(--text);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.theme-field {
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
  font: 700 0.875rem/1.3 var(--font-body);
}

.theme-field input,
.theme-field select,
.theme-field textarea {
  min-height: 44px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.65rem 0.8rem;
  color: var(--text);
  background: var(--surface);
  font: 400 1rem/1.4 var(--font-body);
}

.theme-field input:focus,
.theme-field select:focus,
.theme-field textarea:focus {
  outline: 3px solid color-mix(in srgb, var(--primary), transparent 76%);
  border-color: var(--primary);
}` : "";

  return `${importLine}/*
  ThemeBuilder export: ${state.name}
  Google Fonts: ${state.headingFont.family} för rubriker, ${state.bodyFont.family} för brödtext.
  Färgharmoni: ${state.harmony}, spridning ${state.harmonySpread}%.
  ${colorFormatNote}
  Lägg data-theme="dark" eller data-theme="light" på html/body för att låsa läge.
  Utan data-theme följer temat användarens systeminställning.
*/

:root {
${variableBlock(theme.light, state)}
}

[data-theme="dark"] {
${variableBlock(theme.dark, state)}
}

[data-theme="light"] {
${variableBlock(theme.light, state)}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${variableBlock(theme.dark, state).split("\n").map((line) => `  ${line}`).join("\n")}
  }
}

html,
body {
  color-scheme: var(--color-scheme);
}

body {
  color: var(--text);
  background: var(--bg);
  font-family: var(--font-body);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--text);
  font-family: var(--font-heading);
}

a {
  color: var(--primary);
}
${components}
`;
}

function setPreviewVariables(tokens, state) {
  const surface = elements.previewSurface;
  surface.style.setProperty("--preview-bg", tokens.bg);
  surface.style.setProperty("--preview-surface", tokens.surface);
  surface.style.setProperty("--preview-text", tokens.text);
  surface.style.setProperty("--preview-muted", tokens.muted);
  surface.style.setProperty("--preview-border", tokens.border);
  surface.style.setProperty("--preview-primary", tokens.primary);
  surface.style.setProperty("--preview-primary-contrast", tokens["primary-contrast"]);
  surface.style.setProperty("--preview-accent", tokens.accent);
  surface.style.setProperty("--preview-radius", `${state.radius}px`);
  surface.style.setProperty("--preview-body", state.fonts.body);
  surface.style.setProperty("--preview-heading", state.fonts.heading);
}

function updateSwatches(palette, state) {
  elements.swatches.innerHTML = "";
  palette.forEach((swatch) => {
    const item = document.createElement("div");
    const readable = readableTextColor(swatch.value);
    item.className = "swatch";
    item.style.background = swatch.value;
    item.style.color = readable;
    item.style.textShadow = readable === "#ffffff" ? "0 1px 2px rgba(0, 0, 0, 0.36)" : "none";
    item.innerHTML = `<strong>${swatch.label}</strong><span>${formatColorLabel(swatch.value, state.colorFormat)}</span>`;
    elements.swatches.append(item);
  });
}

function updateHarmonyWheel(state, theme) {
  const baseHsl = rgbToHsl(hexToRgb(state.baseColor));
  const accentHsl = rgbToHsl(hexToRgb(state.accentColor));
  const shifts = harmonyShifts(state.harmony, state.harmonySpread);
  const markers = [
    { key: "primary", hsl: { ...baseHsl, h: baseHsl.h + shifts[0] }, color: theme.light.primary, label: "Primär" },
    { key: "secondary", hsl: { ...baseHsl, h: baseHsl.h + shifts[1] }, color: theme.light.secondary, label: "Sekundär" },
    { key: "tertiary", hsl: { ...baseHsl, h: baseHsl.h + shifts[2] }, color: theme.light.tertiary, label: "Tertiär" },
    { key: "accent", hsl: accentHsl, color: theme.light.accent, label: "Accent" }
  ];

  markers.forEach((marker) => {
    const element = elements.harmonyMarkers[marker.key];
    const position = harmonyMarkerPosition(marker.hsl);
    element.style.setProperty("--marker-x", `${round(position.x, 2)}px`);
    element.style.setProperty("--marker-y", `${round(position.y, 2)}px`);
    element.style.setProperty("--marker-color", marker.color);
    element.title = `${marker.label}: ${Math.round(wrapHue(marker.hsl.h))}°, ${Math.round(marker.hsl.s)}%`;
  });
}

function updateTheme() {
  const state = getState();
  const theme = generateTheme(state);
  const tokens = previewMode === "dark" ? theme.dark : theme.light;
  const fontMatch = evaluateFontPair(state.headingFont, state.bodyFont);
  const primaryContrast = contrastRatio(tokens.primary, tokens.bg);
  const textContrast = contrastRatio(tokens.text, tokens.bg);
  latestCss = buildCss(state, theme);
  const cssBytes = new Blob([latestCss]).size;

  updateGoogleFontLink([state.headingFont, state.bodyFont]);
  setPreviewVariables(tokens, state);
  updateSwatches(theme.palette, state);
  updateHarmonyWheel(state, theme);
  updateFontMatch(fontMatch);

  elements.previewThemeName.textContent = state.name;
  elements.primaryHex.textContent = formatColorLabel(tokens.primary, state.colorFormat);
  elements.contrastScore.textContent = primaryContrast >= 7 && textContrast >= 7 ? "AAA" : "AA";
  elements.cssOutput.textContent = latestCss;
  elements.cssSize.textContent = `${(cssBytes / 1024).toFixed(1)} KB`;
  elements.harmonySpreadValue.textContent = `${state.harmonySpread}%`;
  elements.radiusValue.textContent = `${state.radius}px`;
  elements.contrastValue.textContent = contrastLabels[state.contrastLevel];
  elements.copyStatus.textContent = "CSS redo";
}

function syncColorInputs(source, colorInput, textInput) {
  const normalized = normalizeHex(source.value);
  if (!normalized) {
    return;
  }
  colorInput.value = normalized;
  textInput.value = normalized;
  updateTheme();
}

function copyCss() {
  navigator.clipboard.writeText(latestCss).then(() => {
    elements.copyStatus.textContent = "Kopierad";
  }).catch(() => {
    elements.copyStatus.textContent = "Kunde inte kopiera";
  });
}

function downloadCss() {
  const state = getState();
  const blob = new Blob([latestCss], { type: "text/css;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.name}.css`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  elements.copyStatus.textContent = "Nedladdad";
}

function openComponentsDialog() {
  if (!elements.componentsDialog.open && typeof elements.componentsDialog.showModal === "function") {
    elements.componentsDialog.showModal();
  }
}

function closeComponentsDialog() {
  if (elements.componentsDialog.open) {
    elements.componentsDialog.close();
  }
}

function previewInspectorLabel(target) {
  const tag = target.tagName.toLowerCase();
  const id = target.id ? `#${target.id}` : "";
  const classes = Array.from(target.classList)
    .filter((className) => className !== "visible")
    .map((className) => `.${className}`)
    .join("");
  return `${tag}${id}${classes}`;
}

function movePreviewInspector(event) {
  const offset = 14;
  const rect = elements.previewInspector.getBoundingClientRect();
  const nextX = Math.min(event.clientX + offset, window.innerWidth - rect.width - 8);
  const nextY = Math.min(event.clientY + offset, window.innerHeight - rect.height - 8);
  elements.previewInspector.style.left = `${Math.max(8, nextX)}px`;
  elements.previewInspector.style.top = `${Math.max(8, nextY)}px`;
}

function showPreviewInspector(event) {
  const target = event.target.closest("#previewSurface *");
  if (!target || target === elements.previewInspector || target.closest("#previewInspector")) {
    return;
  }

  elements.previewInspector.textContent = previewInspectorLabel(target);
  elements.previewInspector.classList.add("visible");
  movePreviewInspector(event);
}

function hidePreviewInspector() {
  elements.previewInspector.classList.remove("visible");
}

function randomizeTheme() {
  const nextTheme = randomThemes[Math.floor(Math.random() * randomThemes.length)];
  const nextPair = recommendedFontPairs[Math.floor(Math.random() * recommendedFontPairs.length)];
  const formats = ["hex", "rgb", "hsl", "oklch", "display-p3"];
  elements.baseColor.value = nextTheme[0];
  elements.baseColorText.value = nextTheme[0];
  elements.accentColor.value = nextTheme[1];
  elements.accentColorText.value = nextTheme[1];
  document.querySelector(`input[name='harmony'][value='${nextTheme[2]}']`).checked = true;
  elements.headingFont.value = nextPair[0];
  elements.bodyFont.value = nextPair[1];
  elements.colorFormat.value = formats[Math.floor(Math.random() * formats.length)];
  elements.themeName.value = `tema-${Math.floor(Math.random() * 900 + 100)}`;
  elements.harmonySpread.value = String(Math.floor(Math.random() * 81 + 70));
  elements.radius.value = String(Math.floor(Math.random() * 15 + 4));
  elements.contrast.value = String(Math.floor(Math.random() * 3));
  updateTheme();
}

populateFontSelects();
setAppThemeMode(appThemeMode);

elements.baseColor.addEventListener("input", () => syncColorInputs(elements.baseColor, elements.baseColor, elements.baseColorText));
elements.baseColorText.addEventListener("input", () => syncColorInputs(elements.baseColorText, elements.baseColor, elements.baseColorText));
elements.accentColor.addEventListener("input", () => syncColorInputs(elements.accentColor, elements.accentColor, elements.accentColorText));
elements.accentColorText.addEventListener("input", () => syncColorInputs(elements.accentColorText, elements.accentColor, elements.accentColorText));
elements.form.addEventListener("input", updateTheme);
elements.form.addEventListener("change", updateTheme);
elements.copyCss.addEventListener("click", copyCss);
elements.copyCssFromPanel.addEventListener("click", copyCss);
elements.downloadCss.addEventListener("click", downloadCss);
elements.randomizeTheme.addEventListener("click", randomizeTheme);
elements.openComponentsInfo.addEventListener("click", openComponentsDialog);
elements.closeComponentsInfo.addEventListener("click", closeComponentsDialog);
elements.componentsDialog.addEventListener("click", (event) => {
  if (event.target === elements.componentsDialog) {
    closeComponentsDialog();
  }
});
elements.previewSurface.addEventListener("pointerover", showPreviewInspector);
elements.previewSurface.addEventListener("pointermove", (event) => {
  if (elements.previewInspector.classList.contains("visible")) {
    movePreviewInspector(event);
  }
});
elements.previewSurface.addEventListener("pointerleave", hidePreviewInspector);
elements.appThemeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAppThemeMode(button.dataset.appThemeMode);
  });
});

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previewMode = button.dataset.previewMode;
    elements.modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateTheme();
  });
});

updateTheme();
