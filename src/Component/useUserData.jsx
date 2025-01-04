import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useUserData = () => {
  const [user, setUser] = useState(0);
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
     
      fetch("/src/assets/manual.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const users = data;

          const selectedUser = users.find((user) => user.id === Number(id)); // البحث عن المستخدم بناءً على الـ id
          if (selectedUser) {
            setUser(selectedUser); // حفظ المستخدم إذا وجد
          } else {
            redirectTo404(); // إعادة التوجيه لصفحة 404
          }
        })
        .catch(() => {
          window.location.href = "/4044.html"; // في حالة وجود خطأ أثناء الجلب
        });
    } else {
      window.location.href = "/404.html"; // إذا لم يتم العثور على الـ id
    }
  }, [id]); // تشغيل مرة واحدة عند تحميل الكومبوننت

  const redirectTo404 = () => {
    window.location.href = "/404.html"; // إعادة التوجيه إلى صفحة 404
  };

  return user; // إرجاع بيانات المستخدم
};

export default useUserData;
