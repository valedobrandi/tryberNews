/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import flowbite from "flowbite-react/tailwind";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif']
    }
  },
  plugins: [flowbite.plugin(),],
})