import {
  buttonRecipe,
  dialogOverlayRecipe,
  accordionContentRecipe,
  accordionHeaderRecipe,
  accordionItemRecipe,
  accordionRootRecipe,
  accordionTriggerRecipe,
  checkboxContainerRecipe,
  checkboxIndicatorRecipe,
  checkboxLabelRecipe,
  checkboxRootRecipe,
  dialogCloseRecipe,
  dialogContentRecipe,
  dialogDescriptionRecipe,
  dialogHeaderRecipe,
  dialogTitleRecipe,
  verticalScrollRecipe,
} from '@/components/recipes'

import {
  dropdownArrowRecipe,
  dropdownContentRecipe,
  dropdownItemCheckedIndicatorRecipe,
  dropdownItemRecipe,
  dropdownLabelRecipe,
  dropdownRightSlotRecipe,
  dropdownSeparatorRecipe,
} from '@/components/Dropdowns/Dropdown/styles'
import {
  inputContainerRecipe,
  inputIconButtonRecipe,
  inputIconRecipe,
  inputRecipe,
} from '@/components/Forms/Input/styles'
import {
  labelContainerRecipe,
  labelRequiredIndicatorRecipe,
} from '@/components/Forms/Label/styles'
import { helperMessageContainerRecipe } from '@/components/Forms/HelperMessage/styles'
import { errorMessageContainerRecipe } from '@/components/Forms/ErrorMessage/styles'
import {
  formControlContainerRecipe,
  formControlMessageContainerRecipe,
} from '@/components/Forms/FormControl/styles'

export const recipes = {
  button: buttonRecipe,

  dialogOverlay: dialogOverlayRecipe,
  dialogContent: dialogContentRecipe,
  dialogTitle: dialogTitleRecipe,
  dialogDescription: dialogDescriptionRecipe,
  dialogHeader: dialogHeaderRecipe,
  dialogClose: dialogCloseRecipe,

  verticalScroll: verticalScrollRecipe,

  accordionRoot: accordionRootRecipe,
  accordionItem: accordionItemRecipe,
  accordionHeader: accordionHeaderRecipe,
  accordionTrigger: accordionTriggerRecipe,
  accordionContent: accordionContentRecipe,

  checkboxRoot: checkboxRootRecipe,
  checkboxIndicator: checkboxIndicatorRecipe,
  checkboxLabel: checkboxLabelRecipe,
  checkboxContainer: checkboxContainerRecipe,

  dropdownContent: dropdownContentRecipe,
  dropdownArrow: dropdownArrowRecipe,
  dropdownItem: dropdownItemRecipe,
  dropdownLabel: dropdownLabelRecipe,
  dropdownSeparator: dropdownSeparatorRecipe,
  dropdownItemCheckedIndicator: dropdownItemCheckedIndicatorRecipe,
  dropdownRightSlot: dropdownRightSlotRecipe,

  inputContainer: inputContainerRecipe,
  inputElement: inputRecipe,
  inputIcon: inputIconRecipe,
  inputIconButton: inputIconButtonRecipe,

  labelContainer: labelContainerRecipe,
  labelRequiredIndicator: labelRequiredIndicatorRecipe,

  helperMessageContainer: helperMessageContainerRecipe,
  errorMessageContainer: errorMessageContainerRecipe,

  formControlContainer: formControlContainerRecipe,
  formControlMessageContainer: formControlMessageContainerRecipe,
}
