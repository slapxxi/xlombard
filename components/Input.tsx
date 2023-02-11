import { HTMLProps, useId } from 'react';

export type InputProps = {
  children?: React.ReactNode;
  className?: string;
  value: string;
} & HTMLProps<HTMLInputElement>;

export let Input = (props: InputProps) => {
  let { children, value, className = '', placeholder, ...rest } = props;
  let id = useId();
  return (
    <div className={`${className} grid grid-cols-1 grid-rows-1 overflow-hidden rounded-md border`} {...rest}>
      <input
        id={id}
        type="text"
        className="peer col-start-1 col-end-1 row-start-1 row-end-1 p-3"
        value={value}
      />
      <label
        htmlFor={id}
        className="col-start-1 col-end-1 row-start-1 row-end-1 flex origin-top-left items-center whitespace-nowrap 
        p-2 font-normal text-gray-500 transition-transform peer-focus:-translate-y-2 peer-focus:scale-75"
      >
        {placeholder}
      </label>
    </div>
  );
};
