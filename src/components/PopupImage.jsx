import { useEffect, useState } from "react";

export default function PopupImage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 30000); // 30 secunde

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup">
        <img
          src="/promo.png"  // pune imaginea ta în /public/
          alt="Promo"
        />
        <button className="close-btn" onClick={() => setShow(false)}>×</button>
      </div>
    </div>
  );
}
