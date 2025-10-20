import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
	onNext: () => void;
	onBack: () => void;
}

const Feature = ({
	icon,
	title,
	subtitle,
}: {
	icon: any;
	title: string;
	subtitle: string;
}) => (
	<View style={styles.featureCard}>
		<View style={styles.featureIcon}>
			<Ionicons name={icon} size={20} color="#0a7ea4" />
		</View>
		<View style={{ flex: 1 }}>
			<Text style={{ fontWeight: "700", color: "#111" }}>{title}</Text>
			<Text style={{ color: "#6B7280", fontSize: 13 }}>{subtitle}</Text>
		</View>
	</View>
);

const InterviewPrepScreen: React.FC<Props> = ({ onNext, onBack }) => {
	return (
		<View style={styles.root}>
			<View style={styles.center}>
				<View style={{ flexDirection: "row", gap: 20 }}>
					<View style={styles.largeIcon}>
						<Ionicons name="mic-outline" size={40} color="#0a7ea4" />
					</View>
					<View style={styles.largeIcon}>
						<Ionicons name="infinite-outline" size={40} color="#0a7ea4" />
					</View>
				</View>

				<View style={styles.textWrap}>
					<Text style={styles.h1}>Ace Your Interviews, Always Free</Text>
					<Text style={styles.body}>
						Prepare for anything with AI-generated ideal answers and realistic
						mock interviews. Our core analysis tools are always unlimited and
						free for every job seeker.
					</Text>
				</View>

				<View style={{ width: "100%", maxWidth: 440, gap: 12 }}>
					<Feature
						icon="mic-outline"
						title="Mock Interviews"
						subtitle="Practice with AI-powered scenarios"
					/>
					<Feature
						icon="infinite-outline"
						title="Unlimited Access"
						subtitle="Free core tools, forever"
					/>
				</View>
			</View>

			<View style={styles.actions}>
				<Button variant="hero" size="lg" onPress={onNext}>
					Continue to Dashboard
				</Button>
				<Text onPress={onBack} style={styles.link}>
					Back
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20, backgroundColor: "#fff" },
	center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
	largeIcon: {
		width: 112,
		height: 112,
		borderRadius: 28,
		backgroundColor: "#F9FAFB",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#0a7ea4",
		shadowOpacity: 0.2,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 6 },
	},
	textWrap: { gap: 8, maxWidth: 440, paddingHorizontal: 12 },
	h1: { fontSize: 26, fontWeight: "800", color: "#111", textAlign: "center" },
	body: { fontSize: 14, color: "#6B7280", textAlign: "center" },
	featureCard: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#E5E7EB",
		padding: 16,
		borderRadius: 16,
	},
	featureIcon: {
		width: 44,
		height: 44,
		borderRadius: 12,
		backgroundColor: "rgba(10,126,164,0.1)",
		alignItems: "center",
		justifyContent: "center",
	},
	actions: { width: "100%", maxWidth: 440, alignSelf: "center", gap: 12 },
	link: { fontSize: 13, color: "#6B7280", textAlign: "center" },
});

export default InterviewPrepScreen;
