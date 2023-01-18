class Api::PostsController < ApplicationController
  before_action :set_api_post, only: %i[ show update destroy ]

  # GET /api/posts
  def index
    @api_posts = Post.all

    render json: @api_posts.reverse
  end

  # GET /api/posts/1
  def show
    render json: @api_post
  end

  # POST /api/posts
  def create
    upload_image_hash = Cloudinary::Uploader.upload(params[:imageFile],
                                                    folder: "fun_with_cloudin",
                                                    public_id: params[:title],
                                                    unique_filename: false,
                                                    overwrite: true)
    @api_post = Post.new(api_post_params)
    @api_post.image_url = upload_image_hash["url"]

    if @api_post.save
      render json: @api_post, status: :created
    else
      render json: @api_post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/posts/1
  def update
    if @api_post.update(api_post_params)
      render json: @api_post
    else
      render json: @api_post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/posts/1
  def destroy
    @api_post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_post
    @api_post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def api_post_params
    params.permit(:title, :content)
  end
end
