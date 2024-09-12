import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Check = (props) => (
    <Svg
        width={7}
        height={5}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4.831.324A.926.926 0 0 1 6.044.153a.745.745 0 0 1 .188 1.1L3.545 4.6a.832.832 0 0 1-1.194.086L.254 2.77a.741.741 0 0 1 0-1.117.93.93 0 0 1 1.228 0L2.8 2.853 4.831.323Z"
            fill="#1DBF73"
        />
    </Svg>
);

export default Check;
