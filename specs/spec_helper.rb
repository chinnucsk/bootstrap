require 'rubygems'
require 'bundler/setup'
require 'rspec'
require 'capybara/rspec'
require 'capybara-webkit'
require 'rake-pipeline'
require 'rack'

Capybara.app = Rack::Builder.new do
  map "/" do
    use Rack::Static, urls: ["/"], root: File.join(File.dirname(__FILE__), '..', 'public'), index: "index.html"
    run lambda {|env| [404, {}, '']}
  end
end.to_app

Capybara.default_driver = :webkit
