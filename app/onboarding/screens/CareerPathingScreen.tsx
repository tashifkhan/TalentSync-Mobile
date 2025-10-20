import { FadeSlideIn } from "@/components/animations";
import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
	onNext: () => void;
	onBack: () => void;
	onSkip: () => void;
}

const Pill = ({ label }: { label: string }) => (
	<View style={styles.pill}>
		<Text style={{ color: "#111" }}>{label}</Text>
	</View>
);

const CareerPathingScreen: React.FC<Props> = ({ onNext, onBack, onSkip }) => {
	return (
		<View style={styles.root}>
			<View style={styles.center}>
				{/* Icon collage */}
				<FadeSlideIn direction="up" delay={50}>
					<View style={styles.collage}>
						<View style={[styles.tile, styles.tileCenter]}>
							<Ionicons name="compass-outline" size={40} color="#67E8F9" />
						</View>
						<View style={[styles.tile, styles.tileLeft]}>
							<Ionicons
								name="document-text-outline"
								size={32}
								color="#67E8F9"
							/>
						</View>
						<View style={[styles.tile, styles.tileRight]}>
							<Ionicons name="mail-outline" size={32} color="#67E8F9" />
						</View>
						<View style={[styles.tile, styles.tileBottom]}>
							<Ionicons name="pricetag-outline" size={32} color="#67E8F9" />
						</View>
					</View>
				</FadeSlideIn>

				<FadeSlideIn delay={140}>
					<View style={styles.textWrap}>
						<Text style={styles.h1}>Chart Your Course & Command Attention</Text>
						<Text style={styles.body}>
							Discover ideal job fields with AI-powered predictions. Generate
							custom resumes, personalized cold emails, and impactful LinkedIn
							content that gets you noticed.
						</Text>
					</View>
				</FadeSlideIn>

				<FadeSlideIn delay={220}>
					<View style={styles.pillsWrap}>
						<Pill label="Career Predictions" />
						<Pill label="Custom Resumes" />
						<Pill label="Cold Emails" />
						<Pill label="LinkedIn Posts" />
					</View>
				</FadeSlideIn>
			</View>

			<FadeSlideIn delay={260} direction="up">
				<View style={styles.actions}>
					<Button variant="hero" size="lg" onPress={onNext}>
						Next
					</Button>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text onPress={onBack} style={styles.link}>
							Back
						</Text>
						<Text onPress={onSkip} style={styles.link}>
							Skip
						</Text>
					</View>
				</View>
			</FadeSlideIn>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20, backgroundColor: "#151718" },
	center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
	collage: { width: "100%", maxWidth: 360, height: 180, marginBottom: 8 },
	tile: {
		position: "absolute",
		width: 72,
		height: 72,
		borderRadius: 16,
		backgroundColor: "#111418",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#0a7ea4",
		shadowOpacity: 0.15,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 4 },
	},
	tileCenter: {
		left: "50%",
		top: 8,
		marginLeft: -36,
		borderColor: "rgba(103,232,249,0.3)",
		borderWidth: 1,
	},
	tileLeft: { left: 24, top: 54 },
	tileRight: { right: 24, top: 54 },
	tileBottom: { left: "50%", bottom: 0, marginLeft: -36 },
	textWrap: { gap: 8, maxWidth: 440, paddingHorizontal: 12 },
	h1: {
		fontSize: 26,
		fontWeight: "800",
		color: "#ECEDEE",
		textAlign: "center",
	},
	body: { fontSize: 14, color: "#9BA1A6", textAlign: "center" },
	pillsWrap: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		justifyContent: "center",
		maxWidth: 440,
	},
	pill: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		borderRadius: 999,
		backgroundColor: "#111418",
		borderWidth: 1,
		borderColor: "rgba(103,232,249,0.2)",
	},
	actions: { width: "100%", maxWidth: 440, alignSelf: "center", gap: 12 },
	link: { fontSize: 13, color: "#9BA1A6" },
});

export default CareerPathingScreen;
