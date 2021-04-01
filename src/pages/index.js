import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Hr, Box } from "@quarkly/widgets";
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
						md-font="normal 500 42px/1.2 --fontFamily-googlePoppins"
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
		<Section
			text-align="center"
			padding="50px 0 100px 0"
			sm-padding="40px 0"
			background="#000000"
			quarkly-title="Recent Posts"
		>
			<Text color="#ffffff" font="28px --fontFamily-googlePoppins" width="100%" text-align="left">
				Recent Posts
			</Text>
			<Stack margin="0 0 0px 0">
				{"    "}
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Stack width="150%">
						{"    "}
						<StackItem width="100%" display="flex" height="250px">
							<Image
								width="100%"
								height="100%"
								display="inline-flex"
								src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
								object-fit="cover"
							/>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem width="100%" display="flex">
							<Box width="100%" height="100%" margin="0px 0px 0px 0px">
								<Text
									height="20px"
									font="--base"
									color="#6c6c6c"
									text-align="left"
									margin="0px 0 0 0"
								>
									13 March 2021
								</Text>
								<Text font="normal 400 28px/1.5 --fontFamily-googlePoppins" color="#fff" text-align="left" margin="10px 0 0px 0">
									Why training 4x a week for 4 years..
								</Text>
								<Link
									href="https://khalid-rahman.medium.com/why-training-4x-a-week-for-4-years-changed-my-life-284097908c67"
									margin="10px 0px 0px 0px"
									padding="0px 0px 0px 0px"
									display="flex"
									color="#ffffff"
									text-decoration-line="initial"
									font="normal 300 1em --fontFamily-googlePoppins"
									letter-spacing="0.6px"
									target="_blank"
								>
									Read more
								</Link>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="33.33%" sm-width="100%">
					<Stack width="150%">
						{"    "}
						<StackItem width="100%" display="flex" height="250px">
							<Image
								width="100%"
								height="100%"
								display="inline-flex"
								src="https://images.unsplash.com/photo-1519172380095-d03587980a44?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
								object-fit="cover"
							/>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem width="100%" display="flex" margin="0px 0px 0px 0px">
							<Box width="100%">
								<Text
									height="20px"
									font="--base"
									color="#6c6c6c"
									text-align="left"
									margin="0px 0px 0px 0px"
								>
									02 Dec 2020
								</Text>
								<Text font="normal 400 28px/1.5 --fontFamily-googlePoppins" color="#fff" text-align="left" margin="10px 0 0 0">
									Don’t get too comfortable
								</Text>
								<Link
									href="https://khalid-rahman.medium.com/why-training-4x-a-week-for-4-years-changed-my-life-284097908c67"
									margin="10px 0px 0px 0px"
									padding="0px 0px 0px 0px"
									display="flex"
									color="#ffffff"
									text-decoration-line="initial"
									font="normal 300 1em --fontFamily-googlePoppins"
									letter-spacing="0.6px"
									target="_blank"
								>
									Read more
								</Link>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Stack width="150%">
						{"    "}
						<StackItem width="100%" display="flex" height="250px">
							<Image
								width="100%"
								height="100%"
								display="inline-flex"
								src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
								object-fit="cover"
							/>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem width="100%" display="flex">
							<Box width="100%" margin="0px 0px 0px 0px">
								<Text
									height="20px"
									font="--base"
									color="#6c6c6c"
									text-align="left"
									margin="0px 0 0 0"
								>
									20 March 2020
								</Text>
								<Text font="normal 400 28px/1.5 --fontFamily-googlePoppins" color="#fff" text-align="left" margin="10px 0 0 0">
									Hard work doesn’t always pay off — my life
								</Text>
								<Link
									href="https://khalid-rahman.medium.com/hard-work-doesnt-always-pay-off-my-life-ae16e2b7c7d3"
									margin="10px 0px 0px 0px"
									padding="0px 0px 0px 0px"
									display="flex"
									color="#ffffff"
									text-decoration-line="initial"
									font="normal 300 1em --fontFamily-googlePoppins"
									letter-spacing="0.6px"
									target="_blank"
								>
									Read more
								</Link>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="100%" height="0px" margin="100px 0 0px 0" />
		</Section>
		<Section
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			quarkly-title="Foodly"
			background="#1f1c2b"
			sm-height="620px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack width="100%" sm-height="375px">
				{"    "}
				<StackItem width="80%" display="flex" height="100%" sm-width="100%">
					<Box width="100%" height="100%" margin="0 100px 0 0px" sm-margin="0 0px 0 0px">
						<Text color="rgba(128, 129, 145, 0.60)" font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px">
							2021 Project
						</Text>
						<Text color="#FFF" font="500 60px/75px --fontFamily-googlePoppins" sm-font="500 40px/45px --fontFamily-googlePoppins">
							Foodly iOS App
						</Text>
						<Text
							color="#808191"
							font="300 30px/50px --fontFamily-googlePoppins"
							text-align="left"
							letter-spacing="0.6px"
							sm-font="300 16px/26px --fontFamily-googlePoppins"
						>
							A mobile app that uses the latest technologies in artificial intelligence and machine learning to learn, understand and recommend the best recipes. Completly bespoke and tailor made to find recipes from a collection of over 100,00 by a community from around the world.
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex" height="100%" sm-width="100%">
					<Box width="100%" margin="80px 0px 0px 20px" height="56px" sm-margin="0px 0px 0px 0px">
						<Text color="#FFF" font="400 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0 0 0px 0">
							Version
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							Swift 5
						</Text>
						<Text
							color="#FFF"
							font="400 16px/28px --fontFamily-googlePoppins"
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
						>
							OS
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							iPhone
						</Text>
						<Text
							color="#FFF"
							font="400 16px/28px --fontFamily-googlePoppins"
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
						>
							Deliverables
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							Feature Planning
							<br />
							iOS App Design
							<br />
							iOS App Development
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="0px 0 100px 0"
			sm-padding="40px 0"
			quarkly-title="Foodly UI"
			background="#1f1c2b"
			sm-height="300px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Image
				width="100%"
				height="1000px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Frame%201(1).png?v=2021-04-01T00:08:58.455Z"
				object-fit="contain"
			/>
		</Section>
		<Section
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			quarkly-title="ShishaPal"
			background="#dfe3ef"
			sm-height="620px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack width="100%" sm-height="375px">
				{"    "}
				<StackItem width="80%" display="flex" height="100%" sm-width="100%">
					<Box width="100%" height="100%" margin="0 100px 0 0px" sm-margin="0 0px 0 0px">
						<Text color="rgba(128, 129, 145, 0.60)" font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px">
							2021 Project
						</Text>
						<Text color="#000" font="500 60px/75px --fontFamily-googlePoppins" sm-font="500 40px/45px --fontFamily-googlePoppins">
							Shisha Pal
						</Text>
						<Text
							color="#808191"
							font="300 30px/50px --fontFamily-googlePoppins"
							text-align="left"
							letter-spacing="0.6px"
							sm-font="300 16px/26px --fontFamily-googlePoppins"
						>
							A mobile app which allows users to discover and find local shisha lounges. With over 80 flavours that can be mixed, it's difficult knowing which flavours are the best. Shisha Pal lets you know which flavours to order from your favourite place. Easily leave reviews for future reference or let other people know.
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex" height="100%" sm-width="100%">
					<Box width="100%" margin="80px 0px 0px 20px" height="56px" sm-margin="0px 0px 0px 0px">
						<Text color="#000" font="400 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0 0 0px 0">
							Version
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							Swift 5
						</Text>
						<Text
							color="#000"
							font="400 16px/28px --fontFamily-googlePoppins"
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
						>
							OS
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							iPhone
						</Text>
						<Text
							color="#000"
							font="400 16px/28px --fontFamily-googlePoppins"
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
						>
							Deliverables
						</Text>
						<Text color="#808191" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							Feature Planning
							<br />
							iOS App Design
							<br />
							iOS App Development
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="0px 0 100px 0"
			sm-padding="40px 0"
			quarkly-title="Foodly UI"
			background="#dfe3ef"
			sm-height="300px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Image
				width="100%"
				height="1000px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/shishapal%20copy.png?v=2021-04-01T23:21:41.255Z"
				object-fit="contain"
			/>
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