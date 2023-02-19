import React from "react";
import {IconBaseProps} from "./@icons.types";

export const UsersIcon: React.FC<IconBaseProps> = ({ color, width, height, disabled, viewBox }) => (
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M15.5 8C14.3 8 12.43 8.34 11 9C9.57 8.33 7.7 8 6.5 8C4.33 8 0 9.08 0 11.25V14H22V11.25C22 9.08 17.67 8 15.5 8ZM11.5 12.5H1.5V11.25C1.5 10.71 4.06 9.5 6.5 9.5C8.94 9.5 11.5 10.71 11.5 11.25V12.5ZM20.5 12.5H13V11.25C13 10.79 12.8 10.39 12.48 10.03C13.36 9.73 14.44 9.5 15.5 9.5C17.94 9.5 20.5 10.71 20.5 11.25V12.5ZM6.5 7C8.43 7 10 5.43 10 3.5C10 1.57 8.43 0 6.5 0C4.57 0 3 1.57 3 3.5C3 5.43 4.57 7 6.5 7ZM6.5 1.5C7.6 1.5 8.5 2.4 8.5 3.5C8.5 4.6 7.6 5.5 6.5 5.5C5.4 5.5 4.5 4.6 4.5 3.5C4.5 2.4 5.4 1.5 6.5 1.5ZM15.5 7C17.43 7 19 5.43 19 3.5C19 1.57 17.43 0 15.5 0C13.57 0 12 1.57 12 3.5C12 5.43 13.57 7 15.5 7ZM15.5 1.5C16.6 1.5 17.5 2.4 17.5 3.5C17.5 4.6 16.6 5.5 15.5 5.5C14.4 5.5 13.5 4.6 13.5 3.5C13.5 2.4 14.4 1.5 15.5 1.5Z" fill={color}/>

    </svg>
);

UsersIcon.defaultProps = { color: "#FFFFFF", width: "22", height: "14", disabled: false, viewBox: "0 0 22 14" };