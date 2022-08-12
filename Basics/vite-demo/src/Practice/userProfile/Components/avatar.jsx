export default function MyAvatar({ className, src, alt = "Alt text" }) {
  const avatar = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    alignItem: "Center",
    justifyContent: "Center",
  };

  const imgStyle = {
    height: "auto",
    width: "100%",
  };

  return (
    <>
      <div className={className} style={avatar}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
}
