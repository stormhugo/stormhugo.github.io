source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"


platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end


if Gem.win_platform? && Gem::Version.new(RUBY_VERSION) < Gem::Version.new('3.3.0')
  gem "wdm", "~> 0.1.1"
end


if Gem.win_platform? && Gem::Version.new(RUBY_VERSION) >= Gem::Version.new('3.3.0')
  gem 'webrick'
end