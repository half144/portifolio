const URL = "https://api.staticforms.xyz/submit";
const accessKey = process.env.API_KEY;

export const useFormSubmit = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      ...data,
      accessKey,
    }),
  };
  try {
    const res = await fetch(URL, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(err);
  }
};
