CKEditor 5 customize classic editor build
========================================

## Thanks to CKEditor
[![npm version](https://badge.fury.io/js/ckeditor5-build-full.svg)](https://badge.fury.io/js/ckeditor5-build-full)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic?type=dev)

The customize full features for classic editor build for CKEditor 5.

![CKEditor 5 classic editor build screenshot](https://69653.cdn.cke-cs.com/koJQDPDGL6GPN5JawfAb/images/9249665bcd70ba2f08782496313e6cf32c196223d1bf5943.png)

## Documentation

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```bash
npm install --save ckeditor5-build-full
```

And use it in your ReactJS application:

```js
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import FullEditor from 'ckeditor5-build-full'

const index = () => {
  return (
    <CKEditor
      editor={FullEditor}
      onChange={(event, editor) => {
        const data = editor.getData()
        console.log({ event, editor, data })
      }}
    />
  )
}

export default index
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).