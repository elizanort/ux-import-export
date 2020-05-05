import { Person, render } from "./personalProfile.js"

let people = [
    new Person("Bob", "/ux-import-export/imgs/bob-ross.jpg"),
    new Person("Frida", "/ux-import-export/imgs/frida-kahlo.jpg"),
    new Person("Dali", "/ux-import-export/imgs/dali.jpg")
];

window.onload = () => {
    renderList(people);
};

function renderList(people) {
    let html = "";
    html += `<ul>`;
    for (let person of people) {
        html += "<li>";
        html += render(person);
        html += "</li>";
    }
    html += "</ul>";

    document.getElementById("list").innerHTML = html;
}