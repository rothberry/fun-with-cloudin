class Api::UploadController < ApplicationController

  def upload_image
    upload_image_hash = Cloudinary::Uploader.upload(params[:imageFile], 
      folder: "fun_with_cloudin", 
      public_id: params[:name], 
      unique_filename: false, 
      overwrite: true)
    render json: {imageUrl: upload_image_hash["url"]}, status: 201
  end
end
