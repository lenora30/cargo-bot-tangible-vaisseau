#!/usr/bin/env python

"""Produces index.html given a list of JavaScript sources."""

import markup
import sys

style = [filename for filename in sys.argv if filename.endswith('.css')]
style.append('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap')

index = markup.page()
index.init(
    title = 'Cargo-Not: Educational Cargo-Bot',
    script = [filename for filename in sys.argv if filename.endswith('.js')],
    css = style)
index.script('main();')

print index
