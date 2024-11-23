
const Backdrop = ({
  children,
  onClose,
  className,
}:any) => {
  return (
    <div
      className={`fixed h-screen w-screen bg-black bg-opacity-50 flex z-50 inset-0 ${className}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Backdrop;
