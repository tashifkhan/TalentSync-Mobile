import { ProgressIndicator } from "@/components/ProgressIndicator";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CareerPathingScreen from "./screens/CareerPathingScreen";
import InterviewPrepScreen from "./screens/InterviewPrepScreen";
import ResumeAnalysisScreen from "./screens/ResumeAnalysisScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const { width } = Dimensions.get("window");

export default function OnboardingIndex() {
	const [current, setCurrent] = useState(0);
	const total = 5;

	const next = () => current < total - 1 && setCurrent((c) => c + 1);
	const back = () => current > 0 && setCurrent((c) => c - 1);
	const skip = () => setCurrent(total - 1);

	return (
		<SafeAreaView style={styles.safe}>
			{/* Progress Indicator on feature screens (1-3) */}
			{current > 0 && current < 4 && (
				<View style={styles.progressWrap}>
					<ProgressIndicator totalSteps={3} currentStep={current - 1} />
				</View>
			)}

			<View style={styles.container}>
				{current === 0 && <WelcomeScreen onNext={next} onSkip={skip} />}
				{current === 1 && (
					<ResumeAnalysisScreen onNext={next} onBack={back} onSkip={skip} />
				)}
				{current === 2 && (
					<CareerPathingScreen onNext={next} onBack={back} onSkip={skip} />
				)}
				{current === 3 && <InterviewPrepScreen onNext={next} onBack={back} />}
				{current === 4 && <SignUpScreen onBack={back} />}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#151718" },
	progressWrap: {
		position: "absolute",
		top: 16,
		left: 0,
		right: 0,
		zIndex: 10,
		alignItems: "center",
	},
	container: { flex: 1 },
});
