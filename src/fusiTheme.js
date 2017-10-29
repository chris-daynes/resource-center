/**
 * More info here: http://www.material-ui.com/#/customization/themes
**/

import {
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors'

/* When needed add { darken, emphasize, lighten } to the next import */

import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
/* import typography from 'material-ui/styles/typography' */

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#21412a',
    primary2Color: '#21412a',
    primary3Color: grey400,
    accent1Color: '#ffb41f',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#21412a',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  /*
    * What style you can edit to components from theme...
    * Source: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
    */
  appBar: {
    // color: palette.primary1Color,
    // textColor: palette.alternateTextColor,
    // height: spacing.desktopKeylineIncrement,
    // titleFontWeight: typography.fontWeightNormal,
    padding: 24 // Change this value to change the padding right and left of the AppBar
  }
}
