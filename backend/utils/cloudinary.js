const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'tekstore',
  api_key: process.env.API_KEY || '859984984957134',
  api_secret: process.env.API_SECRET || 'v1TQfrMe_lNVumqc2B8_jyWkTkI',
});

const cloudinaryUploadImg = async (fileToUpload) => {
  try {
    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: 'auto',
    });
    return {
      url: data?.secure_url,
    };
  } catch (error) {
    return error;
  }
};

module.exports = cloudinaryUploadImg;
