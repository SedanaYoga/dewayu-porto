// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary_bg: string
      font_color1: string
      headerColor_1: string
      headerColor_2: string
      borderRadius1: string
    }
  }
}
