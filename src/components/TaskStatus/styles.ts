import { StyleSheet } from "react-native";
import { colors } from "../../global/theme";

export const styles = StyleSheet.create({
  textStatus: {
    fontSize: 14,
  },

  amountBox: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: colors.gray400,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    paddingHorizontal: 8,
  },
});
