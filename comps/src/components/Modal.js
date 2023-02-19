import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    console.log("useEffect Enter");
    document.body.classList.add("overflow-hidden");

    return () => {
      console.log("useEffect Exit");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          <div>{children}</div>
          <div className="flex justify-end">
            <div>{actionBar}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
