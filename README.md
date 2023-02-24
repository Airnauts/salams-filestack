# webflow-filestack
JS to handle filestack uploads in webflow project

# Usage:
1. Add inside head tag:
`<script src="https://cdn.jsdelivr.net/gh/airnauts/webflow-filestack@master/dist/core.min.js"></script>`

2. In your HTML setup form with unique ids:

- Button that will trigger files uploads: `<button id="fs-btn-upload">Upload</button>`
- Input field that will take list of uploaded files hahses, comma separated: `<input type="hidden" id="fs-file-hash" />`
- Input field that will take list of uploaded files urls, comma separated: `<input type="hidden" id="fs-file-url" />`
- Container that will list uploaded files: `<div id="fs-message" ></div>`

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

## Several instances
To use for moe than one form on the same page, you need to create several instances. ID of HTML elements must be unique for each instance.

Lets say you have two forms that need file upload. You need to create:

- Two Buttons that will trigger files uploads - unique for each form: `<button id="fs-btn-upload">Upload</button>` and `<button id="fs-btn-upload-2">Upload</button>`
- Two Input fields that will take list of uploaded files hahses, comma separated - unique for each form: `<input type="hidden" id="fs-file-hash" />` and `<input type="hidden" id="fs-file-hash-2" />`
- Two Input field sthat will take list of uploaded files urls, comma separated - unique for each form: `<input type="hidden" id="fs-file-url" />` and `<input type="hidden" id="fs-file-url-2" />`
- Two Containers that will list of uploaded files - unique for each form: `<div id="fs-message" ></div>` and `<div id="fs-message-2" ></div>`

Then set two instances:
```
<script>
// --> Init only once
airWebflowFilestack.init('YOUR FILESTACK API KEY');

// --> Instance for first form
airWebflowFilestack.setInstance({
	btn: document.getElementById("fs-btn-upload"),
	inputHash: document.getElementById("fs-file-hash"),
 	inputUrl: document.getElementById("fs-file-url"),
 	msgContainer: document.getElementById("fs-message")
});

// --> Instance for second form
airWebflowFilestack.setInstance({
	btn: document.getElementById("fs-btn-upload-2"),
	inputHash: document.getElementById("fs-file-hash-2"),
 	inputUrl: document.getElementById("fs-file-url-2"),
 	msgContainer: document.getElementById("fs-message-2")
});
</script>
```


