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
          console.log(data);
          const selectedUser = users.find((user) => user.id === Number(id)); 
          if (selectedUser) {
            setUser(selectedUser); 
          } else {
            redirectTo404(); 
          }
        })
        .catch(() => {
        console.log("nnnnnnn");
        
        });
    } else {
      window.location.href = "/404.html"; 
    }
  }, [id]); 

  const redirectTo404 = () => {
    window.location.href = "/404.html"; 
  };

  return user;
};

export default useUserData;
