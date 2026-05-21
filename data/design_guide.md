## 1. Site Info

SITE_TYPE: Corporate (Construction & Renovation Contractor)
HTML_LANG: nl

## 2. Color Token Mapping

All colors are converted from RGB/RGBA to HSL format.

```
---DESIGN_MD_START---
## Visual Theme
Professional, trustworthy high-end Dutch construction and renovation contractor. Deep navy/slate background panels contrasted against clean white surfaces, featuring a vibrant engineering-blue primary brand accent and forest-green secondary trust points. Typography is clean, modern, and highly legible with high contrast.

## Colors
- background: hsl(0, 0%, 100%)
- foreground: hsl(220, 19%, 15%)
- muted-foreground: hsl(219, 10%, 45%)
- border: hsl(210, 15%, 90%)
- surface: hsl(210, 15%, 95%)
- primary: hsl(211, 62%, 47%)
- primary-foreground: hsl(0, 0%, 100%)
- primary-hover: hsl(211, 62%, 37%)
- secondary: hsl(142, 76%, 36%)
- secondary-foreground: hsl(0, 0%, 100%)
- secondary-hover: hsl(142, 76%, 26%)
- dark: hsl(223, 42%, 18%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted: hsl(219, 10%, 75%)
- dark-border: hsl(223, 42%, 28%)
- accent: hsl(211, 62%, 47%)

## Page Background
solid hsl(0, 0%, 100%)

## Typography
- Heading font: plus-jakarta-sans
- Body font: plus-jakarta-sans

## Components
- Buttons: Rounded-full (9999px) for hero secondary items, rounded-lg (8px) for structural and corporate actions. Heavy padding on CTAs (16px 32px / 12px 24px) with clear text formatting.
- Cards: Minimal shadows, subtle 1px border lines, heavy reliance on clean 16px/24px gaps, clean hover scaling for images inside project cards.
---DESIGN_MD_END---
```

## 3. Navigation Spec

- **NAV_FULL_WIDTH**: true
- **NAV_WIDTH**: 1920px max-width container (1320px inner content wrapper)
- **NAV_BACKGROUND**: Transparent initial, transitions to solid white (`hsl(0, 0%, 100%)`) on scroll.
- **NAV_BORDER_RADIUS**: 0px
- **NAV_POSITION**: fixed (Sticky header)
- **NAV_SHADOW**: None initial, subtle `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05)` on scroll.
- **SCROLL_BEHAVIOR**: initial: `transparent`, on scroll: `hsl(0, 0%, 100%)` with a border transition.
- **LOGO_FILTER_SCROLL**: The logo is black. In the initial transparent state over the dark hero, apply a CSS filter `filter: brightness(0) invert(1)` to make it pure white. On scroll, remove the filter to return it to the original black representation.

### Link Style:
- **fontSize**: text-[14px]
- **fontWeight**: font-medium (500)
- **fontFamily**: Plus Jakarta Sans
- **textTransform**: normal-case
- **color**: `rgba(255, 255, 255, 0.8)` over dark initial. Transitions to `hsl(220, 19%, 15%)` on scroll. Active item has high opacity or a solid background block wrapper.
- **activeColor**: `hsl(0, 0%, 100%)` initial, transitions to `hsl(211, 62%, 47%)` on scroll.

### Logo:
- **Size**: w-[124px] h-[56px]
- **Position**: inside-nav (vertically centered in navigation bar container)
- **Badge**: false

### Dropdowns:
- **Diensten**: Active dropdown panel on hover. List items: Nieuwbouw, Ruwbouw, Renovatie, Aan- & Uitbouw, Afbouw, Zakelijk.
- **Werkgebieden**: Active dropdown panel on hover.

### CTA Button (Right Aligned):
- **Text**: "Doe je aanvraag"
- **Style**: Solid outline styling. Initial state: transparent background, white text, border-2 border-[rgba(255,255,255,0.5)]. On scroll: background-color `hsl(211, 62%, 47%)`, text-color `hsl(0, 0%, 100%)`, border-color `transparent`.

---

## 4. Section Plan

### Section 1: Hero Section
- **id**: "hero"
- **theme**: DARK
- **background**: `hsl(223, 42%, 18%)` with background photo
- **text**: `hsl(0, 0%, 100%)` with opacity adjustments (muted body)
- **heading color**: `hsl(0, 0%, 100%)` with 'zekerheid' highlighted in `hsl(211, 62%, 47%)`
- **heading size**: text-[72px] font-bold tracking-tight leading-[1.1]
- **body size**: text-[18px] leading-[28px] max-w-[600px]
- **layout**: Split side-by-side or left-aligned dominant. In this layout, content is heavily offset to the left.
- **padding**: pt-[200px] pb-[120px]
- **content**: 
  - Tag above heading: Pill background wrapper "Diensten" (transparent with white border-2/opacity).
  - Main heading: "Nieuwbouw & renovatie met zekerheid"
  - Under heading paragraph: "Schilderwerk, verbouwing, nieuwbouw & meer – zakelijk of particulier. Groot of klein, we regelen het. Op tijd, binnen budget."
  - Action row containing 2 buttons:
    - Primary Button 1: "Bel Ons: 06 41258151" - `bg-[hsl(211,62%,47%)]` text-white font-bold rounded-lg px-8 py-4
    - Primary Button 2: "Doe je aanvraag" - `bg-[hsl(142,76%,36%)]` text-white font-bold rounded-lg px-8 py-4
  - Under action row: Google Review rating card (5.0 / 5 Google Reviews) containing star SVGs and logo.
  - Core features bullet strip: Green checkmark icons followed by "400+ Projecten", "100% Tevredenheid", "25+ Jaar Ervaring".
- **backgroundImage**: Visual representation of active construction workspace/house framing.
- **overlay**: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))`
- **buttons**:
  - "Bel Ons": solid blue `hsl(211, 62%, 47%)`, text white, rounded-lg, px-8 py-4.
  - "Doe je aanvraag": solid green `hsl(142, 76%, 36%)`, text white, rounded-lg, px-8 py-4.

---

### Section 2: Recent Projects Section
- **id**: "projecten"
- **theme**: DARK
- **background**: `hsl(223, 42%, 18%)`
- **text**: `rgba(255, 255, 255, 0.6)`
- **heading color**: `hsl(0, 0%, 100%)`
- **heading size**: text-[42px] font-normal
- **body size**: text-[16px] leading-[26px]
- **layout**: Flex row split. Left: Heading & Intro Text. Right: CTA Button. Below: 2-column project cards grid.
- **padding**: py-[112px]
- **content**:
  - Small uppercase tag: "ONZE PROJECTEN" in `hsl(211, 62%, 47%)`
  - Heading: "Recente projecten"
  - Subtext description: "Van kinderopvang tot appartementen — A.S.P Aannemersbedrijf levert elk project op met vakmanschap, oog voor detail en trots op het resultaat."
  - Top right CTA button: "Neem contact op" - border-2 `border-[hsl(211,62%,47%)]` text-[hsl(211,62%,47%)] hover:bg-[hsl(211,62%,47%)] hover:text-white px-6 py-3 rounded-lg.
  - Project Grid (2 Cards):
    - **Card 1: Kinderopvang**
      - Thumbnail image (620px x 380px, rounded-t-lg, object-cover).
      - Absolute tags inside thumbnail top left: "Zakelijk • Nieuwbouw".
      - Card body: location marker with "Haarlem — Fase 1", Heading H3 "Kinderopvang", brief project summary text, arrow link text "Meer over dit project →" (blue color).
    - **Card 2: Appartementen**
      - Thumbnail image (620px x 380px, rounded-t-lg, object-cover).
      - Absolute tags: "Woningbouw • Nieuwbouw", top right absolute badge "4 foto's".
      - Card body: location marker "Haarlem — Fase 2", Heading H3 "Appartementen", brief summary text, arrow link text "Bekijk alle foto's →" (blue color).
- **buttons**:
  - "Neem contact op": Outline primary button `border-2 border-[hsl(211,62%,47%)] text-[hsl(211,62%,47%)]` rounded-lg px-6 py-3.

---

### Section 3: Services Section (Kwaliteit van begin tot einde)
- **id**: "diensten"
- **theme**: LIGHT
- **background**: `rgba(240, 242, 244, 0.5)`
- **text**: `hsl(219, 10%, 45%)`
- **heading color**: `hsl(220, 19%, 15%)`
- **heading size**: text-[42px] font-normal
- **body size**: text-[14px] leading-[22.75px]
- **layout**: Split top header (Left: Title, Right: "Alle diensten" button). Bottom: 3-column / 6-card grid.
- **padding**: py-[112px]
- **content**:
  - Uppercase Tag: "WAT WIJ DOEN" in `hsl(211, 62%, 47%)`
  - Title: "Kwaliteit van begin tot einde."
  - Right top button: "Alle diensten" - border-2 `border-[hsl(211,62%,47%)]` text-[hsl(211,62%,47%)] rounded-lg px-6 py-3.
  - Card Grid (6 Cards, each has structural layout):
    - Card structure: Solid white background block, top image aspect-ratio [408/192] object-cover rounded-t-lg, bottom text block with padding (p-6), heading H3 (18px, bold, dark neutral text), description text, and blue link "Meer info →".
    - Card 1: **Nieuwbouw** (Image, Description, link)
    - Card 2: **Ruwbouw** (Image, Description, link)
    - Card 3: **Renovatie** (Image, Description, link)
    - Card 4: **Aan- & Uitbouw** (Image, Description, link)
    - Card 5: **Afbouw** (Image, Description, link)
    - Card 6: **Zakelijk** (Image, Description, link)
- **images**: 6 images, each scaled to 408px displayWidth, 192px displayHeight.

---

### Section 4: About Us Section (Vakmanschap en kwaliteit)
- **id**: "over-ons"
- **theme**: LIGHT
- **background**: `hsl(0, 0%, 100%)`
- **text**: `hsl(219, 10%, 45%)`
- **heading color**: `hsl(220, 19%, 15%)`
- **heading size**: text-[42px] font-semibold leading-[1.2]
- **layout**: Two equal columns. Left column: Large high-resolution vertical/square image of built modern brick houses. Right column: text stack.
- **padding**: py-[112px]
- **content**:
  - Small uppercase tag: "OVER ONS" in `hsl(211, 62%, 47%)`
  - Heading: "Vakmanschap en kwaliteit bij elke opdracht"
  - Body: "A.S.P Aannemersbedrijf is meer dan een aannemer — wij zijn uw betrouwbare partner in nieuwbouw en renovatie. Met meer dan 25 jaar ervaring leveren wij hoogwaardig werk, van kleine verbouwingen tot complete nieuwbouwprojecten. Op tijd, binnen budget en met oog voor detail."
  - Feature Points list with outline icons inside circle containers:
    - **Ervaren Vakmensen**: "Onze medewerkers combineren kennis en praktijkervaring om elk project van begin tot eind perfect uit te voeren"
    - **Moderne Werkwijze**: "We werken met moderne technieken en materialen voor een efficiënt en duurzaam eindresultaat"
  - Action Button: "Bekijk onze diensten" - solid blue primary button.
- **buttons**:
  - "Bekijk onze diensten": solid `hsl(211, 62%, 47%)` text-white rounded-lg px-8 py-4.

---

### Section 5: Trust & BouwGarant Section
- **id**: "bouwgarant"
- **theme**: LIGHT
- **background**: `hsl(0, 0%, 100%)`
- **text**: `hsl(219, 10%, 45%)`
- **heading color**: `hsl(220, 19%, 15%)`
- **heading size**: text-[42px] font-semibold
- **layout**: Two columns. Left column: BouwGarant details & value points. Right column: Floating trust scorecard box.
- **padding**: py-[112px]
- **content**:
  - Small uppercase tag: "ERKEND & GECERTIFICEERD"
  - Heading: "U bouwt met de zekerheid van BouwGarant" (where 'zekerheid van BouwGarant' is styled in `hsl(211, 62%, 47%)`).
  - Paragraph text detailing BouwGarant membership benefits.
  - Value Points list (with blue checked icons):
    - Gecertificeerd vakbedrijf
    - Onafhankelijke garantie
    - 10 jaar structurele garantie
    - Vertrouwen van duizenden klanten
  - CTA Button: "Vraag een gratis offerte aan" - solid blue button.
  - Right Column Card: A solid gray-bordered floating white container.
    - Top center: BouwGarant official badge image/logo.
    - Middle: Row split metrics: "25+ Jaar ervaring", "400+ Projecten", "10j Garantie" each separated by vertical line.
    - Bottom: Navy testimonial quote block: "BouwGarant geeft mij als klant de zekerheid dat alles goed geregeld is — ook als er iets onverwachts gebeurt." (includes 5 gold rating stars).
- **buttons**:
  - "Vraag een gratis offerte aan": solid `hsl(211, 62%, 47%)` text-white rounded-lg px-8 py-4.

---

### Section 6: Process Accordion Section
- **id**: "werkwijze"
- **theme**: DARK
- **background**: `hsl(223, 42%, 18%)`
- **text**: `rgba(255, 255, 255, 0.6)`
- **heading color**: `hsl(0, 0%, 100%)`
- **heading size**: text-[42px] font-normal
- **layout**: Two blocks vertical stack. Block 1: Header title block + sub-bar contact CTA wrapper. Block 2: Split column block (Left: Architectural/construction photo, Right: Interactive accordion UI).
- **padding**: py-[112px]
- **content**:
  - Small uppercase tag: "ONZE WERKWIJZE"
  - Heading: "Van eerste gesprek tot sleuteloverdracht"
  - Sub-bar: "Heeft u een project te bespreken?" right-aligned button "Neem contact op".
  - Left column image: high quality perspective construction site photo.
  - Right column accordion step elements:
    - **Step 01: Intake & Planning** (Active/Expanded initial state): shows explanation "We starten met een persoonlijk gesprek om uw wensen, budget en planning in kaart te brengen. Op basis hiervan stellen we een concreet plan van aanpak op, inclusief tekeningen en materiaallijsten."
    - **Step 02: Vergunningen & Voorbereiding** (Collapsed)
    - **Step 03: Uitvoering & Bouw** (Collapsed)
    - **Step 04: Oplevering & Nazorg** (Collapsed)
- **buttons**:
  - "Neem contact op": solid `hsl(211, 62%, 47%)` text-white rounded-lg px-6 py-3.

---

### Section 7: Testimonials Section (Wat onze klanten zeggen)
- **id**: "beoordelingen"
- **theme**: LIGHT
- **background**: `rgba(240, 242, 244, 0.3)`
- **text**: `hsl(219, 10%, 45%)`
- **heading color**: `hsl(220, 19%, 15%)`
- **heading size**: text-[36px] font-bold
- **layout**: Header block with "Klanten Vertellen" banner logo -> H2 Title. Grid of 3 columns of testimonial review cards. Bottom centered action button.
- **padding**: py-[112px]
- **content**:
  - Testimonial cards list (5 stars inside each card):
    - Card 1: "Top bedrijf" - "Dankjewel voor het werk wat jullie hebben geleverd mannen" by **Alex** (with date).
    - Card 2: "Super tevreden vakkundig en vakwerk afgeleverd!" - Review content details by **Edwin Berk**.
    - Card 3: "Zeer tevreden over deze aannemer!" - Review content details by **Dylan**.
    - Card 4: "Top en vlot gedaan" - Review content details by **Marco**.
    - Card 5: "Vakkundig bedrijf." - Review content details by **Ryan**.
  - Bottom CTA: "Alle beoordelingen bekijken →" - Outline blue button.
- **buttons**:
  - "Alle beoordelingen bekijken →": outline `border border-[hsl(211,62%,47%)]` text-[hsl(211,62%,47%)] rounded-lg px-6 py-3.

---

### Section 8: Contact Form Section
- **id**: "contact"
- **theme**: LIGHT
- **background**: `hsl(0, 0%, 100%)`
- **text**: `hsl(219, 10%, 45%)`
- **heading color**: `hsl(220, 19%, 15%)`
- **heading size**: text-[42px] font-semibold
- **layout**: Two Columns. Left Column: Text-stack. Right Column: Custom snelle offerte application form block.
- **padding**: py-[112px]
- **content**:
  - Left column stack:
    - Small tag: "GRATIS OFFERTE IN 24 UUR"
    - Heading: "Laat je huis transformeren — zonder gedoe"
    - Bullets row (with icons): "Offerte in 24 uur", "400+ projecten afgerond", "Gratis consulten, geen verplichtingen", "Op tijd, binnen budget — altijd"
    - Contact card blocks below: Phone `06 41258151` & Email `info@asp-aannemersbedrijf.nl`.
  - Right column form panel:
    - Wrapper: Light gray background, blue top-border bar, snelle offerte visual indicator.
    - Buttons row inside form: Choice items (Nieuwbouw, Ruwbouw, Renovatie, Aan- & Uitbouw, Afbouw, Zakelijk project, Anders).
    - Input Fields: Name, Phone, Email, Address, Start date, Project Description.
    - Heavy Action Button: "Stuur mijn aanvraag gratis →" (blue button).
    - Under actions text row: "Offerte morgen", "100% match", "Geen verplichtingen".
- **buttons**:
  - "Stuur mijn aanvraag gratis": solid `hsl(211, 62%, 47%)` text-white font-bold rounded-lg px-8 py-4 w-full.

---

## 5. Favicon

Branding data contains a valid favicon image CDN resource: `https://pagesmith-cdn.com/ba5d94c5/images/26d26192d_Foto04-05-2026om1545-1536.webp`. 

Instruct the system build processes to execute:
`process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/ba5d94c5/images/26d26192d_Foto04-05-2026om1545-1536.webp" })`

---

## 6. Footer

- **Style**: Solid white background (`hsl(0, 0%, 100%)`), top boundary line with border `hsl(210, 15%, 90%)`.
- **Text Color**: Dark Slate (`hsl(220, 19%, 15%)`) for structural layout and links.
- **Columns**: 4
- **Link Groups**:
  - Column 1: A.S.P Aannemersbedrijf Logo (black version) + short descriptive paragraph ("Meer dan 25 jaar vakmanschap in nieuwbouw en renovatie. Op tijd, binnen budget.") + Social Icons (Facebook, Instagram, Twitter, LinkedIn) centered inline.
  - Column 2: "Navigatie"
    - Home
    - Over ons
    - Diensten
    - Werkwijze
    - Werkgebieden
  - Column 3: "Diensten"
    - Nieuwbouw
    - Ruwbouw
    - Renovatie
    - Aan- & Uitbouw
    - Afbouw
  - Column 4: "Contact"
    - Phone list item with icon
    - Email list item with icon
    - Address / Werkgebied item: "Werkgebied: Noord-Holland & omgeving"
- **Social Icons**: Bottom / Column 1. Platforms: Facebook, Instagram, Twitter, LinkedIn. All links lead to respective channels. Use clean SVG brand logos.

---

## 7. Files

- **MODIFY**: 
  - `src/components/Navigation.astro`
  - `src/components/Footer.astro`
  - `src/data/site.ts`
  - `src/styles/global.css`
- **CREATE**:
  - `src/components/home/Hero.astro`
  - `src/components/home/RecentProjects.astro`
  - `src/components/home/ServicesGrid.astro`
  - `src/components/home/AboutUs.astro`
  - `src/components/home/TrustGarant.astro`
  - `src/components/home/ProcessAccordion.astro`
  - `src/components/home/Testimonials.astro`
  - `src/components/home/ContactForm.astro`