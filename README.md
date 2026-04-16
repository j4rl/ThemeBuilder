# ThemeBuilder

En statisk webbapp för att bygga färdiga CSS-teman med färgpalett, Google Fonts, ljus/mörk variant och export som `.css`.

## Funktioner

- Bygg ett tema med basfärg, accentfärg och färgharmoni.
- Välj analog, komplementär eller triadisk harmoni.
- Justera harmonins spridning med reglage.
- Slumpa tema från inställningspanelen.
- Välj separata Google Fonts för rubriker och brödtext.
- Få indikator för om typsnitten passar ihop.
- Förhandsvisa temat i ljus och mörk variant.
- Växla själva appens gränssnitt mellan Auto, Ljus och Mörk.
- Exportera färger som hex, rgb, hsl, oklch, display-p3 eller alla format samtidigt.
- Exportera CSS-variabler för både ljus och mörk variant.
- Inkludera basklasser för knappar, kort och formulär.
- Visa info om vilka basklasser som ingår.
- Kopiera CSS från inställningspanelen eller direkt i rutan "Exporterad CSS".
- Ladda ned temat som `.css`.
- Hovra över preview-element för att se tagg, id och klassnamn.
- Gå till en separat Om-sida med plats för information om appen och skaparen.

## Export

CSS-exporten innehåller:

- `@import` för valda Google Fonts.
- `:root` med ljus variant.
- `[data-theme="dark"]` och `[data-theme="light"]`.
- `prefers-color-scheme: dark` som fallback när inget `data-theme` är satt.
- Designvariabler för färger, rundning, skugga och typsnitt.
- Valfria basklasser:
  - `.theme-button`
  - `.theme-button.secondary`
  - `.theme-card`
  - `.theme-field`

## Användning

1. Välj färger, harmoni, typsnitt och exportformat.
2. Kontrollera temat i previewn med Ljus/Mörk-reglaget.
3. Kopiera CSS eller ladda ned CSS-filen.
4. Lägg till CSS-filen i ditt projekt.
5. Sätt `data-theme="dark"` eller `data-theme="light"` på `html` eller `body` om du vill låsa tema. Utan attribut följer temat systemets färgläge.

## Kör lokalt

Öppna `index.html` direkt i webbläsaren.

Om du kör via XAMPP kan du använda:

```text
http://localhost/ThemeBuilder/
```
