/*
- RefreshIcon
- SettingsIcon
- NotificationIcon

*/

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  onClick?: () => void; // optional onClick handler
}

export const RefreshIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} text-[white]`}
      fill="none"
      height="20" // Adjust height
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20" // Adjust width
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} !text-[10px]`}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M6 18 18 6M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingsIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} !text-[10px]`}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NotificationIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} !text-[10px]`}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LeftArrowIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} h-5 w-5 cursor-pointer`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} h-5 w-5 cursor-pointer`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M3.75 9h16.5m-16.5 6.75h16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WriteIcon: React.FC<IconProps> = ({
  className = "",
  onClick,
  ...props
}) => {
  return (
    <svg
      className={`${className} h-5 w-5 cursor-pointer`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
