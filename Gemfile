source 'https://rubygems.org'

ruby "2.3.0"

gem 'rails', '~> 4.2.0'

gem "unicorn"
gem "foreman"

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'

gem 'jquery-rails'

group :development, :test do
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'

  gem 'rspec-rails'
end

group :production do
  gem "rails_12factor"
  gem 'newrelic_rpm'
end
