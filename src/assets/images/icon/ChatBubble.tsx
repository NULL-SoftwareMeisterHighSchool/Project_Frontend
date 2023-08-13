export const ChatBubble: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_3962_3584)">
                <path
                    d="M40 4H8C5.8 4 4 5.8 4 8V44L12 36H40C42.2 36 44 34.2 44 32V8C44 5.8 42.2 4 40 4Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_3962_3584">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
