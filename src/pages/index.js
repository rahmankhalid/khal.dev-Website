import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#000000"
			height="350px"
			sm-height="600px"
			md-height="500px"
			quarkly-title="Header"
		>
			<Components.MainNavigationTopBar>
				<Override slot="menuOverride1" font="--lead">
					Home
				</Override>
				<Override slot="menuOverride2" font="--lead" />
			</Components.MainNavigationTopBar>
			<Text
				display="inline"
				font="normal 500 42px/1.2 --fontFamily-googlePoppins"
				color="#FFF"
				text-align="left"
				position="relative"
				top="50px"
				bottom="50px"
				sm-text-align="center"
				md-text-align="center"
			>
				Mobile app developer, software designer &
				<br />
				creative thinker.
			</Text>
		</Section>
		<Section
			background="--color-dark"
			padding="64px 0"
			color="#000000"
			width="100%"
			quarkly-title="Projects"
		>
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0 0 10px 0" width="100%">
				{"    "}
				<StackItem
					width="68%"
					display="flex"
					background="#e4e6f1"
					min-width="50%"
					overflow-y="visible"
					margin="0 0 0 0"
					sm-width="100%"
					sm-height="300px"
					md-width="100%"
					md-margin="0 0 20px 0"
					sm-margin="0 0 0 0"
				>
					{"        "}
					<Image height="100%" width="100%" src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Rectangle%20372(1).png?v=2021-03-29T03:56:52.433Z" padding="0 40px 0 40px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="29%"
					display="flex"
					min-width="30%"
					margin="0 0 0 20px"
					sm-width="100%"
					sm-margin="20px 0 0 0"
					md-width="100%"
					md-margin="0 0 0 0"
				>
					{"        "}
					<Stack width="120%">
						{"    "}
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#eae4d8"
							margin="0 0 10px 0"
							sm-width="50%"
							sm-margin="0 0 0 0"
							md-width="50%"
							md-margin="10px 0 0 0"
						>
							{"            "}
						</StackItem>
						{"    "}
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#f4f7f7"
							margin="10px 0 0 0"
							sm-width="50%"
							sm-margin="0px 0 0 0"
							md-width="50%"
							md-margin="10px 0 0 0"
						>
							{"            "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="10px 0 0 0" width="100%">
				{"        "}
				<StackItem
					display="flex"
					min-width="30%"
					margin="0 20px 0 0"
					width="29%"
					sm-width="100%"
					sm-margin="0 0px 0 0"
					md-width="100%"
					md-margin="0 0px 0 0"
				>
					{"        "}
					<Stack width="120%">
						{"        "}
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#f4f7f7"
							margin="0 0 10px 0"
							sm-width="50%"
							sm-margin="0px 0 0 0"
							md-width="50%"
							md-margin="10px 0 0 0"
						>
							<Image width="100%" height="100%" src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Rectangle%20373.png?v=2021-03-29T09:42:07.776Z" />
							{"            "}
						</StackItem>
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#eae4d8"
							margin="10px 0 0 0"
							sm-width="50%"
							md-width="50%"
							md-margin="10px 0 0 0"
							sm-margin="0 0 0 0"
						>
							{"            "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem
					width="68%"
					display="flex"
					background="#e4e6f1"
					min-width="50%"
					overflow-y="visible"
					margin="0 0 0 0"
					sm-width="100%"
					sm-margin="20px 0 0 0"
					md-width="100%"
					md-margin="30px 0 0 0"
				>
					{"        "}
					<Image height="100%" width="100%" src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Rectangle%20372.png?v=2021-03-29T13:05:49.434Z" padding="0 40px 0 40px" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
			flex-direction="column"
			quarkly-title="Text"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="normal 500 90px/1.2 --fontFamily-googlePoppins"
						md-font="--headline2"
						color="--light"
						max-width="850px"
						width="100%"
					>
						I love to create something simple and clean
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" color="#777777" font="normal normal 300 1.3em --fontFamily-googlePoppins" width="100%">
						A mobile app developer based in the heart of Cardiff. I started my career as an Android developer back in 2016 where I landed my first part time job working for PT Pal Plus. Quickly falling in love with mobile apps, I built a workout tracker app with NFC.{" "}
						<br />
						<br />
						I got my first job in 2017 as a Android/iOS developer (with no experience in iOS) and quickly picked up how to write iOS apps and fell in love with Swift and Apple.{" "}
						<br />
						<br />
						I started my software agency in 2015 where I built websites, marketing material and basic logos for clients and worked with clients locally and internationally.{" "}
						<br />
						<br />
						I now work with startups building their mobile apps from scratch or maintaining them. I also help grow businesses with feature planning, marketing plans and all things business related.
						<br />
					</Text>
				</StackItem>
			</Stack>
			<Hr width="100%" height="0px" margin="100px 0 0px 0" />
		</Section>
		<Section text-align="center" padding="50px 0 50px 0" sm-padding="40px 0" background="#000000">
			<Text color="#ffffff" font="28px --fontFamily-googlePoppins">
				Recent Posts
			</Text>
			<Stack margin="0 0 0px 0">
				{"    "}
				<StackItem width="33.33%" display="flex">
					<Components.BlogArticleBox>
						<Override slot="text1">
							Why training 4x a week for 4 years changed my..
						</Override>
						<Override slot="text">
							13 March 2021
						</Override>
						<Override slot="image" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
					</Components.BlogArticleBox>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="33.33%">
					<Components.BlogArticleBox>
						<Override slot="text1">
							Don’t get too comfortable
						</Override>
						<Override slot="text">
							02 Dec 2020
						</Override>
						<Override slot="image" src="https://images.unsplash.com/photo-1519172380095-d03587980a44?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
					</Components.BlogArticleBox>
				</StackItem>
				<StackItem width="33.33%" display="flex">
					<Components.BlogArticleBox />
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="100%" height="0px" margin="100px 0 0px 0" />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});