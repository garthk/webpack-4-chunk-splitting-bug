# Import envars from the environment file, if present:
-include .env

# Find the source
SOURCE := $(shell find src -type f)

# This `make` target is our default:
.DEFAULT_GOAL := build

# These `make` targets don't create files:
.PHONY: clean test

build: node_modules $(SOURCE) webpack.config.js
	node_modules/.bin/webpack
	touch build

test: build
	node -p 'Object.keys(require("./build"))'

node_modules: package.json package-lock.json
	npm install
	touch node_modules

clean:
	npm run clean
	rm -rf build
