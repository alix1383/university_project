
import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'
import daisyui from "daisyui";

export default <Partial<Config>>{
  theme: {

    extend: {
      
      fontFamily: {
        saoSans: ['Audiowide', 'sans-serif'],
      },

      boxShadow: {
        'inline-xl': 'inset 0px 0px 10px rgba(0,0,0,.300)',
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["coffee", "fantasy"],
    
  },

}

