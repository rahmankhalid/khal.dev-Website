import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"padding": "12px 0",
	"justify-content": "space-between",
	"align-items": "center",
	"flex-direction": "row",
	"md-flex-direction": "column"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "--lead",
			"color": "#FFF",
			"children": "Khal.dev"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"color": "#FFF",
			"display": "flex",
			"font": "--base",
			"font-weight": "700",
			"justify-content": "center",
			"md-align-items": "center",
			"md-flex-direction": "column"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--light",
			"padding": "6px 12px"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	}
};

const MainNavigationTopBar = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Menu {...override("menu")}>
			<Override {...override("menuOverride")} />
			<Override {...override("menuOverride1")} />
			<Override {...override("menuOverride2")} />
			<Override {...override("menuOverride3")} />
		</Menu>
		{children}
	</Box>;
};

Object.assign(MainNavigationTopBar, { ...Box,
	defaultProps,
	overrides
});
export default MainNavigationTopBar;