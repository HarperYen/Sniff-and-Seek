import { AuthProvider } from "../context/AuthContext";
import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}