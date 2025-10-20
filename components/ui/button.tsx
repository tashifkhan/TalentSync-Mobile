import { Colors } from "@/constants/theme";
import React from "react";
import {
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	ViewStyle,
} from "react-native";

type ButtonVariant = "hero" | "primary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
	children: React.ReactNode;
	onPress?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	style?: ViewStyle;
	textStyle?: TextStyle;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onPress,
	variant = "primary",
	size = "md",
	style,
	textStyle,
	disabled,
}) => {
	const { container, text } = getStyles(variant, size, disabled);
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={({ pressed }) => [container, pressed && styles.pressed, style]}
		>
			<Text style={[text, textStyle]}>{children}</Text>
		</Pressable>
	);
};

function getStyles(
	variant: ButtonVariant,
	size: ButtonSize,
	disabled?: boolean
) {
	const isDark = false; // Colors handle theme; Pressable color uses palette only
	const sizes = {
		sm: {
			paddingVertical: 10,
			paddingHorizontal: 14,
			fontSize: 14,
			height: 40,
			radius: 10,
		},
		md: {
			paddingVertical: 12,
			paddingHorizontal: 16,
			fontSize: 16,
			height: 48,
			radius: 12,
		},
		lg: {
			paddingVertical: 16,
			paddingHorizontal: 20,
			fontSize: 18,
			height: 56,
			radius: 14,
		},
	}[size];

	let backgroundColor = Colors.light.tint;
	let borderColor = "transparent";
	let color = "#fff";

	switch (variant) {
		case "hero":
		case "primary":
			backgroundColor = Colors.light.tint;
			color = "#fff";
			break;
		case "outline":
			backgroundColor = "transparent";
			borderColor = "#D1D5DB";
			color = Colors.light.text;
			break;
	}

	if (disabled) {
		backgroundColor = "#A3A3A3";
		color = "#F5F5F5";
	}

	const container: ViewStyle = {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor,
		borderColor,
		borderWidth: variant === "outline" ? 1 : 0,
		borderRadius: sizes.radius,
		height: sizes.height,
		paddingHorizontal: sizes.paddingHorizontal,
		shadowColor: variant === "hero" ? Colors.light.tint : "transparent",
		shadowOpacity: variant === "hero" ? 0.25 : 0,
		shadowRadius: variant === "hero" ? 12 : 0,
		shadowOffset: { width: 0, height: 6 },
		elevation: variant === "hero" ? 3 : 0,
	};

	const text: TextStyle = {
		color,
		fontSize: sizes.fontSize,
		fontWeight: "600",
	};

	return StyleSheet.create({ container, text });
}

const styles = StyleSheet.create({
	pressed: { opacity: 0.9 },
});

export default Button;
