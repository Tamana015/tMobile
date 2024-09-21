import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = '@access_token';

export const storeAccessToken = async (token) => {
    try {
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
    } catch (error) {
        console.error('Error storing access token:', error);
    }
};

export const getAccessToken = async () => {
    try {
        const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        return token;
    } catch (error) {
        console.error('Error retrieving access token:', error);
        return null;
    }
};

export const removeAccessToken = async () => {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    } catch (error) {
        console.error('Error removing access token:', error);
    }
};
