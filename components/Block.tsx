import classNames from 'classnames';

export type BlockProps = {
  children?: React.ReactNode;
  className?: string;
  bg?: string;
};

export let Block = (props: BlockProps) => {
  let { children, className = '', bg = 'violet-light', ...rest } = props;
  return (
    <div
      className={classNames(className, 'rounded-lg p-7 px-4')}
      style={{ backgroundColor: `var(--${bg},${bg})` }}
      {...rest}
    >
      {children}
    </div>
  );
};
