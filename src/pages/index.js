import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
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
		<Section background="#000000" height="350px" sm-height="500px" md-height="500px">
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
				Mobile app developer.
				<br />
				I love start ups.{" "}
			</Text>
		</Section>
		<Section
			background="--color-dark"
			padding="64px 0"
			sm-padding="40px 0"
			color="#000000"
			width="100%"
		>
			<Override slot="SectionContent" width="100%" />
			<Stack>
				{"    "}
				<StackItem width="69%" display="flex" background="#e4e6f1" margin="0 10px 0 0">
					{"        "}
					<Image height="100%" width="100%" src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Rectangle%20372(1).png?v=2021-03-29T03:56:52.433Z" padding="0 40px 0 40px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="29%" display="flex" margin="0 0 0 10px">
					{"        "}
					<Stack width="100%">
						{"    "}
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#121951"
							margin="0 0 10px 0"
						>
							{"        "}
							<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
								{"            "}First Item{"\n        "}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem
							width="100%"
							display="flex"
							height="287.5px"
							background="#c72020"
							margin="10px 0 0 0"
						>
							{"        "}
							<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
								{"            "}Second Item{"\n        "}
							</Text>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
			</Stack>
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