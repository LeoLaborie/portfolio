# Refonte Brutaliste du Portfolio

**Date :** 2026-04-07
**Approche :** A — Refonte visuelle brutaliste + nettoyage code
**Stack :** Next.js 15, React 19, Tailwind CSS 4, Framer Motion (inchangée)

---

## 1. Design System Brutaliste

### Typographie
- **Principale :** Times New Roman (titres, corps de texte) — conservée
- **Secondaire :** Geist Mono pour labels, catégories, métadonnées, badges, dates
- **Contraste de taille extrême :** titres `text-7xl`+ bold, sous-titres `text-sm` uppercase monospace tracking élargi

### Couleurs
- Palette réduite : noir pur `#000`, blanc pur `#fff`, accent unique jaune vif `#FFD600` ou rouge brique `#C0392B` (à définir à l'implémentation)
- Abandon des gris doux — fonds alternent noir/blanc
- Dark mode : inversion stricte (fond blanc → noir, texte noir → blanc)

### Composants visuels
- Bordures épaisses : `border-2` ou `border-4`
- Coins carrés : `rounded-none` partout — abandon des `rounded-2xl`
- Ombres géométriques offset : `shadow-[4px_4px_0_#000]` au lieu de shadows diffuses
- Grilles rigides avec lignes visibles

### Animations
- Transitions mécaniques : `step` ou `linear`, pas de ease-out fluide
- Effets terminal : texte qui s'écrit caractère par caractère (Hero)
- Hover : décalage brut (translate) au lieu de scale doux

### Spacing
- Système strict basé sur multiples de 8px : 8, 16, 24, 32, 48, 64, 96
- Padding généreux mais uniforme

---

## 2. Refactor Architecture Code

### Nouvelle structure des composants
```
app/
  components/
    ui/          → Button, Badge, Card, Tag (atomiques)
    layout/      → Header, Footer, Section, Container
    sections/    → Hero, Experience, Projects, Skills, Parcours, Contact
    animation/   → animated-section, staggered-container, staggered-item, parallax
    providers/   → DarkModeProvider, LanguageProvider, HtmlLangWrapper
  design/
    tokens.ts    → Couleurs, spacing, typographie, bordures (source unique de vérité)
    components.ts → Classes Tailwind composées utilisant les tokens
  data/          → Inchangé
  types/         → Inchangé
```

### Design tokens (tokens.ts)
- `colors` : palette brutaliste (noir, blanc, accent)
- `spacing` : échelle 8px
- `borders` : épaisseurs (2px, 4px), style solid
- `typography` : tailles, poids, familles (serif vs mono)
- `shadows` : offset géométriques uniquement

### Décomposition des composants
- `Header` → Header + MobileMenu + NavLinks + ThemeToggle + LanguageSwitcher
- `Projects` → ProjectsSection + ProjectGrid + ProjectCard + ProjectFilter
- Chaque composant fait une seule chose

### Ce qui ne change pas
- Stack technique
- i18n (LanguageProvider maison)
- Fichiers de données (app/data/)
- Types (app/types/)

---

## 3. Refonte visuelle par section

### Hero
- Layout asymétrique : texte ~60% gauche, photo droite dans un cadre carré à bordure épaisse + shadow offset
- Nom en `text-8xl`/`text-9xl` Times New Roman bold, pleine largeur
- Sous-titre en Geist Mono uppercase `text-sm` tracking élargi
- Effet de frappe terminal sur l'accroche (curseur clignotant `_`)
- Liens sociaux : icônes dans des carrés bordure épaisse, hover = inversion couleur
- Bouton CV : rectangulaire, bordure épaisse, texte mono uppercase, hover = remplissage accent + décalage
- Supprimé : parallax subtil, greeting animé "Bonjour"

### Experience
- Cards bordure épaisse + shadow offset, coins carrés
- Dates en monospace, rôle en Times New Roman bold grand
- Tech stack : badges monospace à bordure (pas de rounded-full)
- Média dans un cadre strict

### Projects
- Filtre : boutons rectangulaires monospace, actif = fond noir texte blanc (ou accent)
- Grille de cards : bordures 2px, hover = décalage shadow + inversion partielle
- Tags catégorie en monospace uppercase petit

### Skills
- Grille dense type tableau/terminal
- Niveaux de compétence en barres géométriques ou notation `[████░░]`
- Catégories séparées par lignes horizontales épaisses

### Parcours
- Timeline verticale avec ligne épaisse et points carrés
- Institution en gros, dates en monospace

### Contact
- Layout minimal : email et liens dans des blocs rectangulaires
- Statut disponibilité : texte monospace vert type terminal `[AVAILABLE]`
- Abandon de l'animation pulsing dot
