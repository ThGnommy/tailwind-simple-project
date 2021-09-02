module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "svg-bkg": "hsl(225, 100%, 94%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "pale-blue": "hsl(225, 100%, 94%)",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      white: "#fff",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "pale-blue": "hsl(225, 100%, 94%)",
    },
    fontFamily: {
      body: ["ui-sans-serif", "Red Hat Display"],
    },
    boxShadow: {
      blue: "0px 10px 30px -4px rgba(56,41,224,0.45)",
      black: "0px 35px 40px -20px rgba(56,41,224,0.20)",
    },
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('./images/pattern-background-desktop.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
