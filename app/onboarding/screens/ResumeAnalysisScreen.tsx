import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
	onNext: () => void;
	onBack: () => void;
	onSkip: () => void;
}

const Row = ({
	icon,
	title,
	subtitle,
	color,
}: {
	icon: any;
	title: string;
	subtitle: string;
	color: string;
}) => (
	<View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
		<Ionicons name={icon} size={20} color={color} style={{ marginTop: 2 }} />
		<View>
			<Text style={{ fontSize: 14, fontWeight: "600", color: "#111" }}>
				{title}
			</Text>
			<Text style={{ fontSize: 12, color: "#6B7280" }}>{subtitle}</Text>
		</View>
	</View>
);

const ResumeAnalysisScreen: React.FC<Props> = ({ onNext, onBack, onSkip }) => {
	return (
		<View style={styles.root}>
			<View style={styles.center}>
				<View style={styles.iconWrap}>
					<Ionicons name="document-text-outline" size={48} color="#0a7ea4" />
				</View>

				<View style={styles.card}>
					<View style={{ gap: 12 }}>
						<Row
							icon="checkmark-circle"
							title="Strong action verbs detected"
							subtitle="Your resume uses impactful language"
							color="#0a7ea4"
						/>
						<Row
							icon="alert-circle"
							title="Missing key skills for target role"
							subtitle="Add: Python, AWS, Docker"
							color="#EAB308"
						/>
						<Row
							icon="checkmark-circle"
							title="ATS-friendly formatting"
							subtitle="92% compatibility score"
							color="#0a7ea4"
						/>
					</View>
				</View>

				<View style={styles.textWrap}>
					<Text style={styles.h1}>Master Your Resume, Beat the Bots</Text>
					<Text style={styles.body}>
						Our AI provides instant, actionable feedback to optimize your
						resume. Craft powerful, ATS-friendly documents that recruiters
						actually see.
					</Text>
				</View>
			</View>

			<View style={styles.actions}>
				<Button variant="hero" size="lg" onPress={onNext}>
					Next
				</Button>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text onPress={onBack} style={styles.link}>
						Back
					</Text>
					<Text onPress={onSkip} style={styles.link}>
						Skip
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20, backgroundColor: "#fff" },
	center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
	iconWrap: {
		width: 128,
		height: 128,
		borderRadius: 28,
		backgroundColor: "#F9FAFB",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#0a7ea4",
		shadowOpacity: 0.2,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 6 },
	},
	card: {
		width: "100%",
		maxWidth: 440,
		borderRadius: 16,
		backgroundColor: "#fff",
		padding: 16,
		borderWidth: 1,
		borderColor: "#E5E7EB",
	},
	textWrap: { gap: 8, maxWidth: 440, paddingHorizontal: 12 },
	h1: { fontSize: 26, fontWeight: "800", color: "#111", textAlign: "center" },
	body: { fontSize: 14, color: "#6B7280", textAlign: "center" },
	actions: { width: "100%", maxWidth: 440, alignSelf: "center", gap: 12 },
	link: { fontSize: 13, color: "#6B7280" },
});

export default ResumeAnalysisScreen;
