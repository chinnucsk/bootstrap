require "bundler/setup"
require "yaml"
require "net/http"
require "uri"

versions = YAML.load_file("EXTERNAL.yml")

namespace :jasmine do
  task :update, :version do
    unless version = version["jasmine"]
      puts "You need to specify a version of jasmine in EXTERNALS.yml:\n  jasmine: 1.1.0"
      exit
    end

    url = "http://pivotal.github.com/jasmine/downloads/jasmine-standalone-#{version}.zip"
    uri = URI.parse(url)

    File.open "jasmine.zip", "w" do |file|
      zipfile = Net::HTTP.get(uri)
      file.write zipfile
    end

    sh "rm -rf tmp"
    sh "mkdir -p tmp/jasmine"
    sh "unzip jasmine.zip -d tmp/jasmine"
    sh "cp -R tmp/jasmine/lib/jasmine-#{version}/* specs/jasmine"

    sh "rm -rf tmp"
    sh "rm jasmine.zip"
  end
end

namespace :update do
  desc "update jQuery"
  task :jquery do
    unless version = versions["jquery"]
      puts "You need to specify a version of jQuery in EXTERNALS.yml:\n  jquery: 1.7.2"
      exit
    end

    sh "mkdir -p app/javascripts/vendor"

    File.open("app/javascripts/vendor/jquery.js", "w") do |file|
      file.write Net::HTTP.get(URI.parse("http://code.jquery.com/jquery-#{version}.js"))
    end
  end

  desc "update ember.js"
  task :ember do
    mkdir_p "tmp"

    if File.directory?("tmp/ember")
      Dir.chdir("tmp/ember") { system "git pull" }
    else
      system "git clone https://github.com/emberjs/ember.js.git tmp/ember"
    end

    Dir.chdir("tmp/ember") do
      Bundler.with_clean_env do
        system "bundle"
        system "bundle exec rake dist"
      end
    end

    cp "tmp/ember/dist/ember.js", "app/javascripts/vendor/ember.js"
  end

  desc "update ember-data.js"
  task :data do
    mkdir_p "tmp"
    if File.directory?("tmp/data")
      Dir.chdir("tmp/data") { system "git pull" }
    else
      system "git clone https://github.com/emberjs/data.git tmp/data"
    end

    Dir.chdir("tmp/data") do
      Bundler.with_clean_env do
        system "bundle"
        system "rake dist"
      end
    end

    cp "tmp/data/dist/ember-data.js", "app/javascripts/vendor/ember-data.js"
  end

  task :all => [:jquery, :ember, :data]
end

task :build do
  system "rakep build"
end

task :specs => :build do
  system "rspec specs"
end


#http://pivotal.github.com/jasmine/downloads/jasmine-standalone-1.2.0.rc2.zip
