// When document is loaded...

document.addEventListener("DOMContentLoaded", () => {
    // Elements

    const input = document.getElementById("input")
    const status = document.getElementById("status")

    // Socket connection

    const socket = new WebSocket("wss://ws-server-template.mreconomical.repl.co", "very-good-protocol")

    socket.onopen = () => {
        status.append("[open] websocket connection opened")
        status.append(document.createElement("br"))
    }

    socket.onmessage = message => {
        status.append(`[receive] ${message.data}`)
        status.append(document.createElement("br"))
    }

    socket.onclose = () => {
        status.append("[close] websocket connection closed")
        status.append(document.createElement("br"))
    }
    
    // Event listeners

    input.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            // Send message

            socket.send(input.value)
            status.append(`[send] ${input.value}`)
            status.append(document.createElement("br"))
            input.value = ""
        }
    })
})