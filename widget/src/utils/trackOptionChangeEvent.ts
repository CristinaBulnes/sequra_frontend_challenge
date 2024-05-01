import { BASE_URL } from "../constants";

const trackOptionChangeEvent = (value: number) => {
  const data = {
    context: "checkoutWidget",
    type: "simulatorInstalmentChanged",
    selectedInstalment: value,
  };

  fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export default trackOptionChangeEvent;
