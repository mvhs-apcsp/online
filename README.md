# Putting your website online using GitHub Pages

## gh-pages

Switch to a `gh-pages` branch instead of master. (You must have a clean working directory first!)

```
    $ git checkout -b gh-pages
```

Make commits like normal, then push. The first time you push to `gh-pages` you need to tell the push about it:

```
    $ git push origin gh-pages
```

Every other push after that can be a normal `$ git push`.

After successfully pushing, github is now hosting your website online at the following url:

    <username>.github.io/<repository>        // This is a good reason to not have spaces in your repo name, urls don't allow them

# notes

* When a url does not specify a file the browser tries to load a file named `index.html`. If your main page is named something else    you will have to add the file name to the end of the url (ie. `username.github.io/repo/main.html`), or rename your html file.
* If you have pushed to `gh-pages` on one computer and need to make some changes on another, you must pull 
  `$ git pull origin gh-pages` then switch branches `$ git checkout gh-pages` (no `-b`, that creates a new branch).
* Everyone in the entire world now has access to your website! Don't put any secrets or anything unprofessional on your page.