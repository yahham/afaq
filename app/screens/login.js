import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
import app from "../../assets/images/login-01.jpg";
import google from "../../assets/images/google.png";

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={app} style={styles.heroImage} />

            <View style={styles.contentCard}>
                <Text style={styles.appName}>Afaq</Text>

                <Text style={styles.tagline}>
                    Master Programming Through{"\n"}Self-Regulated Learning
                </Text>

                <TouchableOpacity style={styles.signInButton}>
                    <Image source={google} style={styles.googleIcon} />
                    <Text style={styles.signInText}>Sign In with Google</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Start your learning journey today
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    heroImage: {
        width: "100%",
        height: 380,
        resizeMode: "cover",
    },
    contentCard: {
        flex: 1,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingHorizontal: 25,
        paddingTop: 40,
        alignItems: "center",
    },
    appName: {
        fontSize: 48,
        color: Colors.textInverse,
        fontFamily: "Inter-ExtraBold",
        marginBottom: 15,
    },
    tagline: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.textInverse,
        fontFamily: "Inter-Regular",
        lineHeight: 26,
        marginBottom: 50,
        opacity: 0.95,
    },
    signInButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.accentLight,
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        minWidth: 280,
        justifyContent: "center",
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    signInText: {
        fontSize: 17,
        color: Colors.textPrimary,
        fontFamily: "Inter-SemiBold",
    },
    footerText: {
        marginTop: 30,
        fontSize: 14,
        color: Colors.textInverse,
        fontFamily: "Inter-Light",
        opacity: 0.8,
    },
});
