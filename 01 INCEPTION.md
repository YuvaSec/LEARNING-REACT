
>[!example]- WHAT IS CDN?
>>[!SUCCESS] Content Delivery Network
>>A CDN, or Content Delivery Network, is a geographically distributed network of servers that work together to deliver web content faster by storing copies of it on servers closer to users
>>
>>CDN REACT LINKS
>>``` html
>><script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
>><script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
>>```


>[!example]- WHAT DOES CND REACT LINKS HAVE IN THEM?
>>[!SUCCESS] PURE JS CODE >> OPENSOURCE DEVELOPED BY FACEBOOK
>>WHY? Because React is a JS library.
>>We Just import all the code into our project.


>[!example]- WHY DOES IT HAVE CROSS-ORIGIN?
>>[!SUCCESS] TO HANDLE CROSS-ORIGIN REQUESTS.
>>The `crossorigin` attribute control how browsers handle **cross-origin requests** for certain elements like `<img>`, `<script>`, `<link>`, and `<video>`.
>>
>> *CROSS-ORIGIN*: determines whether credentials (like cookies or ***HTTP*** authentication) should be sent and how the browser handles **CORS (Cross-Origin Resource Sharing)**.
>>   ### 🧩 Common Use Cases
>> 
>> Loading fonts or stylesheets from a CDN
>>  Fetching images for use in canvas (to avoid tainting)
>>   Importing scripts from external domains
>>   ### ⚠️ Important Notes
>>   - The server must include appropriate CORS headers (`Access-Control-Allow-Origin`) for the request to succeed.
>>   - If you're using `crossorigin="use-credentials"`, the server must also send `Access-Control-Allow-Credentials: true`.
>>   - Without proper CORS headers, the browser may block the resource or mark it as "tainted" (especially for canvas operations).

>[!example]- WITHOUT CROSS ORIGIN
>>[!SUCCESS]
>>![[Screenshot 2025-11-10 at 19.35.30.jpeg]]
>>![[Screenshot 2025-11-10 at 19.39.05.png]]

>[!example]- WITH CROSS ORGIN
>>[!SUCCESS]
>>![[Screenshot 2025-11-10 at 19.40.46.png]]

| Value             | Description                                                            | Credentials Sent | Use Case Example                                                                                    |
| ----------------- | ---------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| `anonymous`       | Sends a request without credentials (cookies, HTTP auth, client certs) | ❌ No             | `<img crossorigin="anonymous" src="https://cdn.example.com/image.png">`                             |
| `use-credentials` | Sends credentials with the request                                     | ✅ Yes            | `<link rel="stylesheet" href="https://secure.example.com/style.css" crossorigin="use-credentials">` |
| _(empty)_         | Treated as no CORS; behaves like `anonymous` but may vary by browser   | ❌ No             | `<script src="https://cdn.example.com/lib.js">`                                                     |

>[!example]- HOW TO CHECK IF REACT IS LOADED AND WHAT DOES THE CDN LINK DOWNLOAD IN BROWSER LOCAL STORAGE 
>>[!SUCCESS] Type React >> console >> check all the functions
>>![[Screenshot 2025-11-10 at 20.23.15.png]]
>
>>[!important] secret internal functions to check
>>![[Screenshot 2025-11-10 at 20.23.49.png]]

>[!example] WHY REACT AND REACT-DOM  AND REACT NATIVE FILES.
>>[!SUCCESS] 
>>
>>- **React** = the **brain + toolkit** for building UI pieces (components, state, hooks).  
>>
>>- **React-DOM** = the **adapter** that takes those React components and **attaches** them to the **browser’s DOM**.  
>>    
>>So:
>>-  You write components with **React**.
>>
>>- **React-DOM** takes them and renders/updates them in the **web page**
>>
>>- If you were on mobile, a different adapter (e.g., **React Native**) would render to native views instead of the DOM.

>[!example] Which one is responsible for updating the actual HTML on the page?
>>[!SUCCESS] **ReactDOM** is the one that takes the virtual structure
>>Just to make it stick:
>>- **React** = designs the “blueprint” of your UI.
>>- **ReactDOM** = builds and maintains that blueprint _in the actual browser window_.
>>
>>- So:
>>
>>- **Web:** React + ReactDOM
>>    
>>- **Mobile:** React + React Native
>>    
>>- **Other platforms** (like VR, desktop, terminals): React + custom renderer

