import { View } from "react-native";
import Login from "@/components/Login";
import { auth } from "@/configs/FireBaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user?
    <Redirect href={'/(tabs)mytrip'}/>:
    <Login/>
    }
    </View>
  );
}
