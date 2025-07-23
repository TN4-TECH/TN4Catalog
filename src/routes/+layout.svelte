<script>
  import "../app.postcss";
  import { loginAutomatico } from "$lib/api";
  import { session } from "$lib/sessionStore";
  import { get } from "svelte/store";
  import { onMount } from "svelte";

  onMount(async () => {
    let sessionValue = get(session);
    if (!sessionValue) {
      try {
        const dadosLogin = await loginAutomatico({
          login: "api",
          senha: "4ce081",
        });
        if (dadosLogin && dadosLogin.session) {
          session.set(dadosLogin.session); // salva globalmente e no localStorage
          console.log("Session global:", dadosLogin.session);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("Session já existente:", sessionValue);
    }
  });
</script>

<slot />