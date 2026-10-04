import { PhoneInput } from "@pisagor/vue/phone-input";

export function CustomPopup() {
  return {
    components: { PhoneInput },
    setup() {
      const popupProps = {
        side: "bottom",
        sideOffset: 8,
      };

      return { popupProps };
    },
    template:
      '<PhoneInput :popup-props="popupProps" placeholder="Enter phone number" />',
  };
}
