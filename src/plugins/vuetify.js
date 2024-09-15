import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  VApp,
  VAppBar,
  VContainer,
  VRow,
  VCol,
  VSwitch,
  VIcon,
  VFooter,
  VCard,
  VCardText,
  VCardSubtitle,
  VList,
  VListItem,
  VListItemIcon,
  VListItemTitle,
  VBtn,
  VBtnToggle,
  VResponsive,
  VHover
} from 'vuetify/components'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components: {
    VApp,
    VAppBar,
    VContainer,
    VRow,
    VCol,
    VSwitch,
    VIcon,
    VFooter,
    VCard,
    VCardText,
    VCardSubtitle,
    VList,
    VListItem,
    VListItemIcon,
    VListItemTitle,
    VBtn,
    VBtnToggle,
    VResponsive,
    VHover
  }
})