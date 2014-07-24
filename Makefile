
test:
	@NODE_ENV=test ./node_modules/.bin/mocha test \
		--reporter spec \
		--bail

.PHONY: test
