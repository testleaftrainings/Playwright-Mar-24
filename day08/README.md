# Frame, Window, File Upload & Download

## Table of Contents

- [1. Interacting with Frames](#1-interacting-with-frames)
- [2. Handling Multiple Windows (Pop-ups)](#2-handling-multiple-windows-pop-ups)
- [3. File Upload](#3-file-upload)
- [4. File Download](#4-file-download)


## 1. Interacting with Frames

Handling frames is essential for working with web pages that contain multiple embedded documents.

### By Index

```javascript
// Accessing the first frame on the page by its index
const frameByIndex = page.frame({ index: 0 });
console.log(await frameByIndex.title());
```

### By Name

```javascript
// Accessing a frame by its name attribute
const frameByName = page.frame({ name: 'frameName' });
console.log(await frameByName.title());
```

### By URL

```javascript
// Finding a frame by its source URL
const frameByUrl = page.frame({ url: /leaftaps.com/path/ });
console.log(await frameByUrl.title());
```

### By ID using frameLocator

```javascript
// Utilizing frameLocator to access a frame by the ID of the iframe element
const frameById = page.frameLocator('#frameID').frame();
console.log(await frameById.title());
```

### Main Frame

```javascript
// Focusing on the main frame
const mainFrame = page.mainFrame();
console.log(await mainFrame.title());
```

## 2. Handling Multiple Windows (Pop-ups)

Managing multiple windows is vital for comprehensive testing, particularly for applications that open new tabs or windows.

### Sequential Approach

```javascript
// Sequentially handling new windows
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]')
]);
await newPage.waitForLoadState();
console.log(await newPage.title());
```

### Promise.all for Multiple Windows

```javascript
// Coordinating the opening of several windows simultaneously
const [window1, window2] = await Promise.all([
    context.waitForEvent('page'),
    context.waitForEvent('page'),
    page.click('#open-first-window'),
    page.click('#open-second-window')
]);
```

### waitForEvent('page')

```javascript
// Detecting a new page following an action
const newPage = await context.waitForEvent('page');
page.click('#open-new-window');
```

## 3. File Upload

Automating file uploads through web forms is crucial for testing upload functionalities.

### setInputFiles

```javascript
// Setting files on input elements to simulate file selection
await page.setInputFiles('#upload-selector', 'path/to/file.txt');
```

### setFiles

```javascript
// Interacting with file chooser dialogs
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('#upload-btn')
]);
await fileChooser.setFiles('path/to/file.txt');
```

## 4. File Download

Automating file downloads ensures the correct handling of files from web applications.

### Download Event and suggestedFilename

```javascript
// Managing the download process and retrieving the suggested filename
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#download-link')
]);
console.log('Suggested Filename:', download.suggestedFilename());
```

### saveAs

```javascript
// Saving the downloaded file to a specific location
const path = await download.path();
await download.saveAs('/path/to/save/file');
```

