export default function ToggleMoreButton({
  dataRole,
  className,
  label,
  width,
  height,
}) {
  return (
    <button data-role={dataRole} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="currentColor"
      >
        <title>{label}</title>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </button>
  );
}
