export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modalType, props) => ({
  type: OPEN_MODAL,
  modalType,
  props
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});