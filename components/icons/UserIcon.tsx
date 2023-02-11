import { SVGProps } from 'react';

export type UserIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let UserIcon = (props: UserIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 24 24" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M11 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M17.3337 18.8571C18.171 18.269 17.8423 17.7266 17.3744 17.2899C16.6855 16.6469 15.7511 16.2856 14.7768 16.2856H9.26664C8.29237 16.2856 7.35801 16.6469 6.6691 17.2899C6.26283 17.669 5.96154 18.1279 5.78271 18.6271"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M11.0217 12.8569C13.6786 12.8569 15.0217 11.5138 15.0217 9.85693C15.0217 8.20008 13.6786 6.85693 12.0217 6.85693C10.3649 6.85693 9.02173 8.20008 9.02173 9.85693C9.02173 11.5138 10.3649 12.8569 12.0217 12.8569Z"
      />
    </svg>
  );
};
