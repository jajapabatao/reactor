import { StyleSheet } from "react-native";

export const COLOR = {
  STATUS_BAR: "#040207",
  BACKGROUND: "#090B10",
  HEADER_BACKGROUND: "#040207",
  HEADER_TINT: "#ffffff",
  TEXT: "#ffffff",
  INPUT_TEXT: "#ffffff",
  INPUT_PLACEHOLDER: "#ffffff77",
  INPUT_BACKGROUND: "#0F111A",
  BUTTON_BACKGROUND: "#6200EA",
  BUTTON_TEXT: "#ffffff",
  ERROR_TEXT: "#FF5370",
  ICON: "#8F93A2"
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    padding: 16
  }
});

export default Styles;
