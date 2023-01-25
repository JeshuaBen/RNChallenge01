import { Text, View } from "react-native";
import { styles } from "./styles";
import { ITaskStatus } from "./types";

export const TaskStatus: React.FC<ITaskStatus> = ({
  textColor,
  amount,
  status,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: `${textColor}`,
        }}
      >
        {status}
      </Text>
      <View style={styles.amountBox}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
};
