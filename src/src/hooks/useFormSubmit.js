const URL = "https://api.staticforms.xyz/submit";
const accessKey = "7b88d25b-fdcf-4da0-a637-f3e9ca6b5f3a";

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
