import React from "react"
export const themes = {
	light: {
		foreground: '#ccc',
		background: 'yellow',
	},
	dark: {
		foreground: '#ffffff',
		background: 'red',
	},
}

export const ThemeContext = React.createContext(
	themes.dark // 默认值
)
