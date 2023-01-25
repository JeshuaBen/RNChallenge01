import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import Layer2 from "../../assets/layer2.svg";
import { colors } from "../../global/theme";
import { TaskStatus } from "../../components/TaskStatus";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
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
      </View>
    </View>
  );
};
