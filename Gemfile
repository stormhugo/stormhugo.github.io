source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
# Only install if on Windows AND Ruby version is less than 3.3
if Gem.win_platform? && Gem::Version.new(RUBY_VERSION) < Gem::Version.new('3.3.0')
  gem "wdm", "~> 0.1.1"
end

# Alternative for Ruby 3.3.0+ on Windows
if Gem.win_platform? && Gem::Version.new(RUBY_VERSION) >= Gem::Version.new('3.3.0')
  gem 'webrick'
  # Consider using jekyll-watch directly instead of wdm
end