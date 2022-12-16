
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/force-website-plugins.svg)](https://github.com/9r3i/force-website-plugins/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/force-website-plugins.svg)](https://github.com/9r3i/force-website-plugins/network)
[![Stars](https://img.shields.io/github/stars/9r3i/force-website-plugins.svg)](https://github.com/9r3i/force-website-plugins/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/force-website-plugins.svg)](https://github.com/9r3i/force-website-plugins/issues)
[![Release](https://img.shields.io/github/release/9r3i/force-website-plugins.svg)](https://github.com/9r3i/force-website-plugins/releases)


# force-website-plugins
Few of ForceWebsite's basic plugins

These plugins are not compatible for all themes, so choose wisely.


# Config
To add one or two plugin, add to config file in array of the plugins section.

```json
{
  "plugins": [
    ["timeago","id_ID","https://9r3i.github.io/force-website-plugins"],
    ["link",false,"https://9r3i.github.io/force-website-plugins"]
  ]
}
```

- index 0 for plugin namespace (required)
- index 1 for plugin parameter, it could be array, object or something else (optional)
- index 2 for plugin host (optional)


if the plugin is in the same host of the force-website and also without parameter, the config might be in string, like this:

```json
{
  "plugins": [
    "grid",
    "site",
    ["timeago","id_ID"],
    "link"
  ]
}
```


# Closing
That's all there is to it. Alhamdulillaah...


