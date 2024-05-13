// this code is reusable , it can be used in any other project
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUNDINARY_CLOUD, 
  api_key: process.env.CLOUNDINARY_API_KEY, 
  api_secret: process.env.CLOUNDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=> {
    try {
        if (!localFilePath) return null;
        //upload file on cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded successfully :", (await response).url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        console.log(error);
        return null
    }
}



  export {uploadOnCloudinary}