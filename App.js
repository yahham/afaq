import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Login from "./app/screens/login";
import Colors from "./app/utils/Colors";

export default function App() {
    const [loaded, error] = useFonts({
        // Logo & Major Headlines
        "Inter-ExtraBold": require("./assets/fonts/Inter_28pt-ExtraBold.ttf"),

        // Headlines & UI Titles
        "Inter-Bold": require("./assets/fonts/Inter_24pt-Bold.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter_24pt-SemiBold.ttf"),

        // Body Text & Primary UI
        "Inter-Medium": require("./assets/fonts/Inter_18pt-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter_18pt-Regular.ttf"),

        // Supporting Text
        "Inter-Light": require("./assets/fonts/Inter_18pt-Light.ttf"),
    });

    return (
        <View style={styles.container}>
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});
