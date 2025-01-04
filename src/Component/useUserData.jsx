import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data2 } from './Manual';

const useUserData = () => {
  const [user, setUser] = useState(0);  // Initialize as null instead of 0
  const { nickname } = useParams();  // تغيير 'id' لـ 'nickname'

  useEffect(() => {
    if (nickname) {
      // البحث باستخدام nickname بدلاً من id
      const selectedUser = data2.find((user) => user.nickname === nickname);

      if (selectedUser) {
        setUser(selectedUser);
      } else {
        redirectTo404();
      }
    } else {
      redirectTo404();
    }
  }, [nickname]);

  const redirectTo404 = () => {
    window.location.href = "/404.html";
  };

  return user;
};

export default useUserData;
