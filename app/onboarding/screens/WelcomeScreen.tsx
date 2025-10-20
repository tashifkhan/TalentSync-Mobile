import { FadeSlideIn, Pulse } from "@/components/animations";
import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
	onNext: () => void;
	onSkip: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onNext, onSkip }) => {
	return (
		<View style={styles.root}>
			<View style={styles.center}>
				<FadeSlideIn direction="up" delay={50}>
					<View style={styles.logoWrap}>
						<Text style={styles.logoText}>TalentSync </Text>
						<View style={styles.aiWrap}>
							<Text style={styles.aiText}>AI</Text>
							<Ionicons
								name="sparkles"
								size={28}
								color="#fff"
								style={{ marginLeft: 6 }}
							/>
						</View>
					</View>
				</FadeSlideIn>

				{/* Simple hero shapes with pulse */}
				<Pulse>
					<View style={styles.hero}>
						<View style={styles.centerGlow} />
						<View style={[styles.square, { left: 16, top: 16 }]} />
						<View style={[styles.square, { right: 16, top: 16 }]} />
						<View style={[styles.square, { left: 48, bottom: 16 }]} />
						<View style={[styles.square, { right: 48, bottom: 16 }]} />
						<View style={styles.centerSquare}>
							<Ionicons name="sparkles" size={32} color="#fff" />
						</View>
					</View>
				</Pulse>

				<FadeSlideIn delay={150}>
					<View style={styles.textWrap}>
						<Text style={styles.h1}>Unlock Your Career Potential with AI</Text>
						<Text style={styles.subtitle}>
							From chaotic applications to perfectly matched opportunities.
						</Text>
						<Text style={styles.body}>
							TalentSync AI transforms your job search by providing intelligent
							insights, personalized tools, and a clear path to your next role.
							Say goodbye to the endless resume grind.
						</Text>
					</View>
				</FadeSlideIn>
			</View>

			<FadeSlideIn delay={250} direction="up">
				<View style={styles.actions}>
					<Button variant="hero" size="lg" onPress={onNext}>
						Get Started
					</Button>
					<Text onPress={onSkip} style={styles.skip}>
						Already have an account?{" "}
						<Text style={{ color: "#67E8F9" }}>Log In</Text>
					</Text>
				</View>
			</FadeSlideIn>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20, backgroundColor: "#151718" },
	center: { flex: 1, alignItems: "center", justifyContent: "center" },
	logoWrap: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
	logoText: { fontSize: 40, fontWeight: "800", color: "#ECEDEE" },
	aiWrap: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#0a7ea4",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 999,
	},
	aiText: { color: "#fff", fontSize: 28, fontWeight: "800" },
	hero: {
		width: "100%",
		maxWidth: 440,
		height: 180,
		position: "relative",
		marginVertical: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	centerGlow: {
		position: "absolute",
		width: 96,
		height: 96,
		borderRadius: 48,
		backgroundColor: "rgba(10,126,164,0.25)",
	},
	square: {
		position: "absolute",
		width: 48,
		height: 48,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "rgba(103,232,249,0.35)",
	},
	centerSquare: {
		position: "absolute",
		width: 64,
		height: 64,
		borderRadius: 14,
		backgroundColor: "#0a7ea4",
		alignItems: "center",
		justifyContent: "center",
	},
	textWrap: { gap: 10, paddingHorizontal: 12, maxWidth: 440 },
	h1: {
		fontSize: 28,
		fontWeight: "800",
		color: "#ECEDEE",
		textAlign: "center",
	},
	subtitle: { fontSize: 18, color: "#9BA1A6", textAlign: "center" },
	body: { fontSize: 14, color: "#9BA1A6", textAlign: "center" },
	actions: { width: "100%", maxWidth: 440, alignSelf: "center", gap: 12 },
	skip: { textAlign: "center", fontSize: 13, color: "#9BA1A6" },
});

export default WelcomeScreen;
