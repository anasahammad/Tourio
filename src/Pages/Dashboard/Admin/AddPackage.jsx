import { useState } from "react";
import AddPackageForm from "../../../components/Form/AddPackageForm";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddPackage = () => {
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (packageData) => {
      const { data } = await axiosSecure.post('/package', packageData);
      return data;
    },
    onSuccess: () => {
      console.log("Package added successfully");
      toast.success("Package Added Successfully");
    },
  });

  const handleFiles = (event) => {
    const files = [...event.target.files];
    setImages(files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImagePreview(imageUrls);
  };

  const handleForm = async (e, days) => {
    e.preventDefault();

    const form = e.target;
    const title = form.tripTtitle.value;
    const destination = form.destination.value;
    const tourTypes = form.types.value;
    const price = form.price.value;
    const groupSize = form.size.value;
    const totalDays = form.days.value;
    const shortDescription = form.description.value;
    const tourPlan = days;

    const packageImages = [];

    try {
      // uploading multiple images
      for (const image of images) {
        const formData = new FormData();
        formData.append('image', image);
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        packageImages.push(response.data.data.display_url);
      }

      const newPackage = {
        title,
        destination,
        tourTypes,
        price,
        groupSize,
        totalDays,
        shortDescription,
        tourPlan,
        packageImages,
      };
      await mutateAsync(newPackage);
      form.reset();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-4 font-bold">Add package</h1>
      <AddPackageForm
        handleForm={handleForm}
        handleFiles={handleFiles}
        imagePreview={imagePreview}
      />
    </div>
  );
};

export default AddPackage;
