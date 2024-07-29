import BST from "../models/bst/BST.js";
import Reservacion from "../models/bst/Reservacion.js";

const bst = new BST();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-add").addEventListener("click", handleAddReservation);
    document.getElementById("btn-search").addEventListener("click", handleSearchReservation);
    document.getElementById("btn-min").addEventListener("click", handleMinReservation);
    document.getElementById("btn-max").addEventListener("click", handleMaxReservation);
});

function handleAddReservation() {
    const patientName = document.getElementById("patientName").value;
    const date = document.getElementById("date").value;

    if (patientName.trim() === "" || date.trim() === "") {
        document.getElementById("error").innerText = "Por favor, ingrese el nombre del paciente y la fecha.";
        return;
    }

    const newReservacion = new Reservacion(patientName, date);
    bst.add(newReservacion);

    document.getElementById("patientName").value = "";
    document.getElementById("date").value = "";
    document.getElementById("error").innerText = "";
    document.getElementById("add-message").innerText = "Reserva agregada exitosamente.";
}

function handleSearchReservation() {
    const date = document.getElementById("searchDate").value;

    if (date.trim() === "") {
        document.getElementById("error").innerText = "Por favor, ingrese la fecha.";
        return;
    }

    const results = bst.search(date);
    if (results.length > 0) {
        let resultMessage = results.map(reserva => `Fecha: ${reserva.date}, Paciente: ${reserva.patientName}`).join("\n");
        document.getElementById("search-results").innerText = `Reservas encontradas:\n${resultMessage}`;
    } else {
        document.getElementById("search-results").innerText = `No se encontraron reservas para la fecha ${date}.`;
    }
}

function handleMinReservation() {
    const minNode = bst.findMinNode();
    if (minNode) {
        const orderedList = bst.inOrderTraversal();
        if (orderedList.length > 0) {
            let resultMessage = orderedList.map(reserva => `Fecha: ${reserva.date}, Paciente: ${reserva.patientName}`).join("\n");
            document.getElementById("min-value").innerText = `Reservas desde el mínimo hasta el máximo:\n${resultMessage}`;
        } else {
            document.getElementById("min-value").innerText = "No hay reservas en el árbol.";
        }
    } else {
        document.getElementById("min-value").innerText = "No hay reservas en el árbol.";
    }
}

function handleMaxReservation() {
    const maxNode = bst.findMaxNode();
    if (maxNode) {
        const orderedList = bst.reverseInOrderTraversal();
        if (orderedList.length > 0) {
            let resultMessage = orderedList.map(reserva => `Fecha: ${reserva.date}, Paciente: ${reserva.patientName}`).join("\n");
            document.getElementById("max-value").innerText = `Reservas desde el máximo hasta el mínimo:\n${resultMessage}`;
        } else {
            document.getElementById("max-value").innerText = "No hay reservas en el árbol.";
        }
    } else {
        document.getElementById("max-value").innerText = "No hay reservas en el árbol.";
    }
}
