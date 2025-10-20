import React, { useEffect, useRef } from "react";
import { Animated, Easing, ViewStyle } from "react-native";

type Direction = "up" | "down" | "left" | "right";

interface FadeSlideInProps {
	children: React.ReactNode;
	delay?: number;
	duration?: number;
	distance?: number;
	direction?: Direction;
	style?: ViewStyle | ViewStyle[];
}

export const FadeSlideIn: React.FC<FadeSlideInProps> = ({
	children,
	delay = 0,
	duration = 450,
	distance = 20,
	direction = "right",
	style,
}) => {
	const opacity = useRef(new Animated.Value(0)).current;
	const translate = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		// initialize offset based on direction
		const offset =
			direction === "right" || direction === "down" ? distance : -distance;
		translate.setValue(offset);
		Animated.parallel([
			Animated.timing(opacity, {
				toValue: 1,
				duration,
				delay,
				useNativeDriver: true,
				easing: Easing.out(Easing.quad),
			}),
			Animated.timing(translate, {
				toValue: 0,
				duration,
				delay,
				useNativeDriver: true,
				easing: Easing.out(Easing.quad),
			}),
		]).start();
	}, [delay, duration, distance, direction, opacity, translate]);

	const transformKey =
		direction === "left" || direction === "right" ? "translateX" : "translateY";

	return (
		<Animated.View
			style={[
				{ opacity, transform: [{ [transformKey]: translate }] } as any,
				style,
			]}
		>
			{children}
		</Animated.View>
	);
};

interface PulseProps {
	children: React.ReactNode;
	minScale?: number;
	maxScale?: number;
	duration?: number;
	delay?: number;
}

export const Pulse: React.FC<PulseProps> = ({
	children,
	minScale = 0.95,
	maxScale = 1.05,
	duration = 1400,
	delay = 0,
}) => {
	const scale = useRef(new Animated.Value(minScale)).current;
	useEffect(() => {
		const loop = Animated.loop(
			Animated.sequence([
				Animated.timing(scale, {
					toValue: maxScale,
					duration,
					useNativeDriver: true,
					easing: Easing.inOut(Easing.quad),
				}),
				Animated.timing(scale, {
					toValue: minScale,
					duration,
					useNativeDriver: true,
					easing: Easing.inOut(Easing.quad),
				}),
			]),
			{ resetBeforeIteration: true }
		);
		const timer = setTimeout(() => loop.start(), delay);
		return () => {
			clearTimeout(timer);
			loop.stop();
		};
	}, [scale, minScale, maxScale, duration, delay]);

	return (
		<Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>
	);
};
