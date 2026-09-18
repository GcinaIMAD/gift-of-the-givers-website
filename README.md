# Gift of the Givers Website

## Student Information

**Student Name:** Gcina Mvumvu 
**Module:** WEDES5020POE 
**Project:** Website Project 
**Organisation:** Gift of the Givers Foundation

---

## Project Overview

This project involves the design and development of a website for the Gift of the Givers Foundation. The website aims to provide visitors with clear and accessible information about the organisation, its humanitarian work, projects and ways in which members of the public can get involved.

The website is being developed using HTML, with CSS and JavaScript used for styling and functionality.

---

# Key Features and Functionality

The Gift of the Givers website will provide the following features:

- A homepage introducing the Gift of the Givers Foundation.
- An About Us page containing information about the organisation.
- A Projects page describing the organisation's humanitarian projects.
- A Donate page providing information about how visitors can support the organisation.
- A Volunteer page explaining how visitors can get involved.
- A Contact page providing contact information and locations.
- A navigation menu that allows users to move between all website pages.
- Images to support and improve the presentation of the website content.
- A responsive and user-friendly layout.

## Timeline and Milestones

The project will be completed in stages:

1. Research and selection of the organisation.
2. Development and approval of the project proposal.
3. Research and collection of website content.
4. Creation of the sitemap and file/folder structure.
5. Development of the HTML pages.
6. Implementation of CSS styling and JavaScript functionality.
7. Testing and debugging of the website.
8. Final improvements and preparation for submission.

## Part 1 Details

Part 1 of the project focuses on planning, research and the initial development of the website.

This includes:

- Project proposal.
- Content research and sourcing.
- Sitemap.
- File and folder structure.
- HTML pages and basic content.
- Navigation.
- Testing and debugging.
- Code comments.
- GitHub repository setup.
- README documentation.

Part 2 and Part 3 will be completed in future submissions and updates.

## Sitemap

The website structure consists of the following main pages:

- Home
- About Us
- Projects
- Donate
- Volunteer
- Contact

The Home page acts as the main entry point to the website, while the other pages provide information about the organisation, its projects and ways for visitors to get involved.

## Changelog

### Initial Version

- Created the GitHub repository.
- Created the initial website structure.
- Added the HTML pages.
- Added navigation links between the pages.
- Created the README.md file.
- Added project information and objectives.
- Added the sitemap and project documentation.

  ## Changelog

### Version 2.0 — Part 2 (CSS Styling and Responsive Design)

**Feedback fixes from Part 1:**

- Fixed the broken images: every `<img>` tag previously pointed to a non-existent `../Media/` folder. All image references now point to a new `images/` folder in the project root.
- Fixed the malformed `<img>` tag on the **About Us** page, which was missing its `alt=` attribute name (`<img src="../Media/about.jpg"Gift of the Givers About Image" ...>`), so the alt text was not being read correctly.
- Fixed the incomplete/broken `<img` tag inside the `<header>` of the **Volunteer** page, which had no closing bracket, `src`, or `alt` attribute and was breaking the page's HTML structure.
- Removed the stray extra closing tags (`</p>` and a duplicate `</main>`) after `<main>` on the **Home** page.
- Removed a duplicate `</nav>` closing tag on the **About Us** page.
- Renamed image files that contained spaces (`disaster relief.jpg`, `food assistance.jpg`) to hyphenated filenames (`disaster-relief.jpg`, `food-assistance.jpg`) to prevent broken links.
- Reorganised the repository: added dedicated `css/` and `images/` folders instead of keeping files in the project root (a `js/` folder will be added in Part 3).

**New Part 2 additions:**

- Created an external stylesheet, `css/style.css`, and linked it to all six HTML pages.
- Added a CSS reset and base styles (default font, colours, spacing, `box-sizing`).
- Imported Google Fonts (Poppins) for headings and used Arial for body text, matching the typography defined in the project proposal.
- Defined a typography scale using CSS custom properties (`--fs-sm` through `--fs-xxl`) for consistent heading and text sizing.
- Built the page layout using Flexbox for the header/navigation and alternating image-and-text content blocks, and CSS Grid for the feature/benefit lists (`.info-list`).
- Applied the project's colour scheme (blue for trust, green for humanitarian support, orange for call-to-action elements) via CSS custom properties in `:root`.
- Added decorative styling: rounded corners, box-shadows on images and cards, a decorative underline under each `<h2>`.
- Added interactive styling using the `:hover`, `:focus` and `:active` pseudo-classes on navigation links, buttons and list cards.
- Styled the "Donate" navigation link as a stand-out call-to-action button.
- Added responsive breakpoints (media queries) for tablet (`max-width: 1024px`) and mobile (`max-width: 600px`), which stack the navigation menu and image/text blocks into a single column on smaller screens.
- Used relative units (`rem`, `%`) throughout for font sizes and spacing so the layout scales smoothly between breakpoints, and made all images fluid (`max-width: 100%; height: auto;`) so they resize with their container.
- Added a "Skip to content" link for keyboard/accessibility navigation, and marked the current page's nav link with an `active` class.
- 

### Version 1.0 — Part 1 (Initial Version)

- Created the GitHub repository.
- Created the initial website structure.
- Added the HTML pages.
- Added navigation links between the pages.
- Created the README.md file.
- Added project information and objectives.
- Added the sitemap and project documentation. 

## References

Gift of the Givers Foundation. (n.d.). Gift of the Givers Foundation. Available at: https://giftofthegi​vers.org/ (Accessed: 14 August 2026).

W3Schools. (n.d.). HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 14 August 2026).

MDN Web Docs. (n.d.). HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 14 August 2026). 
