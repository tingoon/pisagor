export function preventDefaultFormSubmit(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}

export {
  getFieldErrorMessage,
  isFieldInvalid,
} from "./hooks";
