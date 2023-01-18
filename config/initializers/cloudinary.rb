Cloudinary.config_from_url(ENV["CLOUDINARY_URL"])
Cloudinary.config { |c| c.secure = true }

