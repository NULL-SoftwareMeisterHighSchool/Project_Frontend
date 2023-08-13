export const Lock: React.FC<React.SVGProps<SVGSVGElement>> = props => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="current"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 10C21.2386 10 19 12.2386 19 15V18H29V15C29 12.2386 26.7614 10 24 10ZM33 18H36C37.1046 18 38 18.8954 38 20V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V20C10 18.8954 10.8954 18 12 18H15V15C15 10.0294 19.0294 6 24 6C28.9706 6 33 10.0294 33 15V18ZM28 30C28 32.2091 26.2091 34 24 34C21.7909 34 20 32.2091 20 30C20 27.7909 21.7909 26 24 26C26.2091 26 28 27.7909 28 30Z" />
        </svg>
    );
};