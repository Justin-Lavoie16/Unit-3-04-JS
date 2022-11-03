if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-3-04-JS/sw.js", {
    scope: "/Unit-3-04-JS/",
  })
}

;("use strict")

function calculate() {
  const length = parseInt(document.getElementById("pay").value)

  const area = (5 / 9) * (length - 32)

  document.getElementById("area").innerHTML =
    "Celcius will be: " + area.toFixed(4) + "°C"
}
