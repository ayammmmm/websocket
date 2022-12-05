import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { main } from "./index.ts";

// serve(
//     (req) => {
//   // `Deno.upgradeWebSocket(req)`でHTTP接続をWebSocket用に切り替え
//   const { response, socket } = Deno.upgradeWebSocket(req);

//   // ↓socketという変数に対してaddEventListenerなどを設定し、WebScoketをハンドリング
//   socket.addEventListener("message", (event) => console.log(event.data));

//   // レスポンスを返してWebSocket通信スタート
//   return response;
// },
// { port: 8081 }
// );

serve(
    (request) => {
      const {
        response,
        socket,
      } = Deno.upgradeWebSocket(request);
      socket.onmessage = (m) => {
        console.log("Echoing: %s", m.data);

        socket.send(main(m.data).toString());
      };
      socket.onclose = () => console.log("Client has disconnected");
      return response;
    },
    {port: 8081});