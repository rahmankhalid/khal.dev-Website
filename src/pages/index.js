import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Hr, Image, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Stack, Override, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				khal.dev
			</title>
			<meta name={"description"} content={"Mobile app developer, software designer & creative designer. "} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#000000"
			height="350px"
			sm-height="600px"
			md-height="500px"
			quarkly-title="Header"
		>
			<Box
				flex-direction="row"
				md-flex-direction="column"
				width="150px"
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="#FFF"
					display="flex"
				>
					Khal.dev
				</Text>
			</Box>
			<Text
				color="#FFF"
				position="relative"
				sm-text-align="center"
				display="inline"
				font="normal 500 42px/1.2 --fontFamily-googlePoppins"
				text-align="left"
				top="50px"
				bottom="50px"
				md-text-align="center"
			>
				Mobile app developer with an eye for design.
			</Text>
		</Section>
		<Section
			flex-direction="column"
			quarkly-title="Text"
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
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
						Brief intro
					</Text>
				</StackItem>
				<StackItem md-width="100%" width="50%">
					<Text width="100%" margin="0px" color="#777777" font="normal normal 300 1.3em --fontFamily-googlePoppins">
						A mobile app developer thriving in the heart of Cardiff! My journey as an Android developer began in 2016 when I scored my first part-time role at PT Pal Plus. My passion for mobile apps ignited as I crafted a workout tracker app using NFC.
						<br />
						<br />
						In 2017, I landed my first job as an Android/iOS developer, diving headfirst into the world of iOS despite having no prior experience. Swift and Apple stole my heart, and I was hooked!
						<br />
						<br />
						In 2015, I founded my own software agency, catering to clients globally. From website development to creating eye-catching marketing materials and logos, I've done it all.
						<br />
						<br />
						Currently, I work closely with startups, bringing their mobile app visions to life from scratch or providing top-notch maintenance. I'm also a trusted advisor in business growth, helping with feature planning, marketing strategies, and all things business-related. Let's create together.
					</Text>
				</StackItem>
			</Stack>
			<Hr width="100%" height="0px" margin="100px 0 0px 0" />
		</Section>
		<Section
			background="#000000"
			quarkly-title="Recent Posts"
			text-align="center"
			padding="50px 0 100px 0"
			sm-padding="40px 0"
		>
			<Text color="#ffffff" font="28px --fontFamily-googlePoppins" width="100%" text-align="left">
				Recent Posts
			</Text>
			<Stack margin="0 0 0px 0">
				{"    "}
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Stack width="150%">
						{"    "}
						<StackItem display="flex" height="250px" width="100%">
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
									display="flex"
									letter-spacing="0.6px"
									href="https://khalid-rahman.medium.com/why-training-4x-a-week-for-4-years-changed-my-life-284097908c67"
									margin="10px 0px 0px 0px"
									text-decoration-line="initial"
									font="normal 300 1em --fontFamily-googlePoppins"
									target="_blank"
									padding="0px 0px 0px 0px"
									color="#ffffff"
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
								display="inline-flex"
								src="https://images.unsplash.com/photo-1519172380095-d03587980a44?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
								object-fit="cover"
								width="100%"
								height="100%"
							/>
							{"        "}{"    "}
						</StackItem>
						{"    "}
						<StackItem width="100%" display="flex" margin="0px 0px 0px 0px">
							<Box width="100%">
								<Text
									text-align="left"
									margin="0px 0px 0px 0px"
									height="20px"
									font="--base"
									color="#6c6c6c"
								>
									02 Dec 2020
								</Text>
								<Text font="normal 400 28px/1.5 --fontFamily-googlePoppins" color="#fff" text-align="left" margin="10px 0 0 0">
									Don’t get too comfortable
								</Text>
								<Link
									padding="0px 0px 0px 0px"
									color="#ffffff"
									text-decoration-line="initial"
									letter-spacing="0.6px"
									target="_blank"
									href="https://khalid-rahman.medium.com/why-training-4x-a-week-for-4-years-changed-my-life-284097908c67"
									display="flex"
									font="normal 300 1em --fontFamily-googlePoppins"
									margin="10px 0px 0px 0px"
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
								height="100%"
								display="inline-flex"
								src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
								object-fit="cover"
								width="100%"
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
									text-decoration-line="initial"
									font="normal 300 1em --fontFamily-googlePoppins"
									color="#ffffff"
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
					<Box margin="0 100px 0 0px" sm-margin="0 0px 0 0px" width="100%" height="100%">
						<Text color="rgba(128, 129, 145, 0.60)" font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px">
							2021 Project
						</Text>
						<Text color="#FFF" font="500 60px/75px --fontFamily-googlePoppins" sm-font="500 40px/45px --fontFamily-googlePoppins">
							Foodly iOS App
						</Text>
						<Text
							sm-font="300 16px/26px --fontFamily-googlePoppins"
							color="#808191"
							font="300 30px/50px --fontFamily-googlePoppins"
							text-align="left"
							letter-spacing="0.6px"
						>
							A mobile app that uses the latest technologies in artificial intelligence and machine learning to learn, understand and recommend the best recipes. Completly bespoke and tailor made to find recipes from a collection of over 100,00 by a community from around the world.
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex" height="100%" sm-width="100%">
					<Box sm-margin="0px 0px 0px 0px" width="100%" margin="80px 0px 0px 20px" height="56px">
						<Text color="#FFF" font="400 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0 0 0px 0">
							Version
						</Text>
						<Text font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px" color="#808191">
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
						<Text letter-spacing="1px" margin="0px 0px 0px 0px" color="#808191" font="300 16px/28px --fontFamily-googlePoppins">
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
						<Text font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px" color="#808191">
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
				height="1000px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Frame%201(1).png?v=2021-04-01T00:08:58.455Z"
				object-fit="contain"
				width="100%"
			/>
		</Section>
		<Section
			sm-height="620px"
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			quarkly-title="ShishaPal"
			background="#dfe3ef"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack sm-height="375px" width="100%">
				{"    "}
				<StackItem height="100%" sm-width="100%" width="80%" display="flex">
					<Box width="100%" height="100%" margin="0 100px 0 0px" sm-margin="0 0px 0 0px">
						<Text color="rgba(128, 129, 145, 0.60)" font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px">
							2021 Project
						</Text>
						<Text font="500 60px/75px --fontFamily-googlePoppins" sm-font="500 40px/45px --fontFamily-googlePoppins" color="#000">
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
						<Text margin="0px 0px 0px 0px" color="#797986" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px">
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
						<Text color="#797986" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
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
						<Text color="#797986" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
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
		<Section
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			quarkly-title="Holiday Swap"
			background="#eaeef6"
			sm-height="620px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack width="100%" sm-height="375px">
				{"    "}
				<StackItem height="100%" sm-width="100%" width="80%" display="flex">
					<Box sm-margin="0 0px 0 0px" width="100%" height="100%" margin="0 100px 0 0px">
						<Text font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px" color="#A2AAAB">
							2020 - Present Project
						</Text>
						<Text sm-font="500 40px/45px --fontFamily-googlePoppins" color="#000" font="500 60px/75px --fontFamily-googlePoppins">
							Holiday Swap
						</Text>
						<Text
							text-align="left"
							letter-spacing="0.6px"
							sm-font="300 16px/26px --fontFamily-googlePoppins"
							color="#797986"
							font="300 30px/50px --fontFamily-googlePoppins"
						>
							An award-winning 
home exchange platform that has been designed for travellers to securely 
swap and host their homes across 185 countries for just $1 per person, per night. With their subscription plans, travellers can
                        save money and explore more.
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex" height="100%" sm-width="100%">
					<Box margin="80px 0px 0px 20px" height="56px" sm-margin="0px 0px 0px 0px" width="100%">
						<Text color="#000" font="400 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0 0 0px 0">
							Version
						</Text>
						<Text margin="0px 0px 0px 0px" color="#A2AAAB" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px">
							Swift 5
						</Text>
						<Text
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
							color="#000"
							font="400 16px/28px --fontFamily-googlePoppins"
						>
							OS
						</Text>
						<Text color="#A2AAAB" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
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
						<Text font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px" color="#A2AAAB">
							iOS App Rebuild & Maintenance
							<br />
							Android Maintenance
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			quarkly-title="HolidaySwapUI"
			background="#eaeef6"
			sm-height="300px"
			padding="0px 0 100px 0"
			sm-padding="40px 0"
		>
			<Override slot="SectionContent" align-items="center" />
			<Image
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Frame%201%20(1).png?v=2021-04-02T12:33:27.119Z"
				object-fit="contain"
				width="100%"
				height="1000px"
			/>
		</Section>
		<Section
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			quarkly-title="Holiday Swap"
			background="#e2e0e6"
			sm-height="620px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack width="100%" sm-height="375px">
				{"    "}
				<StackItem width="80%" display="flex" height="100%" sm-width="100%">
					<Box width="100%" height="100%" margin="0 100px 0 0px" sm-margin="0 0px 0 0px">
						<Text font="300 14px/28px --fontFamily-googlePoppins" letter-spacing="1px" color="#A2AAAB">
							2017 Project
						</Text>
						<Text color="#000" font="500 60px/75px --fontFamily-googlePoppins" sm-font="500 40px/45px --fontFamily-googlePoppins">
							Gemporia
						</Text>
						<Text
							font="300 30px/50px --fontFamily-googlePoppins"
							text-align="left"
							letter-spacing="0.6px"
							sm-font="300 16px/26px --fontFamily-googlePoppins"
							color="#797986"
						>
							Sourceing gemstones across the globe, from the richest of Rubies and 
most sumptuous of Sapphires to the brightest of Diamonds. The mobile app
 allows users to watch the live auction, make purchases and discover new
 jewellery.{" "}
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex" height="100%" sm-width="100%">
					<Box margin="80px 0px 0px 20px" height="56px" sm-margin="0px 0px 0px 0px" width="100%">
						<Text color="#000" font="400 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0 0 0px 0">
							Version
						</Text>
						<Text color="#A2AAAB" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							Swift 3
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
						<Text color="#A2AAAB" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							iPhone
						</Text>
						<Text
							font="400 16px/28px --fontFamily-googlePoppins"
							letter-spacing="1px"
							margin="40px 0 0px 0"
							sm-margin="20px 0 0px 0"
							color="#000"
						>
							Deliverables
						</Text>
						<Text color="#A2AAAB" font="300 16px/28px --fontFamily-googlePoppins" letter-spacing="1px" margin="0px 0px 0px 0px">
							App MaintenanceMake 3 Apps to 1TV App Maintenance
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			sm-padding="40px 0"
			quarkly-title="HolidaySwapUI"
			background="#e2e0e6"
			sm-height="300px"
			padding="0px 0 100px 0"
		>
			<Override slot="SectionContent" align-items="center" />
			<Image
				width="100%"
				height="1000px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				src="https://uploads.quarkly.io/6061375bf11f97001e813d9c/images/Frame%202%20(1).png?v=2021-04-02T18:02:52.592Z"
				object-fit="contain"
			/>
		</Section>
		<Section padding="64px 0" background="--color-dark" color="--dark">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text margin="10px 0 0 0" color="#ffffff" font="normal 300 42px/1.2 --fontFamily-googlePoppins" max-width="500px">
						Have a project in mind? Let's talk.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="xleaekga" color="#ffffff" font="100 1.2em --fontFamily-googlePoppins">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input width="100%" name="name" max-width="400px" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input name="message" as="textarea" rows="4" width="100%" />
							</StackItem>
							<StackItem width="100%">
								<Button background="#ffffff" color="#000000">
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
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