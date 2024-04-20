# Select Dropdown, Auto Waiting & Dialogs

## Table of Contents

- [Select Dropdowns](#select-dropdowns)
- [Auto-Waiting Mechanism](#auto-waiting-mechanism)
- [`waitFor` Functionalities](#waitfor-functionalities)
- [Modal Dialogs](#modal-dialogs)
- [Types of Dialogs](#types-of-dialogs)
- [Dialog Methods](#dialog-methods)
- [Event Listeners for Dialogs](#event-listeners-for-dialogs)
- [Handling Dialogs: `page.on` vs `page.once`](#handling-dialogs-pageon-vs-pageonce)

## Select Dropdowns

Playwright provides methods to interact with `<select>` dropdowns by value, label, or index:

```javascript
// Select by value
await page.selectOption('select#yourSelectId', { value: 'optionValue' });

// Select by label
await page.selectOption('select#yourSelectId', { label: 'Option Label' });

// Select by index
await page.selectOption('select#yourSelectId', { index: 0 });
```

## Auto-Waiting Mechanism

Playwright automatically waits for elements to become actionable before executing actions like clicks or text entry, improving test stability:

```javascript
// Clicks when the button is ready
await page.click('button#submit');

// Fills text when the input is ready
await page.fill('input#name', 'Your Name');
```

## `waitFor` Functionalities

Playwright includes several `waitFor` methods to synchronize tests based on various conditions:

### `waitForSelector`
Waits for an element to appear or disappear:

```javascript
await page.waitForSelector('div#loader', { state: 'attached' });
```

### `waitForFunction`
Polls for a JavaScript expression to return true:

```javascript
await page.waitForFunction(() => document.readyState === 'complete');
```

### `waitForTimeout`
Delays the test execution by a specified time:

```javascript
await page.waitForTimeout(5000); // waits for 5 seconds
```

### `waitForLoadState`
Waits for different document load states:

```javascript
await page.waitForLoadState('domcontentloaded');
```

### `waitForUrl`
Waits for the URL to match a specific condition:

```javascript
await page.waitForFunction(url => window.location.href === url, 'https://amazon.in');
```

## Modal Dialogs

A modal dialog is a window overlay that requires users to interact with it before they can return to the main content. It captures the keyboard and mouse focus until it is closed, thus blocking the main window's functionality.

## Types of Dialogs

Playwright supports handling several types of dialogs that are commonly used in web applications:
- **Alert**: Provides a message and an OK button.
- **Confirm**: Provides a message along with OK and Cancel buttons.
- **Prompt**: Offers a text box for user input, alongside OK and Cancel buttons.
- **BeforeUnload**: Appears when the page tries to unload, asking the user to confirm leaving the page.

## Dialog Methods

Dialogs in Playwright are managed using the following methods:
- `dialog.accept([promptText])`: Accepts the dialog. For `prompt` dialogs, optional prompt text can be provided.
- `dialog.dismiss()`: Dismisses or cancels the dialog.
- `dialog.message()`: Returns the message text from the dialog.
- `dialog.type()`: Returns the type of the dialog (`alert`, `confirm`, `prompt`, `beforeunload`).

## Event Listeners for Dialogs

Playwright provides event listeners to handle dialogs when they appear during page interactions:

```javascript
// Handle any dialog that appears on the page
page.on('dialog', async dialog => {
  console.log(`Dialog type: ${dialog.type()}`);
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();
});
```

## Handling Dialogs: `page.on` vs `page.once`

Playwright allows you to handle dialogs using either `page.on` or `page.once`. The key difference between these two methods is in how many times the event handler is invoked:

- `page.on`: Attaches an event handler that runs every time the specified event occurs. This is useful for handling dialogs that may appear multiple times throughout the session.
  
  ```javascript
  // Handle every dialog that appears during the session
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  ```

- `page.once`: Attaches a one-time event handler, which is invoked only the first time the specified event occurs. After the first invocation, the handler is removed automatically.

  ```javascript
  // Handle the first dialog that appears and ignore any subsequent ones
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  ```