import axios from "axios";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  // formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_URL);

  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => data.url);

  // return axios
  //   .post(process.env.REACT_APP_CLOUDINARY_URL, {
  //     body: formData,
  //   })
  //   .then((res) => res);
};
