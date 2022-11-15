import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  import() {
    window.Bridge.postMessage("contacts", {name: "contacts"})
  }
}
