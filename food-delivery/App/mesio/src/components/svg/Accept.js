import * as React from "react";
import Svg, {
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg";

const Accept = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle opacity={0.1} cx={25} cy={25} r={25} fill="url(#a)" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.914 29.592A12 12 0 0 0 25 37a11.922 11.922 0 0 0 8.485-3.515 12 12 0 1 0-16.97-16.97 12 12 0 0 0-2.601 13.077Zm4.367-5.688a.751.751 0 0 1 .53-.216.753.753 0 0 1 .53.212l3.284 3.234 7.034-6.918a.76.76 0 0 1 1.06 0l1.06 1.041a.73.73 0 0 1 0 1.043l-8.624 8.484a.76.76 0 0 1-1.061 0L17.22 25.99a.728.728 0 0 1 0-1.043l1.06-1.043Z"
            fill="#5634D2"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={0}
                y1={0}
                x2={0}
                y2={50}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#6C4DDA" stopOpacity={0.6} />
                <Stop offset={1} stopColor="#522ED2" />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default Accept;
