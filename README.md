# Algolia Reveal: Unveiling Developer Magic 🪄

Welcome to the official repository of "Algolia Reveal," a demonstration built to showcase the powerful capabilities of Algolia's widgets with interactive code insights and AI-powered search functionality.

## Introduction

"Algolia Reveal" is a project conceived and developed within an ambitious timeframe of less than one day during our internal Hackathon.

Our demonstration offers a hands-on experience that allows developers to:

- Hover over Algolia widgets and immediately view the HTML and JavaScript that brings each widget to life.
- Activate Algolia's AI features through a toggle switch, showcasing enhanced search results and trending items recommendations.

## Getting Started with "Algolia Reveal" 😶‍🌫️

This demo uses the speedy and modern Vite tooling, React for UI rendering, and TypeScript for typed JavaScript code to deliver a high-quality developer experience. Below are the outlined steps and requirements to set up and run the project on your local machine.

### Prerequisites

- Node.js (version 12 or later)
- Yarn or npm package manager

### Setup Instructions 👩‍💻

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/algolia/demo-team-hackathon-demo
   cd algolia-reveal
   ```
2. Install the dependencies.
   ```bash
   yarn # or npm install
   ```
3. Start the development server.
   ```bash
   yarn dev # or npm run dev
   ```
   The development server will start at `http://localhost:3000/`.

### Utilization

Navigate through the Algolia widgets in our demo and click over any element to inspect the code behind it. To experience Algolia's remarkable AI features, simply toggle the switch control displayed within the demo.

### Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/README.md) for React Fast Refresh using Babel.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc/tree/main) for React Fast Refresh using SWC.

### ESLint Configuration

To enhance your development experience, we have set up ESLint with a basic configuration. You are encouraged to expand the configuration:

Adjust `parserOptions` in `.eslintrc.js` with the following to enable type-awareing:

```javascript
{
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json", "./tsconfig.node.json"],
    "tsconfigRootDir": __dirname
  }
}```

For a more stringent linting process, consider these adjustments:

- Modify `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-requiring-type-checking` or `plugin:@typescript-eslint/strict-type-checked`.
- You might also include `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.

Ensure to install `eslint-plugin-react` and adjust the `extends` list accordingly with `plugin:react/recommended` & `plugin:react-hooks/recommended`.

## Support or Contact

Encounter an issue or have any queries regarding the project? Feel free to raise an issue on the repository or reach out to us. We'd love to hear your feedback on "Algolia Reveal."

## Contributing

We truly believe in collaborating and improving together. For any contributions, please fork the repository, make your changes, and create a pull request.

## Credits

Although this demo was crafted in a limited timeframe, it stands on the shoulders of several other Algolia demos and tools. Special thanks to everyone who contributed to those resources. Be sure to check out their incredible work!

---

🌟 Enjoy exploring "Algolia Reveal" and don't forget to spread the word if you find it helpful! Your support is greatly appreciated.

