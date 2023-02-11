import { SVGProps } from 'react';

export type CheckmarkIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let CheckmarkIcon = (props: CheckmarkIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 25 25" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M12.9661 22.0537C18.4891 22.0537 22.9661 17.5767 22.9661 12.0537C22.9661 6.53071 18.4891 2.05371 12.9661 2.05371C7.44306 2.05371 2.96606 6.53071 2.96606 12.0537C2.96606 17.5767 7.44306 22.0537 12.9661 22.0537Z"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M9.96606 12.0537L11.9661 14.0537L15.9661 10.0537"
      />
    </svg>
  );
};
