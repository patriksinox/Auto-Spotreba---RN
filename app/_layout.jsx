import { Stack } from "expo-router/stack";
import GlobalProvider from "../context/GlobalProvider";

export default function AppLayout() {
  return (
    <>
      <GlobalProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </GlobalProvider>
    </>
  );
}
