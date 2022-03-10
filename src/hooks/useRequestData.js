import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../constants/auth";
import { BASE_URL } from "../constants/BASE_URL";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
};

