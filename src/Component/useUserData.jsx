import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data2 } from './Manual';

const useUserData = () => {
  const [user, setUser] = useState(0);  // Initialize as null instead of 0
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Use data2 instead of undefined 'users'
      const selectedUser = data2.find((user) => user.id === Number(id));

      if (selectedUser) {
        setUser(selectedUser);
      } else {
        redirectTo404();
      }
    } else {
      redirectTo404();
    }
  }, [id]);

  const redirectTo404 = () => {
    window.location.href = "/404.html";
  };

  return user;
};

export default useUserData;
