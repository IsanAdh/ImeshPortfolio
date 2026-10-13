# CA Imesh Adhikari — brand guidelines

The working reference for anyone designing or building for this brand. The tokens in section 14 live in `src/styles/global.css`; change them there, not in components.

## 1. Concept and positioning

**Concept:** quiet luxury meets financial intelligence. The site should read like a boutique advisory practice with the editorial calm of a good business publication.

**Positioning:** CA Imesh Adhikari gives businesses, founders and individuals in Nepal clear, practical answers on tax, compliance and finance, so they can decide with confidence.

**Manifesto:** Say it plainly. Show the work, not the adjectives. Let white space, type and one deliberate colour carry the brand. Never claim what cannot be evidenced.

One brand, three promises:

| Audience | Promise |
| --- | --- |
| CA and professional services | Accuracy, integrity, compliance |
| MSMEs, founders, business owners | Practical advice, commercial sense, financial discipline |
| Individuals and NRNs | Accessible education, informed decisions, long-term thinking |

## 2. Personality and visual principles

| Attribute | What it means in the design |
| --- | --- |
| Trustworthy | Facts instead of claims (the fact strip), visible contact details, plain disclaimers, no invented numbers |
| Intelligent | Editorial serif headings, numbered indexes, tabular figures |
| Refined | Hairline rules instead of boxes, 3–6 px radii, almost no shadow |
| Clear | One primary action per view, short line lengths, strong hierarchy |
| Forward-looking | A magenta signature over the navy, working calculators on the site |

## 3. Colour palette and usage

| Role | Token | HEX | Use |
| --- | --- | --- | --- |
| Signature Magenta | `--color-brand-primary` | `#B83280` | The primary CTA, links, eyebrows, active nav indicator, index numerals, focus ring |
| Magenta hover / active | `--color-brand-primary-hover` / `-active` | `#9C2A6C` / `#84225B` | Button and link states |
| Gold (detail) | `--color-accent` | `#B8862B` | Decorative lines only: eyebrow rule, arch outline, list ticks, quote rule, footer top rule |
| Gold (text) | `--color-accent-text` | `#8A6212` | Small gold text on light: index numerals, wordmark sub-label |
| Gold on dark | `--color-brand-on-inverse` | `#D9B36A` | Eyebrows, link hover and focus ring on navy |
| Deep Navy | `--color-surface-inverse`, `--color-text-heading`, `--color-border-strong` | `#0F2A44` | Headings, strong rules, inverse bands, the CTA block |
| Midnight | `--color-text-primary` | `#1B2430` | Body text |
| Midnight | `--color-surface-inverse-deep` | `#0A1D30` | Footer, the header button |
| Warm Ivory | `--color-surface-subtle` | `#FAF8F6` | Hero, page headers, alternating sections |
| Soft White | `--color-surface-default` | `#FFFFFF` | Default page background, form panels |
| Muted Stone | `--color-border-subtle` | `#E9E3E6` | Hairline dividers |
| Control Stone | `--color-border-control` | `#8F8791` | Form-field borders (3:1 against white) |
| Slate Grey | `--color-text-secondary` | `#655F68` | Secondary text, metadata |
| Pale Blush | `--color-surface-tint` | `#F5E8F0` | Portrait arch |
| Warm Paper | `--color-surface-warm` | `#FBF5EA` | Calculator results |
| Success / Warning / Error / Info | `--color-success` etc. | `#287A59` / `#A86A16` / `#B42336` / `#52677F` | Status only, always with a text label or icon |
| WhatsApp | `--color-whatsapp` | `#1F7A4D` | WhatsApp buttons only |

The palette combines the original navy and gold with the magenta signature: navy carries authority, magenta marks actions and labels, gold handles fine detail. Two values were adjusted from the starting palette: Slate Grey was darkened from `#716A73` so secondary text passes AA on blush, and a darker stone was added for form borders.

**Proportions (visual guide, not a rule):** 60–70% white and ivory, 20–30% navy and ink, 5–10% magenta and gold.

**Usage matrix**

| Area | Background | Text | Magenta appears as |
| --- | --- | --- | --- |
| Header / nav | White | Midnight | Sub-label, 2 px active underline |
| Home hero | Ivory | Navy heading, slate lead | One CTA, eyebrow, arch outline |
| Service and article pages | White, ivory page header | Midnight | Eyebrow, links, list ticks, blockquote rule |
| Buttons | Magenta (primary), ink (utility), outline (secondary) | White / ink | Primary only |
| Forms | White panel, ink top rule | Ink labels | Focus ring, radio accent |
| Inverse band, CTA block | Navy | White | Gold eyebrow |
| Footer | Midnight | White at 76% | Link hover |
| Charts | White | Ink labels | One highlighted series; others in navy and slate |
| Mobile | Same as desktop | Same | Sticky "Book a Consultation" button |

## 4. Colour combinations and contrast

| Pair | Ratio | Verdict |
| --- | --- | --- |
| Ink on white / ivory | about 17:1 | AA and AAA |
| Slate `#655F68` on white / ivory / blush | about 6.2 / 5.8 / 5.3:1 | AA |
| Magenta on white / ivory | about 5.5 / 5.2:1 | AA for text |
| White on magenta | about 5.5:1 | AA |
| Navy on white | about 14:1 | AA and AAA |
| Magenta on navy | about 2.7:1 | **Fails** for text; use gold `#D9B36A` |
| `#D9B36A` on navy | about 7.5:1 | AA |
| Gold `#B8862B` on white | about 3.2:1 | **Fails** for text; lines only, or use `#8A6212` (about 5.5:1) |
| White on WhatsApp green | about 5.3:1 | AA |

Ratios are calculated estimates; re-check with a contrast tool if any value changes.

## 5. Typography

**Pairing:** Newsreader (headings) and DM Sans (body and interface), both from Google Fonts. Newsreader is an editorial text serif that stays legible at medium weight, so headings feel considered rather than decorative. DM Sans is a clean geometric sans with open forms that holds up at small sizes.

| Style | Font | Size (desktop → mobile) | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display (home hero) | Newsreader | 68 → 40 px, fluid | 500 | 1.08 | −0.02em |
| H1 | Newsreader | 52 → 34 px, fluid | 500 | 1.08 | −0.02em |
| H2 | Newsreader | 38 → 27 px, fluid | 500 | 1.18 | −0.012em |
| H3 | Newsreader | 22 px | 500 | 1.18 | −0.012em |
| H4 / eyebrow / labels | DM Sans | 13 px, uppercase | 600 | 1.4 | 0.12em |
| Body large | DM Sans | 19 px | 400 | 1.65 | 0 |
| Body | DM Sans | 17 px | 400 | 1.65 | 0 |
| Small, nav, buttons, form labels | DM Sans | 15 px | 500–600 | 1.5 | 0–0.01em |
| Caption, metadata | DM Sans | 13 px | 400–600 | 1.5 | 0 |
| Financial figures, tables | DM Sans, tabular numerals | 15–18 px | 600 for results | 1.4 | 0 |

Fluid sizes use `clamp()`, so tablet falls between the two ends. Tabular numerals are on site-wide.

## 6. Logo direction

No final logo exists yet; this is a brief, and nothing here has been checked for trademark availability.

- **Wordmark (primary):** "CA Imesh Adhikari" in Newsreader Medium, with "CHARTERED ACCOUNTANT" beneath in tracked DM Sans, magenta. This is what the header uses.
- **Monogram:** "IA" in ivory serif on an navy square with a short gold-and-magenta rule beneath. Used for the favicon and avatars.
- **No symbol.** No rupee sign, calculator, bar chart or arrow.
- **Clear space:** the cap height of the "C" on all sides. **Minimum size:** wordmark 120 px wide on screen, 30 mm in print; monogram 16 px.
- **Versions:** navy on light; white on navy; single-colour ink or white.
- **Do not:** recolour the wordmark magenta, stretch or outline it, place it on photography without a solid panel, or add effects.

## 7. Spacing and layout

- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 72, 96 px (`--space-1` to `--space-9`).
- **Container:** 1180 px, 24 px gutters. Reading width 760 px.
- **Grid:** 12 columns in principle; the site uses asymmetric splits (roughly 5/7 and 7/5) and three equal columns.
- **Breakpoints:** 1080 px (nav collapses), 860 px (splits stack), 700 px (mobile action bar), 600 px (form rows stack).
- **Section rhythm:** 96 px vertical padding, 72 px on mobile. Alternate white, ivory and one navy band; do not put every section in a box.
- **Shape:** 3 px radius for controls and panels, 6 px for the CTA block. One shadow, used only for the open mobile menu and the floating WhatsApp button.

## 8. Photography and iconography

- Real people and real workplaces, natural light, restrained grading, neutral or warm backgrounds that sit with ivory and blush.
- The portrait is a transparent cutout set in a blush arch with a fine gold outline.
- Avoid handshakes, office towers, piles of cash, floating coins, calculators as props, and staged teams.
- Icons: one line family, 1.5–2 px stroke, used sparingly. The only icon in use is the WhatsApp glyph.
- Charts must be accurate, labelled and sourced. No decorative charts that imply results.

## 9. Components

| Component | Rule |
| --- | --- |
| Header | White, sticky, 76 px. Wordmark left, links right, ink "Book a Consultation" button |
| Buttons | Primary magenta (one per view), ink for utility actions, outline for secondary, light on dark bands. 48 px tall |
| Text link | Ink, semibold, arrow that moves 3 px on hover |
| Cards | Ink top rule, no box, no shadow. Title turns magenta on hover |
| Index list | Numbered, ruled rows for services |
| Fact strip | Label plus value; only details that can be verified |
| Form panel | White, subtle border with an ink top rule. Labels above fields |
| Tags | Uppercase magenta text, no pill |
| CTA block | Navy, white heading, light button plus WhatsApp |
| Footer | Midnight navy with a gold top rule, four columns |
| Testimonials | Shown only when real ones are added in the CMS |

## 10. Responsive principles

- Content first: copy and the primary action come before the portrait on mobile.
- Splits stack to one column at 860 px; type scales fluidly.
- Touch targets are at least 44 px.
- The mobile action bar keeps "Book a Consultation" and WhatsApp in reach.
- No horizontal scrolling at any width.

## 11. Accessibility

- Target: WCAG 2.2 AA.
- Text contrast as in section 4; form borders meet 3:1.
- Visible 2 px focus ring on every interactive element (light gold on dark surfaces).
- Every field has a visible label; the skip link is first in tab order.
- Motion is limited to 160 ms colour and position changes and is disabled under `prefers-reduced-motion`.
- Magenta never carries meaning alone: status uses the semantic colours with text.

## 12. Correct and incorrect use

| Do | Don't |
| --- | --- |
| One magenta button per screen | Magenta backgrounds for whole sections |
| Rules and white space to separate content | A rounded, shadowed card around every block |
| Navy for authority | Navy or generic corporate blue |
| Light gold for accents on dark | Brand magenta as text on navy |
| Facts with a source | Superlatives, comparative claims, invented statistics |
| Sentence-case headings | All-caps headings (labels only) |

## 13. Homepage art direction

1. **Hero** on ivory: eyebrow, large serif headline, one-sentence promise, magenta "Book a Consultation", outline WhatsApp, quiet "Free calculators" link. Portrait in the blush arch on the right.
2. **Fact strip:** membership, office, hours.
3. **Services:** heading column beside a numbered, ruled index.
4. **Who it's for:** three ruled columns for businesses, founders and individuals.
5. **Free tools:** the one navy band, with the featured resource on a white panel.
6. **Knowledge Hub:** latest articles as ruled cards.
7. **Closing CTA** in navy, then the midnight footer.

## 14. Design tokens

Defined once in `:root` in `src/styles/global.css`:

- **Colour:** `--color-brand-primary`, `--color-brand-primary-hover`, `--color-brand-primary-active`, `--color-brand-on-inverse`, `--color-accent`, `--color-accent-text`, `--color-brand-tint`, `--color-text-primary`, `--color-text-secondary`, `--color-text-heading`, `--color-text-on-inverse`, `--color-link`, `--color-surface-default`, `--color-surface-subtle`, `--color-surface-tint`, `--color-surface-warm`, `--color-surface-inverse`, `--color-surface-inverse-deep`, `--color-border-subtle`, `--color-border-strong`, `--color-border-control`, `--color-focus`, `--color-disabled-bg`, `--color-disabled-text`, `--color-success`, `--color-warning`, `--color-error`, `--color-info`, `--color-whatsapp`
- **Type:** `--font-display`, `--font-sans`, `--text-display` to `--text-caption`, `--leading-*`, `--tracking-*`
- **Space and layout:** `--space-1` to `--space-9`, `--container`, `--container-narrow`, `--gutter`
- **Shape and motion:** `--radius-sm`, `--radius-md`, `--shadow-raised`, `--duration`, `--ease`

Components reference semantic tokens only. Raw palette values (`--magenta-600` and so on) are used only to define the semantic tokens.

## 15. Quality checklist

- [ ] Only one magenta button visible at a time
- [ ] No new hex values outside `:root`
- [ ] Headings in Newsreader, everything else in DM Sans
- [ ] Sections separated by rules and background, not boxes
- [ ] Text contrast checked for any new colour pair
- [ ] Keyboard focus visible on every new control
- [ ] Works at 390 px with no sideways scroll
- [ ] Every claim, number and credential is real and current
- [ ] Copy reviewed against the ICAN Code of Ethics on publicity
