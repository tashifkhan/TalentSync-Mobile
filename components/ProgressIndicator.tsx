import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressIndicatorProps {
	totalSteps: number;
	currentStep: number; // 0-indexed
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
	totalSteps,
	currentStep,
}) => {
	return (
		<View style={styles.container}>
			{Array.from({ length: totalSteps }).map((_, index) => {
				const isActive = index === currentStep;
				const isPast = index < currentStep;
				return (
					<View
						key={index}
						style={[
							styles.dot,
							isActive && styles.dotActive,
							isPast && !isActive && styles.dotPast,
						]}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	},
	dot: { height: 8, width: 8, borderRadius: 999, backgroundColor: "#E5E7EB" },
	dotPast: { backgroundColor: Colors.light.tint, opacity: 0.6 },
	dotActive: {
		backgroundColor: Colors.light.tint,
		width: 28,
		borderRadius: 999,
	},
});

export default ProgressIndicator;
