$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "avgrund_to/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "avgrund_to"
  s.version     = AvgrundTo::VERSION
  s.authors     = ["Tristan"]
  s.email       = ["tristan.gomez@gmail.com"]
  s.homepage    = "https://github.com/parasquid/avgrund_to.git"
  s.summary     = "Wraps hakim's awesome Avgrund reimagining of the modal window into a Rails Engine"
  s.description = "Wraps hakim's awesome Avgrund reimagining of the modal window into a Rails Engine"

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 3.1"
  s.add_dependency "jquery-rails"
end
