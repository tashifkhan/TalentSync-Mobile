import Button from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
	onBack: () => void;
}

const SocialBtn = ({
	icon,
	label,
}: {
	icon: React.ReactNode;
	label: string;
}) => (
	<View style={styles.socialBtn}>
		{icon}
		<Text style={{ fontWeight: "600", color: "#111" }}>{label}</Text>
	</View>
);

const SignUpScreen: React.FC<Props> = ({ onBack }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	return (
		<View style={styles.root}>
			<View style={styles.center}>
				<View style={styles.iconWrap}>
					<Ionicons name="person-circle-outline" size={48} color="#0a7ea4" />
				</View>

				<View style={styles.textWrap}>
					<Text style={styles.h1}>Ready to Transform Your Job Search?</Text>
					<Text style={styles.body}>
						Join thousands leveraging AI for career success.
					</Text>
				</View>

				<View style={{ width: "100%", maxWidth: 440, gap: 12 }}>
					<View style={styles.inputWrap}>
						<Ionicons
							name="mail-outline"
							size={18}
							color="#6B7280"
							style={{ marginRight: 8 }}
						/>
						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder="Email Address"
							autoCapitalize="none"
							keyboardType="email-address"
							style={styles.input}
							placeholderTextColor="#9CA3AF"
						/>
					</View>
					<View style={styles.inputWrap}>
						<Ionicons
							name="lock-closed-outline"
							size={18}
							color="#6B7280"
							style={{ marginRight: 8 }}
						/>
						<TextInput
							value={password}
							onChangeText={setPassword}
							placeholder="Password"
							secureTextEntry
							style={styles.input}
							placeholderTextColor="#9CA3AF"
						/>
					</View>
					<View style={styles.inputWrap}>
						<Ionicons
							name="lock-closed-outline"
							size={18}
							color="#6B7280"
							style={{ marginRight: 8 }}
						/>
						<TextInput
							value={confirm}
							onChangeText={setConfirm}
							placeholder="Confirm Password"
							secureTextEntry
							style={styles.input}
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					<Button variant="hero" size="lg">
						Sign Up
					</Button>

					<View style={styles.dividerWrap}>
						<View style={styles.divider} />
						<Text
							style={{ color: "#6B7280", fontSize: 12, marginHorizontal: 8 }}
						>
							OR
						</Text>
						<View style={styles.divider} />
					</View>

					<View style={{ gap: 10 }}>
						<SocialBtn
							icon={
								<Ionicons
									name="logo-google"
									size={18}
									color="#ECEDEE"
									style={{ marginRight: 8 }}
								/>
							}
							label="Continue with Google"
						/>
						<SocialBtn
							icon={
								<Ionicons
									name="logo-github"
									size={18}
									color="#ECEDEE"
									style={{ marginRight: 8 }}
								/>
							}
							label="Continue with GitHub"
						/>
						<SocialBtn
							icon={
								<Ionicons
									name="logo-linkedin"
									size={18}
									color="#ECEDEE"
									style={{ marginRight: 8 }}
								/>
							}
							label="Continue with LinkedIn"
						/>
					</View>

					<Text style={{ textAlign: "center", color: "#9BA1A6", fontSize: 13 }}>
						Already have an account?{" "}
						<Text style={{ color: "#0a7ea4", fontWeight: "600" }}>Log In</Text>
					</Text>
				</View>
			</View>

			<Text onPress={onBack} style={[styles.link, { alignSelf: "center" }]}>
				Back
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20, backgroundColor: "#151718" },
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 16,
		width: "100%",
	},
	iconWrap: {
		width: 96,
		height: 96,
		borderRadius: 24,
		backgroundColor: "#111418",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#0a7ea4",
		shadowOpacity: 0.2,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 6 },
	},
	textWrap: { gap: 6, maxWidth: 440, paddingHorizontal: 12 },
	h1: {
		fontSize: 24,
		fontWeight: "800",
		color: "#ECEDEE",
		textAlign: "center",
	},
	body: { fontSize: 14, color: "#9BA1A6", textAlign: "center" },
	inputWrap: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#111418",
		borderWidth: 1,
		borderColor: "#23262B",
		paddingHorizontal: 12,
		borderRadius: 12,
		height: 56,
	},
	input: { flex: 1, color: "#ECEDEE", fontSize: 16 },
	dividerWrap: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 6,
	},
	divider: { height: 1, backgroundColor: "#23262B", flex: 1 },
	socialBtn: {
		height: 48,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#23262B",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 8,
	},
	link: { fontSize: 13, color: "#9BA1A6" },
});

export default SignUpScreen;
