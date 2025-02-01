// tailwind.config.js
module.exports = {
  // ... existing configuration ...
  plugins: [
    function ({ addVariant }) {
      addVariant("dark", "&:where(.dark, .dark *)");
    },
  ],
};
