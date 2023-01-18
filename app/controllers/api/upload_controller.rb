class Api::UploadController < ApplicationController
  def upload_image_from_file
    # debugger
    begin
      resource_type = params[:file].content_type.split("/")[0]
      p resource_type
      if resource_type == "image"
        uploaded_image = Cloudinary::Uploader.upload(params[:file], public_id: params[:name], overwrite: true, folder: ENV["FOLDER"])
        render json: uploaded_image
      elsif resource_type == "video"
        debugger
        uploaded_vid = Cloudinary::Uploader.upload_large(params[:file], public_id: params[:name], chunk_size: 6_000_000, overwrite: true, folder: ENV["FOLDER"])
        render json: uploaded_vid
      end
    rescue => exception
      render json: exception, status: 422
    end
  end
end
