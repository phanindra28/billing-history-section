import { useEffect, useState } from "react";

export default function useBillingData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://www.greatfrontend.com/api/projects/challenges/account/billing/history",
      {
        method: "GET",
      },
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { data, isLoading };
}
