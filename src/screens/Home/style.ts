import { StyleSheet } from "react-native";
import { colors } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },

  header: {
    height: 173,
    width: "100%",
    backgroundColor: colors.gray700,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    position: "relative",
    padding: 24,
    alignItems: "center",
  },

  formWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: -30,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray700,
    backgroundColor: colors.gray500,
    borderRadius: 6,
  },
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueDark,
    marginLeft: 4,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    color: colors.gray100,
  },
  statusContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.gray500,
    borderStyle: "solid",
    width: "100%",
  },
});
