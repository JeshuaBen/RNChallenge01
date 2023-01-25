import { Text, View } from "react-native";

import Clipboard from "../../assets/clipboard.svg";
import { styles } from "./styles";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useCallback } from "react";
import { colors } from "../../global/theme";

export const EmptyTasks: React.FC = () => {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Clipboard />
      <Text
        style={{
          color: `${colors.gray300}`,
          fontFamily: "Inter_700Bold",
          marginTop: 16,
        }}
      >
        Você ainda não tem tarefas cadastradas{" "}
      </Text>
      <Text
        style={{
          color: `${colors.gray300}`,
        }}
      >
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
