import { useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../lib/hooks/useOutsideClick';
import { CloseIcon } from './icons/CloseIcon';

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
};

export let Modal = (props: ModalProps) => {
  let { open = false, children, onClose } = props;
  let ref = useRef(null);

  useOutsideClick(ref, () => {
    onClose?.();
  });

  function handleClickClose() {
    onClose?.();
  }

  if (open) {
    return createPortal(
      <div className="fixed inset-0 z-20 bg-backdrop/60 backdrop-blur-sm">
        <div
          ref={ref}
          className="modal-shadow fixed top-1/2 left-1/2 w-10/12 max-w-[583px] -translate-y-1/2
          -translate-x-1/2 rounded-lg border bg-white p-4 md:p-16"
        >
          <header className="flex justify-end text-black">
            <button onClick={handleClickClose}>
              <CloseIcon />
            </button>
          </header>
          {children}
        </div>
      </div>,
      document.getElementById('__next')!,
    );
  }

  return null;
};
