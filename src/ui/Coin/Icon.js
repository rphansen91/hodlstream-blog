import React, { useMemo } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/styles";

function getSvg (icon) {
  try {
    return require(`./icons/${icon}.svg`).default
  } catch (e) {
    return require(`./icons/NaC.svg`).default
  }
}

export default ({
  icon,
  attrs: _attrs,
  button,
  onClick = v => v,
  btnstyle,
  ...props
}) => {
  const theme = useTheme();
  const fill = theme.palette.text.secondary;
  const attrs = Object.assign({ style: { fill } }, _attrs);
  const iconSvg = useMemo(() => getSvg(icon), [icon]);
  const Icon = (
    <svg
      className="icon"
      alt={icon}
      {...props}
      onClick={onClick}
    >
        <use xlinkHref={`#${iconSvg.id}`} {...attrs} />
    </svg>
  );

  if (!button) return Icon;
  return (
    <IconButton onClick={onClick} style={btnstyle}>
      {Icon}
    </IconButton>
  );
};
