#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Hackron'
SITENAME = u'Hackron'
SITEURL = ''

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS =  (('Pelican', 'http://getpelican.com/'),
          ('Python.org', 'http://python.org/'),
          ('Jinja2', 'http://jinja.pocoo.org/'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'theme/'

STATIC_PATHS = [
  'extra/robots.txt',
  'extra/humans.txt',
  'bower_components'
]

EXTRA_PATH_METADATA = {
  'extra/robots.txt': {'path': 'robots.txt'},
  'extra/humans.txt': {'path': 'humans.txt'},
}

ARTICLE_URL = 'blog/{date:%Y}/{date:%b}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%b}/{date:%d}/{slug}/index.html'

PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

DIRECT_TEMPLATES = (
  'index',
)

INDEX_SAVE_AS = 'blog/index.html'

TEMPLATE_PAGES = {
  'index-landing.html': 'index.html'
}

ARTICLE_EXCLUDES = ('pages', 'extra')

