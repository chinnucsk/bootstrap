# Nikita

## Install

* Install [RVM](http://beginrescueend.com/)
* Install Ruby 1.9.3 `rvm install 1.9.3`
* Install bundler `gem install bundler`
* Install gems `bundle --without test`
* Install bins `bundle --binstubs`

## Running

* local server `bin/rakep server`
* Visit [local app](http://localhost:9292)

## Testing

* QT is needed for capybara-webkit `brew install qt`
* Install gems `bundle`

### Unit

* Run server `bin/rakep server`
* Visit [test suite](http://localhost:9292/tests)

### Integration

* Run suite `rspec specs`
