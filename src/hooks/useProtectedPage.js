import { getToken } from "../constants/localStorage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLoginPage } from "../Routes/Coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      goToLoginPage(navigate);
    }
  });
};