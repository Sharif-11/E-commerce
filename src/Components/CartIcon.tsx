import { CSSProperties } from "react";

// Inline styles for the icon and badge
const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  icon: {
    display: "block",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "10px",
    padding: "4px 4px",
    lineHeight: "1",
  },
};

function CartIconWithBadge({ itemCount = 0 }: { itemCount: number }) {
  return (
    <div style={styles.container}>
      {/* Cart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={styles.icon}
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .93.73h12.72a1 1 0 0 0 .96-.74L23 6H6"></path>
      </svg>

      {/* Badge */}
      {itemCount > 0 && <span style={styles.badge}>{itemCount}</span>}
    </div>
  );
}

export default CartIconWithBadge;
