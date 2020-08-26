import React from "react";
import "./svg.less"; //已启用 CSS Modules

const SvgIcon = props => {
  const { iconClass, widthW, heightH } = props
  const style = {
		width: widthW,
		height: heightH,
	}
  return (
		<svg className="svg-class" aria-hidden="true" style={style}>
			<use xlinkHref={'#icon-' + iconClass}></use>
		</svg>
	)
};

export default SvgIcon;