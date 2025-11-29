import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Login from "./app/screens/login";
import Colors from "./app/utils/Colors";
import { tokenCache } from "./app/utils/tokenCache"; // Import the cache we created

// Get key from .env
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error(
        "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        "Inter-ExtraBold": require("./assets/fonts/Inter_28pt-ExtraBold.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter_24pt-Bold.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter_24pt-SemiBold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter_18pt-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter_18pt-Regular.ttf"),
        "Inter-Light": require("./assets/fonts/Inter_18pt-Light.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={CLERK_PUBLISHABLE_KEY}
        >
            <View style={styles.container}>
                {/* Content shown to users who are NOT logged in */}
                <SignedOut>
                    <Login />
                </SignedOut>

                {/* Content shown to users who ARE logged in */}
                <SignedIn>
                    {/* Replace this View with your Home Screen Component later */}
                    <View style={styles.loggedInContainer}>
                        <Text style={styles.welcomeText}>Welcome to Afaq!</Text>
                        <Text>You are successfully signed in.</Text>
                        {/* We will add a SignOut button here strictly for testing */}
                        <SignOutButton />
                    </View>
                </SignedIn>
            </View>
        </ClerkProvider>
    );
}

// Temporary SignOut button component for testing
import { useAuth } from "@clerk/clerk-expo";
const SignOutButton = () => {
    const { signOut } = useAuth();
    return (
        <Text
            onPress={() => signOut()}
            style={{ marginTop: 20, color: "blue", fontWeight: "bold" }}
        >
            Sign Out
        </Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    loggedInContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 24,
        fontFamily: "Inter-Bold",
        marginBottom: 10,
    },
});
