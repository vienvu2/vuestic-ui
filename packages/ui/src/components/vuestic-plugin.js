import VaAffix from './vuestic-components/va-affix/VaAffix'
import VaAlert from './vuestic-components/va-alert/VaAlert.vue'
import VaAvatar from './vuestic-components/va-avatar/VaAvatar'
import VaBacktop from './vuestic-components/va-backtop/VaBacktop.vue'
import VaBadge from './vuestic-components/va-badge/VaBadge.vue'
import VaButton from './vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
  from './vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
  from './vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaBreadcrumbs from './vuestic-components/va-breadcrumbs/VaBreadcrumbs.vue'
import VaBreadcrumbsItem from './vuestic-components/va-breadcrumbs/VaBreadcrumbsItem.vue'
import VaCard from './vuestic-components/va-card/VaCard'
import VaCardContent from './vuestic-components/va-card/VaCardContent'
import VaCardTitle from './vuestic-components/va-card/VaCardTitle'
import VaCheckbox from './vuestic-components/va-checkbox/VaCheckbox.vue'
import VaContent from './vuestic-components/va-content/VaContent'
import VaDataTable from './vuestic-components/va-data-table/VaDataTable.vue'
import VaDivider from './vuestic-components/va-divider/VaDivider'

import VaDatePicker from './vuestic-components/va-date-picker/VaDatePicker'

import VaDropdown from './vuestic-components/va-dropdown/VaDropdown'
import VaExpand from './vuestic-components/va-expand/VaExpand'
import VaExpandGroup from './vuestic-components/va-expand-group/VaExpandGroup'
import VaFileUpload from './vuestic-components/va-file-upload/VaFileUpload'
import VaHover from './vuestic-components/va-hover/VaHover'
import VaIcon from './vuestic-components/va-icon/VaIcon'
import VaImage from './vuestic-components/va-image/VaImage'
import VaInnerLoading
  from './vuestic-components/va-inner-loading/VaInnerLoading'
import VaInput from './vuestic-components/va-input/VaInput'
import VaList from './vuestic-components/va-list/VaList'
import VaListItem from './vuestic-components/va-list/VaListItem'
import VaListItemLabel from './vuestic-components/va-list/VaListItemLabel'
import VaListItemSection from './vuestic-components/va-list/VaListItemSection'
import VaListLabel from './vuestic-components/va-list/VaListLabel'
import VaListSeparator from './vuestic-components/va-list/VaListSeparator'
import VaMediumEditor
  from './vuestic-components/va-medium-editor/VaMediumEditor.vue'
import VaModal from './vuestic-components/va-modal/VaModal.vue'
import VaNavbar from './vuestic-components/va-navbar/VaNavbar'
import VaPagination from './vuestic-components/va-pagination/VaPagination.vue'
import VaParallax from './vuestic-components/va-parallax/VaParallax.vue'
import VaPopover from './vuestic-components/va-popover/VaPopover.vue'
import VaPopup
  from './vuestic-components/va-popup/popup/VaPopup.vue'
import VaProgressBar
  from './vuestic-components/va-progress-bar/progress-types/VaProgressBar.vue'
import VaProgressCircle
  from './vuestic-components/va-progress-bar/progress-types/VaProgressCircle.vue'
import VaRadio from './vuestic-components/va-radio/VaRadio'
import VaRating from './vuestic-components/va-rating/VaRating'
import VaScrollbar from './vuestic-components/va-scrollbar/VaScrollbar.vue'
import VaSelect from './vuestic-components/va-select/VaSelect.vue'
import VaSeparator from './vuestic-components/va-card/VaSeparator'
import VaSidebar from './vuestic-components/va-sidebar/VaSidebar'
import VaSlider from './vuestic-components/va-slider/VaSlider.vue'
import VaSwitch from './vuestic-components/va-switch/VaSwitch.vue'
import VaTab from './vuestic-components/va-tabs/VaTab.vue'
import VaTabs from './vuestic-components/va-tabs/VaTabs.vue'
import VaTag from './vuestic-components/va-tag/VaTag.vue'
import VaTimeline from './vuestic-components/va-timeline/VaTimeline'
import VaTimelineItem from './vuestic-components/va-timeline/VaTimelineItem'
import VaTreeCategory from './vuestic-components/va-tree-view/VaTreeCategory'
import VaTreeNode from './vuestic-components/va-tree-view/VaTreeNode'
import VaTreeRoot from './vuestic-components/va-tree-view/VaTreeRoot'
import VaInputWrapper from './vuestic-components/va-input/VaInputWrapper'

import Toasted from './vuestic-mixins/VuesticToasted'

import StickyScroll from './vuestic-directives/StickyScroll'
import VaButtonDropdown from './vuestic-components/va-button-dropdown/VaButtonDropdown'
import { installPlatform } from './vuestic-components/va-popup/install'
import { DropdownPopperPlugin } from './vuestic-components/va-dropdown/dropdown-popover-subplugin'

import { BusPlugin } from 'vue-epic-bus'
import { registerVuesticObject } from './resize-events'
import VaSimplePalettePicker
  from './vuestic-components/va-color-picker/VaSimplePalettePicker'
import VaColorSquare from './vuestic-components/va-color-picker/VaColorSquare'
import VaSliderColorPicker
  from './vuestic-components/va-color-picker/VaSliderColorPicker'
import VaAdvancedColorPicker
  from './vuestic-components/va-color-picker/VaAdvancedColorPicker'
import VaColorPickerInput
  from './vuestic-components/va-color-picker/VaColorPickerInput'
import VaPaletteCustom
  from './vuestic-components/va-color-picker/VaPaletteCustom'
import VaForm
  from './vuestic-components/va-form/VaForm'
import VaOptionList
  from './vuestic-components/va-option-list/VaOptionList'
import VaInfiniteScroll
  from './vuestic-components/va-infinite-scroll/VaInfiniteScroll'
import ToastInstall from './vuestic-components/va-toast/install'

installPlatform()

const VuesticPlugin = {
  install (Vue) {
    [
      VaAffix,
      VaAlert,
      VaAvatar,
      VaBacktop,
      VaBadge,
      VaButton,
      VaButtonGroup,
      VaButtonToggle,
      VaBreadcrumbs,
      VaBreadcrumbsItem,
      VaCard,
      VaCardContent,
      VaCardTitle,
      VaCheckbox,
      VaContent,
      VaDataTable,
      VaDatePicker,
      VaDropdown,
      VaExpand,
      VaExpandGroup,
      VaFileUpload,
      VaHover,
      VaIcon,
      VaImage,
      VaInnerLoading,
      VaInput,
      VaInputWrapper,
      VaList,
      VaListItem,
      VaListItemLabel,
      VaListItemSection,
      VaListLabel,
      VaListSeparator,
      VaMediumEditor,
      VaModal,
      VaNavbar,
      VaPagination,
      VaParallax,
      VaPopover,
      VaPopup,
      VaProgressBar,
      VaProgressBar,
      VaProgressCircle,
      VaRadio,
      VaRating,
      VaScrollbar,
      VaSelect,
      VaSeparator,
      VaSidebar,
      VaSlider,
      VaSwitch,
      VaTab,
      VaTabs,
      VaTag,
      VaTimeline,
      VaTimelineItem,
      VaTreeCategory,
      VaTreeNode,
      VaTreeRoot,
      VaInnerLoading,
      VaSimplePalettePicker,
      VaColorSquare,
      VaSliderColorPicker,
      VaAdvancedColorPicker,
      VaColorPickerInput,
      VaPaletteCustom,
      VaButtonDropdown,
      VaForm,
      VaDivider,
      VaOptionList,
      VaInfiniteScroll,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    registerVuesticObject(Vue)

    Vue.use(BusPlugin)

    Vue.use(DropdownPopperPlugin)

    Vue.use(ToastInstall)

    Vue.mixin(Toasted)

    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
