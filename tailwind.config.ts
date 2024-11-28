
import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'
import daisyui from "daisyui";

export default <Partial<Config>>{
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["coffee", "fantasy"],
  },

}

