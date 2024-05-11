## Table of Contents
- [Class and Objects](#class-and-objects)
- [Constructor](#constructor)
- [The `super` Keyword](#the-super-keyword)
- [Static Properties and Methods](#static-properties-and-methods)
- [Inheritance](#inheritance)
- [Encapsulation](#encapsulation)

### Class and Objects
Classes in TypeScript are blueprints for creating objects, such as page objects in web automation testing.

```typescript
class LoginPage {
    usernameField: string;
    passwordField: string;
    submitButton: string;

    constructor(usernameField: string, passwordField: string, submitButton: string) {
        this.usernameField = usernameField;
        this.passwordField = passwordField;
        this.submitButton = submitButton;
    }

    login(username: string, password: string) {
        console.log(`Entering username: ${username}`);
        console.log(`Entering password: ${password}`);
        console.log("Submitting the form");
    }
}

let loginPage = new LoginPage("#username", "#password", "#submit");
loginPage.login("tester", "test123");
```

### Constructor
A constructor in web automation might be used to initialize page objects with selectors or data necessary for interaction.

```typescript
class LoginPage {
    constructor(public usernameField: string, public passwordField: string, public submitButton: string) { }
}
```

### The `super` Keyword
The `super` keyword can be particularly useful in web automation when extending base classes that include common functionality across pages.

```typescript
class Page {
    constructor(public url: string) { }

    open() {
        console.log(`Navigating to ${this.url}`);
    }
}

class LoginPage extends Page {
    constructor(url: string, public loginFormSelector: string) {
        super(url);
    }

    open() {
        super.open();
        console.log(`Waiting for form ${this.loginFormSelector} to load`);
    }
}
```

### Static Properties and Methods
Static methods might be used to provide utility functions related to testing, like generating test data or managing test sessions.

```typescript
class TestUtils {
    static randomUsername(): string {
        return `user_${Math.random().toString(36).substring(7)}`;
    }
}

console.log(TestUtils.randomUsername());
```

### Inheritance
Inheritance allows you to create specialized page objects or components from more generic ones.

```typescript
class Page {
    navigate(path: string) {
        console.log(`Navigating to ${path}`);
    }
}

class DashboardPage extends Page {
    openReports() {
        this.navigate("/reports");
        console.log("Reports page opened");
    }
}
```

### Encapsulation
Encapsulation in web automation can be used to prevent direct access to the internal workings of page objects, which can help reduce test flakiness.

```typescript
class LoginForm {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login() {
        console.log(`Logging in as ${this.username}`);
    }
}

let loginForm = new LoginForm("tester", "test123");
loginForm.login();
```
