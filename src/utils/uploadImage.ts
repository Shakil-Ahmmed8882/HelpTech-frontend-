

export const uploadToImageBB = async (file:File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
  
      const apiKey = "350937dd85bb2d5259ced0363ea574db"; 
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        return result?.data?.display_url; 
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null; // Return null if the upload fails
    }
  };
  