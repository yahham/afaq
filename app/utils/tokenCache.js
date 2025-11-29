import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const createTokenCache = () => {
    return {
        async getToken(key) {
            try {
                const item = await SecureStore.getItemAsync(key);
                if (item) {
                    console.log(`${key} was used 🔐 \n`);
                } else {
                    console.log("No values stored under key: " + key);
                }
                return item;
            } catch (error) {
                console.error("SecureStore get item error: ", error);
                await SecureStore.deleteItemAsync(key);
                return null;
            }
        },
        async saveToken(key, value) {
            try {
                return SecureStore.setItemAsync(key, value);
            } catch (err) {
                return;
            }
        },
    };
};

// SecureStore is not supported on the web, so we export a null cache for web
export const tokenCache =
    Platform.OS !== "web" ? createTokenCache() : undefined;
