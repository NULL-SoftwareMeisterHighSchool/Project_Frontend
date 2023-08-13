export const BulletinBoard: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="current"
      fill-rule="evenodd"
      clip-rule="evenodd"
      {...props}
    >
      <path d="M38.9333 14.0001L25.1128 4.74532C24.4395 4.29441 23.5605 4.29441 22.8872 4.74532L9.06667 14.0001H6C4.89543 14.0001 4 14.8956 4 16.0001V42.0001C4 43.1047 4.89543 44.0001 6 44.0001H42C43.1046 44.0001 44 43.1047 44 42.0001V16.0001C44 14.8956 43.1046 14.0001 42 14.0001H38.9333ZM31.7444 14.0001H16.2556L24 8.81414L31.7444 14.0001Z" />
    </svg>
  );
};