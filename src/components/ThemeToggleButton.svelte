<script lang="ts">
  import DarkThemeIcon from "./DarkThemeIcon.svelte";
  import LightThemeIcon from "./LightThemeIcon.svelte";

  let theme = localStorage.getItem("theme") ?? "dark";

  const handleClick = () => {
    theme = theme === "dark" ? "light" : "dark";
  };

  $: {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button class="p-1 hover:bg-gray-400 active:bg-gray-500 rounded-full w-min h-min" on:click={handleClick}>
  {#if theme === "dark"}
    <LightThemeIcon />
  {:else}
    <DarkThemeIcon />
  {/if}
</button>
<!-- <img src="/darkThemeIcon.svg" alt="dark mode" /> -->
