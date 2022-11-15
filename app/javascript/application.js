// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"

class Bridge {

  // Sends a message to the native app, if active.
  static postMessage(name, data = {}) {
    // iOS
    window.webkit?.messageHandlers?.nativeApp?.postMessage({name, ...data})
  }

  static importingContacts(name) {
    const csrfToken = document.getElementsByName("csrf-token")[0].content;
    fetch('/contacts.json', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": csrfToken,
        'Content-Type': 'application/json',
        "Accept": "application/json",
      },
      body: JSON.stringify({contact: { name } })
    }).then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

// Expose this on the window object so TurboNative can interact with it
window.Bridge = Bridge
export default Bridge
