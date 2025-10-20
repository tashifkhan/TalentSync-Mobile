import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	// Force dark theme regardless of system
	const colorScheme = "dark" as const;

	return (
		<ThemeProvider value={DarkTheme}>
			<Stack>
				<Stack.Screen
					name="onboarding/index"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="modal"
					options={{ presentation: "modal", title: "Modal" }}
				/>
			</Stack>
			<StatusBar style="light" />
		</ThemeProvider>
	);
}
