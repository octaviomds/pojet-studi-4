import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Cancel = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle opacity={0.1} cx={25} cy={25} r={25} fill="#FE2121" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.914 29.662A12 12 0 0 0 25 37.069a11.922 11.922 0 0 0 8.485-3.515 12 12 0 1 0-16.97-16.97 12 12 0 0 0-2.601 13.078Zm6.365-10.539a.42.42 0 0 1 .3-.123c.113 0 .222.044.302.123l4.055 4 4.055-4a.427.427 0 0 1 .6 0l1.154 1.17a.43.43 0 0 1 0 .6L26.68 24.91l4.05 4.065a.425.425 0 0 1 0 .6l-1.154 1.162a.415.415 0 0 1-.3.123.437.437 0 0 1-.3-.123l-4.046-4.05-4.042 4.056a.41.41 0 0 1-.3.123.432.432 0 0 1-.3-.123L19.13 29.58a.427.427 0 0 1 0-.6l4.059-4.076-4.067-4.018a.429.429 0 0 1 0-.6l1.157-1.163Z"
            fill="#FE2121"
        />
    </Svg>
);

export default Cancel;
