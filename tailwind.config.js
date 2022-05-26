module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#131112",
          secondary: "#60656f",
          accent: "#279af1",
          neutral: "#F7F7FF",
          dark:'#1d283a',
          info: "#1d283a",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

/* Object */
// {
//   "Ghost White":"#F7F7FF",
//   "Tuscany":"#c49991",
//   "Dodger Blue":"#279af1",
//   "Black Coral":"#60656f",
//   "Smoky Black":"#131112"
// }
