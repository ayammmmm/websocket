
export class main {

    constructor() {
        this.excute();
    }

    private excute() {
        var out = <HTMLInputElement>document.getElementById("out");
        var msg = <HTMLInputElement>document.getElementById("msg");
        var sock = new WebSocket("ws://127.0.0.1:8082/");
        sock.addEventListener("open", (e) => {
            console.log("Connected.");
        });
        sock.addEventListener("close", (e) => {
            console.log("Closed.");
        });
        sock.addEventListener("error", (e) => {
            console.log("Error.");
        });
        sock.addEventListener("message", (e) => {
            out.innerText += e.data + "\n";
            msg.value = "";
            msg.focus();
        });
        (<HTMLInputElement>document.getElementById('btn')).addEventListener('click', (e: Event) => {
            sock.send(msg.value);
            msg.focus();
        });
    }

}
new main();