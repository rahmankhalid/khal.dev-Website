import React from "react";
import { useOverrides, StackItem, Stack } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "150%"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"display": "flex",
			"height": "210px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"height": "100%",
			"display": "inline-flex",
			"src": "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000",
			"object-fit": "cover"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"display": "flex"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"height": "100px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"height": "20px",
			"font": "--base",
			"color": "#6c6c6c",
			"text-align": "left",
			"margin": "0px 0 0 0",
			"children": "20 March 2020"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"height": "100%",
			"font": "normal 400 28px/1.5 --fontFamily-googlePoppins",
			"color": "#fff",
			"text-align": "left",
			"margin": "10px 0 0 0",
			"children": "Hard work doesn’t always pay off — my life"
		}
	}
};

const BlogArticleBox = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{"    "}
		<StackItem {...override("stackItem")}>
			<Image {...override("image")} />
			{"        "}{"    "}
		</StackItem>
		{"    "}
		<StackItem {...override("stackItem1")}>
			<Box {...override("box")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</Box>
			{"        "}{"    "}
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(BlogArticleBox, { ...Stack,
	defaultProps,
	overrides
});
export default BlogArticleBox;