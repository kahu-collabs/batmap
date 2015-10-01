Rails.application.config.middleware.use OmniAuth::Builder do

  provider :facebook, ENV['965680136882580'], ENV['cae70daf53bee0d44881822f9d0bb6d7']
end

