import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import Layer2 from "../../assets/layer2.svg";
import Logo from "../../assets/logo.svg";
import { colors } from "../../global/theme";
import { TaskStatus } from "../../components/TaskStatus";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { useCallback } from "react";
import { EmptyTasks } from "../../components/EmptyTasks";

export const Home: React.FC = () => {
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
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.content}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
          />
          <TouchableOpacity style={styles.button}>
            <Layer2 />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer}>
          <TaskStatus textColor={colors.blue} status="Criadas" amount="0" />
          <TaskStatus
            textColor={colors.purple}
            status="Concluídas"
            amount="0"
          />
        </View>

        <View style={styles.taskContainer}>
          <FlatList
            data={[]}
            keyExtractor={(item) => item}
            renderItem={(item) => <View></View>}
            ListEmptyComponent={<EmptyTasks />}
          />
        </View>
      </View>
    </View>
  );
};
