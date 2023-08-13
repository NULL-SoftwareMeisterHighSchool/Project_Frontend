export const Image: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_3962_3582)">
                <path
                    d="M42 38V10C42 7.8 40.2 6 38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38ZM17.8 27.96L22 33.02L28.2 25.04C28.6 24.52 29.4 24.52 29.8 25.06L36.82 34.42C37.32 35.08 36.84 36.02 36.02 36.02H12.04C11.2 36.02 10.74 35.06 11.26 34.4L16.24 28C16.62 27.48 17.38 27.46 17.8 27.96Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_3962_3582">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
