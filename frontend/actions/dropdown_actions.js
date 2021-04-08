export const ACTIVATE_DROPDOWN = "ACTIVATE_DROPDOWN";
export const CLEAR_DROPDOWN = "CLEAR_DROPDOWN";

export const activateDropdown = dropdown => ({
  type: ACTIVATE_DROPDOWN,
  dropdown
});

export const clearDropdown = () => ({
  type: CLEAR_DROPDOWN
});