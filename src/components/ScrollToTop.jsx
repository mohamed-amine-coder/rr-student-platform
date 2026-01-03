import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // كنجيبو المسار الحالي (pathname) من React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // فاش كيتبدل المسار، كنطلعو لـ الفوق
    window.scrollTo(0, 0);
    
    // إيلا بغيتي سكرول "ناعم" تقدر تدير هادي (ولكن العادي أحسن فالتنقل بين الصفحات):
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // هاد المكون ما كيرندر والو، خدمتو غير تقنية
};

export default ScrollToTop;