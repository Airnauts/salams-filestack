import * as filestack from 'filestack-js';

let client = null;

const defaultElements = {
    btn: null,
    inputHash: null,
    inputUrl: null,
    msgContainer: null
};

const defaultOptions = {
    maxFiles: 6,
    uploadInBackground: false,
};

function initFilestack (apiKey) {
  client = client ?? filestack.init(apiKey);
}

function getFilestackClient () {
  return client;
}

/**
 * Handle filestack picker response
 * https://www.filestack.com/docs/uploads/pickers/web/#picker-response
 */
function handleUploadDone(res) {
    // --> Exit if no file uploaded
    if (! res?.filesUploaded) {
        return null;
    };

    const hashList = [];
    const urlList = [];
    const filenameList = [];
    
    // --> Process
    res.filesUploaded.forEach(function(file) {
        hashList.push(file.handle);
        urlList.push(file.url);
        filenameList.push(file.filename);
    });

    return {
        hashList,
        urlList,
        filenameList
    };
};

function setInstance (
    elements = defaultElements,
    fsOptions = defaultOptions
) {
    elements = { ...defaultElements, ...elements };
    fsOptions = { ...defaultOptions, ...fsOptions };
    const client = getFilestackClient();

    //--> Check elements
    const missingElements = Object.keys(elements).filter((x) => !elements[x]);
    if (missingElements.length) {
        console.error('Cannot set instance without elements', missingElements);
        return;
    }
    
    function handleUploadDoneWrapper(res) {
        const result = handleUploadDone(res);
        if (!result) {
            return;
        }

        elements.inputHash.value = result.hashList.join(',');
        elements.inputUrl.value = result.urlList.join(',');
        elements.msgContainer.innerHTML = result.filenameList.join(', ');
    }

    function handleUploadBtnClick() {
        client.picker({ ...options, onUploadDone: (res) => handleUploadDoneWrapper(res)}).open();
    };

    // --> Set event listener
    btn.addEventListener("click", function() {
        handleUploadBtnClick();
    });

    console.log('Filestack instance set', elements, fsOptions);
};

export {
    initFilestack,
    setInstance
};