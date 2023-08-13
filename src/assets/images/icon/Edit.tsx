export const Edit: React.FC<React.SVGProps<SVGSVGElement>> = (props, fill) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="current"
      {...props}
    >
      <g clip-path="url(#clip0_3815_16348)">
        <path
          d="M6 34.5002V42.0002H13.5L35.62 19.8802L28.12 12.3802L6 34.5002ZM41.42 14.0802C42.2 13.3002 42.2 12.0402 41.42 11.2602L36.74 6.58021C35.96 5.80021 34.7 5.80021 33.92 6.58021L30.26 10.2402L37.76 17.7402L41.42 14.0802Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
