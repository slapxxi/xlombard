import { SVGProps } from 'react';

export type PuzzleIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let PuzzleIcon = (props: PuzzleIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 25 25" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M19.93 8.43c-.05.32.06.65.3.88l1.56 1.57a2.4 2.4 0 0 1 0 3.4l-1.61 1.62a.98.98 0 0 1-.84.27c-.47-.07-.8-.48-.97-.92a2.5 2.5 0 1 0-3.21 3.21c.44.17.85.5.92.97a.98.98 0 0 1-.27.84l-1.61 1.6a2.4 2.4 0 0 1-3.41 0l-1.57-1.56a1.03 1.03 0 0 0-.88-.3c-.49.08-.84.51-1.02.98a2.5 2.5 0 1 1-3.23-3.24c.46-.18.9-.53.96-1.02a1.03 1.03 0 0 0-.29-.88L3.2 14.28a2.4 2.4 0 0 1 0-3.4l1.52-1.53c.24-.24.58-.35.92-.3.51.07.88.53 1.07 1A2.5 2.5 0 1 0 9.97 6.8c-.48-.2-.93-.56-1-1.07-.06-.34.05-.68.3-.92l1.52-1.53a2.4 2.4 0 0 1 3.4 0l1.57 1.57c.23.23.56.34.88.3.5-.08.84-.51 1.02-.98a2.5 2.5 0 1 1 3.24 3.24c-.47.18-.9.53-.97 1.02v0Z"
      />
    </svg>
  );
};
