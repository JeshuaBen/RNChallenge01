import { Text, View } from "react-native";
import { styles } from "./styles";
import { ITaskStatus } from "./types";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { colors } from "../../global/theme";

export const TaskStatus: React.FC<ITaskStatus> = ({
  textColor,
  amount,
  status,
}) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
      }}
      onLayout={onLayoutRootView}
    >
      <Text
        style={{
          color: `${textColor}`,
          fontFamily: "Inter_700Bold",
        }}
      >
        {status}
      </Text>
      <View style={styles.amountBox}>
        <Text
          style={{
            color: colors.gray200,
            fontFamily: "Inter_700Bold",
          }}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};
