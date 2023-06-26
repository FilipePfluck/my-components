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
}
