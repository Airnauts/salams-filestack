# salams-filestack
JS to handle filestack uploads in webflow project

# Usage:
1. Add inside head tag:
`<script src="https://cdn.jsdelivr.net/gh/airnauts/webflow-filestack@master/dist/core.min.js"></script>`

2. In your HTML setup form with unique ids:

- Button that will trigger files uploads: `<button id="fs-btn-upload">Upload</button>`
- Input field that will take list of uploaded files hahses, comma separated: `<input type="hidden" id="fs-file-hash" />`
- Input field that will take list of uploaded files urls, comma separated: `<input type="hidden" id="fs-file-url" />`
- Container that will list of uploaded files: `<div id="fs-message" ></div>`

3. At the bottom ogf your HTML add:

```
<script>
airWebflowFilestack.init('YOUR FILESTACK API KEY');

airWebflowFilestack.setInstance({
	btn: document.getElementById("fs-btn-upload"),
	inputHash: document.getElementById("fs-file-hash"),
 	inputUrl: document.getElementById("fs-file-url"),
 	msgContainer: document.getElementById("fs-message")
});
</script>
```